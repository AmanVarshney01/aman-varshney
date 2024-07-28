import { defineCollection, z } from 'astro:content'

const blogsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		date: z.date().transform((date) => date.toString().slice(0, 15)),
		image: z.string().optional()
	})
})

export const collections = {
	blogs: blogsCollection
}