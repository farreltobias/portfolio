# PORT-010 - About Page

## Target

- About page content and presentation.

## Change

- Replace the current placeholder About page with a concise professional narrative that explains Farrel's background, working style, Product Engineer positioning, and career progression.
- Make the page complement the case studies instead of repeating the Home or functioning as a résumé.

## Constraints

- Use only verified information about Farrel's background, experience, projects, and working style.
- Do not invent employers, dates, years of experience, responsibilities, metrics, education, clients, or personal details.
- Keep the focus on information relevant to professional evaluation.
- Present Farrel as a Product Engineer who works across problem definition, product decisions, technical decisions, and implementation.
- Explain the backend and engineering depth without turning the page into a technology list.
- Show career progression from earlier client and implementation work toward broader Product Engineering ownership.
- Current Featured Work remains the primary evidence of capability; the About page provides context around that evidence.
- Earlier client work may be referenced as evidence of progression without overstating the complexity or role held at the time.
- Employment work subject to confidentiality must remain within appropriate disclosure boundaries.
- Avoid résumé-style responsibility lists.
- Avoid generic personality claims that are not supported by work or observable behavior.
- Do not duplicate project descriptions already available in case studies.
- English is the default language.
- Portuguese content will be handled separately under `/pt`.
- Use Impeccable for layout, hierarchy, responsive behavior, and presentation decisions introduced by this page.
- Keep implementation Astro-first.
- Add client-side JavaScript only when an interaction requires it.

## Content

The page should answer:

- Who is Farrel professionally?
- How does Farrel approach product and engineering problems?
- How did his work evolve toward Product Engineering?
- What kinds of problems and environments does he work well in?
- What distinguishes his approach from implementation-only engineering?
- What should a potential employer or client understand after reading the page that they would not learn from a single case study?

The narrative should communicate, where supported:

- Product Engineer as the current professional identity.
- Strong engineering and backend foundation.
- End-to-end ownership from understanding the problem through shipping the solution.
- Product and technical decisions evaluated through business and operational impact.
- Experience across client work, internal products, marketplace systems, operational tooling, automation, and personal products.
- Experience working remotely and with international teams.
- Progression from earlier web/client delivery toward increasingly complex product and operational systems.

## Structure

The final structure is a design decision, but the page should contain the minimum information necessary to cover:

- current positioning;
- professional progression;
- working approach;
- relevant breadth of experience;
- path to selected work or contact.

Do not add sections solely to match a conventional portfolio About template.

## Done

- `/about` contains real, verified professional content.
- The first section communicates Farrel's current Product Engineer identity clearly.
- The page explains Farrel's working approach without relying on a technology list.
- Career progression is understandable without becoming a chronological résumé.
- Earlier work and current work are represented proportionally.
- The page adds professional context not already provided by the Home or individual case studies.
- No unsupported years-of-experience claim is present.
- No fabricated personal, employment, client, or outcome information is present.
- At least one clear path to Work or Contact is available.
- Desktop and mobile presentation are intentional.
- The page uses the existing portfolio visual language unless a real design need justifies extending it.

## Check

- Verify every factual claim against confirmed Farrel information.
- Verify project descriptions are not unnecessarily repeated from case studies.
- Verify the page reads as professional context rather than a résumé.
- Verify current Product Engineering work has greater prominence than older junior work.
- Verify the page remains understandable without technology-stack lists.
- Verify links to Work and Contact resolve correctly.
- Review representative mobile and desktop widths.
- `pnpm check`
- `pnpm build`