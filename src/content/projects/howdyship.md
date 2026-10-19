---
title: HowdyShip
description: A Slack-native Battleship game built to run a competitive multiplayer experience directly inside the team's existing communication workflow.
year: 2026
role: Product Engineer
featured: true
constraint: Game rules had to work inside fast-moving Slack.
decision: Make Slack the interface and automate the referee.
outcome: The game ran end to end without manual refereeing.
complexity: 7
order: 4
---

Internal product experiment built for Howdy.

## Problem

Howdy wanted a competitive team challenge that could happen where people were already communicating: Slack.

A Battleship-style game normally depends on a dedicated interface to communicate board state, turns, valid actions, previous moves, scoring, and game progression.

Running that experience directly inside a busy Slack channel introduced an additional challenge: players could submit coordinates concurrently, repeat guesses, exceed limits, or send malformed input while the game continued in real time.

## Approach

Instead of building a separate game interface, Slack became the interface.

HowdyShip treated messages as player actions and kept the game rules, board state, validation, scoring, and progression in the underlying system.

The experience was designed to let players participate naturally through the channel while the software handled the operational complexity behind the game.

## Solution

A Slack-native Battleship experience with automated game-state management and coordinate processing.

The system handled:

- coordinate validation;
- duplicate submissions;
- malformed coordinates;
- player quotas;
- hits and misses;
- ship state and sinking;
- bombs and treasures;
- scoring;
- game completion.

This allowed the game to operate inside an active team conversation without requiring a separate application or a person to manually referee each action.

## Outcome

A completed live game involved 12 players and reviewed 124 coordinate submissions.

- 76 submissions were accepted.
- 48 invalid or conflicting submissions were automatically rejected.
- 0 referee actions were required.

The game successfully handled concurrent participation, rule enforcement, scoring, and completion through Slack.

The challenge also generated strong engagement: participants asked for another round, and team feedback described HowdyShip among the best challenges run so far.