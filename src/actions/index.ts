import { defineAction } from 'astro:actions'
import { db, Guestbook } from 'astro:db'
import { z } from 'astro:schema'

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
			await db.insert(Guestbook).values({ name, message })
		}
	})
}
