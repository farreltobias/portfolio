# Claude Instructions

Follow `AGENTS.md`.

`AGENTS.md` defines shared project rules. This file adds Claude-specific execution guidance and takes precedence only
for Claude-specific behavior.

## Before Product Work

- Read only the relevant files in `docs/`.

## Documentation Work

- Use `.agents/skills/product-docs/SKILL.md`.

## Task Planning

- Use `.agents/skills/task-planning/SKILL.md`.

## Design Work

Use `.agents/skills/impeccable/SKILL.md` when the task requires design decisions involving:

- new screens;
- major UI changes;
- interaction redesign;
- layout or hierarchy decisions;
- responsive behavior;
- component presentation;
- visual polish.

For work without design decisions, use the normal project workflow.

This includes:

- backend changes;
- database work;
- API changes;
- business rules;
- authentication internals;
- migrations;
- tests;
- performance work;
- refactors without UI impact;
- bug fixes with no design decision.

Invoke design skills based on the decisions required by the task, not merely because the product has a user interface.

## Requirements

- Use documented product behavior as the source of truth.
- Prefer existing canonical behavior when it satisfies the requirement.
- Surface real product ambiguity before introducing new behavior.

## Output

- Use structured information when it improves implementation clarity.
- Restate context only when it materially affects the result.
