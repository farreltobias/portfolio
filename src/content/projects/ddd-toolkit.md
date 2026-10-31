---
title: DDD Toolkit
description: An open-source, framework-independent TypeScript toolkit that turns recurring Domain-Driven Design patterns into one reusable foundation.
year: 2026
role: Creator
featured: false
constraint: DDD patterns were rebuilt in every project.
decision: Extract them into a framework-independent toolkit.
outcome: A reusable DDD core, published on npm.
order: 5
plan:
  - kind: constraint
    title: Rebuilt foundations
    note: The same domain primitives reimplemented in each project
  - kind: built
    title: Zero-dependency core
    note: Published on npm as @farreltobias/ddd 0.1.0
  - kind: built
    title: CLI and generators
    note: Built and tested; not yet published
  - kind: in-progress
    title: Architecture checks
    note: Reads a project's source graph; no rules yet
  - kind: planned
    title: Testing utilities
    note: A future package
---

A personal product, built and maintained on my own and open source on <a href="https://github.com/farreltobias/ddd-toolkit" target="_blank" rel="noopener">GitHub<span class="vh"> (opens in a new tab)</span></a>. It is in early development.

## The same foundations, rebuilt

Projects built with Domain-Driven Design in TypeScript kept needing the same primitives: a stable identity for entities, equality for value objects, aggregates that record domain events, a way to return an expected failure without throwing.

Each project reimplemented them, with small differences that had to be decided again every time: how equality works, when events are cleared, what an error looks like. And when those primitives were written inside a framework, the domain code ended up depending on infrastructure it should never have known about.

## A toolkit, not a helpers folder

The decision was to extract the recurring concepts into a toolkit with a stable public API, and to treat that API as the product. Its users are developers, so the design choices are about what they can rely on and what they cannot get wrong:

- **One way in.** Everything is imported from the package root, and nothing else is public. Tests check the exported set at runtime and at compile time, so the documented API and the real one cannot drift apart.
- **Building blocks, not finished objects.** Entities, value objects and aggregate roots can only be created through a subclass, so each project models its own domain on top of shared behavior.
- **Expected failures as values.** An operation returns an `Either`, and every expected failure is either a domain error or a use-case error, each with a stable, machine-readable code. An adapter can tell what went wrong without parsing a message.

The rest of the core covers identifiers, domain events and their dispatching, watched lists that track what changed in a collection, and a minimal use-case contract.

## Independence as a rule

The core has no runtime dependencies and knows nothing about any framework, database or runtime. That rule shaped concrete decisions. Identifiers use the standard Web Crypto API rather than a Node-only module, so the same domain code runs outside Node. When architecture analysis later needed the TypeScript compiler, that dependency went into the analysis package alone, and the core's rule stayed intact.

The packages are kept apart in the same way: the core does not know the CLI or the architecture checks exist. Each of these choices is recorded as a written architecture decision, ten so far, so the reasoning travels with the code.

## Helping projects stay consistent

Shared primitives are not enough on their own; a project also needs a consistent way to use them. Around the core:

- **A command-line tool** sets up a project and generates entities, value objects, aggregates with their events, and use cases with their repository contracts into a layout organized by domain area. It previews changes before writing, refuses to overwrite existing files, and reads its configuration as plain data, so it never runs project code.
- **Written procedures** for creating each kind of domain object, installable into a project through the same tool.
- **An example application** and reference documentation for every primitive.
- **Tests from the consumer's side,** which pack the package, install it into an empty project, compile against it and run it, proving it works for a project that has never seen the repository.

## Where it stands

The core is released on npm as version 0.1.0. The command-line tool is built and tested but not yet published. The architecture-check package can already read a project's source structure through the TypeScript compiler; the rules that will enforce the toolkit's layering are still to be written, and testing utilities are planned.

No adoption or usage is claimed for it. What it shows is the work of making a set of patterns into something another project can depend on: a deliberate public API, clear boundaries, and the documentation and tooling around them.
