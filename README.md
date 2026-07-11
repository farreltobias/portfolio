# Farrel — Portfolio

Personal portfolio for Guilherme Farrel, Product Engineer.

**Live**: [portfolio.farrel.tech](https://portfolio.farrel.tech)

## Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 |
| Styling | Tailwind CSS 4 |
| CMS | Prismic (Type Builder) |
| Language | TypeScript (strict) |
| Deployment | Vercel |

## Commands

| Command | Action |
|---|---|
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | Run `astro check` + Biome lint |
| `pnpm format` | Format with Biome |
| `pnpm codegen` | Regenerate Prismic TypeScript types from the dashboard |

## Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```env
# Required — Prismic repository name
PRISMIC_ENVIRONMENT=

# Optional — required only if the Prismic repository is set to private
PRISMIC_ACCESS_TOKEN=

# Required for pnpm codegen — never exposed to client-side code
PRISMIC_CUSTOM_TYPES_API_TOKEN=
```

## CMS Workflow

Content models are managed in the [Prismic dashboard](https://prismic.io) Type Builder.

After any schema change:

1. Change the model in the Prismic dashboard
2. Save/publish the model
3. Run `pnpm codegen`
4. Commit the updated `src/prismicio/types.ts`
5. Update any affected queries or components
6. Run `pnpm check` and `pnpm build`

`src/prismicio/types.ts` is generated — do not edit it manually.

## Documentation

Full project documentation lives in `docs/`:

- `ARCHITECTURE.md` — stack, structure, data flow
- `DEPLOYMENT.md` — deployment workflow, Vercel config, content rebuild
- `CMS.md` — Prismic content model reference
- `ROADMAP.md` — phased implementation plan
- `DECISIONS.md` — architecture decision records
- `IMPLEMENTATION_GUIDE.md` — engineering conventions
- `DESIGN_SYSTEM.md` — design tokens and component rules
- `CONTENT_STRATEGY.md` — editorial guidelines
- `SEO.md` — SEO implementation notes
- `ENGINEERING_PRINCIPLES.md` — principles governing all decisions
