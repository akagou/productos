# ProductOS repo

ProductOS is a Claude Code plugin of product skills for AI-native teams. The design is in `docs/design.md`. The skill contract is in `CONTRIBUTING.md`.

## Layout

- `.claude-plugin/`: plugin and marketplace manifests.
- `hooks/hooks.json`: loads `skills/using-productos/SKILL.md` at session start.
- `skills/<name>/SKILL.md`: one folder per skill, flat.
- `agents/`: the review agents, one per angle, read-only.
- `scripts/check.mjs`: structural checks. Run it before every commit.
- `docs/style.md`: the writing style.

## Rules

- Follow the anatomy in `CONTRIBUTING.md` for every skill.
- Use only the labels in `docs/design.md`.
- Write every text in the voice of `docs/style.md`. Output templates follow its rules for product documents.
- Keep examples fictional. No real client, employer or person names.
- Write all text fresh. Do not copy from other skill libraries.
- When you add, rename or remove a skill, update the skill table in `README.md`, the stage table in `docs/design.md`, the routing table in `skills/using-productos/SKILL.md` and `ROADMAP.md`.
- Bump the version in `.claude-plugin/plugin.json` and add a `CHANGELOG.md` entry for each release.
