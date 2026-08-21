import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "page",
      source: "projects/**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        stack: z.array(z.string()),
        year: z.string(),
        role: z.string(),
        github: z.string().optional(),
        demo: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(0),
        highlights: z.array(z.string()).default([]),
        published: z.boolean().default(true),
      }),
    }),
  },
});
