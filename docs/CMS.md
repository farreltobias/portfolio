# CMS: Prismic

## Principles

- **Controlled flexibility**: Slices exist where content genuinely varies between documents. Fixed fields exist where structure is consistent.
- **No slice sprawl**: Avoid creating a new slice for every layout idea. A slice that is used once is a maintenance burden.
- **Editorial simplicity**: The CMS should be usable months after setup without reading documentation.
- **Type safety**: All Prismic types are generated via `prismic-ts-codegen`. Never use `any` for Prismic document types.
- **Semantic over generic**: Slice names describe what the content *is*, not how it looks. A `problem` slice is clearer than a `text_section` used for the problem.

---

## Custom Types

### Singleton Documents

These exist once per repository. They are accessed by type, not UID.

---

#### `home` — Home Page

The home page layout is fixed. Every section is always present. A Slice Zone is not appropriate here — it would imply editorial control over section ordering and presence, which is not the intention.

Fields are grouped by section for CMS clarity.

**Hero section**

| Field | Type | Notes |
|---|---|---|
| `hero_headline` | Title | Main hero heading |
| `hero_subheadline` | Rich Text | Supporting line under headline |
| `hero_cta_label` | Text | Primary CTA button label |
| `hero_cta_link` | Link | CTA destination |

**Featured Work section**

| Field | Type | Notes |
|---|---|---|
| `featured_work_eyebrow` | Text | Section eyebrow label |
| `featured_case_studies` | Group | Repeatable: Link to Case Study document (max 3) |
| `featured_work_cta_label` | Text | "View all work" link label |

**About Preview section**

| Field | Type | Notes |
|---|---|---|
| `about_snippet` | Rich Text | 2–3 sentences; links to full About page |
| `about_cta_label` | Text | Link label ("About me", "More about me") |

**Insights Preview section**

| Field | Type | Notes |
|---|---|---|
| `insights_eyebrow` | Text | Section eyebrow label |
| `insights_cta_label` | Text | "View all insights" link label |

**CTA section**

| Field | Type | Notes |
|---|---|---|
| `cta_headline` | Title | Call-to-action heading |
| `cta_body` | Rich Text | Supporting text |
| `cta_button_label` | Text | Button label |
| `cta_button_link` | Link | Button destination |

**SEO**

| Field | Type | Notes |
|---|---|---|
| `meta_description` | Text | SEO meta description for Home |
| `og_image` | Image | OG image override (fallback to Settings default) |

Slices: None. Home layout is fixed.

---

#### `about` — About Page

| Field | Type | Notes |
|---|---|---|
| `meta_description` | Text | SEO meta description |
| `og_image` | Image | OG image override |
| `profile_image` | Image | Professional photo |
| `lead` | Rich Text | Opening paragraph — who Farrel is and what he cares about |
| `engineering_philosophy` | Rich Text | How he thinks about building software |
| `background` | Rich Text | Career narrative — not a chronological resume |
| `beyond_work` | Rich Text | Humanizing section; kept short |

Slices: None. About layout is fixed.

---

#### `work` — Work Page

| Field | Type | Notes |
|---|---|---|
| `meta_description` | Text | SEO meta description |
| `og_image` | Image | OG image override |
| `intro` | Rich Text | Optional short intro above Case Study list |

Slices: None. Work page is driven by Case Study documents queried at build time.

---

#### `insights_page` — Insights Page

| Field | Type | Notes |
|---|---|---|
| `meta_description` | Text | SEO meta description |
| `og_image` | Image | OG image override |
| `intro` | Rich Text | Optional short intro above Insights list |

Slices: None. Insights page is driven by Insight documents queried at build time.

---

#### `contact` — Contact Page

| Field | Type | Notes |
|---|---|---|
| `hero_headline` | Title | Page headline |
| `hero_intro` | Rich Text | What Farrel is open to — roles, conversations, collaborations |
| `availability_intro` | Rich Text | Optional lead-in for the availability list |
| `availability_items` | Group | Repeatable: `label` (Text) — e.g. "Open to full-time roles" |
| `faq_items` | Group | Repeatable: `question` (Text) + `answer` (Rich Text) |
| `cta_headline` | Title | CTA section heading |
| `cta_body` | Rich Text | CTA supporting text |
| `cta_button_label` | Text | CTA button label |
| `meta_description` | Text | SEO meta description |
| `og_image` | Image | OG image override |

Slices: None. Contact layout is fixed.

Global contact links (email, LinkedIn, GitHub, scheduling URL) are sourced from the `settings` singleton and shared across the Contact page and footer.

---

#### `settings` — Global Settings

Site-wide configuration. Not a page. Responsible for SEO defaults, global social links, and footer content. Contact page content lives in the `contact` singleton. Navigation configuration lives in the `navigation` singleton.

| Field | Type | Notes |
|---|---|---|
| `site_name` | Text | Used in `<title>` suffix and OG tags |
| `site_description` | Text | Default meta description (fallback for all pages) |
| `og_image` | Image | Default OG/social share image (1200×630px) |
| `contact_email` | Text | Public contact email — used in footer and Contact page |
| `linkedin_url` | Link | LinkedIn profile URL |
| `github_url` | Link | GitHub profile URL |
| `scheduling_url` | Link | Optional: Calendly or equivalent |
| `footer_tagline` | Text | Short text displayed in the footer |

---

#### `navigation` — Navigation

Navigation configuration is a separate singleton from Settings. Settings handles global SEO and social links; Navigation handles routing and header/footer presentation.

| Field | Type | Notes |
|---|---|---|
| `logo_text` | Text | Text or wordmark used in the site header |
| `nav_links` | Group | Repeatable: `label` (Text) + `page` (Content Relationship) — ordered list of primary nav items |
| `nav_cta_label` | Text | Optional CTA button in the header (e.g. "Get in touch") |
| `nav_cta_link` | Link | Destination for header CTA — generic Link to support external URLs (e.g. Calendly) |

The `page` field inside `nav_links` is a Content Relationship restricted to: `home`, `work`, `about`, `insights_page`, `contact`. URLs resolve automatically through the route resolver — no hardcoded paths in the CMS. The `nav_cta_link` remains a generic Link because it may point to an external scheduling URL or any destination outside the primary page set.

---

### Reusable Documents

These have UIDs and can have multiple instances.

---

#### `case_study` — Case Study

**Fixed fields** (metadata, invariant across all case studies)

| Field | Type | Notes |
|---|---|---|
| `title` | Title | Case Study title |
| `uid` | UID | URL slug: `/work/[uid]` |
| `meta_description` | Text | SEO meta description |
| `og_image` | Image | OG image (fallback to Settings default) |
| `company` | Text | Company name or anonymized descriptor |
| `role` | Text | Farrel's role on the project |
| `timeline` | Text | e.g. "Q1–Q3 2023" |
| `tech_tags` | Group | Repeatable: `tag` (Text) |
| `outcome_summary` | Text | One-line outcome — shown on cards and Work list |
| `cover_image` | Image | Featured image for card and detail header |
| `is_featured` | Boolean | Include in Home page Featured Work section |
| `sort_order` | Number | Manual ordering for Work page list |

**Slices (body) — semantic sections**

Case Study slices are semantic, not generic. Each slice corresponds to a named section in the editorial structure. This ensures the CMS guides the editor toward the intended content shape, eliminates ambiguity about what a given `text_section` contains, and allows each section to receive a distinct visual treatment in the renderer.

| Slice | Field | Type | Notes |
|---|---|---|---|
| `problem` | `content` | Rich Text | What was the problem? What were the constraints? |
| `architecture` | `content` | Rich Text | System design, technical decisions, trade-offs |
| `architecture` | `diagram` | Image | Optional: system diagram or architecture map |
| `architecture` | `diagram_caption` | Text | Optional caption for diagram |
| `implementation` | `content` | Rich Text | How it was built; key engineering choices |
| `implementation` | `code_snippet` | Rich Text | Optional: inline code block within the section |
| `results` | `content` | Rich Text | What shipped; narrative context for metrics |
| `results` | `metrics` | Group | Repeatable: `label` (Text) + `value` (Text) — 2–4 stat callouts |
| `reflection` | `content` | Rich Text | Optional: what would be done differently |

**Why semantic slices for Case Studies**

The content structure of every Case Study is fixed: Problem → Architecture → Implementation → Results → Reflection. This is already mandated in `CONTENT_STRATEGY.md`. A generic `text_section` used five times in sequence provides no editorial guidance — the editor has no signal about what belongs where, and the renderer cannot distinguish sections.

Semantic slices make the structure legible in the CMS, enforce the editorial contract, and enable each section to render differently (e.g., `results` renders both prose and metric callouts; `architecture` renders an optional diagram). The trade-off is reduced flexibility — you cannot reorder sections — but this is precisely the constraint we want. The structure is not flexible by design.

---

#### `insight` — Insight

**Fixed fields**

| Field | Type | Notes |
|---|---|---|
| `title` | Title | Insight title |
| `uid` | UID | URL slug: `/insights/[uid]` |
| `meta_description` | Text | SEO meta description |
| `og_image` | Image | OG image (fallback to Settings default) |
| `published_date` | Date | Publication date |
| `tags` | Group | Repeatable: `tag` (Text) |
| `excerpt` | Text | 1–2 sentence summary shown on Insights list cards |

**Slices (body) — generic content blocks**

Insights are intentionally free-form. Unlike Case Studies, Insights do not have a mandatory structure — a 400-word engineering note should not be forced into `Introduction` / `DeepDive` / `Takeaways` sections that may not apply. Generic but semantically named slices give the editor flexibility while keeping naming clear.

| Slice | Purpose |
|---|---|
| `prose` | Rich text block — the primary content carrier |
| `code_block` | Code snippet with language label; highlighted server-side |
| `callout` | Highlighted aside, note, or warning |
| `image_block` | Single image with optional caption |

**Why generic slices for Insights**

Insights are short engineering notes (300–800 words). Imposing a rigid semantic structure would either force artificial section labels onto simple pieces or require multiple slice variations to accommodate different Insight shapes. The `prose` slice (renamed from `text_section` for clarity) is the workhorse; the others add specific formatting when needed. This is the right trade-off for free-form writing.

---

## Slice Design Rules

1. **Slices describe content, not layout.** Do not create a `two_column` or `full_width_image` slice. Slice names should reflect what the content *is*, not how it should appear.
2. **Fixed structure → fixed fields.** If every Case Study has a `timeline`, it is a fixed field. If every Case Study has a Problem section, it is a semantic slice. Fixed structure does not need Slice Zone flexibility.
3. **One slice per job.** If a slice is doing two conceptually different things, split it.
4. **Variations are for structural differences, not visual ones.** A slice variation is justified when the content structure differs — not just the visual treatment.

---

## Querying Patterns

```typescript
// src/prismicio/queries.ts

// Singleton pages
const home = await client.getSingle('home')
const settings = await client.getSingle('settings')
const navigation = await client.getSingle('navigation')

// All Case Studies, manually sorted
const caseStudies = await client.getAllByType('case_study', {
  orderings: [{ field: 'my.case_study.sort_order', direction: 'asc' }],
})

// Featured Case Studies for Home page
const featured = await client.getAllByType('case_study', {
  filters: [filter.at('my.case_study.is_featured', true)],
  orderings: [{ field: 'my.case_study.sort_order', direction: 'asc' }],
})

// Single Case Study by UID
const caseStudy = await client.getByUID('case_study', uid)

// All Insights, most recent first
const insights = await client.getAllByType('insight', {
  orderings: [{ field: 'my.insight.published_date', direction: 'desc' }],
})

// Single Insight by UID
const insight = await client.getByUID('insight', uid)
```

Settings and Navigation are fetched once in the layout and passed down as props. They are not fetched per-page.

Contact is fetched on the Contact page only — it is a singleton like the other page documents.

---

## Type Generation

After any schema change in Slice Machine or the Prismic dashboard:

```bash
pnpm codegen
```

Generated types live in `src/prismicio/types.ts`. Commit this file — it is the source of truth for Prismic document types in TypeScript. Do not edit it manually.

---

## Webhook Configuration

Prismic → Vercel deploy hook:

1. In Vercel: Project Settings → Git → Deploy Hooks → Create hook for `main` branch
2. In Prismic: Settings → Webhooks → Add the Vercel deploy hook URL
3. Trigger: "A document is published"

This ensures the site rebuilds on content publish without manual deploys.
