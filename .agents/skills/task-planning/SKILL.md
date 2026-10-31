---
name: task-planning
description: Create implementation tasks as minimal, delta-only specifications without duplicating stable project context.
---

# Task Planning

Use this skill when:

- creating a new implementation task;
- refining an existing task;
- splitting a large task;
- converting requirements into an executable task.

## Principle

Every task must describe only the delta from the current system.

Stable product knowledge belongs in the canonical project docs.

## Vocabulary

Use only the sections needed to remove ambiguity.

### `Target`

Identifies the affected surface.

Use when the scope is not obvious from the task title or change.

### `Change`

Describes the desired change directly.

Use when `From` and `To` would add unnecessary structure.

### `From`

Describes relevant current behavior.

Use only when understanding the current state materially improves the task.

### `To`

Describes the required future behavior.

Use with `From` when the transition itself matters.

### `Constraints`

Contains task-specific requirements that are not already defined in project docs.

### `Done`

Defines observable completion conditions.

### `Check`

Defines how the completed behavior must be verified.

## Template

No section is mandatory.

```md
# APP-XXX - Task Name

## Target

- ...

## From

- ...

## To

- ...

## Change

- ...

## Constraints

- ...

## Done

- ...

## Check

- ...
```

Choose `Change` or `From` + `To` based on whichever expresses the delta with less information.

## Example

```md
# APP-042 - Rename Project

## Target

- Project name.

## From

- Name cannot be changed after creation.

## To

- Owner can rename the project.

## Constraints

- Name must not be empty.

## Done

- Updated name persists.
- Updated name appears everywhere the project is referenced.
```

Prefer a smaller task when the same behavior can be specified without losing information:

```md
# APP-042 - Rename Project

## Change

- Project name becomes editable by the owner.

## Constraints

- Name cannot be empty.

## Done

- New name persists everywhere.
```

## Storage

Each task must live in its own directory.

Canonical structure:

```text
tasks/
└── <task-id>-<task-name>/
    └── TASK.md
```

`TASK.md` is the canonical task specification.

Optional artifacts may be added only when they contain information that must remain independent from the task
specification:

```text
tasks/
└── <task-id>-<task-name>/
    ├── TASK.md
    ├── PLAN.md
    └── REVIEW.md
```

### `PLAN.md`

Use only when the implementation requires a non-trivial execution plan that must remain available independently from the
task specification.

### `REVIEW.md`

Use only when review findings, validation results, risks, or follow-up decisions must be preserved independently.

Each artifact must contain distinct information.

Stable product context belongs in the canonical product docs.

Implementation state belongs in the code and Git history.

Optional artifacts must not be created solely to satisfy the directory structure.

## Chain of Density

For every task:

1. Inspect the current implementation.
2. Read only the project docs relevant to the change.
3. Extract only information required to implement the delta.
4. Remove facts already defined by code or canonical docs.
5. Remove sections that add no implementation value.
6. Keep only constraints and completion criteria that can change the implementation.

## Final Test

For every line or task artifact:

> Could removing this information cause a competent implementation agent to implement the task materially differently or
> lose information that must survive independently?

- Yes: keep it.
- No: remove it.