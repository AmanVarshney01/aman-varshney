import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
	loader: glob({ pattern: ['**\/*.md', "**\/*.mdx"], base: './src/data/blog' }),
	schema: z.object({
		title: z.string(),
		date: z.date().transform((date) => date.toDateString()),
		image: z.string().optional()
	})
})

export const collections = {
	blog
}
