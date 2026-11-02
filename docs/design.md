# ProductOS design

Status: Agreed for v0.1. Updated 2026-11-02.

## Intent

ProductOS helps people on the product layer do the work: decide where the product goes, learn what customers need, choose bets, write specs that agents can build from, ship, and read the results. It is for product managers, designers, product engineers and engineering leads on AI-native teams, where people and coding agents share one repo.

v0.1 is a public resource that shows how an AI-native product team can work. It installs as a Claude Code plugin. The skills are plain `SKILL.md` files, so any agent that reads Agent Skills can use them.

## Goals

- A product person can install it and get a useful artifact in the first ten minutes.
- Product context lives in the product repo, in files that people and agents both read and update.
- Every claim about customers, markets or numbers states its confidence.
- Fresh reviewers, with no access to the conversation, check a document before the team builds from it.
- A spec from ProductOS is input that a coding workflow can plan from without a meeting.

## Non-goals

- Running a team's delivery: sprints, tickets, standups. Teams keep their own tracker.
- Writing code. ProductOS stops at the spec and starts again at the readout. Superpowers, Elephant-Goldfish or any coding workflow does the build.
- A fixed process. There is no required order of skills.
- Team harnesses for client work. That comes later and is out of scope here.

## Anti-goals

These would make ProductOS a failure even if every skill works:

- Documents that look finished but rest on guesses that nobody marked.
- Simulated users or AI-written personas presented as customer evidence.
- A process people must follow before they may build anything.
- Long chat replies in place of files.

## What we take from other plugins

| Source | What we use |
|---|---|
| [Elephant-Goldfish Model](https://github.com/google/elephant-goldfish-model) | One agent with full context drafts. Reviewers start fresh, read only the document and the files it cites, and each checks one angle. The human decides. Long output goes to files. Documents stay in the repo, and a drift check compares them with what shipped. |
| [Superpowers](https://github.com/obra/superpowers) | A session-start hook loads one short skill that tells the agent to look for a skill before it acts. Skills are small and load when the request matches their description. Descriptions name triggers, never the steps. |

## How it works

### The loop

The work moves through seven stages. Teams enter at any stage and skip what they do not need.

| Stage | Question | Skills |
|---|---|---|
| Direction | Where are we going, and how will we know? | strategy, outcomes, roadmap, positioning |
| Understand | What do customers need, and what do they use today? | research-plan, synthesis, jobs, feedback, market-scan, analyze |
| Choose | Which problem do we take on next? | opportunities, assess, prioritize, pitch |
| Shape | What must be true, and how do we check it cheaply? | assumptions, test, prototype, ux-review |
| Specify | What exactly do we build? | spec, tracking-plan, ai-scope, evals |
| Ship | How does it reach people, and at what price? | launch, pricing |
| Learn | What happened, and what do we change? | readout, decision, update |

The system skills work across all stages: `using-productos` (loaded at session start), `start`, `next`, `ingest`, `review` and `drift`.

### Product context in the repo

`productos:start` creates this folder in the product's repo:

```
product/
  PRODUCT.md        front page: who it is for, the problem, the outcome, current bets
  strategy.md
  outcomes.md
  opportunities.md
  roadmap.md
  positioning.md
  pricing.md
  assumptions.md    log, IDs A-001
  evidence.md       log, IDs E-001
  decisions.md      log, IDs D-001
  research/         research plans, syntheses, feedback sweeps, market scans, analyses
  notes/            digests of meetings, documents and threads
  bets/<slug>/      assess, pitch, tests, prototype, spec, tracking-plan, ai-scope, evals, launch, readout
  reviews/          document, UX and drift reviews
  updates/          stakeholder updates
```

Each skill creates its own file when it first runs. `start` creates only `PRODUCT.md` and the three logs. Every artifact has frontmatter with `skill` (the skill that wrote it), `status` and `updated`. Skills read `PRODUCT.md` first and write back to the logs.

### Labels

All skills use the same short lists. A label is written exactly as listed, with no qualifier added to it.

| List | Values |
|---|---|
| Confidence | Guess, Told, Observed, Measured |
| Risk | Value, Usability, Feasibility, Viability |
| Assumption status | Open, Testing, Supported, Refuted |
| Document status | Draft, Reviewed, Agreed |
| Metric role | North star, Input, Guardrail |
| Roadmap horizon | Now, Next, Later |
| AI autonomy | Suggest, Draft, Supervised, Autonomous |
| Likelihood | High, Medium, Low |
| Assess verdict | Pursue, Hold, Drop |
| Verdict after a prototype or readout | Keep, Change, Stop |
| Test card status | Planned, Running, Closed |
| Decision door | One-way, Two-way |
| Decision status | Active, Replaced |
| Review severity | Blocker, Major, Minor |
| Finding state | Open, Fixed, Rejected |
| Drift state | Built, Partial, Missing, Extra |
| Ingest change state | Proposed, Confirmed, Changed, Dropped |
| Accessibility check method | Tool, Eye, Not done |

Confidence definitions:

- **Guess**: nobody has checked it. Anything an AI wrote or simulated starts here.
- **Told**: a person said it: a customer, a stakeholder, an expert. Nobody has seen it happen yet.
- **Observed**: seen in behavior, or reported by three or more independent sources.
- **Measured**: a number from real usage, an experiment or a dataset, with its source.

### Fresh review

`productos:review` starts one reviewer agent per angle, in parallel. Each reviewer gets only the path of the document, the path of `PRODUCT.md`, and the checklist of the skill that produced the document. It never gets the conversation or the author's intent. The angles are:

| Agent | Reads the document as |
|---|---|
| customer | the person it is for |
| skeptic | someone who looks for the simpler option and the unchecked guess |
| business | the person who pays for it and answers for its cost |
| builder | the engineer or coding agent who must build from it |
| newcomer | a new teammate with no background |
| ai-risk | someone who must answer for what the model does wrong |

The review skill merges the findings into one report in `product/reviews/`, shows the top three in chat, and asks which to address. If the agent cannot start subagents, the review stops. A review inside the same conversation is not a fresh review.

### Hand-off to engineering

`productos:spec` writes `product/bets/<slug>/spec.md`. The spec states the problem, the outcome, the scope, the first slice, acceptance criteria and open questions. The skill ends by naming the next step for the team's coding workflow, for example Superpowers brainstorming or Elephant-Goldfish draft, with the spec path as input. `productos:drift` later compares the spec with the code and lists each criterion as Built, Partial, Missing or Extra.

## Skill contract

Every skill follows the anatomy in [CONTRIBUTING.md](../CONTRIBUTING.md). The description lists triggers only. The output section gives the exact template. The checklist at the end is also the rubric that reviewers use.

## Testing

- `node scripts/check.mjs` checks structure: frontmatter, names, sections, cross-references, manifests.
- Each skill gets a fictional scenario test in a later release: an agent with only the scenario and the skill writes the artifact, and a second agent grades it against the checklist.

## Left to the builder

Wording, examples and the order of steps inside each skill, within the contract.
