---
name: Farrel — Portfolio
description: The measured plan behind the operation — a portfolio drawn as a set of record sheets.
colors:
  g0: "#f2f0ec"
  g1: "#dfddd8"
  g2: "#c8c7c3"
  g3: "#b5b4b1"
  g4: "#a09f9e"
  g5: "#8b8a89"
  g6: "#757474"
  g7: "#5d5d5e"
  g8: "#464648"
  g9: "#2e2e31"
  g10: "#15161a"
  dichroic-magenta: "#e6007e"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(34px, 11.03cqi, 82px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 70"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 72"
  figure:
    fontFamily: "Plex Mono, monospace"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Plex Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "-0.005em"
  field:
    fontFamily: "Plex Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "'tnum'"
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.16em"
  display-window:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(38px, 7vw, 72px)"
    fontWeight: 700
    lineHeight: 0.92
    fontVariation: "'wdth' 70"
  page-title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(44px, 4.8vw, 74px)"
    fontWeight: 700
    lineHeight: 0.92
    fontVariation: "'wdth' 70"
  case-title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(36px, 4vw, 62px)"
    fontWeight: 700
    lineHeight: 0.92
    fontVariation: "'wdth' 70"
  closing:
    fontFamily: "Archivo, sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: 0.96
    fontVariation: "'wdth' 72"
  closing-phone:
    fontFamily: "Archivo, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 0.96
    fontVariation: "'wdth' 72"
  title-row:
    fontFamily: "Archivo, sans-serif"
    fontSize: "25px"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 74"
  title-phone:
    fontFamily: "Archivo, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 72"
  minor-title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.15
    fontVariation: "'wdth' 72"
  figure-row:
    fontFamily: "Plex Mono, monospace"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  figure-strip:
    fontFamily: "Plex Mono, monospace"
    fontSize: "clamp(24px, 2.3vw, 30px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  narrative:
    fontFamily: "Plex Mono, monospace"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  control:
    fontFamily: "Archivo, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 82"
rounded:
  none: "0"
spacing:
  edge: "48px"
  edge-phone: "20px"
  band: "96px"
  band-phone: "64px"
  field-pad: "14px"
components:
  button-primary:
    backgroundColor: "{colors.g10}"
    textColor: "{colors.g0}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.g0}"
    textColor: "{colors.g10}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "58px"
  link-secondary:
    textColor: "{colors.g10}"
    typography: "{typography.control}"
    padding: "15px 0 13px"
  record-sheet:
    backgroundColor: "{colors.g0}"
    textColor: "{colors.g10}"
    rounded: "{rounded.none}"
    padding: "{spacing.field-pad}"
  sheet-hover:
    backgroundColor: "{colors.g1}"
  nav-link:
    textColor: "{colors.g10}"
    typography: "{typography.label}"
  figure-measured:
    textColor: "{colors.dichroic-magenta}"
    typography: "{typography.figure}"
---

# Design System: Farrel — Portfolio

## Overview

**Creative North Star: "The Measured Plan"**

The portfolio is drawn as the plan behind the work, not a brochure about it. Every page is a sheet in one drawing set: a bone field divided by hairlines, a masthead, a numbered record sheet per project, a register that lists them all, and a title block at the foot. Claims sit on a declared scale and carry a legend; what has not been recorded is shown as visibly empty rather than filled in.

The character is exact, quiet and evidential. Density is moderate and ruled: tight groups of label and value, generous separation between bands. There is one colour, and it is spent on one kind of fact. Everything else is the eleven-step ramp. Decoration that carries no value is refused; hatch is notation with a key, never texture.

**Key Characteristics:**
- A bone field ruled by near-black and soft hairlines; no cards, no radius, no gradients.
- One eleven-step ramp (0 field → X ink) as the only tonal vocabulary, named on the page by its key.
- A single Dichroic Magenta reserved for measured before → after figures and keyboard focus.
- Three type voices: condensed display caps, tracked label caps, tabular Plex Mono for every value and all prose.
- Hatch and dot masks as notation, always explained by the Notation key.
- The record sheet — Constraint, Decision, Outcome — as the unit of evidence on every surface.

## Colors

A monochrome ramp from bone paper to near-black with one saturated magenta held in reserve.

### Primary
- **Dichroic Magenta** (`dichroic-magenta`): the measured before → after figure (an `outcomeFigure` shown with its `outcomeMetric`, `outcomeKind: measured`), its 45° hatch band, the "Before → after, measured" legend swatch, and the 2px focus ring. Contrast on the field is 3.95:1, so it is only ever set large and semibold (24px or more).

### Neutral
- **Bone Field** (`g0`): the page and every sheet's ground. Step 0 of the ramp.
- **Lifted Bone** (`g1`): hover — a sheet or row steps one notch up the ramp. Also the background of inline code.
- **Soft Rule** (`g2`): hairlines between fields, rows and swatch borders.
- **Mid Steps** (`g3`–`g6`): present in the ramp key; `g6` is the scrollbar thumb only (4.0:1, never text).
- **Label Grey** (`g7`): field labels, metadata, notes (5.8:1 on the field).
- **Prose Ink** (`g9`): body and narrative prose.
- **Ink** (`g10`): headlines, values, hard rules, the primary control, selection background.

### Named Rules
**The One Ramp Rule.** Every tonal value on the page is a step of the ramp. A new grey that is not `g0`–`g10` is a defect; name the step it uses in the key.

**The One Job Rule.** Magenta marks a measured before → after and keyboard focus. A recorded change of state (`outcomeKind: change`) is set in Ink over an Ink hatch, so magenta always means a number was recorded. Never a link, a hover, a highlight, a selection or an accent.

## Typography

**Display Font:** Archivo (variable width and weight), self-hosted
**Body Font:** IBM Plex Mono 400 / 600, self-hosted
**Label Font:** Archivo at full width, tracked caps

**Character:** A tall condensed grotesk in caps states positions at plan scale; mono carries every quantity and every sentence, so the page reads as a working document rather than marketing copy.

### Hierarchy
- **Display** (700, width 70%, `clamp(34px, 11.03cqi, 82px)`, line-height 0.92, caps): the Home positioning line. Below 1280px it is sized on the window at `clamp(38px, 7vw, 72px)`. Page titles use the same voice at `clamp(44px, 4.8vw, 74px)`, and case-study titles, which are longer, one step down at `clamp(36px, 4vw, 62px)`.
- **Headline** (700, width 72%, 34px, line-height 1, caps): band titles ("Selected work", "Background"); 27px on phones.
- **Closing** (700, width 72%, 42px, line-height 0.96, caps): the closing question above "Let's talk"; 28px on phones.
- **Title** (700, width 72%, 27px, caps): project names on sheets; 25px in index rows and in About's habit and phase rows, where the current phase steps up to the Headline size (34px). On phones, row titles and case-study section headings are 24px and the current phase is 28px.
- **Minor title** (700, width 72%, 18px, line-height 1.15, caps, balanced wrap): titles inside the side drawings, i.e. plan moves, the structure's root and the case-study contents list. One step for one role.
- **Figure** (Plex Mono 600, 40px on the lead sheet, 30px in rows, 24px on phones, tracking -0.03em): the before → after figure: magenta when measured, Ink when it records a change of state.
- **Body** (Plex Mono 400, 14px / 15px in narratives, line-height 1.62–1.7, max 64ch): prose on cleared ground.
- **Field** (Plex Mono 400, 13px, tabular figures): the value a field carries.
- **Label** (Archivo 600, 11px, tracking 0.16em, caps, line-height 1.25): field names, nav, "Read case study".

### Named Rules
**The Readable Floor Rule.** Reading and labelling roles never drop below 11px; on phones every role steps up one (label 11, key 12, note 13, field 14, body 15).

**The Mono Is Data Rule.** Mono carries values, figures and prose — never a "technical" costume for headings.

## Layout

The sheet is a fixed composition at 1536px wide (`max-width: 1536px`) with a side edge of 48px (20px on phones). Above 1280px the field runs on three tracks — key column `11.181%`, centre `1fr`, right `33.125%` — and one unit (`--u`, 1px at 1536 shrinking to 0.83px) keeps the first viewport's proportions as the window narrows. Bands below the fold reuse the same tracks: zone label in the left track, body spanning centre and right. A band opens 24px under its Ink rule (20px on phones), with the zone label nudged 3px so its capitals align with the heading. Case-study section headings open 20px under theirs (16px on phones). The 14px field padding stays inside sheets, strips and spec blocks, so a band heading never sits tighter under its rule than the rows beneath it. Below 1280px the left track dissolves, and the zone labels (band and page alike) are hidden, because beside the heading they would only repeat it.

Below 1280px the columns dissolve into named grid areas: headline full width, then subline and CTA beside a 280px column (spec, or the key beside the record sheet). At 760px and below everything is one column in reading order — positioning, action, the lead sheet, the spec, then the notation just before the index — and the ramp column is hidden; its notation stays.

Rhythm: tight inside groups (label 6–8px above value; spec rows 9px), generous between bands (96px, 64px on phones), one hairline at the top of every band.

## Elevation & Depth

Flat by default. Depth is conveyed by rules and one material cue: a record sheet sits on the field with a stacked edge, as if one sheet lies on another.

### Shadow Vocabulary
- **Stacked edge** (`box-shadow: 0 0 0 1px rgb(21 22 26 / 7%), 14px 16px 0 -1px rgb(21 22 26 / 5.5%)`; `6px 7px` below 1280px): record sheets on Home and Contact. The sheet is inset by the shadow's reach so the edge lands on the masthead's right line.

### Named Rules
**The Paper Not Plastic Rule.** No blur shadows, glows or lifted cards. A sheet may tilt (-0.55°) only where field surrounds it; stacked layouts are squared.

## Shapes

Square everywhere (`rounded.none`). Form comes from 1px rules: ink for structure (band tops, sheet borders, strip edges), Soft Rule for divisions inside a group. Swatches, chips and marks are rectangles; the constraint mark is a 26px square of crossed hatch.

## Components

### Buttons
- **Primary control:** a solid ink bar (58px tall, `0 30px` padding, control type) closed by an 84px hatched chip with a 1px ink border. Used for the one action a page exists for ("Let's talk").
- **Hover / Focus:** the bar empties to an ink outline and the chip inks solid — the pair swaps state rather than glowing; focus adds the 2px magenta ring at 3px offset.
- **Secondary link:** control lettering on a 1px ink underline, with a mono count beside it ("See all work · 6 projects"; every link to Work uses this one label); the rule thickens to 2px on hover. 44px tall.

### Record sheet
- **Structure:** bordered sheet on the field with the stacked edge; corner shows "Sheet 00N / 00T"; title; Constraint (crossed-hatch mark + value), Decision, Outcome; foot with "Read case study" and year.
- **Outcome states:** a measured before → after figure in magenta over a 13px magenta hatch band; a changed before → after in Ink over an Ink hatch at the same scale (both only with a metric). Because colour is not spoken, each figure carries a visually hidden reading in words: "Measured: before about 4 per day, after 1 to 2 per week", or "Recorded change: before …, after …"; qualitative sentence in ink; "Shipped — not yet measured" or, for a project whose `stage` is `in-progress`, "In progress — not yet measured", with a dot mask at full strength.
- **Interaction:** the whole sheet is the link target; hover steps the ground to Lifted Bone; keyboard focus outlines the whole sheet in magenta.

### Index row
The register's line: number · title, year, "Read case study" · Constraint and Decision · Outcome, on tracks `52px 236px 1fr 300px`. Same three fields and states as the record sheet; stacks to one column on phones. The title cell keeps a 24px gutter before the Constraint column, so a long title wraps a word earlier instead of meeting the next field.

### Spec block
Label/value rows ruled in Soft Rule under an ink top rule (Role, Status, Location; Year, Role on case studies, whose sheet number lives in the zone label and the title block).

### Navigation
Masthead: condensed wordmark (28px caps) over a tracked "Product Engineer" label; nav links in label type with a hairline that draws under the word on hover and stays drawn on the current page (`aria-current`). Targets, the wordmark back to Home included, are 44px tall up to 1279px and on touch. At 480px and below the nav takes its own row under the wordmark, so the role label never reads as a fourth link.

### Notation key and ramp key
The ramp key lists the eleven steps (X → 0) with the role each used step plays (Ink, Prose, Labels, Rules, Hover, Field). The Notation key binds marks to meaning: crossed hatch = Constraint, magenta 45° hatch = Before → after, measured; Ink 45° hatch = Before → after, changed; dot mask = Not yet measured.

### Plan
The case study's game plan, from an optional typed `plan` list (at most six moves) in a project's frontmatter: moves read top to bottom, each with a mark — crossed hatch = constraint, filled ink square = built, half-inked square = in progress, dashed square = planned, dashed diamond = decision, faint dashed square = possible — a condensed-caps title, and a mono note led by its status in words ("In progress · …"). The connector into a move is solid only when that move is built; everything else, in-progress included, is dashed, with a small arrowhead into each move. The key lists only the marks the plan uses. Desktop: its own column beside the notes, sticky (with its compact Contents) only on screens at least 900px tall. Narrower: a band in the reading flow after the first section, so the reader meets the problem before the drawing (CSS order only). With a single section, it closes the notes.

### Sheet key and contents
Every case study keys its own marks in one line under the record strip (crossed hatch = Constraint, plus "Before → after, measured", "Before → after, changed" or "Not yet measured" when the strip draws them), so a visitor arriving from a link never meets an unexplained mark. On desktop, a sheet without a plan uses the right column for a sticky Contents list of its sections (condensed caps, Soft Rule dividers). A sheet whose right column holds a plan or structure lists its sections under the drawing as compact Contents: quiet Plex Mono links at field size under a Soft Rule, so the drawing stays the subject. The drawing and that list stick together as one stack on screens at least 900px tall; the tallest current stack (Pro Electric) ends at 866px. Below 1280px, every case study with more than two sections lists them after the sheet key, at most 420px wide with 44px rows, and a "Contents ↑" secondary link closes each section (added to the rendered notes at build time), so a long case can be crossed on a phone in both directions. The Contents heading lands 32px from the top, like the sections. The sheet number is stated in the left zone label and the title block, not in the spec block (Year, Role).

### Plates
Optional screenshots of delivered work, from a typed `plates` list (at most four; image, caption, `desktop` or `mobile` view) whose files live in `src/assets/projects/<id>/` with embedded provenance. They are used only where the screens are the evidence. The plates sit in a band after the record strip. Each plate has a title block ("Plate 01" in ink, view and capture width in faint mono), a hairline-framed image that keeps the project's own colours, a mono caption and crop marks. On desktop the plates share one row and grow by aspect ratio, so every image has the same height. On tablet the desktop plates stack, with a phone plate beside them at 220px. On phones everything stacks and the phone plate is 62% wide. An optional `platesSource` URL adds the line "Captured from the reference copy at …".

### Structure
An optional `structure` (one root, at most eight branches, each with optional note and items) draws the delivered work's information architecture as a site plan. The root is a filled ink square with a condensed-caps title. Branches hang from one solid ink trunk that stops at the last branch, because only built work is solid. Each branch has an Archivo title, and its items run inline in faint mono separated by middots. A figcaption names what the drawing is. The right column goes to the plan first, then structure, then contents. The structure takes the plan's placement and stickiness rules, including its place after the first section on narrower screens.

### Crop marks
Short 9px hairline strokes in Ink Faint at each corner, 8px outside the edge of the home record sheet, the contact sheet and every plate, drawn by a single non-interactive pseudo-element. They are marginal: never behind text, never on bands or the field.

### Career spine
On About, a spine runs down the left of the phase rows, newest at the top. Rows keep their natural height; the spine is not drawn to one scale.
- **Bars:** each phase is a 13px Ink-outlined bar from its row's top rule down to 10px above the next, so the phases read as separate segments on one axis.
- **Current phase:** filled with Ink and open at the top, with the axis carried on above it as a dashed line, the way a plan draws work still under way.
- **Year ticks:** a hairline tick crosses each bar where a year begins, placed in proportion within that phase. Its year sits on the left of the axis in faint mono, like a scale's numbers, so it never reads as a second date beside the phase's own years. On phones the labels drop and the ticks stay, still marking where each year begins.
- **Key:** one line above the rows: "Newest at the top. Each bar spans one phase, with a tick where each year begins. Filled: Product Engineering, still under way."
- **Phones:** the spine becomes a 24px rail with the rows indented beside it, and the year labels drop.
- **Assistive technology:** the spine is hidden from it, because each row states its years in text.

### Habit rows
On About, each working habit is a ruled row like the index row: a condensed-caps title, a mono sentence, and one reference to its strongest evidence. A sheet reference is drawn as a sheet link ("Sheet 001" in tracked caps over the project title, with a hairline underneath). Evidence with no sheet (e.g. "At ZRP") uses the same lettering without the hairline, because there is nothing to open. References point to the work and never retell it. Desktop has three columns, tablet two, phones one.

### Title block
At the foot of every page there is a boxed 2 × 2 block, set at the bottom-right like a drawing's title block and up to 460px wide (full width on phones). Its cells are Drawing ("Farrel — Product Engineer"), Sheet (the page name, or "002 / 006" on a case study), Revised (the build date) and Language. It has an Ink outer border with Soft Rule dividers, and each cell is a label over a mono field value. It sits 56px under whatever closes the page (44px on phones). It deliberately differs from the full-width strip of contact paths, so the two never read as duplicates.

### Not-found sheet
The 404 page is a sheet outside the set. It has the masthead with no current page (the wordmark links Home), the zone label "Not found", the page title "Sheet not in this set." (tab title "Not found — Farrel"), one line saying the link isn't part of the portfolio or has moved, two secondary links (See all work with its count, Contact), and the title block with Sheet "404". It is marked `noindex`.

### Title separator
A project title separates client and project with a slash ("Rare Candy / Auction Platform"), the way a drawing reference reads. `displayTitle` keeps a non-breaking space before it, so a wrapped title never starts a line with "/". The em dash is kept for labels ("Outcome — …", "In progress — not yet measured") and page titles ("Work — Farrel").

### Site icon and page titles
The site icon is the wordmark's own uppercase F: Archivo 700 at 70% width, traced from `public/fonts/archivo-var-latin.woff2` into outlined rectangles by `scripts/icons.cjs`, bone on an ink square, with no rounding, frame or magenta. A hand-snapped 16px master keeps it crisp in tabs. The files in `public/` are `favicon.svg`, `favicon.ico` (16 and 32), `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png` and `manifest.webmanifest`. The PNGs carry embedded provenance. `Meta.astro` links them on every page, the 404 included, with `apple-mobile-web-app-title` "Farrel" and `theme-color` bone. Page titles put the specific word first, then "— Farrel" ("Work — Farrel", "Rare Candy / Auction Platform — Farrel"). Home is "Farrel — Product Engineer", and its link preview leads with the positioning line instead. The 404's tab title is the plain "Not found — Farrel"; the page keeps its in-world heading.

### Register count and link previews
The Work register's count line names every sheet's outcome state, computed from the data: "6 projects · 1 measured · 2 changed · 2 stated · 1 in progress". "Stated" is a result given as a sentence in ink, with no mark. States with no sheets are left out, and each item is kept whole so a narrow line breaks only between items. Every page except the 404 declares its canonical address on `portfolio.farrel.tech` and one fixed link-preview card (`public/og.png`, 1200 × 630, provenance embedded). The card is drawn as a sheet: an ink frame with crop marks, the ramp, the Home positioning line and a title block.

### Contact strip
Contact paths as one ruled strip: four cells on desktop (three inside the contact sheet), 2 × 2 on tablet, stacked on phones; label over value, the whole cell a link; external links open in a new tab and say so to assistive technology with a visually hidden "(opens in a new tab)", as every new-tab link on the site does.

## Motion
A plan drawing does not bounce. Motion is mechanical: things ink in, rules draw, the ground steps one notch.
- **Between pages:** cross-document view transitions (`@view-transition { navigation: auto; }`), with no JavaScript.
  - The masthead holds still. It sits on the bone ground, so laid over a page that had scrolled it out of view, it lands as a clean band. Its current-page hairline is a real element (`view-transition-name: nav-rule`, `view-transition-group: nearest`) that glides from the old section's word to the new one at the sheet's pace, and holds still when the page moves within one section, even from a scrolled page. On phones it is inset to sit under the word, not the padded target.
  - The old sheet lifts away (opacity, 140ms linear), and the next is laid down from the top edge (clip-path, 340ms, `cubic-bezier(0.2, 0, 0, 1)`).
  - Between neighbouring case studies, the project titles carry across: the clicked previous/next title rises into the heading (`view-transition-name: sheet-<id>` on the case heading and the previous/next links only, class `sheet-title`). Home and Work rows carry no names, so going to a case study never sets other titles flying. The old title image leaves in 80ms, so the crisp new text carries the move.
  - An element with nothing to pair with on the old page (a masthead scrolled out of view, a title arriving from Home) is laid down with the sheet instead of popping in. The new title image is never faded in, so crisp ink glides over the departing image.
  - Browsers without support simply load the page.
- **On arrival, once:**
  - The Home ramp key inks in from its base.
  - A plan's solid connectors draw downward (360ms each, 90ms apart; dashed ones stay still).
  - About's current-phase bar inks down from its open top (520ms).
  - A measured figure's magenta band draws in from the left (560ms). A change of state, in ink, stays still.
  - A structure drawing's trunk runs down to each branch in turn, and each branch's tick reaches out to it (70ms apart).
- **State:** controls swap fill, rows step to Lifted Bone, and nav and link hairlines draw. 120–160ms, linear or `cubic-bezier(0.2, 0, 0.1, 1)`.
- **Reduced motion:** page changes become a 120ms fade with no movement (no clip, no glide, no lay-down of unpaired elements; the old title image is hidden rather than squeezed), and every arrival draw is off.
- **Never:** scroll reveals, section entrances, parallax, or bounce or elastic curves.

## Do's and Don'ts

### Do:
- **Do** take every tone from the ramp and name new uses in the ramp key.
- **Do** show missing evidence as the dot mask and "Shipped — not yet measured".
- **Do** render a before → after figure only when both `outcomeFigure` and `outcomeMetric` exist, and keep figures ≤32 characters with an arrow.
- **Do** keep labels and values at the readable floor (11px; one step up on phones) and touch targets at 44px.
- **Do** reuse the record sheet, index row, spec block and strip before inventing a container.
- **Do** draw anything not yet built as dashed in a plan; solid is reserved for moves that exist.

### Don't:
- **Don't** spend Dichroic Magenta on links, hovers, highlights, selection or decoration.
- **Don't** use rounded corners, cards, gradients, glass or blur shadows; raster images appear only as plates of delivered screens, each with provenance.
- **Don't** lay grids, blueprints or rulers under text as background; the drawing-set language lives in components (plan, structure, crop marks).
- **Don't** use hatch as texture; every hatch must appear in the Notation key.
- **Don't** add self-scored metrics (the former complexity gauge) or any figure that was not recorded.
- **Don't** set magenta text below 24px.
