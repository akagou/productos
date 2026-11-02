---
name: ai-scope
description: Use when a feature includes an AI model or agent, when someone asks what the AI may do, how much autonomy it gets, what could go wrong with it, or whether it needs an agent at all, or when a spec says "AI behavior" and no ai-scope.md exists.
---

# AI scope

Writes `product/bets/<slug>/ai-scope.md`: the job the AI does, the simplest form that does it, what it may touch, what it may do, and what it must never do. The agent drafts the scope. A named person approves each autonomy level, and until then it is a Guess.

## When to use

- A spec, pitch or request includes a model call, a chatbot, a copilot or an agent.
- "What should the AI be allowed to do?", "do we need an agent?", "how autonomous should it be?"
- The test plan for AI output goes in `productos:evals`. The full feature spec goes in `productos:spec`.

## Before you start

- Read `product/PRODUCT.md`, the pitch and the spec in the same bet folder, and `product/decisions.md`.
- You need the user's job and the data the AI would see. Ask for what is missing, one question at a time, 4 questions at most.

## Steps

1. Write the job the AI does for the user in one sentence. 
2. Pick the simplest form that works, in this order: plain code, one model call, a fixed workflow of model calls, an agent that chooses its own steps. Take the first form that works. Write why each earlier form does not work.
3. List the inputs and context the model gets. For each, name the data permission: what the model may read, and what it may not.
4. List every action and tool. Mark each read, write or irreversible. Give each an autonomy level: Suggest, Draft, Supervised or Autonomous.
5. An irreversible action is never Autonomous. The exception is an entry in `decisions.md` that approves it. Link that entry.
6. Write the Never list: at least 3 actions the AI must never take, even if a user or a prompt asks.
7. Write the human checkpoints: who checks, when, and how to undo.
8. Fill the failure modes table. Give each failure a likelihood with a confidence label. Write how we detect it and the mitigation.
9. State which data goes to which model provider, and the retention. Mark any unknown as Guess and add an open question for the owner of privacy.
10. Estimate the cost per task and set a latency budget. Label the estimate. Base it on token counts or the provider's price list.
11. Write the fallback for a slow or unavailable model.
12. Write how the user can tell what the AI did.

## Output

Write `product/bets/<slug>/ai-scope.md`.

```markdown
---
skill: ai-scope
status: Draft
updated: YYYY-MM-DD
owner: <name>
bet: <slug>
---

# AI scope: <bet name>

## Job
<The AI does X for <user> so that they get Y.> (<Confidence>)

## Simplest form
Chosen: <plain code | one model call | fixed workflow | agent>.
Why not simpler: <reason for each earlier form>.

## Inputs and permissions
| Input | Source | May read | May not read |
|---|---|---|---|

## Actions and autonomy
| Action or tool | Type (read, write, irreversible) | AI autonomy | Approved by |
|---|---|---|---|

## Never
- <An action the AI must never take, even if asked>
- <Second action>
- <Third action>

## Human checkpoints
| Checkpoint | Who | When | How to undo |
|---|---|---|---|

## Failure modes
| Failure | Impact on the user | Likelihood | Detection | Mitigation |
|---|---|---|---|---|
| <failure> | <impact> | <High, Medium or Low> (<Confidence>) | <signal> | <action> |

## Data and privacy
| Data | Model provider | Retention | Confidence |
|---|---|---|---|

## Cost and latency
- Cost per task: <amount>, from <token or API basis>. (<Confidence>)
- Latency budget: <seconds> at the 95th percentile.

## Fallback
<What the user sees and can do when the model is slow or down.>

## What the user sees
<How the product shows what the AI did, and how to correct it.>

## Open questions
| Question | Owner | Due |
|---|---|---|
```

## Check before you finish

- [ ] The job is one sentence with a named user.
- [ ] The simplest form says why each simpler form fails.
- [ ] Every action is marked read, write or irreversible, and has one level from Suggest, Draft, Supervised, Autonomous.
- [ ] No irreversible action is Autonomous unless a linked `decisions.md` entry approves it.
- [ ] The Never list has at least 3 items.
- [ ] Each failure has a likelihood with a confidence label, a detection signal and a mitigation.
- [ ] The cost estimate and the data retention have confidence labels.
- [ ] A person approved every autonomy level, or the level is marked as awaiting approval.

## Then

- Add assumptions about model quality and cost to `product/assumptions.md` with the next free IDs.
- Link `ai-scope.md` from the spec's "AI behavior" section.
- Suggest `productos:evals` next, with the failure modes as input.
- Suggest `productos:review`, and ask for the ai-risk angle.
- Record each approved autonomy level with `productos:decision`.

## Source

The order from plain code to agent follows "Building effective agents" (Anthropic, 2024). Levels of human control follow *Human-Centered AI* (Shneiderman, 2022). Failure handling follows the *People + AI Guidebook* (Google PAIR, 2019).
