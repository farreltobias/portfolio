# PORT-003 - Home Design

## Target

- Home page presentation.

## Change

- Turn the existing Home content into a polished portfolio surface that communicates Farrel's positioning quickly and
  makes selected work the primary evidence.

## Constraints

- Use Impeccable for design decisions.
- Preserve the product behavior and content defined by the current Home and canonical product docs.
- English remains the default language.
- Work and outcomes must remain more prominent than technology or résumé-style information.
- The interface must support visitors evaluating Farrel quickly from applications, referrals, outreach, or vendor
  comparison.
- Keep the implementation Astro-first.
- Add client-side JavaScript only when an interaction requires it.
- Reuse existing project structure before introducing new abstractions.
- Keep the visual system reusable for future Work, Case Study, About, and Contact surfaces.
- Avoid visual decisions that depend on fabricated project content, metrics, testimonials, or imagery.

## Done

- The Home has a clear visual hierarchy from positioning to evidence to contact.
- Hero presentation communicates Farrel and Product Engineer positioning without relying on technology lists.
- Selected work is visually established as the primary proof section.
- Supporting professional context is secondary to work evidence.
- Primary and secondary actions are visually distinguishable.
- Desktop and mobile layouts are intentionally designed.
- Typography, spacing, containers, colors, and component presentation form a coherent visual direction.
- Shared visual decisions introduced by the Home can be reused by future portfolio surfaces.
- Existing Home content remains accurate and is not materially rewritten for visual convenience.
- The page contains no unjustified decorative interaction or client-side JavaScript.

## Check

- Review the Home at representative mobile and desktop widths.
- Verify hierarchy remains clear without hover states.
- Verify all interactive elements are keyboard accessible.
- Verify layout works with current real content and does not depend on placeholder evidence.
- `pnpm check`
- `pnpm build`
