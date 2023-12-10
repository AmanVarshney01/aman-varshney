import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string().optional(),
    featured: z.boolean(),
  }),
});

export const collections = {
  posts: postsCollection,
};
