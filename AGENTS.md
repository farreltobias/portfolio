## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Prismic CMS

Content models are managed in the Prismic dashboard Type Builder — **not** via local files or Slice Machine.

### Schema change workflow

1. Change the model in the Prismic dashboard
2. Save/publish the model
3. Run `pnpm codegen`
4. Review the diff in `src/prismicio/types.ts`
5. Update any affected queries or components
6. Run `pnpm check`
7. Run `pnpm build`

`src/prismicio/types.ts` is generated — never edit it manually.

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `PRISMIC_ENVIRONMENT` | Yes | Prismic repository name — runtime and codegen |
| `PRISMIC_ACCESS_TOKEN` | No | Required only if repository is private |
| `PRISMIC_CUSTOM_TYPES_API_TOKEN` | Codegen only | Needed to run `pnpm codegen` |

### Featured Case Studies

The authoritative source for featured case studies on the Home page is `home.featured_case_studies` — a Group of Content Relationship fields managed in the Prismic dashboard. There is no `is_featured` query; do not reintroduce it.

`case_study.sort_order` is used only for ordering the Work index page (`getCaseStudies`).

### Queries

All Prismic queries are in `src/prismicio/queries.ts`. Do not write inline client calls in page files.

### Preview

The preview endpoint (`/api/preview`) redirects to the correct page URL. Whether unpublished draft content renders depends on the page rendering strategy — this must be validated during Phase 2.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
