import { defineAction } from 'astro:actions'
import { db, Guestbook } from 'astro:db'
import { z } from 'astro:schema'

export const server = {
	guestbook: defineAction({
		accept: 'form',
		input: z.object({
			name: z.string(),
			message: z.string()
		}),
		handler: async ({ name, message }) => {
			await db.insert(Guestbook).values({ name, message })
		}
	})
}
