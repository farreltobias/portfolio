---
target: About page
total_score: 21
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 1
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/about.astro"
target_fingerprint: "sha256:1ce75e866db461d80277045f0916b67ddd7592674d7113ab40954c8e2e216132"
target_path: /Users/farreltobias/www/portfolio/src/pages/about.astro
timestamp: 2026-10-27T12-17-13Z
slug: src-pages-about-astro
---
# Critique: About page (src/pages/about.astro), run 3

Score 21/28 (75%, Good). Heuristics 7, 9 and 10 do not apply. Owner direction: Farrel prefers the vertical sidebar timeline over the horizontal duration bars.

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | About marked current; clear sections |
| 2 | Match with the real world | 3 | Rare Candy / Howdy / Farrel.tech relationship unclear |
| 3 | User control and freedom | 3 | Skip link, navigation, two exits |
| 4 | Consistency and standards | 3 | Bars have no shared axis; section labels drift on tablet and phone |
| 5 | Error prevention | 3 | References generated from data; a missing project drops silently |
| 6 | Recognition rather than recall | 3 | Bar key comes after the rows |
| 7 | Flexibility and efficiency | n/a | Reading page |
| 8 | Aesthetic and minimalist design | 3 | Key, "Today…" line and link stacked at the end of progression |
| 9 | Error recovery | n/a | No inputs |
| 10 | Help and documentation | n/a | Portfolio page |

## Specificity
Belongs to this site. The weak spot is the duration bars, which read as decoration. Detector: markup clean; 4 font-size advisories, all for sizes DESIGN.md documents (the detector reads only the main size per entry); the background and hatch flags are intentional.

## Priority issues
1. [P1] Bring back the vertical sidebar timeline, drawn honestly: one continuous axis from Nov 2020 to now, newest at top, fixed height per year, outlined segments with the current one filled, the 2022 gap shown, labeled year ticks, a leader line from each segment to its row title, the key at the top; on phones a thin left rail with start years. Commands: layout, adapt.
2. [P2] The end of progression is cluttered: the key line, the "Today that is two kinds of work" line (which repeats the current phase) and the link. Fix: key into the timeline head, fold the sentence into the current phase, end on "See the work". Command: distill (copy change needs approval).
3. [P2] Section labels act as eyebrows below 1280px ("PROFILE" hides, the others move right of the heading). Site-wide pattern inherited from Home. Fix: hide below 1280px everywhere, or keep them consistently in the flow. Command: adapt.
4. [P3] The current-phase sentence crowds Rare Candy, Howdy and Farrel.tech together. Fix: two sentences (Rare Candy through Howdy; Farrel.tech), verified facts only. Command: clarify.

## Persona red flags
- Evaluator: can't read tenure from the bars; Howdy is ambiguous; the ZRP result is understated.
- Sam: no blockers; a restored timeline must stay aria-hidden.
- Casey: about 3,470px tall; bars become stubs on phones.

## Minor
Ragged sheet-link underlines; empty right column at 1440; current bar length set at build time; sheets 003 and 005 not referenced by number.

## Questions
Draw the current segment open or dashed? Show the 2022 gap or use whole years? Give the measured result more weight?
