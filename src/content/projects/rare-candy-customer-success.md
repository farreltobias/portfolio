---
title: Rare Candy — Customer Success Platform
description: Internal tooling that reduced repetitive engineering support work and gave the Customer Success team more autonomy.
year: 2026
role: Product Engineer
featured: true
constraint: Support workflows depended on engineering.
decision: Move repeatable workflows into internal tooling.
outcome: Customer Success gained operational autonomy.
outcomeMetric: CS requests to engineering
outcomeFigure: ~4/day → 1–2/week
complexity: 6
order: 1
---

Internal product work at Rare Candy. Internal systems and workflows are described in general terms only.

## The dependency

Customer Success regularly needed engineering to carry out operational actions. The actions themselves were predictable and recurring: the same kinds of requests, handled the same way, again and again.

Each one still went through an engineer. That interrupted engineering work throughout the day, and it left Customer Success waiting on someone else to finish tasks that were part of their own job.

## Not every request needed an engineer

Looking at the requests together showed a split. Some genuinely needed engineering judgment. Many did not: they were repeatable actions that only went through engineering because nothing else could perform them.

That made it a product problem rather than a staffing one. The dependency existed because the tools did not, not because the work required an engineer.

## The decision: turn repeatable actions into internal tooling

The decision was to move the repeatable workflows into safe internal tooling that Customer Success could use directly.

My role covered both halves of that: working out which requests were genuinely repeatable and safe to hand over, and building the tooling that let Customer Success perform them.

The aim was not to automate individual tickets one by one. It was to change the relationship between the two teams, so that Customer Success owned its routine operational work and engineering was involved when judgment was actually needed.

## Giving another team autonomy, safely

Handing operational actions to another team only works if it cannot break the systems underneath. Two principles shaped the tooling:

- **Only repeatable actions were exposed.** Anything that needed case-by-case judgment, or anything unusual, stayed with engineering. The tooling removed the routine requests, not the need for engineering.
- **The constraints of the underlying systems were kept in the tool.** Customer Success could perform the actions, but only within the rules those systems already required.

## Outcome

Engineering support demand related to these workflows fell from roughly four requests per day to around one or two per week.

That figure covers the workflows the tooling took on. It does not mean all engineering support disappeared; requests that needed engineering judgment went to engineering as before.

The organizational effect was the point of the work: fewer interruptions for engineering, and a Customer Success team able to complete its routine operational work without waiting on another team.
