---
target: case-study layout (Pro Electric primary)
total_score: 23
max_score: 32
na_heuristics: 9,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/work/[id].astro"
target_fingerprint: "sha256:16031716f77dc27916a87d3c15450db4c8065220eb43d514dffa3ce80b8334d4"
target_path: /Users/farreltobias/www/portfolio/src/pages/work/[id].astro
timestamp: 2026-10-17T12-02-13Z
slug: src-pages-work-id-astro
closed: true
---
## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Sheet 004/005, Work current, plan statuses in words |
| 2 | Match System / Real World | 3 | Record fields clear; "bot-first MVP" and "operational notes" stay abstract |
| 3 | User Control and Freedom | 3 | Prev / All work / Next; no section index on long pages |
| 4 | Consistency and Standards | 3 | Case page has no notation key for magenta band / dot mask; narrative "Outcome" repeats strip |
| 5 | Error Prevention | 3 | Figure rules enforced; nothing bounds plan length |
| 6 | Recognition Rather Than Recall | 3 | Plan keyed; record-strip marks unkeyed on this page |
| 7 | Flexibility and Efficiency | 2 | No section anchors / jump to outcome |
| 8 | Aesthetic and Minimalist Design | 3 | Disciplined; Pro Electric repeats "not built" ~4× |
| 9 | Error Recovery | n/a | No error states |
| 10 | Help and Documentation | n/a | Static reading page |
| **Total** | | **23/32** | **Good (72%)** |

## Design Specificity Verdict
Specific; the plan drawing is the most distinctive element on the site. Narrative falls back to Problem/Approach/Solution/Outcome on 4 of 5 sheets. Detector: CLI clean; browser 2 false positives (cream-palette, repeating-stripes on hatch marks). No overflow at any width; sticky plan holds and releases cleanly at 1440/1280.

## Priority Issues
1. [P1] "Shipped — not yet measured" may overclaim for Pro Electric (deployment unverified) — confirm; add a "Built/In validation — not yet measured" state if needed.
2. [P1] Pro Electric not concrete enough to stand alone (what the business is, who uses the bot, channel, what a record holds, what Farrel built); "not built" repeated ~4×; ends on a disclaimer.
3. [P2] Case page doesn't key its own notation (magenta band, dot mask) — add a per-sheet one-line key under the record strip.
4. [P2] Empty right track at ≥1280 on sheets without a plan — let narrative span or place an aside.
5. [P3] Plan won't scale: 673px tall at 1280×800; long plans/short viewports push the key off-screen; span-60 rows can inflate gaps.

## Persona Red Flags
- Jordan: unkeyed magenta band / dot field on direct landing; jargon.
- Riley: DOM order plan-before-context vs visual order <1280; "Plan" title not a heading; hardcoded English strings despite /pt requirement.
- Casey: no narrative in first viewport; plan below fold; ~5,100px page, no section jumps.
- Engineering leader: Pro Electric could read as "recommended a chatbot" — no artefact, scope, or explicit build role.

## Minor Observations
- Context line styled by position (p:first-of-type) — use a class.
- Plan key lists all five kinds even if unused.
- HowdyShip's strip undersells its narrative numbers (0 referee actions).
- 768: strip cramped ("Shipped — not yet / measured").

## Questions to Consider
- Should more sheets carry a plan instead of Problem/Approach/Solution?
- Should Pro Electric's outcome be the decision not to build prematurely?
- Does the Sheet/Year/Role spec earn its prime position on every sheet?
