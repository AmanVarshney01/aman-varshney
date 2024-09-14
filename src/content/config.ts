import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date().transform((date) => date.toDateString()),
		image: z.string().optional()
	})
})

export const collections = {
	blogs: blogCollection
}
