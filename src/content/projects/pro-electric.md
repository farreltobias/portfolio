---
title: Pro Electric
description: A bot-first MVP, now being built, to reduce manual work in Pro Electric's current operational workflow.
year: 2026
role: Product Engineer
featured: true
constraint: Operational notes were taken by hand.
decision: Start with a bot-first MVP.
complexity: 4
order: 2
stage: in-progress
plan:
  - kind: constraint
    title: Manual notes
    note: Operational notes taken by hand
  - kind: in-progress
    title: Bot-first MVP
    note: Being built to capture operational information in a structured way
  - kind: planned
    title: Established product
    note: The team plans to try one from the market first
  - kind: decision
    title: Is a custom system justified?
    note: To be decided by actual use, not assumptions
  - kind: possible
    title: Custom operations platform
    note: Scheduling, dispatching, coordination
---

Client project for Pro Electric. Current stage: the bot-first MVP is being built. No custom operations platform has been built.

## The opportunity

Pro Electric runs much of its daily operation on manual processes. Information is recorded and organized by hand, and that leaves room for software to help in several places over time. Scheduling, dispatching, and coordination are all candidates for a custom operations platform someday.

That is the opportunity. It is not what this project is building.

## Why not build the platform now

Building the complete custom system immediately would have been premature.

A custom operations platform asks a team to change how it works every day. Before that investment makes sense, there has to be evidence that the team can adapt to a structured digital workflow, and that the problems a custom system would solve are the ones that matter most in practice.

Pro Electric also plans to first experience an established product from the market before deciding whether a custom operations system is justified at all. Committing to a full build ahead of that would mean designing the system on assumptions instead of experience.

## The decision: start smaller

My part of the work was scoping: separating what Pro Electric might need eventually from what would help now, and recommending where to start.

The answer was a bot-first MVP aimed at one immediate operational problem: manual note-taking.

The bot is designed to do two jobs at once:

- it targets manual note-taking the team was doing by hand every day;
- it introduces structured capture of operational information, so the team starts working with organized data rather than loose notes once it is in use.

The first job is what should make the tool worth using day to day. The second is what makes it useful for the future: it is the team's first step into a structured digital workflow, taken without asking anyone to replace how the whole operation runs.

## What exists, and what does not

**In progress:** a bot-first workflow to capture and organize operational notes that are currently handled manually.

**Not built:** a custom operations platform for scheduling, dispatching, or coordination. It remains a possible future project, not a committed one.

## Why this reduces risk

Starting smaller lowers two kinds of risk.

- **Investment risk.** The MVP is a much smaller commitment than a full platform, and it is designed to be useful on its own even if the larger system is never built.
- **Adoption risk.** The team takes on one new habit, structured capture, instead of an entirely new system all at once.

It also changes how the next decision gets made. Whatever is built later should be informed by how the team actually uses structured data and an established product, not by assumptions made before either existed.

## Where it stands

The MVP is being built. Once it is in use, the goal is to reduce manual note-taking and to learn whether a structured workflow fits the operation.

No scheduling, dispatching, operational, financial, or productivity improvements are claimed. None have been measured yet, so this sheet records the outcome as not yet measured.
