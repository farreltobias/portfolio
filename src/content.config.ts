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
      /* Position in every project list, lowest first: order 1 leads the Home.
         Optional; projects without one follow, newest first. */
      order: z.number().int().positive().optional(),
      cover: image().optional(),
      tags: z.array(z.string()).default([]),
      /* The work order's three fields. Outcome is optional on purpose: a project
         without a recorded result shows an unfilled field, never an invented one. */
      constraint: z.string(),
      decision: z.string(),
      outcome: z.string().optional(),
      /* The measured change alone, short enough to set at collision scale, e.g.
         "~4/day → 1–2/week". Only a measured result carries one; a qualitative
         outcome stays a sentence and is never marked as measured. */
      outcomeFigure: z
        .string()
        .max(
          32,
          'outcomeFigure is set at collision scale: keep it to 32 characters, e.g. "~4/day → 1–2/week". Put the explanation in `outcome`.',
        )
        .optional(),
      /* Names the quantity an outcomeFigure measures, e.g. "Support requests",
         shown beside the Outcome label. Without a figure it is not shown: a
         sentence names its own subject. */
      outcomeMetric: z.string().optional(),
      /* Declared complexity, 0–10. Not rendered anywhere at present: the Home
         ramp became a pure tonal key and no longer reads a project's score.
         Kept so existing frontmatter stays valid; remove with the values. */
      complexity: z.number().int().min(0).max(10).default(5),
    }),
});

export const collections = { projects };
