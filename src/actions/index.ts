import { defineAction } from 'astro:actions'
import { z } from 'astro/zod'
import { getDb, Guestbook } from '../lib/db'

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
		handler: async ({ name, message }) => {
			await getDb().insert(Guestbook).values({ name, message })
		}
	})
}
