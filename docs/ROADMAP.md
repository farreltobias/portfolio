# Roadmap

## Overview

The portfolio is built in focused phases, each shippable independently. No phase is started until the previous one is complete and its exit criteria are met.

---

## Phase 0 — Documentation ✓

**Goal**: Define the project before touching code. Create alignment on architecture, content model, design decisions, and implementation conventions.

**Deliverables**:
- [x] `docs/PROJECT.md`
- [x] `docs/ARCHITECTURE.md`
- [x] `docs/DESIGN_SYSTEM.md`
- [x] `docs/CONTENT_STRATEGY.md`
- [x] `docs/CMS.md`
- [x] `docs/SEO.md`
- [x] `docs/ENGINEERING_PRINCIPLES.md`
- [x] `docs/DECISIONS.md`
- [x] `docs/IMPLEMENTATION_GUIDE.md`
- [x] `docs/ROADMAP.md`

---

## Phase 1 — Foundation ✓

**Goal**: Working Astro project connected to Prismic, with design tokens and layout shell — but no real page content.

**Tasks**:
- [x] Configure Astro with `@astrojs/vercel` adapter (`output: 'static'`)
- [x] Install and configure Tailwind CSS 4; wire design tokens from `global.css`
- [x] Set up TypeScript with `strict: true` and `@/*` path alias
- [x] Create all Custom Types in Prismic dashboard: `home`, `about`, `work`, `insights_page`, `contact`, `settings`, `navigation`, `case_study`, `insight` — per `CMS.md`
- [x] Create all Slices in Prismic dashboard — per `CMS.md`
- [x] Run `pnpm codegen` and commit generated types to `src/prismicio/types.ts`
- [x] Build `src/prismicio/client.ts` — Prismic client instance with route resolver
- [x] Build `src/prismicio/queries.ts` — typed query helper functions
- [x] Build `src/lib/linkResolver.ts` — shared link resolver
- [x] Build `src/lib/seo.ts` — SEO utility functions
- [x] Define design tokens in `src/styles/global.css`
- [x] Build `BaseLayout.astro` — HTML shell with SEO `<head>`
- [x] Build `PageLayout.astro` — wraps `BaseLayout`; fetches Settings and Navigation; applies Settings fallbacks for description and OG image
- [x] Build `Header.astro` and `Footer.astro` (sourced from Navigation and Settings singletons)
- [x] Build `MobileNav.tsx` React island with focus trap
- [x] Set up Vercel project, configure environment variables, and create Prismic → Vercel deploy hook
- [x] Verify a successful build with no errors

**Exit criteria met**: Site builds with no errors. Design tokens applied. Navigation renders correctly. Prismic types are generated and type-safe. `astro check` passes. `biome check src/` passes.

**Notes**:
- Prismic preview endpoint (`/api/preview`) is implemented and redirects correctly for published content. Draft-content rendering must be validated during Phase 2 page implementation (see Phase 2 notes).
- Slice Machine was not used; content models are managed via the Prismic dashboard Type Builder (see `DECISIONS.md` ADR-013).

---

## Phase 2 — Core Pages

**Goal**: Home, Work, and About pages with real content from Prismic.

**Tasks**:
- Build feature components for Home: `Hero.astro`, `HeroPanelPlaceholder.astro`, `FeaturedWork.astro`, `AboutSnippet.astro`, `InsightsPreview.astro`, `HomeCTA.astro`
- Build `src/pages/index.astro` — Home page, sourced from `home` singleton
- Build feature components for Work: `CaseStudyCard.astro`, `WorkList.astro`
- Build `src/pages/work/index.astro` — Work list page, sourced from `work` singleton + all Case Studies
- Build Case Study header: `CaseStudyHeader.astro`
- Build Case Study slice renderers: `ProblemSlice.astro`, `ArchitectureSlice.astro`, `ImplementationSlice.astro`, `ResultsSlice.astro`, `ReflectionSlice.astro`
- Build shared components: `RichText.astro`, `CodeBlock.astro`, `MetricsRow.astro`, `Metric.astro`, `ImageBlock.astro`, `ArchitectureDiagram.astro`
- Build `src/pages/work/[uid].astro` — Case Study detail page with `getStaticPaths`
- Build feature components for About: `AboutHeader.astro`, `Timeline.astro`
- Build `src/pages/about.astro` — About page, sourced from `about` singleton
- Enter real content for all 3 Case Studies in Prismic
- Enter real About content in Prismic
- Enter Home content in Prismic
- Validate Prismic preview end-to-end: publish a document, modify without publishing, open preview, confirm draft content renders, exit preview, confirm published version is shown

**Exit criteria**: All 3 Case Studies are live and readable. Home page reflects real content. About page is complete. Lighthouse Performance ≥ 95 and Accessibility = 100 on all implemented pages. Prismic preview validated end-to-end.

**Preview validation checklist**:
1. Publish a document in Prismic
2. Modify it without publishing
3. Open the Prismic preview from the dashboard
4. Confirm the unpublished content is rendered
5. Exit preview
6. Confirm the published version is shown again

> Preview redirect is implemented in Phase 1. Whether unpublished draft content renders depends on the page's rendering strategy — this must be confirmed during Phase 2 when real pages are built.

---

## Phase 3 — Insights and Contact

**Goal**: Insights section and Contact page live with real content.

**Tasks**:
- Build feature components for Insights: `InsightCard.astro`, `InsightsList.astro`, `InsightHeader.astro`
- Build `src/pages/insights/index.astro` — Insights list, sourced from `insights_page` singleton + all Insights
- Build Insight slice renderers: `prose` (`RichText.astro` — reused), `CodeBlock.astro` (reused), `Callout.astro`, `ImageBlock.astro` (reused)
- Build `src/pages/insights/[uid].astro` — Insight detail with `getStaticPaths`
- Write and publish 3 initial Insights in Prismic
- Build `ContactInfo.astro` feature component (social links from Settings)
- Build `src/pages/contact.astro` — Contact page, sourced from `contact` singleton + `settings` for social links
- Enter contact page content in `contact` singleton
- Enter social links and global config in `settings` singleton
- Build `src/pages/404.astro`

**Exit criteria**: 3 Insights published and readable. Contact page live with correct information. 404 page renders correctly. Lighthouse targets met on all new pages.

---

## Phase 4 — SEO, Performance, and Launch

**Goal**: Production-ready quality on all axes. Site launches.

**Tasks**:
- Audit all pages with Lighthouse — confirm Performance ≥ 95, Accessibility = 100
- Verify OG images render correctly on LinkedIn and Slack (test with [opengraph.xyz](https://www.opengraph.xyz) or equivalent)
- Confirm `robots.txt` is served correctly; verify sitemap at `/sitemap-index.xml`
- Add `Person` JSON-LD structured data to Home page
- Add `Article` JSON-LD structured data to Insight detail pages
- Confirm font preloading is in place for critical weights
- Audit client JS bundle — verify no unnecessary hydration
- Cross-browser review (Chrome, Firefox, Safari) at desktop and mobile
- Mobile layout review at 375px and 390px viewports
- `prefers-reduced-motion` verified across all animated elements
- Set up Vercel Analytics
- Configure domain, SSL, and `www` → apex redirect in Vercel
- Final content review: spelling, link integrity, consistency of terminology

**Exit criteria**: Lighthouse ≥ 95 on all pages. Accessibility = 100. OG tags verified. Domain live. No broken links.

---

## Phase 5 — Interactive Hero (Deferred)

**Goal**: Replace `HeroPanelPlaceholder.astro` with the live interactive system architecture panel.

**Scope** (to be detailed at time of implementation):
- `HeroPanel.tsx` React island replacing the static placeholder
- Interactive system architecture diagram with hover states and node detail panels
- Motion choreography consistent with the design system motion tokens
- Must not regress Lighthouse performance scores

**Constraint**: This phase is explicitly deferred. The site is shippable and complete without it. Implement only after Phases 1–4 are stable in production and the interactive design is finalized in Stitch.

---

## Phase 6 — Enhancements (Backlog)

Lower-priority improvements. No implementation timeline.

- Automated OG image generation via Vercel OG (`@vercel/og`)
- Reading time estimate on Insights
- Related Insights on Insight detail page (manual curation)
- RSS feed for Insights (`@astrojs/rss`)
- Print-optimized stylesheet for About and Contact (resume print scenario)
- Link from Farrel.tech once that property is live

---

## Timeline

No hard deadlines. The constraint is quality, not calendar. Each phase is reviewed against its exit criteria before the next begins.

| Phase | Status |
|---|---|
| 0 — Documentation | Complete |
| 1 — Foundation | Complete |
| 2 — Core Pages | Not started |
| 3 — Insights and Contact | Not started |
| 4 — SEO, Performance, Launch | Not started |
| 5 — Interactive Hero | Deferred |
| 6 — Enhancements | Backlog |
