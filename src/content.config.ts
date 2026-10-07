import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.number().int(),
      role: z.string(),
      featured: z.boolean().default(false),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
