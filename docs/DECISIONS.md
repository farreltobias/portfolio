# Architecture Decision Records

This document records significant decisions made about this project. Each entry captures the context at the time of the decision, the decision itself, and the consequences. New decisions are appended as the project evolves.

Entries are not deleted when circumstances change — they are superseded by a new entry that references the old one.

---

## ADR-001: Astro as the framework

**Date**: 2026-06-29  
**Status**: Accepted

### Context

The portfolio is a content site with a small number of pages. The primary rendering target is a server-generated static page. Client-side interactivity is limited to one known component (mobile nav) and one deferred component (interactive hero panel). Performance and accessibility are hard requirements.

The options considered were Astro, Next.js, and Remix.

### Decision

Use Astro.

### Consequences

**Positive**:
- Astro ships zero JavaScript by default. The portfolio starts at the performance floor and pays only for what it explicitly opts into.
- The islands architecture matches the actual interactivity model: one or two interactive components on a mostly-static site.
- Astro's file-based routing and content collections align with the page structure.
- The `@astrojs/vercel` adapter handles SSG and ISR without configuration overhead.

**Negative**:
- The Astro ecosystem is smaller than Next.js; some third-party component libraries are React-only and require island wrappers.
- Hiring contributors (not a near-term concern) would need to learn Astro's templating model.

**Trade-off accepted**: The performance and zero-JS-by-default properties of Astro are not incidental — they are directly relevant to the portfolio's goal of demonstrating engineering craft. Using Next.js for a portfolio this simple would require explicit effort to avoid shipping unnecessary JS that Astro avoids by default.

---

## ADR-002: Prismic as the CMS

**Date**: 2026-06-29  
**Status**: Accepted

### Context

Content — case studies, insights, contact info, global settings — must be editable without code deploys. The site is solo-maintained, so the CMS must be simple enough to use months after initial setup. The team is zero content editors besides the author.

The options considered were Prismic, Contentful, Sanity, and no CMS (MDX files in the repo).

### Decision

Use Prismic.

### Consequences

**Positive**:
- Prismic provides a TypeScript SDK with generated types (`prismic-ts-codegen`), enabling type-safe CMS queries throughout the codebase.
- Slice Machine enforces schema in version control.
- The free tier is sufficient for this project's volume.
- Prismic preview mode enables content review before publishing without a staging environment.

**Negative**:
- Prismic's slice model can sprawl if discipline is not applied — mitigated by the slice design rules in `CMS.md`.
- Vendor lock-in: migrating away from Prismic requires rebuilding the content model and re-entering all content.

**Trade-off accepted**: Vendor lock-in is acceptable. The content volume is small, and the productivity gained from a managed CMS outweighs the migration risk at this scale.

---

## ADR-003: React as the island framework

**Date**: 2026-06-29  
**Status**: Accepted

### Context

Astro supports multiple UI frameworks for islands (React, Vue, Svelte, Solid, Preact). The project needs at least one island for the mobile navigation. A second island (interactive hero panel) is planned for Phase 5.

### Decision

Use React for all islands.

### Consequences

**Positive**:
- React is the dominant framework; future contributors are most likely to know it.
- The interactive hero panel (Phase 5) may use visualization libraries that are React-native.
- Consistent tooling: one framework for all island components.

**Negative**:
- React is heavier than Preact or Solid for island hydration. Mitigated by the fact that islands are strictly opt-in and the total count is very small.

**Trade-off accepted**: At 1–2 islands, the weight difference between React and Preact is negligible in absolute terms. Consistency of tooling outweighs micro-optimization at this scale.

---

## ADR-004: Astro components as the default (React islands are opt-in)

**Date**: 2026-06-29  
**Status**: Accepted

### Context

In a hybrid Astro + React project, there is a default drift toward writing everything as React components — especially for developers with a React background. This drift is costly: every React component converted to a client island ships hydration JavaScript that Astro components do not.

### Decision

Astro components (`.astro`) are the default for all UI. React components (`.tsx`) in `src/islands/` are used only when the component requires stateful interactivity, browser-only APIs, or a third-party library that is React-only. Each island file must include a comment explaining the justification.

### Consequences

**Positive**:
- The JS bundle stays small by default. Over-engineering is structurally discouraged.
- The constraint makes the cost of interactivity visible and intentional.

**Negative**:
- Some UI patterns that React developers find natural (controlled inputs, conditional rendering with state) require different approaches in Astro templates.

**Trade-off accepted**: The friction of the constraint is small and worth the discipline it enforces.

---

## ADR-005: Tailwind CSS for styling

**Date**: 2026-06-29  
**Status**: Accepted

### Context

The options considered were Tailwind CSS, CSS Modules, plain CSS, and a component library (shadcn/ui or similar).

### Decision

Use Tailwind CSS 4. Design tokens are defined as CSS custom properties in `global.css` and referenced by Tailwind's configuration. No component library is used — components are hand-built.

### Consequences

**Positive**:
- Utility classes co-locate styles with markup; no context switching to a separate stylesheet.
- Tailwind's purging ensures only used styles are shipped.
- Full control over the design system — no fighting a component library's defaults.
- CSS custom properties for design tokens allow runtime access if needed.

**Negative**:
- Hand-building components takes longer than using a component library.
- Long class lists on complex components can become hard to scan.

**Trade-off accepted**: The portfolio is a small, bounded surface. Building components from scratch is appropriate here and produces a more tailored result than adapting a component library to a custom design.

---

## ADR-006: Product Engineer positioning

**Date**: 2026-06-29  
**Status**: Accepted

### Context

Farrel has both backend depth and product awareness. The portfolio needs a single, clear positioning that resonates with the target audience: engineering hiring managers at product companies.

The options considered were Backend Engineer, Full Stack Engineer, and Product Engineer.

### Decision

The primary positioning is **Product Engineer with a backend-first mindset**.

### Consequences

**Positive**:
- "Product Engineer" is increasingly understood at product-led companies as an engineer who combines technical depth with product judgment.
- The "backend-first mindset" qualifier signals technical depth and avoids the perception of being a generalist who goes shallow in both directions.
- This positioning attracts companies where engineering and product work closely together — which is the target environment.

**Negative**:
- "Product Engineer" is not universally understood. Some companies will interpret it as a role that sits between product and engineering rather than a strong IC engineer with product skills.
- Recruiters searching for "Backend Engineer" may not surface this profile.

**Trade-off accepted**: The portfolio is primarily for direct outreach and referrals, not recruiter discovery. Precision of positioning is more valuable than broad keyword reach at this stage.

---

## ADR-007: Dark-only theme (no light mode)

**Date**: 2026-06-29  
**Status**: Accepted

### Context

Engineering portfolios commonly implement light/dark mode toggles. The question is whether to support both, or to commit to one.

### Decision

The site is dark-only. No light mode toggle is implemented.

### Consequences

**Positive**:
- A single theme reduces design complexity by half. Every component, color token, and visual treatment is designed once.
- The dark aesthetic is consistent with the engineering positioning and the overall visual direction.
- Eliminating the toggle removes a JavaScript dependency (theme persistence logic) and avoids flash-of-incorrect-theme issues.

**Negative**:
- Users who prefer light mode have no option to change the theme.
- Some users find dark backgrounds harder to read for long-form content (mitigated by constraining prose width with `--container-md`).

**Trade-off accepted**: This is a personal portfolio, not a product. A deliberate aesthetic choice is itself a form of product thinking. The trade-off is accepted.

---

## ADR-008: Feature-based folder structure (hybrid with shared primitives)

**Date**: 2026-06-29  
**Status**: Accepted

### Context

The initial project structure organized components into `components/ui/`, `components/layout/`, and `components/sections/`. The `sections/` directory is insufficiently expressive — it becomes a flat bucket for all non-primitive components, making it impossible to distinguish shared components from page-specific slice renderers.

### Decision

Adopt a feature-based hybrid structure:

- `components/ui/` — design system primitives (no Prismic dependencies)
- `components/shared/` — shared page compositions used across multiple features
- `features/{page}/` — feature-specific components and slice renderers
- `islands/` — React components requiring client hydration

### Consequences

**Positive**:
- Slice renderers are co-located with their feature (`features/case-study/ProblemSlice.astro`), not buried in a generic `sections/` directory.
- The boundary between "shared" and "feature-specific" is explicit and navigable.
- `components/ui/` components are guaranteed to have no Prismic dependencies — they are pure design system primitives.

**Negative**:
- Slightly more directories than a flat layer structure.
- Requires discipline to enforce the boundary (Prismic types must not leak into `components/ui/`).

**Trade-off accepted**: The added structure eliminates a real navigation problem as the component count grows. For a project this size, the overhead is negligible.

---

## ADR-009: Semantic slices for Case Studies, generic slices for Insights

**Date**: 2026-06-29  
**Status**: Accepted

### Context

The initial CMS model used generic slices (`text_section`, `image_block`, `metrics_row`, `code_block`) for both Case Study and Insight body content. The question was whether these should be replaced with semantic slices that correspond to named sections.

### Decision

- **Case Study**: Use semantic slices — `problem`, `architecture`, `implementation`, `results`, `reflection`.
- **Insight**: Use generic slices — `prose`, `code_block`, `callout`, `image_block`.

### Consequences

**Case Study — semantic slices**:
- The Case Study structure is fixed by editorial mandate (`CONTENT_STRATEGY.md`). Generic slices add no flexibility benefit; they only add ambiguity.
- Semantic slices guide the editor by making the expected content explicit in the CMS.
- Each section can be rendered differently (e.g., `results` includes metric callouts; `architecture` includes an optional diagram field).
- Trade-off: sections cannot be reordered — which is the intended constraint.

**Insight — generic slices**:
- Insights are free-form 300–800 word notes. The structure is prose-first with optional code and callout enrichments.
- Imposing semantic sections (`Introduction`, `DeepDive`, `Takeaways`) would be artificial for shorter, opinionated notes.
- `prose` is renamed from `text_section` for clarity; the remaining slices (`code_block`, `callout`, `image_block`) are semantically clear without being prescriptive about document structure.

---

## ADR-010: Navigation as a separate singleton (extracted from Settings)

**Date**: 2026-06-29  
**Status**: Accepted

### Context

The initial design placed `nav_links` inside the `settings` singleton. Settings was responsible for: SEO defaults, contact information, footer content, and navigation configuration.

### Decision

Create a dedicated `navigation` singleton for all navigation configuration. Remove `nav_links` from Settings.

### Consequences

**Positive**:
- Settings has a clear, bounded responsibility: SEO defaults and global social links.
- Navigation has a clear, bounded responsibility: site routing and header/footer presentation.
- Either document can grow independently without coupling.
- Fetching navigation in the layout component is semantically cleaner — it queries a `navigation` document, not a `settings` document.

**Negative**:
- One additional Prismic query per page render (navigation + settings instead of settings alone). Cost is negligible — both are singleton fetches and can be parallelized with `Promise.all`.

**Trade-off accepted**: The semantic clarity is worth the trivial added query cost.

---

## ADR-011: Contact as a standalone page singleton

**Date**: 2026-06-30
**Status**: Accepted

### Context

The original model stored contact page content (`contact_intro`) inside the `settings` singleton alongside global SEO defaults and social links. The Contact page had no dedicated Prismic document.

This created a blurred responsibility: Settings was doing two different jobs — global site configuration and editorial content for a specific page. It also prevented the Contact page from having its own metadata, headline, availability items, and FAQ — content that has nothing to do with site-wide configuration.

### Decision

Create a `contact` singleton custom type to own all Contact page content. Move `contact_intro` out of Settings and replace it with a richer set of fields: `hero_headline`, `hero_intro`, `availability_intro`, `availability_items`, `faq_items`, and a CTA section.

Global social links (`contact_email`, `linkedin_url`, `github_url`, `scheduling_url`) remain in Settings — they are used in the footer and Contact page alike.

### Consequences

**Positive**:
- Settings is now pure global configuration: SEO defaults, social links, footer tagline.
- Contact has its own document with proper SEO fields and richer editorial structure.
- The Contact page can be previewed via Prismic preview like any other page document.
- The `contact` type integrates cleanly into the route resolver (`/contact`) and `AllDocumentTypes` union.
- Adds `getContact()` to the query layer.

**Negative**:
- One additional Prismic singleton document to maintain.

**Trade-off accepted**: The added document is minimal. The clarity of having each page own its content outweighs the overhead.

---

## ADR-012: Navigation uses Content Relationships for primary nav items

**Date**: 2026-06-30
**Status**: Accepted

### Context

The original `nav_links` group used a generic `Link` field, which accepts internal URLs, external URLs, or media links. For a portfolio whose primary navigation points exclusively to internal Prismic page documents (Home, Work, About, Insights, Contact), this was unnecessarily permissive.

### Decision

Replace the generic `link` field in `nav_links` with a `page` Content Relationship field restricted to: `["home", "work", "about", "insights_page", "contact"]`.

The `nav_cta_link` remains a generic Link because it may point to external destinations (Calendly, email, etc.) and does not need the same restriction.

### Consequences

**Positive**:
- URL resolution is automatic via the route resolver — no hardcoded paths in the CMS.
- Broken links to deleted documents become impossible.
- The editor interface is cleaner — only page documents appear in the picker.
- The field is renamed from `link` to `page`, which is semantically accurate.

**Negative**:
- If a future navigation item needs to link to an external URL (e.g. a podcast appearance), the `nav_links` group cannot accommodate it. A separate `external_links` group would be needed.

**Trade-off accepted**: Primary navigation on a personal portfolio is intentionally CMS-page-driven. If external nav links are needed in future, they will be modeled explicitly rather than loosening the existing restriction.
