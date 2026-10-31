# Project

Personal portfolio for Farrel, a Product Engineer.

Stack:

- Astro
- TypeScript
- Markdown / Astro Content Collections
- CSS
- Impeccable for design tasks only

## Instruction Precedence

`AGENTS.md` defines shared project rules.

`CLAUDE.md` may add Claude-specific execution guidance and takes precedence only for Claude-specific behavior.

Project behavior remains defined by the repository and canonical product docs.

# Agent Rules

## Source of Truth

Product behavior is defined by:

- `docs/PRODUCT.md`
- `docs/FLOWS.md`
- `docs/RULES.md`

Use documented product behavior as the source of truth. Surface missing or ambiguous requirements instead of inventing
product behavior.

## Documentation

- Give each fact exactly one canonical home.
- Represent one decision or relevant fact per line when practical.
- Prefer structured Markdown to prose.
- Consolidate duplicated information into its canonical location.
- Keep only information that can materially affect product or implementation decisions.
- Keep implementation details in the implementation unless they define stable product constraints.
- Keep visual decisions in implementation or design tooling unless they define product behavior.
- Include only sections that add relevant information.

Before keeping a line, ask:

> Could removing this line cause a competent agent to build a materially different product?

If yes, keep it. If no, remove it.

## Tasks

- Tasks must describe only the current delta.
- Store each task in its own directory with one canonical task specification.
- Add optional task artifacts only when they contain distinct information that must survive independently.
- Reference canonical product context instead of repeating it.
- Use existing architecture and conventions as context instead of restating them.
- Reference existing product rules instead of duplicating them.

## Implementation

- Preserve behavior outside the requested scope.
- Use documented requirements and surface genuine ambiguity before introducing new behavior.
- Keep changes scoped to the task; perform related refactors only when necessary to complete it correctly.
- Code comments must be added only when necessary to explain non-obvious behavior that the code and project docs do not
  already make clear.
- Prefer self-explanatory code and project documentation to inline comments.

## Design

- Use Impeccable when the task involves UI, UX, visual hierarchy, layout, interaction design, responsive behavior,
  component presentation, or visual polish.
- For backend, data, infrastructure, business logic, refactors, tests, migrations, APIs, and other work without design
  impact, use the normal project workflow.
- Product docs define required behavior and information.
- Impeccable determines presentation only when presentation is part of the task.

## Documentation Updates

- Update product docs when stable product behavior or constraints change.
- Keep implementation-specific information in the implementation unless it becomes a stable product constraint.
