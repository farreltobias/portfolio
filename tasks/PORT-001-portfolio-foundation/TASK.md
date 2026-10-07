# PORT-001 - Portfolio Foundation

## Change

- Establish the minimal Astro foundation for portfolio pages and project content.

## Constraints

- Project schema matches the `Project` fields in `docs/RULES.md`.
- A project's Markdown body is its case study.
- Ship no client-side JavaScript.
- Defer page-level design decisions.
- Page copy and the sample project are placeholders; do not fabricate work, claims, or outcomes.

## Done

- A shared base layout renders all pages.
- Global styles provide the minimal shared foundation.
- Project content has a typed Content Collection.
- Home, work, about, and contact routes render through the base layout.
- Work route links to each project.
- Each project renders its case study at `/work/<id>`.
- A sample project renders from Markdown.

## Check

- `pnpm check`
- `pnpm build`
