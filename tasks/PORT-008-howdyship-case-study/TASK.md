# PORT-008 - HowdyShip Case Study

## Target

- HowdyShip case study.

## Change

- Turn the current project summary into a complete case study showing how a multiplayer Battleship-style experience was designed to run directly inside Slack with automated rule enforcement.

## Constraints

- Use only verified information from the real HowdyShip game and available Howdy records.
- The project must be presented as a real internal product experience, not merely a technical experiment.
- Slack is the product interface.
- The system automated game state, validation, scoring, progression, and rule enforcement.
- Verified live-game outcome:
    - 12 players;
    - 124 coordinate submissions reviewed;
    - 76 accepted;
    - 48 rejected;
    - 0 referee actions.
- Participant names, email addresses, game identifiers, and private Slack information must not be exposed unless explicitly needed and approved.
- Public outcome copy must favor aggregate metrics over individual player data.
- Do not fabricate engagement numbers beyond available evidence.
- Qualitative feedback may be used only when supported by real Slack messages and without exposing private information unnecessarily.
- Keep frontmatter summary fields concise.
- Do not force the aggregate game metrics into `outcomeFigure` if the field remains defined strictly as before → after.

## Content

The case study must make these ideas clear:

- A multiplayer game normally relies on a dedicated visual interface and active rule enforcement.
- HowdyShip instead had to work inside a fast-moving Slack conversation.
- Player messages became product inputs.
- Invalid, duplicate, malformed, and over-quota submissions had to be handled automatically.
- The system maintained game state and progression while multiple people participated.
- Automation replaced the need for a manual referee.
- The live game demonstrated that the product could operate end to end under real participation.

## Done

- The case explains why Slack-native multiplayer interaction created a non-trivial product problem.
- Farrel's role in turning the concept into an operating product is clear.
- The case explains the system's responsibilities without becoming a low-level technical walkthrough.
- The live-game metrics are represented accurately.
- `0 referee actions` is clearly connected to automated rule enforcement.
- Qualitative engagement evidence is used only if verified and appropriate for publication.
- No private participant data is exposed.
- The Selected Work metadata remains concise.

## Check

- Verify the published metrics against the final game record.
- Verify aggregate counts remain:
    - 12 players;
    - 124 reviewed;
    - 76 accepted;
    - 48 rejected;
    - 0 referee actions.
- Verify private Slack data and participant identities are not unnecessarily published.
- Verify the narrative explains product behavior rather than only implementation.
- `pnpm check`
- `pnpm build`