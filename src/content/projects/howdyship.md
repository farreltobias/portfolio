---
title: HowdyShip
description: A Slack-native Battleship game built to run a competitive multiplayer experience directly inside the team's existing communication workflow.
year: 2026
role: Product Engineer
featured: true
constraint: Game rules had to work inside fast-moving Slack.
decision: Make Slack the interface and automate the referee.
outcome: A live 12-player game ran end to end with 0 referee actions.
complexity: 7
order: 4
---

Internal product experience built for Howdy: a competitive team challenge played entirely inside Slack.

## Why a game in Slack is hard

A multiplayer game usually leans on two things: a dedicated interface that shows the board, the turns and the score, and someone or something that enforces the rules as people play.

HowdyShip had neither. Howdy wanted the challenge to happen where the team already talked, in a busy Slack channel. A conversation has no board and no turn order. Several people can post at once, repeat a guess someone already made, go over their allowance, or type a coordinate that does not parse, all while the game keeps moving.

That made it a product problem, not just a coding one: the game had to stay fair and understandable inside an interface that was never designed for it.

## Messages became moves

The decision was to make Slack the interface rather than build a separate game app.

Every player message became a product input. The system read each submission as a move, and kept the parts a conversation cannot hold: the rules, the board, validation, scoring and progression. Players only had to do what they already do in Slack, which is post a message.

## What the system had to handle

Running a game this way meant the system had to answer every message correctly, in order, while several people played at once.

- **Checking every submission.** Malformed coordinates, duplicates, guesses outside a player's quota and other invalid moves were caught and rejected automatically.
- **Running the game.** Hits and misses, each ship's state and sinking, bombs and treasures, and scoring were all tracked by the system.
- **Moving the game forward.** Game state and progression were kept consistent as moves arrived, through to the end of the game.

## Replacing the referee

In a game like this, someone normally has to referee: check each guess, settle conflicts and keep score. In a fast Slack channel, that job would have been constant.

HowdyShip automated it. Every submission was checked against the rules by the system, so no person had to step in to accept, reject or correct a move.

## My role

I took HowdyShip from a concept to a game that operated for real: deciding how it should behave inside Slack, and building the system that enforced its rules and ran it from start to finish.

## The live game

A completed live game involved 12 players, and the system reviewed 124 coordinate submissions.

- 76 submissions were accepted.
- 48 invalid or conflicting submissions were rejected automatically.
- 0 referee actions were required.

The zero is the point of the design. Every one of those 48 rejections, and every accepted move, was handled by the system's rule enforcement, not by a person watching the channel. The game ran end to end under real participation, through to completion, inside Slack.

The challenge also landed with the team: participants asked for another round, and team feedback described HowdyShip as one of the best challenges run so far.
