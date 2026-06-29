# Design System

## Source of Truth

The visual design lives in the Stitch design file. This document captures the decisions and tokens that translate that design into code. If there is a conflict: the Stitch file wins for visual values, this document wins for implementation decisions and naming conventions.

The goal of this document is that another engineer can reproduce the design system without opening Stitch.

---

## Design Tokens

All tokens are defined as CSS custom properties in `src/styles/global.css` and referenced in `tailwind.config.ts`. Tailwind utility classes map to these variables — never hardcode a hex value in a component.

### Color Palette

```css
/* Background */
--color-bg:           #0A0A0A;   /* near-black base — page background */
--color-surface:      #111111;   /* card, panel, and input surface */
--color-surface-raised: #1A1A1A; /* elevated surface — modals, dropdowns */
--color-border:       #1F1F1F;   /* default border — subtle dividers */
--color-border-muted: #161616;   /* barely-visible structural border */

/* Text */
--color-text-primary: #F5F5F5;   /* headings and body text */
--color-text-muted:   #6B6B6B;   /* meta, captions, labels */
--color-text-disabled: #3A3A3A;  /* disabled state text */

/* Accent */
--color-accent:       #E8FF47;   /* primary accent — lime/electric yellow */
--color-accent-dim:   #B8CC38;   /* hover state for accent elements */
--color-accent-subtle: #1D2400;  /* accent background tint — for highlighted rows */

/* Semantic */
--color-success:      #22C55E;
--color-error:        #EF4444;
```

> Exact hex values must be confirmed against the Stitch design file before implementation begins. The values above are directionally correct for a dark engineering portfolio aesthetic but are not final.

---

### Typography

```css
/* Font families */
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Type scale (rem — browser default 16px) */
--text-xs:   0.75rem;    /* 12px — tags, labels, fine print */
--text-sm:   0.875rem;   /* 14px — meta, captions, secondary UI */
--text-base: 1rem;       /* 16px — body text */
--text-lg:   1.125rem;   /* 18px — lead paragraph */
--text-xl:   1.25rem;    /* 20px — card titles, section sub-headings */
--text-2xl:  1.5rem;     /* 24px — section headings (mobile) */
--text-3xl:  1.875rem;   /* 30px — section headings (desktop) */
--text-4xl:  2.25rem;    /* 36px — page title (mobile) */
--text-5xl:  3rem;       /* 48px — hero headline (mobile) */
--text-6xl:  3.75rem;    /* 60px — hero display (desktop) */

/* Font weights */
--font-normal:   400;
--font-medium:   500;
--font-semibold: 600;
--font-bold:     700;

/* Line heights */
--leading-tight:  1.25;   /* headings */
--leading-snug:   1.375;  /* sub-headings */
--leading-normal: 1.5;    /* body text */
--leading-relaxed: 1.625; /* long-form prose */

/* Letter spacing */
--tracking-tight:  -0.025em;  /* large display headings */
--tracking-normal:  0em;
--tracking-wide:    0.05em;   /* eyebrow labels, tags (uppercase) */
--tracking-widest:  0.1em;    /* uppercase metadata */
```

---

### Spacing

Spacing follows the standard Tailwind 4-based 4px grid. Key named values:

```css
/* Page layout */
--page-max-width:      1200px;   /* maximum content width */
--page-padding-x:      1.5rem;   /* horizontal page padding — mobile */
--page-padding-x-md:   2rem;     /* horizontal page padding — tablet */
--page-padding-x-lg:   4rem;     /* horizontal page padding — desktop */

/* Vertical rhythm */
--section-gap:         6rem;     /* vertical space between page sections */
--section-gap-sm:      4rem;     /* reduced section gap on mobile */
--content-gap:         2rem;     /* vertical space between content blocks within a section */
--element-gap:         1rem;     /* space between sibling UI elements */
```

---

### Border Radius

```css
--radius-none:  0;
--radius-sm:    0.25rem;   /* 4px — tags, badges, tight UI */
--radius-base:  0.5rem;    /* 8px — inputs, small cards */
--radius-md:    0.75rem;   /* 12px — cards, panels */
--radius-lg:    1rem;      /* 16px — large cards, modals */
--radius-xl:    1.5rem;    /* 24px — hero panel */
--radius-full:  9999px;    /* pill shapes */
```

---

### Shadow Scale

The site uses a dark background. Shadows are used sparingly — mostly for raised surfaces and focus states.

```css
--shadow-sm:   0 1px 2px 0 rgba(0, 0, 0, 0.4);
--shadow-base: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
--shadow-md:   0 4px 16px 0 rgba(0, 0, 0, 0.6);
--shadow-lg:   0 8px 32px 0 rgba(0, 0, 0, 0.7);

/* Focus ring — used on interactive elements */
--shadow-focus: 0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-accent);
```

---

### Container Sizes

```css
--container-sm:   640px;    /* narrow content — Insight body, About text */
--container-md:   768px;    /* medium prose — Case Study body */
--container-lg:   1024px;   /* wide layout — Work grid, Insights grid */
--container-xl:   1200px;   /* max page width */
```

Content-heavy pages (Case Study body, Insight body, About prose) use `--container-md` for comfortable reading line lengths (~70–80 characters). Listing pages (Work, Insights) use `--container-lg` or `--container-xl`.

---

### Grid Rules

The site uses a 12-column grid at desktop, collapsing to single-column at mobile.

```
Mobile  (< 768px):  1 column, --page-padding-x gutters
Tablet  (768–1024px): 2 columns, --page-padding-x-md gutters
Desktop (> 1024px): 12 columns, --page-padding-x-lg gutters, 24px column gap
```

Common grid compositions:

| Layout | Columns |
|---|---|
| Full width | 12 / 12 |
| Case Study card grid | 4 / 12 each (3 per row) |
| Insights card grid | 4 / 12 each (3 per row) |
| Case Study body (prose) | 8 / 12 centered |
| About body | 8 / 12 centered |
| Hero (text + panel) | 6 / 12 + 6 / 12 |

---

### Layer Hierarchy (z-index)

```css
--z-base:    0;      /* default document flow */
--z-raised:  10;     /* cards on hover */
--z-sticky:  100;    /* sticky header */
--z-overlay: 200;    /* mobile nav overlay backdrop */
--z-drawer:  300;    /* mobile nav drawer */
--z-modal:   400;    /* modals (reserved; not in v1) */
--z-toast:   500;    /* toast notifications (reserved; not in v1) */
```

---

### Motion Tokens

```css
--duration-fast:   150ms;   /* micro-interactions: hover, focus */
--duration-base:   300ms;   /* UI transitions: panel open/close */
--duration-slow:   500ms;   /* page-level entrance animations */

--ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);   /* entrances */
--ease-in:     cubic-bezier(0.4, 0.0, 1.0, 1.0); /* exits */
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1.0); /* reposition */
```

**Principle: Motion communicates; it never decorates.** All animations degrade gracefully when `prefers-reduced-motion: reduce` is set.

---

### Breakpoints

Standard Tailwind breakpoints. Do not introduce custom breakpoints without documented rationale.

| Name | Min-width |
|---|---|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

---

## Component Catalog

Every expected component is listed here before implementation begins. This is the implementation contract for the component layer.

Components are grouped by their location in the project structure (see `ARCHITECTURE.md`). Components in `components/ui/` and `components/shared/` have no dependency on Prismic types. Components in `features/` receive typed Prismic data as props.

---

### Design System Primitives (`src/components/ui/`)

These are the atomic building blocks of the design system. They accept only plain typed props — no Prismic dependencies.

| Component | File | Description |
|---|---|---|
| `Button` | `Button.astro` | Primary, secondary, ghost variants; `size` prop (sm, base, lg); renders `<button>` or `<a>` based on `href` prop |
| `Tag` | `Tag.astro` | Pill label for tech tags and categories; small, dark surface, muted text |
| `Badge` | `Badge.astro` | Status indicator with color variants (default, accent, success, error) |
| `Link` | `Link.astro` | Styled anchor; underline-on-hover treatment; external link indicator |
| `Divider` | `Divider.astro` | Horizontal rule with optional centered text label |
| `Heading` | `Heading.astro` | Semantic heading (`h1`–`h4`) with consistent size and weight props; decouples visual size from semantic level |

---

### Shared Compositions (`src/components/shared/`)

Reusable across multiple features. Accept plain props or rich text data (PrismicRichText), but no full document types.

| Component | File | Description |
|---|---|---|
| `Container` | `Container.astro` | Max-width wrapper with horizontal padding; accepts `size` prop (sm, md, lg, xl) |
| `Section` | `Section.astro` | Vertical spacing wrapper for page sections; applies `--section-gap` |
| `Grid` | `Grid.astro` | 12-column CSS grid wrapper with responsive column props |
| `SectionHeader` | `SectionHeader.astro` | Eyebrow label + heading + optional description; used at the top of most page sections |
| `RichText` | `RichText.astro` | Renders Prismic rich text with styled typography for prose, links, lists, and headings |
| `CodeBlock` | `CodeBlock.astro` | Server-side syntax-highlighted code block; accepts `code` (string) and `language` props |
| `Callout` | `Callout.astro` | Highlighted aside or note box; accent-bordered; used in Insights body |
| `Metric` | `Metric.astro` | Single stat display: large value + label; used inside `results` slice renderer |
| `MetricsRow` | `MetricsRow.astro` | Horizontal row of 2–4 `Metric` components |
| `ImageBlock` | `ImageBlock.astro` | Prismic image with caption; handles responsive sizing and `alt` text |

---

### Layout (`src/components/layout/`)

| Component | File | Description |
|---|---|---|
| `Header` | `Header.astro` | Site header: logo + desktop nav + CTA; sources data from Navigation singleton |
| `Footer` | `Footer.astro` | Footer: tagline, nav links, social links, copyright |
| `BaseLayout` | `BaseLayout.astro` | Root HTML shell: `<head>` with SEO meta, fonts, global styles |
| `PageLayout` | `PageLayout.astro` | Wraps BaseLayout with Header and Footer; used by all pages |

---

### Islands (`src/islands/`)

React components requiring client-side hydration. Each must have a comment explaining why it is an island.

| Component | File | Justification |
|---|---|---|
| `MobileNav` | `MobileNav.tsx` | Toggle state and focus trap for mobile drawer nav — cannot be done with CSS alone |
| `HeroPanel` | `HeroPanel.tsx` | *(Phase 5)* Interactive architecture diagram — browser-only rendering and event handling |

---

### Feature: Home (`src/features/home/`)

| Component | File | Description |
|---|---|---|
| `Hero` | `Hero.astro` | Full-screen hero: headline, subheadline, CTA, static architecture panel placeholder |
| `HeroPanelPlaceholder` | `HeroPanelPlaceholder.astro` | Static visual placeholder for the interactive hero panel (Phase 5 replacement target) |
| `FeaturedWork` | `FeaturedWork.astro` | Section wrapper: eyebrow, heading, grid of featured Case Study cards, CTA link |
| `AboutSnippet` | `AboutSnippet.astro` | Short About preview paragraph with link |
| `InsightsPreview` | `InsightsPreview.astro` | Section: eyebrow, latest 2–3 Insight cards, CTA link |
| `HomeCTA` | `HomeCTA.astro` | Bottom-of-page CTA section: headline, body, button |

---

### Feature: Work (`src/features/work/`)

| Component | File | Description |
|---|---|---|
| `CaseStudyCard` | `CaseStudyCard.astro` | Case Study list card: cover image, title, company, outcome summary, tech tags |
| `WorkList` | `WorkList.astro` | Grid of `CaseStudyCard` components |

---

### Feature: Case Study (`src/features/case-study/`)

Slice renderers for the Case Study body. Each corresponds to a semantic slice in the Prismic model.

| Component | File | Description |
|---|---|---|
| `CaseStudyHeader` | `CaseStudyHeader.astro` | Hero section: title, company, role, timeline, tech tags, cover image |
| `ProblemSlice` | `ProblemSlice.astro` | Renders `problem` slice — rich text prose |
| `ArchitectureSlice` | `ArchitectureSlice.astro` | Renders `architecture` slice — prose + optional diagram + caption |
| `ImplementationSlice` | `ImplementationSlice.astro` | Renders `implementation` slice — prose + optional inline code |
| `ResultsSlice` | `ResultsSlice.astro` | Renders `results` slice — prose + metrics row |
| `ReflectionSlice` | `ReflectionSlice.astro` | Renders `reflection` slice — prose; visually distinguished as a coda |
| `ArchitectureDiagram` | `ArchitectureDiagram.astro` | Image component specialized for system diagrams: full-width, high-res, accessible |

---

### Feature: About (`src/features/about/`)

| Component | File | Description |
|---|---|---|
| `AboutHeader` | `AboutHeader.astro` | Profile image + lead paragraph |
| `Timeline` | `Timeline.astro` | Visual career narrative — vertical timeline component |

---

### Feature: Insights (`src/features/insights/`)

| Component | File | Description |
|---|---|---|
| `InsightCard` | `InsightCard.astro` | Insights list card: title, date, tags, excerpt |
| `InsightsList` | `InsightsList.astro` | Grid of `InsightCard` components |
| `InsightHeader` | `InsightHeader.astro` | Insight detail header: title, date, tags |

---

### Feature: Contact (`src/features/contact/`)

| Component | File | Description |
|---|---|---|
| `ContactInfo` | `ContactInfo.astro` | Renders contact intro, email, LinkedIn, GitHub, and optional scheduling link from Settings |

---

## Dark Mode

The site is dark-only. There is no light mode toggle. The dark aesthetic is intentional and consistent with the engineering positioning. See `DECISIONS.md` for the rationale.

---

## Accessibility

- Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text (WCAG AA)
- All interactive elements have visible focus rings using `--shadow-focus` (`:focus-visible` only — not `:focus`)
- No color as the sole carrier of meaning
- All images have descriptive `alt` text; decorative images use `alt=""`
- Semantic HTML is the default; ARIA attributes are used only when native semantics are insufficient
- `Heading.astro` enforces correct heading hierarchy — visual size is decoupled from semantic level

---

## Icon System

Icons are inline SVG, consumed as Astro components or via a sprite sheet. No icon font libraries. Source: Lucide icons (outline set). Icons used as standalone interactive elements must have an accessible label (`aria-label` or visually-hidden text).
