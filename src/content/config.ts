import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  news: newsCollection,
};
