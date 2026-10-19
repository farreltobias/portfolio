# PORT-006 - Rare Candy Customer Success Case Study

## Target

- Rare Candy Customer Success Platform case study.

## Change

- Turn the current project summary into a complete case study showing how internal product tooling reduced recurring engineering dependency and increased Customer Success autonomy.

## Constraints

- Use only verified information from the actual Rare Candy work.
- Preserve confidentiality boundaries for internal company systems.
- Do not expose private implementation details, customer data, credentials, internal URLs, or sensitive business information.
- The central problem is recurring operational work that depended on engineering intervention.
- The central product decision is moving repeatable workflows into safe internal tooling.
- The verified outcome is a reduction in related engineering support demand from roughly 4 requests per day to 1–2 per week.
- Keep `constraint`, `decision`, `outcome`, `outcomeMetric`, and `outcomeFigure` concise enough for Selected Work.
- `outcomeFigure` must express a verified before → after transformation.
- Detailed reasoning belongs in the Markdown body.
- Do not fabricate adoption, time savings, financial impact, testimonials, or additional metrics.
- Use the existing case-study presentation unless the content exposes a real design limitation.

## Content

The case study must make these ideas clear:

- Customer Success repeatedly needed engineering help for predictable operational actions.
- Those requests interrupted engineering and introduced unnecessary dependency.
- Not every operational action required engineering judgment.
- The product opportunity was to safely expose repeatable actions to Customer Success.
- Internal tooling changed the relationship between Customer Success and engineering rather than merely automating isolated tickets.
- The outcome represents reduced engineering demand and increased operational autonomy.

## Done

- The case clearly explains the operational dependency that existed before the tooling.
- Farrel's product and engineering role is understandable.
- The decision to productize repeatable workflows is explicit.
- The case explains how constraints and safety were considered when giving another team more autonomy.
- The verified before → after support metric is presented accurately.
- The case communicates organizational impact without exaggerating it.
- No confidential or unverified information is exposed.
- The Selected Work metadata remains concise.

## Check

- Verify the support metric is stated as approximately `~4/day → 1–2/week`.
- Verify no unrelated engineering support is implied to have disappeared.
- Verify no confidential Rare Candy information is exposed.
- Verify the case distinguishes product reasoning from implementation detail.
- `pnpm check`
- `pnpm build`