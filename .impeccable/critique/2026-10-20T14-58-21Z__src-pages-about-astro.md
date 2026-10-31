---
target: About page
total_score: 22
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/about.astro"
target_fingerprint: "sha256:2e969c0550fdb083d9514c9761291d4a10909ab1c38dd6143c447a7ea5bc83b9"
target_path: /Users/farreltobias/www/portfolio/src/pages/about.astro
timestamp: 2026-10-20T14-58-21Z
slug: src-pages-about-astro
closed: true
---
# Critique: About page (src/pages/about.astro)

Score 22/28 (79%, Good). Heuristics 7, 9 and 10 do not apply.

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 4 | About is marked current in the masthead; static page |
| 2 | Match with the real world | 3 | "Sheet 001" relies on the site's sheet idea; earlier scale segments have no labels |
| 3 | User control and freedom | 4 | Skip link, plain links, clean Tab order |
| 4 | Consistency and standards | 3 | Habit 4's reference looks like a sheet link but goes to /work |
| 5 | Error prevention | 3 | The bar's "now" is fixed at build time |
| 6 | Recognition rather than recall | 2 | The scale names no phase, and runs opposite to the rows |
| 7 | Flexibility and efficiency | n/a | Reading page |
| 8 | Aesthetic and minimalist design | 3 | "Product Engineer" three times in the first viewport |
| 9 | Error recovery | n/a | No error paths |
| 10 | Help and documentation | n/a | Portfolio page |

## Specificity
The middle of the page is specific to this site: habit rows cross-referenced to sheets. The opening (title plus bio, the same shape as other page heads) and the closing (copied from Home) are generic, and the earlier phases drift into résumé wording.

Detector: the markup scan is clean. about.css has 4 font-size advisories: 25px matches the index-row title, 28px is used in code but undocumented, and 22px on phones is the only new size. In the browser, the tiny-text flag (11px label) and two heading-rhythm flags (titles sit beside their text in grid rows) are false positives; the cream background and hatch flags are intentional.

## Priority issues
1. [P1] The scale bar has no segment labels, the current phase is the shortest segment, it reads opposite to the rows, screen readers hear only years, and at 390 the 2022 label is hidden. Fix: label segments, align its direction with the rows (or make it a vertical spine), add a text equivalent. Commands: clarify, adapt.
2. [P1] The first viewport repeats Home: "Product Engineer" three times, a paragraph restating Home's positioning. Fix: lead with the About-only thesis; drop or replace the Role row. Command: clarify.
3. [P2] Habit 4 has no evidence; its link reads like a placeholder. Fix: cite the ZRP API result (several seconds to ~500 ms), or make the reference plain text. Command: clarify.
4. [P2] The earlier phases read like a résumé (employer names, then technical areas). Fix: one sentence per phase on what changed in the decisions owned; move employers into the years column. Command: distill.
5. [P3] The closing is borrowed from Home and the right column is empty beside the phases at desktop. Fix: use the right column for the scale or metadata; give the closing an About-specific line. Command: layout.

## Persona red flags
- Evaluator: the first screen adds nothing new; the strongest habit has no proof; the 2022–25 paragraph reads like a CV; the scale needs decoding.
- Sam: the scale is announced as years only; sheet-link names run together ("Sheet 001Rare Candy"); the "Every sheet" link is vague.
- Casey: about 4.5 screens tall; the facts block repeats; the scale shows only 2021, 2023 and 2025.

## Minor
Sheet-link hover is weak (1px to 2px). The "from November 2020" caption is ambiguous next to a first tick of 2021. Earlier phases are long 13px mono paragraphs. The 22px phone size is undocumented.

## Questions
Should the scale become the page's spine? Should the h1 be the About-only thesis? Should progression come before the habits?
