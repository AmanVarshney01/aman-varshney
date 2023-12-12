import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    // date: z.date().transform((date) => date.toLocaleDateString('en-IN')),
    date: z.date().transform((date) => date.toString().slice(0, 15)),
    image: z.string().optional(),
    featured: z.boolean(),
  }),
});

export const collections = {
  posts: postsCollection,
};
