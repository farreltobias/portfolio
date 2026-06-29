# Engineering Principles

These principles govern every technical decision in this project. When trade-offs arise, consult this list. When a principle would produce a clearly wrong outcome in context, document the exception and the reason.

---

## 1. Server-first rendering

Render on the server unless there is a specific, justified reason to render on the client. Astro ships zero JS by default — every component that can be `.astro` should be `.astro`.

## 2. React islands are opt-in, not default

A React island requires a documented justification. "It was easier" is not a justification. Valid reasons: stateful interactivity that cannot be achieved with CSS or native HTML, browser-only APIs, third-party components that are React-only.

## 3. Zero unnecessary client JavaScript

Every kilobyte of JS shipped to the browser has a cost. Audit the client bundle before each phase completes. If a dependency only exists to accomplish something Astro or the browser can already do, remove it.

## 4. CMS-first architecture

Content lives in Prismic, not in code. Hardcoding content that an editor might reasonably want to change is a maintenance failure. Contact info, copy, and ordering all belong in the CMS.

## 5. Components are reusable or they are not components

A component built for one specific usage in one specific place is not a component — it is an inline fragment. Extract only when there is clear reuse or when the fragment is complex enough to warrant isolation.

## 6. Composition over configuration

Prefer small, composable components with explicit props over large components with many conditional branches. A component that renders differently based on a `variant` prop in 5 different ways should probably be 5 components, or 2 with a shared primitive.

## 7. Type safety is non-negotiable

`any` is a code smell. Prismic types are generated — use them. Component props are typed — define them. If a type is hard to define, it is often a sign the data shape or API needs rethinking.

## 8. Accessibility is structural, not a checkbox

Semantic HTML is the foundation. Screen reader accessibility, keyboard navigation, and focus management are designed in, not audited in afterward. Every interactive element must have a visible focus ring. Every image must have meaningful alt text.

## 9. Motion communicates; it never decorates

Animation is used to guide attention, communicate state change, or signal causality. Animation that exists purely for visual flair adds cognitive load without benefit. All animations respect `prefers-reduced-motion`.

## 10. Performance is a feature

A slow site is a broken site for a significant portion of users. Lighthouse ≥ 95 is a hard requirement, not a stretch goal. Images are optimized, fonts are preloaded, and the critical render path is clean.

## 11. Optimize for maintainability

This site is solo-maintained. Code that requires deep context to modify is a liability. Prefer explicit over clever. Prefer readable over terse. A future version of Farrel should be able to edit any part of this site after months away from it without confusion.

## 12. No premature abstraction

Three similar lines of code is better than an abstraction invented to handle two cases. Abstract when the pattern is stable, well-understood, and the abstraction genuinely reduces complexity — not to feel organized.

## 13. Documentation is part of the work

Architecture decisions, CMS schema changes, and non-obvious implementation choices are documented in the `docs/` directory. A PR that changes something architectural without updating documentation is incomplete.
