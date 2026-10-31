---
title: Rare Candy / Auction Platform
description: Product and engineering work on a marketplace auction system with complex planning, state, timing, and transaction requirements.
year: 2025
role: Product Engineer
featured: true
constraint: Live auction state had to remain consistent.
decision: Make auction planning explicit and versioned.
outcome: Planning and versioning moved into the platform.
outcomeMetric: Auction planning
outcomeKind: change
outcomeFigure: External → In-platform
complexity: 8
order: 3
plan:
  - kind: constraint
    title: Live auction state
    note: Had to stay consistent while planning workflows changed
  - kind: built
    title: Explicit, versioned planning
    note: Auction state made explicit; changes kept over time and managed before going live
  - kind: built
    title: Planning in the platform
    note: Future auctions are now planned and versioned through the system

---

Product engineering work on Rare Candy's auction platform. Internal systems and marketplace rules are described in general terms only.

## Planning is more than editing fields

An auction is not a form with a few values to fill in. Its state, timing, ordering and lifecycle all interact, and a change made to an auction that has not started yet can matter a great deal once it does.

That made auction planning a product-system problem rather than a set of isolated features. Adding one more editable field at a time would not have made planning reliable; it would only have added more ways for parts of an auction to disagree with each other.

## Planning versus live behavior

Two things had to hold at once.

- **Live auctions had to stay consistent.** Whatever happened in planning could not disturb an auction that was already running.
- **Planning had to keep evolving.** Future auctions needed to be prepared and changed over time without that work leaking into live marketplace behavior.

As auction workflows grew, an informal way of planning made that separation harder to keep. Drafts, future auctions and live behavior needed a clear line between them.

## The decision: make planning explicit and versioned

The decision was to make auction planning explicit and versioned, so that changes are settled in planning before they can affect live behavior.

- **Explicit state** means an auction's position in its lifecycle is represented directly, instead of being inferred from loose details.
- **Versioning** means a change to a planned auction is represented as a change, kept over time, instead of overwriting what was there before. Planning stops depending on an informal workflow and becomes something the platform itself holds.

Versioning here is not architecture for its own sake. It is what lets future auctions keep changing while the auctions that are live stay exactly as they are.

## Designing product and integrity together

My role was to shape both sides of that decision: how auction planning should behave as a product, and the technical structure that keeps it consistent.

The two could not be designed separately. Product requirements decided what planning needed to allow; technical constraints decided what it could allow without risking live behavior. Both were worked out together throughout the implementation.

## Outcome

Rare Candy auctions are now planned and versioned through the platform.

Planning moved from a less structured workflow into a persistent product workflow, where future auctions and their changes are managed directly in the system. No performance metric is claimed for this change; the outcome is the change in how planning works.
