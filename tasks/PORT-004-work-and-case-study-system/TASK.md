# PORT-004 - Work and Case Study System

## Change

- Turn project content into a complete Work index and reusable case-study system.
- Make every portfolio project accessible through a dedicated project route.

## Constraints

- Projects remain sourced from Astro Content Collections and Markdown.
- Project metadata must support the current Home and Work presentations.
- `constraint`, `decision`, and `outcome` must remain concise enough for project summaries.
- `outcomeMetric` and `outcomeFigure` are optional.
- `outcomeFigure` represents a verified before → after transformation and must only exist when that comparison is meaningful.
- Case-study narrative belongs in Markdown rather than frontmatter.
- Case studies may use different narrative sections when the project requires them.
- Unknown projects, metrics, outcomes, clients, or testimonials must not be fabricated.
- Preserve confidentiality boundaries for employment work.
- Keep implementation Astro-first and avoid client-side JavaScript unless an interaction requires it.
- Use Impeccable only for design decisions introduced by the Work or case-study surfaces.

## Done

- `/work` lists all portfolio projects from the project collection.
- Each project has a stable dedicated route.
- A shared case-study layout renders project metadata and Markdown content.
- Selected Work on the Home links to the corresponding case-study route.
- Projects without an outcome, outcome metric, figure, cover, or tags render correctly.
- Before → after figures render only when both `outcomeMetric` and `outcomeFigure` exist.
- Project ordering is deterministic.
- The current five projects can be represented without changing the content model.
- Case-study pages expose enough context to understand the problem, approach, solution, and verified outcome when available.
- No placeholder project is exposed publicly.

## Check

- Open `/work`.
- Open every current project route.
- Verify projects with and without outcomes render correctly.
- Verify the Home links to the correct project routes.
- Verify Markdown content renders correctly.
- Verify no placeholder project appears publicly.
- `pnpm check`
- `pnpm build`