# Changelog

## 0.3.0, 2026-11-02

- `docs/style.md`: one writing style for skills, agents and the documents they write.
- The routing skill tells the agent to write plain prose. The newcomer review agent reports sentences that break the style guide.
- `scripts/check.mjs` also bans filler and hedge words.
- MIT license.

## 0.2.0, 2026-11-02

- New skills: `ingest`, `analyze`, `tracking-plan`, `positioning`, `pricing`, `ux-review`.
- New folders in `product/`: `notes/` for ingest digests, and `positioning.md` and `pricing.md` at the top level.
- `ROADMAP.md` with candidate skills grouped by the people who would use them.
- `review` builds absolute paths from `pwd`. `opportunities` uses the exact risk labels.

## 0.1.0, 2026-11-02

First release.

- 27 skills across direction, research, choosing bets, shaping, specs, AI features, launch and learning.
- Six review agents that read a document from one angle each, with no access to the conversation.
- A session-start hook that loads the routing skill.
- `product/` folder convention with front page, logs and bet folders.
- `scripts/check.mjs` for structural checks.
- A fictional example product in `examples/lintel/`.
