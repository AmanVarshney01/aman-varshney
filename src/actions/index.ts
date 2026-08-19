import { ActionError, defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { env } from 'cloudflare:workers'
import { getDb, Guestbook } from '../lib/db'

type RateLimiter = { limit: (options: { key: string }) => Promise<{ success: boolean }> }

export const server = {
	guestbook: defineAction({
		accept: 'form',
		input: z.object({
			name: z
				.string()
				.min(2, { message: 'Name must be at least 2 characters.' })
				.max(50, { message: 'Name must be at most 50 characters.' }),
			message: z
				.string()
				.min(2, { message: 'Message must be at least 2 characters.' })
				.max(200, { message: 'Message must be at most 200 characters.' })
		}),
		handler: async ({ name, message }, ctx) => {
			const rateLimiter = (env as Record<string, unknown>).GUESTBOOK_RATE_LIMIT as
				| RateLimiter
				| undefined
			if (rateLimiter) {
				const ip = ctx.request.headers.get('cf-connecting-ip') ?? 'unknown'
				const { success } = await rateLimiter.limit({ key: ip })
				if (!success) {
					throw new ActionError({
						code: 'TOO_MANY_REQUESTS',
						message: 'Slow down. Try again in a minute.'
					})
				}
			}

			await getDb().insert(Guestbook).values({ name, message })
		}
	})
}
