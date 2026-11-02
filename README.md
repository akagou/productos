# ProductOS

Product skills for AI-native teams. ProductOS helps product managers, designers, product engineers and engineering leads set direction, learn what customers need, choose bets, write specs that coding agents can build from, ship, and read the results.

It is a Claude Code plugin. The skills are plain `SKILL.md` files, so other agents that read Agent Skills can use them too.

## Install

```bash
claude plugin marketplace add akagou/productos
claude plugin install productos@productos
```

Start a new session after you install. ProductOS loads a short routing skill at session start, so the agent checks for a product skill before it answers a product request.

## First ten minutes

1. Open your product's repo and say "set up ProductOS". The `start` skill reads the README and recent commits, drafts `product/PRODUCT.md`, and asks you a few questions to correct it.
2. Ask "what next?". The `next` skill reads `product/` and recommends one move.
3. Describe a feature you are thinking about. The `pitch` skill writes a one-page bet with a time limit, the risks and what is left out.
4. Say "review this". The `review` skill starts fresh agents that never saw your conversation, and each reads the pitch from one angle.

## Example

[`examples/lintel/`](examples/lintel/) is a fictional shared inbox for property managers. The skills turned 4 interview notes, 24 support tickets and a metrics sheet into the whole `product/` folder. The CEO asked for AI reply drafts. The evidence pointed at missed emergency messages, so the assessment proposed Hold and the pitch went to emergency visibility. The folder ends with a fresh review of the spec: 18 findings, 6 of them Blockers. [`RUNS.md`](examples/lintel/RUNS.md) gives the prompts.

## The skills

Teams enter at any stage and skip what they do not need.

| Stage | Question | Skills |
|---|---|---|
| Direction | Where are we going, and how will we know? | `strategy`, `outcomes`, `roadmap`, `positioning` |
| Understand | What do customers need, and what do they use today? | `research-plan`, `synthesis`, `jobs`, `feedback`, `market-scan`, `analyze` |
| Choose | Which problem do we take on next? | `opportunities`, `assess`, `prioritize`, `pitch` |
| Shape | What must be true, and how do we check it cheaply? | `assumptions`, `test`, `prototype`, `ux-review` |
| Specify | What exactly do we build? | `spec`, `tracking-plan`, `ai-scope`, `evals` |
| Ship | How does it reach people, and at what price? | `launch`, `pricing` |
| Learn | What happened, and what do we change? | `readout`, `decision`, `update` |
| Any stage | | `using-productos`, `start`, `next`, `ingest`, `review`, `drift` |

You do not need to call skills by name. Ask in your own words, and the agent loads the matching skill. To call one directly, use its full name, for example `/productos:spec`.

## Product context in the repo

ProductOS keeps product knowledge next to the code, where people and agents both read and update it.

```
product/
  PRODUCT.md        front page: who it is for, the problem, the outcome, current bets
  strategy.md       outcomes.md       opportunities.md       roadmap.md
  positioning.md    pricing.md
  assumptions.md    evidence.md       decisions.md           (logs with IDs)
  research/         plans, syntheses, feedback sweeps, market scans, analyses
  notes/            digests of meetings, documents and threads
  bets/<slug>/      assess, pitch, tests, prototype, spec, tracking-plan, ai-scope, evals, launch, readout
  reviews/          document, UX and drift reviews
  updates/          stakeholder updates
```

Each skill creates its own file the first time it runs. Every file records the skill that wrote it, its status (Draft, Reviewed, Agreed) and the date.

## Confidence on every claim

Every claim about customers, markets or numbers has one of four labels:

- **Guess**: nobody has checked it. Anything an AI wrote or simulated starts here.
- **Told**: a person said it, and nobody has seen it happen yet.
- **Observed**: seen in behavior, or reported by three or more independent sources.
- **Measured**: a number from real usage, an experiment or a dataset, with its source.

A simulated user is never evidence.

## Fresh review

The `review` skill starts one agent per angle, in parallel: customer, skeptic, business, builder, newcomer and AI risk. Each agent reads only the document, the front page and the checklist of the skill that wrote the document. None of them sees the conversation. The findings go into one report in `product/reviews/`, and you decide which to fix. The method comes from the [Elephant-Goldfish Model](https://github.com/google/elephant-goldfish-model).

## Hand-off to engineering

A spec from `spec` gives the context, a story map, the first slice, testable acceptance criteria and the open questions with owners. Give its path to your coding workflow: `superpowers:writing-plans` in [Superpowers](https://github.com/obra/superpowers), `egm-draft` in the Elephant-Goldfish Model, or your own agent. After the build, `drift` compares the spec with the code.

## Roadmap

[ROADMAP.md](ROADMAP.md) lists the candidate skills by the people who would use them, including skills from consulting, operations and AI adoption work.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the skill contract and [docs/design.md](docs/design.md) for the design. Run `node scripts/check.mjs` before you commit.
