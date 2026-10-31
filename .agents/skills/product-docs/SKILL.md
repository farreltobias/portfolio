---
name: product-docs
description: Maintain dense, minimal, stable product documentation using PRODUCT.md, FLOWS.md, and RULES.md.
---

# Product Documentation

Use this skill when:

- creating product documentation;
- changing product behavior;
- refining requirements;
- consolidating existing product docs.

## Canonical Documents

### `PRODUCT.md`

Defines:

- problem;
- solution;
- user;
- value;
- core loop;
- scope;
- out of scope.

### `FLOWS.md`

Defines:

- actions;
- inputs;
- behavior;
- outcomes;
- relevant failures.

### `RULES.md`

Defines stable constraints and invariants, including:

- fields and relationships;
- permissions;
- states and transitions;
- content rules;
- engineering constraints;
- design constraints;
- product invariants.

## Chain of Density

For every documentation change:

1. Extract all facts that can affect product or implementation decisions.
2. Assign each fact to exactly one canonical document.
3. Remove duplicated facts.
4. Replace unnecessary prose with structured Markdown.
5. Remove lines that do not constrain product or implementation decisions.
6. Verify that no behavior-changing information was lost.

## Final Test

For every line:

> Could removing this line cause a competent implementation agent to build something materially different?

- Yes: keep it.
- No: remove it.