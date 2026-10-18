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
      /* A verified before → after, short enough to set at collision scale, e.g.
         "~4/day → 1–2/week". It renders only together with outcomeMetric;
         record one only when the comparison is meaningful. A qualitative
         outcome stays a sentence and is never marked as measured. */
      outcomeFigure: z
        .string()
        .max(
          32,
          'outcomeFigure is set at collision scale: keep it to 32 characters, e.g. "~4/day → 1–2/week". Put the explanation in `outcome`.',
        )
        .refine((value) => value.includes("→"), {
          message:
            'outcomeFigure is a before → after transformation: write it as "before → after".',
        })
        .optional(),
      /* Names the quantity an outcomeFigure measures, e.g. "Support requests",
         shown beside the Outcome label. The figure renders only when both are
         set; without a figure the metric is not shown. */
      outcomeMetric: z.string().optional(),
      /* The case study's game plan: the project's moves, read top to bottom.
         `built` is the only kind drawn solid; everything else, `in-progress`
         included, is dashed, so what exists and what does not can never be
         confused. At most six moves, so the drawing fits a screen. Optional:
         a project without a plan shows no drawing. */
      plan: z
        .array(
          z.object({
            kind: z.enum([
              "constraint",
              "built",
              "in-progress",
              "planned",
              "decision",
              "possible",
            ]),
            title: z.string(),
            note: z.string().optional(),
          }),
        )
        .max(6, "A plan holds at most six moves; merge or drop the rest.")
        .optional(),
      /* Whether the work has shipped. A project still being built reads
         "In progress — not yet measured" until it ships; never "Shipped". */
      stage: z.enum(["in-progress", "shipped"]).default("shipped"),
      /* Declared complexity, 0–10. Not rendered anywhere at present: the Home
         ramp became a pure tonal key and no longer reads a project's score.
         Kept so existing frontmatter stays valid; remove with the values. */
      complexity: z.number().int().min(0).max(10).default(5),
    }),
});

export const collections = { projects };
