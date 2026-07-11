# Deployment

This project is deployed to Vercel as a fully static site. All pages are built at deploy time; content changes trigger a full rebuild via Prismic webhook.

---

## Prerequisites

- Node.js ≥ 22.12.0
- pnpm ≥ 9
- Vercel account and project connected to this repository
- Prismic repository configured with all Custom Types and Slices

---

## Environment Variables

Set these in Vercel: **Project → Settings → Environment Variables**.

| Variable | Required | Scope | Purpose |
|---|---|---|---|
| `PRISMIC_ENVIRONMENT` | Yes | Build + Runtime | Prismic repository name |
| `PRISMIC_ACCESS_TOKEN` | No | Build + Runtime | Required only if repository is set to private |
| `PRISMIC_CUSTOM_TYPES_API_TOKEN` | Codegen only | Local | Never set in Vercel; used locally to run `pnpm codegen` |

`PRISMIC_CUSTOM_TYPES_API_TOKEN` is a local developer credential — it must never be committed or set in Vercel. It is only needed to regenerate `src/prismicio/types.ts`.

---

## Local Build

```bash
# 1. Install dependencies
pnpm install

# 2. Regenerate Prismic types (requires PRISMIC_CUSTOM_TYPES_API_TOKEN in .env)
pnpm codegen

# 3. Type-check and lint
pnpm check

# 4. Build
pnpm build

# 5. Preview locally
pnpm preview
```

---

## Vercel Configuration

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `pnpm build` |
| Output directory | `.vercel/output` (set by adapter) |
| Install command | `pnpm install` |
| Node.js version | 22.x |

No custom build configuration is required. The `@astrojs/vercel` adapter handles the output format automatically.

---

## Deploy

Every push to `main` triggers an automatic deployment on Vercel.

Branch pushes and pull requests create preview deployments automatically.

---

## Content Rebuild Workflow (production)

When content is published in Prismic, the production site must be rebuilt to reflect changes.

**Intended production flow (configured in Phase 4):**

```
Prismic publish
    ↓
Vercel Deploy Hook (webhook trigger)
    ↓
Full static rebuild
    ↓
Updated production site
```

**Current state (Phase 1):** The Deploy Hook is not yet configured. Content changes require a manual redeploy — either by pushing to `main` or triggering a redeploy in the Vercel dashboard.

### Configuring the Deploy Hook (Phase 4 task)

1. In Vercel: **Project → Settings → Git → Deploy Hooks** → create a hook for the `main` branch
2. Copy the generated URL
3. In Prismic: **Settings → Webhooks** → add the Vercel hook URL
4. Set trigger to: "A document is published"

---

## Sitemap and robots.txt

The sitemap is generated automatically by `@astrojs/sitemap` at build time.

- Sitemap index: `/sitemap-index.xml`
- `robots.txt`: served from `public/robots.txt`, references the sitemap

Both are included in the static build output. No manual configuration required.

---

## Preview

The Prismic preview endpoint is implemented at `/api/preview`. It resolves a preview token and redirects to the target page. The endpoint is server-rendered via a Vercel Function (`prerender = false`).

**Current status**: Preview redirect is implemented and correct for published content. Draft-content rendering must be validated end-to-end during Phase 2 once real pages are built.

**Validation checklist (Phase 2):**

1. Publish a document in Prismic
2. Modify it without publishing
3. Open the Prismic preview from the dashboard
4. Confirm the unpublished content is rendered
5. Exit preview
6. Confirm the published version is shown again

---

## Manual Vercel Configuration Required

The following must be configured manually inside Vercel before launch:

| Task | When | Notes |
|---|---|---|
| Set `PRISMIC_ENVIRONMENT` | Before first deploy | Required for build |
| Set `PRISMIC_ACCESS_TOKEN` | If repo is private | Optional for public repos |
| Configure custom domain | Phase 4 | `portfolio.farrel.tech` → Vercel DNS |
| Create Deploy Hook | Phase 4 | Enables Prismic → Vercel rebuild |
| Enable Vercel Analytics | Phase 4 | Optional |
