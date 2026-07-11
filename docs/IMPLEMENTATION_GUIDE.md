# Implementation Guide

This document is the engineering handbook for implementation. It covers conventions, rules, and patterns that every implementation decision should follow. It is not exhaustive — it covers the cases where a developer unfamiliar with the project could easily make the wrong call.

Read `ARCHITECTURE.md`, `CMS.md`, and `DESIGN_SYSTEM.md` before implementing.

---

## Hierarchy of Decisions

When making a decision, consult documents in this order:

1. **This guide** — implementation rules and conventions
2. **`ENGINEERING_PRINCIPLES.md`** — the principles that govern all technical decisions
3. **`ARCHITECTURE.md`** — structural decisions and rationale
4. **`CMS.md`** — Prismic schema and querying
5. **`DESIGN_SYSTEM.md`** — tokens, components, and visual rules
6. **`DECISIONS.md`** — why specific choices were made
7. **Your judgment** — if none of the above covers it, make the call that is most consistent with the rest

---

## Component Rules

### Default to Astro

Every new component starts as an Astro component (`.astro`). The question is never "should I use React?" — the question is "does this component require client-side state, browser-only APIs, or a React-only third-party library?" If the answer is no, it is an Astro component.

### React islands require documented justification

An island is a component in `src/islands/` that is rendered with a Astro client directive (`client:load`, `client:visible`, etc.). Every island file must begin with a comment:

```tsx
// Island justification: [reason this cannot be an Astro component]
// e.g. "Requires focus-trap and toggle state for accessible mobile nav drawer"
```

Valid justifications:
- Stateful interactivity that CSS alone cannot implement
- Browser-only APIs (`window`, `IntersectionObserver`, Canvas)
- Third-party library with no Astro-compatible alternative

Not valid justifications:
- "It was easier to write as React"
- "The component has some conditional rendering"
- "I'm more comfortable with React hooks"

### Component boundaries

| Directory | Rule |
|---|---|
| `components/ui/` | No Prismic types. No feature-specific logic. Pure design system primitives. |
| `components/shared/` | May accept `PrismicRichText` data. No full document types (`HomeDocument`, etc.). |
| `features/*/` | May accept fully typed Prismic document or slice types. |
| `islands/` | React only. Must have justification comment. |
| `layouts/` | May fetch Settings and Navigation from Prismic. No page-specific data. |

### Naming conventions

- Astro components: `PascalCase.astro`
- React islands: `PascalCase.tsx`
- Helper functions and utilities: `camelCase.ts`
- Slice renderer components: `[SliceName]Slice.astro` — e.g. `ProblemSlice.astro`, `ResultsSlice.astro`

---

## Prismic Rules

### Always use generated types

After any schema change in the Prismic dashboard, run:

```bash
pnpm codegen
```

Commit the result in `src/prismicio/types.ts`. Never edit `src/prismicio/types.ts` manually — all changes must come from `pnpm codegen`. Never use `any` for Prismic data. If the generated type is wrong, the schema is wrong — fix the schema in the Prismic dashboard.

### Queries belong in `src/prismicio/queries.ts`

Do not write inline Prismic client calls in page files. All queries are defined as named, typed functions in `src/prismicio/queries.ts` and imported by pages. This makes queries testable, readable, and consistently typed.

```typescript
// Good
import { getCaseStudy } from '@/prismicio/queries'
const caseStudy = await getCaseStudy(uid)

// Bad
import { createClient } from '@/prismicio/client'
const client = createClient()
const caseStudy = await client.getByUID('case_study', uid)
```

### Settings and Navigation are fetched in the layout

`settings` and `navigation` are fetched once in `PageLayout.astro` using `Promise.allSettled`. They are passed as props to Header and Footer. Do not fetch them again inside page files or section components. Each fetch fails independently — a missing Navigation document does not prevent Settings from loading, and vice versa.

```typescript
// In PageLayout.astro
const [settingsResult, navigationResult] = await Promise.allSettled([
  getSettings(),
  getNavigation(),
])
```

Settings also provides global SEO fallbacks: `site_description` is used when a page does not supply its own `description`, and `og_image` is used when a page does not supply its own OG image.

### Prismic images use Astro's `<Image>` with Prismic's Imgix URL

Never render a Prismic image URL as a raw `<img>` tag. Use Astro's `<Image>` component, passing the Prismic image URL as `src`. Prismic serves images via Imgix — append query parameters (`?w=`, `?fm=webp`) for format conversion and responsive sizing. Always pass explicit `width`, `height`, and `alt` attributes to prevent layout shift and maintain accessibility.

```astro
---
import { Image } from 'astro:assets'
---
<Image
  src={document.data.cover_image.url}
  width={document.data.cover_image.dimensions.width}
  height={document.data.cover_image.dimensions.height}
  alt={document.data.cover_image.alt ?? ''}
/>
```

The shared `ImageBlock.astro` and `ArchitectureDiagram.astro` components in `components/shared/` handle this pattern — use them rather than writing image markup directly in feature components.

---

## Page Rules

### Pages are thin

Pages (`src/pages/*.astro`) are responsible for:
1. Fetching data (calling `src/prismicio/queries.ts` functions)
2. Passing data to feature components
3. Setting SEO metadata

Pages must not contain inline component logic, layout markup, or business logic. If a page file is growing large, the content belongs in a feature component.

### `getStaticPaths` is always typed

```typescript
// Good
export async function getStaticPaths() {
  const caseStudies = await getAllCaseStudies()
  return caseStudies.map((cs) => ({
    params: { uid: cs.uid },
    props: { caseStudy: cs },
  }))
}

export type Props = {
  caseStudy: CaseStudyDocument
}
```

### SEO metadata is always present

Every page must pass `title` to `PageLayout`. `description` is optional — when omitted, `PageLayout` falls back to `settings.site_description`. Source the title from the Prismic document or `buildTitle()` in `src/lib/seo.ts`. Never hardcode meta values directly in page files.

---

## Styling Rules

### Use design tokens, not raw values

```html
<!-- Good -->
<div class="text-text-primary bg-surface rounded-md">

<!-- Bad -->
<div style="color: #F5F5F5; background: #111111; border-radius: 8px;">
```

All colors, radii, shadows, and spacing values are available as Tailwind utility classes mapped from CSS custom properties. If a value is not in the design tokens, either add it to `global.css` or question whether it belongs in the design.

### No inline styles

Inline `style` attributes are not allowed except for truly dynamic values (e.g., a CSS custom property driven by JavaScript). If you find yourself writing `style="color: ..."`, you are using the wrong approach.

### Prose content uses `RichText`

All Prismic rich text fields are rendered through `RichText.astro`, which applies consistent typographic styles. Never render `<PrismicRichText>` directly in a page or feature component — wrap it.

### `prefers-reduced-motion` is always respected

Any CSS transition or animation must have a `prefers-reduced-motion` variant:

```css
@media (prefers-reduced-motion: no-preference) {
  .animated-element {
    transition: opacity var(--duration-base) var(--ease-out);
  }
}
```

---

## Accessibility Rules

### Semantic HTML is the default

Use the correct HTML element before reaching for ARIA. `<button>` for triggers, `<a>` for navigation, `<nav>` for navigation regions, `<main>` for main content, `<article>` for standalone content, `<section>` for thematic sections with a heading.

### Every image has an `alt` attribute

- Meaningful images: descriptive alt text that conveys the image's content or purpose
- Decorative images: `alt=""`
- Never omit `alt` entirely — it is required

### Focus management is explicit

Interactive components (mobile nav, any future modal) must manage focus: move focus to the opened element on open, return it to the trigger on close.

### Heading hierarchy is correct

Use `Heading.astro` with the `level` prop to set semantic hierarchy. The visual size is controlled separately via the `size` prop. Never choose a heading level based on how it looks.

```astro
<!-- Good: h2 semantically, visually styled as 3xl -->
<Heading level={2} size="3xl">Featured Work</Heading>

<!-- Bad: h1 chosen because it looks right -->
<h1 class="text-xl">Featured Work</h1>
```

---

## Performance Rules

### No unnecessary dependencies

Before installing a package, ask: can this be done with native browser APIs, CSS, or Astro's built-in capabilities? If yes, do not add the package.

### Images are always optimized

Use Astro's `<Image>` component or Prismic's imgix integration. Always specify `width`, `height`, and `alt`. Set `loading="lazy"` on all images except the hero image (which should use `loading="eager"` and `fetchpriority="high"`).

### Fonts are preloaded

Critical font weights are preloaded in `BaseLayout.astro`. The `font-display: swap` descriptor is set on all `@font-face` declarations. Inter (regular + medium + semibold) and JetBrains Mono (regular) are the critical weights.

### Audit before each phase closes

Run Lighthouse against all pages before marking a phase complete. No phase ships with a performance score below 95 or an accessibility score below 100.

---

## Motion Rules

### No animations before the Motion phase

Do not implement entrance animations, scroll-triggered effects, or page transitions before the roadmap reaches a phase that explicitly includes them. Placeholder CSS transitions (`transition: opacity 150ms`) for hover and focus states are acceptable at any phase — they are micro-interactions, not animations.

### The interactive hero panel is Phase 5

Do not implement `HeroPanel.tsx` before Phase 5. `HeroPanelPlaceholder.astro` is the implementation target until then. Do not refactor the placeholder into a "partial" implementation — ship the static placeholder faithfully and replace it completely in Phase 5.

---

## Documentation Rules

### Keep documentation synchronized

If an implementation decision changes something documented in `docs/`, update the documentation in the same commit or PR. A PR that introduces an architectural change without updating documentation is incomplete.

### New architectural decisions go in `DECISIONS.md`

Significant choices that a future maintainer would wonder about — "why is this done this way?" — get an ADR in `DECISIONS.md`. Small implementation choices do not need ADRs. The bar is: if you'd have to explain it in a code review, it probably belongs in `DECISIONS.md`.

### Comments in code are for non-obvious reasoning only

Do not comment what code does — the code shows that. Comment why, when the why is not obvious from the code. Island justification comments (required by this guide) are the primary exception. Implementation details that would surprise a reader are a secondary case.

---

## Git Conventions

### Branch naming

```
feat/[short-description]    # new feature
fix/[short-description]     # bug fix
chore/[short-description]   # maintenance, dependency updates
docs/[short-description]    # documentation only
```

### Commit messages

Follow Conventional Commits:

```
feat(home): add featured work section
fix(nav): prevent scroll lock on mobile nav close
chore(deps): update @prismicio/client to 7.x
docs(cms): document navigation singleton fields
```

### Phase branches

Each roadmap phase is implemented on a branch. The branch is merged to `main` when the phase's exit criteria are met (Lighthouse audit passing, content entered, cross-browser review done).

---

## Checklist Before Marking a Phase Complete

- [ ] All page routes resolve without errors
- [ ] Lighthouse Performance ≥ 95 on all pages
- [ ] Lighthouse Accessibility = 100 on all pages
- [ ] No TypeScript errors (`pnpm tsc --noEmit`)
- [ ] All images have `alt` text
- [ ] All interactive elements have visible focus rings
- [ ] Mobile layout reviewed at 375px viewport
- [ ] `prefers-reduced-motion` tested
- [ ] Prismic types regenerated and committed after any schema change
- [ ] Documentation updated if any architectural decision changed
