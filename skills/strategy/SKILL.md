---
name: strategy
description: Use when a team needs a product strategy, asks "what is our strategy", "where are we going", "why these priorities", or brings a goal such as "grow revenue 20%" as if it were a strategy. Also when PRODUCT.md says "Not written yet" under Strategy.
---

# Strategy

Writes `product/strategy.md` in the three parts of Rumelt's kernel: a diagnosis of the one critical challenge, a guiding policy, and coherent actions. The strategy must say what the team will not do. A goal is a target, so the skill moves goals to `outcomes.md`.

## When to use

- "Write our strategy", "why are we working on this", "what is our approach".
- A new product, a change of direction, or a team whose bets do not fit together.
- For a metric target or an OKR, use `productos:outcomes`. For the order of work over time, use `productos:roadmap`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/evidence.md`, `product/outcomes.md` and `product/decisions.md` if they exist. List the evidence IDs you can cite.
- You need the name of one person who owns the strategy. Ask for it if `PRODUCT.md` has none.
- Ask at most 3 questions, one at a time: "What is the hardest thing standing in the way?", "What will you say no to?", "Who owns each action?". When the person says "just draft it", draft and mark every unknown Guess.

## Steps

1. Read the repo and list the facts about customers, market and team. Give each fact its evidence ID and confidence label. A fact with no evidence ID is Guess.
2. Write the diagnosis: the one critical challenge. Name the obstacle and why it matters now. Pick one. If you find several, choose the one that, once solved, makes the others easier, and list the rest under "Other challenges".
3. Check each statement the person gives as a goal. "Grow revenue 20%" and "reach 10,000 users" are targets. Move each one to the "Targets moved to outcomes" list, with the line "Add in `productos:outcomes`". Do not leave it in the diagnosis or the policy.
4. Write the guiding policy: the approach that deals with the challenge, in 2 to 4 sentences. A policy limits choices. If the policy would fit any product, rewrite it.
5. List what the policy rules out. Each item is something the team could do and will not.
6. Write 3 to 5 coherent actions. Each action has an owner (a named person), a first date, and a line that says which other action it supports. Delete an action that does not support another action or the policy.
7. Write "What we will not do": at least 2 items, each with a reason and a trigger that would reopen it.
8. Set the confidence of the diagnosis as a whole. It is the lowest label among its key facts.
9. Write three lines for the Strategy section of `PRODUCT.md`: the challenge, the policy, the first action.

## Output

Write `product/strategy.md`.

```markdown
---
skill: strategy
status: Draft
updated: YYYY-MM-DD
owner: <name>
---

# Strategy: <product name>

## Diagnosis
<The one critical challenge, in 2 to 4 sentences.> (<Confidence>)

Evidence:
- <Fact> (<Confidence>, <evidence ID>)

Other challenges: <list, or "None">

## Guiding policy
<The approach, in 2 to 4 sentences.>

It rules out:
- <Option the team could take and will not>

## Coherent actions
| # | Action | Owner | Starts | Supports |
|---|---|---|---|---|
| 1 | <action> | <name> | YYYY-MM-DD | <action # or policy> |

## What we will not do
- <Item>. Why: <reason>. Reopen if: <trigger>.
- <Item>. Why: <reason>. Reopen if: <trigger>.

## Targets moved to outcomes
- <Target, or "None">. Add in `productos:outcomes`.
```

## Check before you finish

- [ ] The diagnosis names one challenge and cites at least 1 evidence ID.
- [ ] Each fact about customers, the market or numbers has a confidence label.
- [ ] The policy says what it rules out, and a competitor could not use it unchanged.
- [ ] There are 3 to 5 actions, and each has a named owner and a "Supports" entry.
- [ ] "What we will not do" has at least 2 items, each with a reason and a trigger.
- [ ] No target such as a growth percentage appears in the diagnosis, policy or actions.
- [ ] A person is named as owner, and no AI agent is named as an owner.

## Then

- Replace the Strategy section in `PRODUCT.md` with the 3 lines from step 9.
- Add a target moved in step 3 to `outcomes.md` through `productos:outcomes`.
- Record an agreed policy with `productos:decision`. Mark it One-way only if reversing it would cost more than a quarter of work.
- Suggest `productos:roadmap` when the strategy is Agreed, and `productos:review` before that.

## Source

The kernel of diagnosis, guiding policy and coherent actions comes from *Good Strategy Bad Strategy* (Rumelt, 2011).
