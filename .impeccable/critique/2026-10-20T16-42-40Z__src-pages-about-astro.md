---
target: About page
total_score: 21
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/about.astro"
target_fingerprint: "sha256:fccbcb640077246c70c21f58d00c3ad07b3605451bf25efb0785f47b56621651"
target_path: /Users/farreltobias/www/portfolio/src/pages/about.astro
timestamp: 2026-10-20T16-42-40Z
slug: src-pages-about-astro
closed: true
---
# Critique: About page (src/pages/about.astro), run 2

Score 21/28 (75%, Good). Heuristics 7, 9 and 10 do not apply.

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | No "now" marker at the top of the filled bar |
| 2 | Match with the real world | 3 | "Every sheet: Outcome, or 'not yet measured'" is site-internal jargon |
| 3 | User control and freedom | 3 | Skip link, navigation, two exits |
| 4 | Consistency and standards | 3 | Phase titles use three grammars; links in phase text are styled unlike the sheet links |
| 5 | Error prevention | 3 | The habits note is untrue for habit 4 |
| 6 | Recognition rather than recall | 3 | Howdy and HowdyShip are easy to confuse |
| 7 | Flexibility and efficiency | n/a | Single reading path |
| 8 | Aesthetic and minimalist design | 3 | Empty space in phase rows; year ranges shown twice |
| 9 | Error recovery | n/a | No inputs |
| 10 | Help and documentation | n/a | Static page |

## Specificity
The page is authored for this site: cover-sheet idea, habits cross-referenced to sheets, the career drawn to scale, and an About-only headline. It falls short where the timeline claims a scale the layout doesn't keep, and where the footer is copied from Home.

Detector: the markup scan is clean. about.css has 4 advisory font-size notes (24, 25 and 28px), all sizes already used elsewhere, so the gap is in DESIGN.md. In the browser, tiny-text flags the 11px timeline key sentence (at the documented floor); the heading-rhythm flags are false positives; the background and hatch flags are intentional.

## Priority issues
1. [P1] The timeline says "to scale", but row height follows the text, gaps between bars mean nothing, the real 2022 gap isn't shown, the current bar looks smaller, phones show no labels, and years appear twice. Fix: either a continuous time axis with bars at real positions and "now" at the top, or drop the scale and show duration as bars in the years column; show years once; label the bars on phones. Commands: layout, adapt.
2. [P1] The page ends on the junior phase and a footer copied from Home; availability is stated three times. Fix: close the progression back in the present; give About its own closing; state availability once. Command: clarify.
3. [P2] Phase text reads like a résumé in sentences (nine items in the current phase, employers plus technical areas in 2022–25) and repeats Home's Background. Fix: one shift per phase, no lists. Command: distill.
4. [P2] The habits partly restate Home's cards and walk the sheets in index order; "ticket" appears twice on one screen; the note is untrue for habit 4. Fix: word each habit as a cross-project principle, keep one strongest reference each, give habit 4 evidence (the ZRP result) or reword the note. Command: clarify.
5. [P3] Phase titles use different grammars, and the 150px years column wastes space. Fix: parallel titles; narrow or fold the years column. Command: typeset.

## Persona red flags
- Evaluator: the progression reads as companies plus a technology list; the ZRP phase has no evidence.
- Sam: the "Every sheet" link name is clumsy; links inside phase paragraphs are 19px tall with no hover change.
- Casey: about 3,900px tall; the timeline is unlabeled at 390.

## Minor
The "2025" tick reads as a phase boundary. The timeline's line uses fixed offsets tied to row padding. A 13 vs 14px body step is too small to read as a ranking. The right column is empty at 1440.

## Questions
Should the space between phases be time? Should the section end back in the present? One reference per habit instead of covering every sheet?
