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
- A single Dichroic Magenta reserved for before → after figures and keyboard focus.
- Three type voices: condensed display caps, tracked label caps, tabular Plex Mono for every value and all prose.
- Hatch and dot masks as notation, always explained by the Notation key.
- The record sheet — Constraint, Decision, Outcome — as the unit of evidence on every surface.

## Colors

A monochrome ramp from bone paper to near-black with one saturated magenta held in reserve.

### Primary
- **Dichroic Magenta** (`dichroic-magenta`): the before → after figure (an `outcomeFigure` shown only together with its `outcomeMetric`), its 45° hatch band, the "Before → after" legend swatch, and the 2px focus ring. Contrast on the field is 3.95:1, so it is only ever set large and semibold (24px or more).

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

**The One Job Rule.** Magenta marks a recorded before → after and keyboard focus. Never a link, a hover, a highlight, a selection or an accent.

## Typography

**Display Font:** Archivo (variable width and weight), self-hosted
**Body Font:** IBM Plex Mono 400 / 600, self-hosted
**Label Font:** Archivo at full width, tracked caps

**Character:** A tall condensed grotesk in caps states positions at plan scale; mono carries every quantity and every sentence, so the page reads as a working document rather than marketing copy.

### Hierarchy
- **Display** (700, width 70%, `clamp(34px, 11.03cqi, 82px)`, line-height 0.92, caps): the Home positioning line; page titles use the same voice at `clamp(44px, 4.8vw, 74px)`.
- **Headline** (700, width 72%, 34px, line-height 1, caps): band titles ("Selected work", "Background"); 27px on phones.
- **Title** (700, width 72%, 27px, caps): project names on sheets; 25px in index rows.
- **Figure** (Plex Mono 600, 40px on the lead sheet, 30px in rows, 24px on phones, tracking -0.03em): the before → after figure, in magenta.
- **Body** (Plex Mono 400, 14px / 15px in narratives, line-height 1.62–1.7, max 64ch): prose on cleared ground.
- **Field** (Plex Mono 400, 13px, tabular figures): the value a field carries.
- **Label** (Archivo 600, 11px, tracking 0.16em, caps, line-height 1.25): field names, nav, "Read case study".

### Named Rules
**The Readable Floor Rule.** Reading and labelling roles never drop below 11px; on phones every role steps up one (label 11, key 12, note 13, field 14, body 15).

**The Mono Is Data Rule.** Mono carries values, figures and prose — never a "technical" costume for headings.

## Layout

The sheet is a fixed composition at 1536px wide (`max-width: 1536px`) with a side edge of 48px (20px on phones). Above 1280px the field runs on three tracks — key column `11.181%`, centre `1fr`, right `33.125%` — and one unit (`--u`, 1px at 1536 shrinking to 0.83px) keeps the first viewport's proportions as the window narrows. Bands below the fold reuse the same tracks: zone label in the left track, body spanning centre and right.

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
- **Secondary link:** control lettering on a 1px ink underline, with a mono count beside it ("See all work · 5 projects"); the rule thickens to 2px on hover. 44px tall.

### Record sheet
- **Structure:** bordered sheet on the field with the stacked edge; corner shows "Sheet 00N / 00T"; title; Constraint (crossed-hatch mark + value), Decision, Outcome; foot with "Read case study" and year.
- **Outcome states:** before → after figure in magenta over a 13px hatch band (only with metric); qualitative sentence in ink; "Shipped — not yet measured" or, for a project whose `stage` is `in-progress`, "In progress — not yet measured", with a dot mask at full strength.
- **Interaction:** the whole sheet is the link target; hover steps the ground to Lifted Bone; keyboard focus outlines the whole sheet in magenta.

### Index row
The register's line: number · title, year, "Read case study" · Constraint and Decision · Outcome, on tracks `52px 236px 1fr 300px`. Same three fields and states as the record sheet; stacks to one column on phones.

### Spec block
Label/value rows ruled in Soft Rule under an ink top rule (Role, Status, Location; Sheet, Year, Role on case studies).

### Navigation
Masthead: condensed wordmark (28px caps) over a tracked "Product Engineer" label; nav links in label type with a hairline that draws under the word on hover and stays drawn on the current page (`aria-current`). Targets are 44px tall up to 1279px and on touch.

### Notation key and ramp key
The ramp key lists the eleven steps (X → 0) with the role each used step plays (Ink, Prose, Labels, Rules, Hover, Field). The Notation key binds marks to meaning: crossed hatch = Constraint, magenta 45° hatch = Before → after, dot mask = Not yet measured.

### Plan
The case study's game plan, from an optional typed `plan` list (at most six moves) in a project's frontmatter: moves read top to bottom, each with a mark — crossed hatch = constraint, filled ink square = built, half-inked square = in progress, dashed square = planned, dashed diamond = decision, faint dashed square = possible — a condensed-caps title, and a mono note led by its status in words ("In progress · …"). The connector into a move is solid only when that move is built; everything else, in-progress included, is dashed, with a small arrowhead into each move. The key lists only the marks the plan uses. Desktop: its own column beside the notes, sticky only on screens at least 820px tall; narrower: after the context line, before the first section.

### Sheet key and contents
Every case study keys its own marks in one line under the record strip (crossed hatch = Constraint, plus Before → after or Not yet measured when the strip draws them), so a visitor arriving from a link never meets an unexplained mark. On desktop, a sheet without a plan uses the right column for a sticky Contents list of its sections (condensed caps, Soft Rule dividers); narrower, the list is omitted.

### Plates
Optional screenshots of delivered work, from a typed `plates` list (at most four; image, caption, `desktop` or `mobile` view) whose files live in `src/assets/projects/<id>/` with embedded provenance. They are used only where the screens are the evidence. The plates sit in a band after the record strip. Each plate has a title block ("Plate 01" in ink, view and capture width in faint mono), a hairline-framed image that keeps the project's own colours, a mono caption and crop marks. On desktop the plates share one row and grow by aspect ratio, so every image has the same height. On tablet the desktop plates stack, with a phone plate beside them at 220px. On phones everything stacks and the phone plate is 62% wide. An optional `platesSource` URL adds the line "Captured from the reference copy at …".

### Structure
An optional `structure` (one root, at most eight branches, each with optional note and items) draws the delivered work's information architecture as a site plan. The root is a filled ink square with a condensed-caps title. Branches hang from one solid ink trunk that stops at the last branch, because only built work is solid. Each branch has an Archivo title, and its items run inline in faint mono separated by middots. A figcaption names what the drawing is. The right column goes to the plan first, then structure, then contents. The structure takes the plan's placement and stickiness rules.

### Crop marks
Short 9px hairline strokes in Ink Faint at each corner, 8px outside the edge of the home record sheet, the contact sheet and every plate, drawn by a single non-interactive pseudo-element. They are marginal: never behind text, never on bands or the field.

### Title-block strip
Contact paths as one ruled strip: four cells on desktop (three inside the contact sheet), 2 × 2 on tablet, stacked on phones; label over value, the whole cell a link; external links open in a new tab.

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
