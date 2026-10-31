---
target: case-study layout (Customer Success primary)
total_score: 25
max_score: 32
na_heuristics: 9,10
p0_count: 0
p1_count: 1
target_identity: "file:/Users/farreltobias/www/portfolio/src/pages/work/[id].astro"
target_fingerprint: "sha256:6f82108cd52dea00b6a03504b901d5a4390ac393c3db234a11741a5974ba5837"
target_path: /Users/farreltobias/www/portfolio/src/pages/work/[id].astro
timestamp: 2026-10-18T01-03-02Z
slug: src-pages-work-id-astro
closed: true
---
## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | No current-section state in Contents (no JS by design) |
| 2 | Match System / Real World | 3 | Strip label "Support requests" unscoped |
| 3 | User Control and Freedom | 3 | No section index below 1280 or on short laptops |
| 4 | Consistency and Standards | 3 | Narrative structure varies; h2 rule wider than measure |
| 5 | Error Prevention | 3 | Figure rules enforced; plan cap only in schema |
| 6 | Recognition Rather Than Recall | 4 | Every sheet keys its own marks |
| 7 | Flexibility and Efficiency | 3 | Contents on desktop only; not sticky under 820px tall |
| 8 | Aesthetic and Minimalist Design | 3 | Pro Electric repeats its stage ~6×; CS minor repeats |
| 9 | Error Recovery | n/a | No error states |
| 10 | Help and Documentation | n/a | Reading page |
| **Total** | | **25/32** | **Good (78%)** |

## Design Specificity Verdict
Specific; strip + per-sheet key + plan read as a drawing-set sheet. CS narrative headings now make claims; other sheets still Problem/Approach/Solution/Outcome. Detector: CLI clean; browser cream/stripes (false positives) + all-caps/tight-leading on 2-line Contents links (borderline). No overflow anywhere; all Contents anchors resolve.

## Priority Issues
1. [P1] Headline metric unscoped where read: strip label "Outcome — Support requests" implies all support; scope only in last section. Rename outcomeMetric (e.g. "CS requests to engineering").
2. [P2] Safety reasoning thin; bullets 1 and 3 overlap; no concrete safeguard or metric source/window (needs verified facts).
3. [P2] Contents not sticky on short desktops (shares plan's 820px gate though only ~300px tall) — give toc its own lower gate.
4. [P2] Title breaks before em dash at 768/390 ("RARE CANDY / — CUSTOMER") — no-break space before the dash, or client label + project title.
5. [P3] 768 strip cramped; 30px figure wraps at 1280/1024 — scale delta or restack strip 761–1023.

## Persona Red Flags
- Jordan: "Support requests" for whom?
- Riley: plan-before-context DOM order <1280; English-only strings.
- Casey: ~4,000–5,200px pages, no section jumps on mobile; spec block pushes figure to fold edge.
- Engineering leader: no scale, safeguards or metric provenance.

## Minor Observations
- complexity field dead data; "several times a day" + "roughly four per day" redundant; "still go to engineering" present tense → "went"; context line styled by position; order change puts CS → Pro Electric (measured → unmeasured).

## Questions to Consider
- Should the outcome cell carry its scope as a second line?
- Should the spec spot hold client/team/scope instead of Sheet/Year/Role?
- Is measured → unmeasured sequencing deliberate?
