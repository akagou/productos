---
name: next
description: Use when someone asks what to do next on the product, "where are we?", "what should I work on?", "what's open?", or opens a session in a repo with a product/ folder and no clear task.
---

# Next

Reads `product/` and recommends one next move, with the skill that does it and the reason. The recommendation is advice. The person can choose something else, and nothing is blocked.

## When to use

- "What next?", "Where are we?", "What should I work on?"
- The start of a session in a repo with a `product/` folder and no task.
- Not for a status report to stakeholders: use `productos:update`.

## Before you start

- If `product/PRODUCT.md` does not exist, recommend `productos:start` and stop.

## Steps

1. Read `PRODUCT.md`, `outcomes.md`, the three logs, and the frontmatter of every file under `product/bets/` and `product/research/`.
2. Go down this table. Stop at the first row whose condition is true.

   | # | Condition | Recommend |
   |---|---|---|
   | 1 | `outcomes.md` does not exist or names no North star metric | `productos:outcomes` |
   | 2 | A `launch.md` has a read date in the past and its bet has no `readout.md` | `productos:readout` |
   | 3 | An Agreed `spec.md` describes AI behavior and its bet has no `evals.md` | `productos:evals` |
   | 4 | An Agreed `pitch.md` has an Open assumption with risk Value or Viability and confidence Guess | `productos:test` |
   | 5 | An Agreed `pitch.md` has no `spec.md` in its folder | `productos:spec` |
   | 6 | A Draft pitch, spec or strategy has no review in `product/reviews/` | `productos:review` |
   | 7 | `PRODUCT.md` lists no current bet | `productos:opportunities` if `opportunities.md` exists, else `productos:research-plan` |
   | 8 | `evidence.md` has no entry dated in the last 60 days | `productos:feedback` or `productos:research-plan` |
   | 9 | `strategy.md` does not exist | `productos:strategy` |
   | 10 | `product/updates/` has no file from the last 14 days | `productos:update` |
   | 11 | None of the above | `productos:drift` |

3. Note up to two other rows that are also true. These are the alternatives.
4. Reply in chat in the format below, then ask: "Run it?"
5. If the person says yes, load the recommended skill. If they choose another skill, load that one.

## Output

Chat only. Write no file.

```text
Next: <skill> on <file or bet>.
Why: <the condition, with the file that shows it>.
Also open: <up to two other skills, each with its reason in a few words>, or "nothing else".
Run it?
```

## Check before you finish

- [ ] The reply recommends exactly one skill.
- [ ] The reason names the file that makes the condition true.
- [ ] The reply lists two alternatives at most.
- [ ] No file was written or changed.

## Then

- Load the skill the person chooses.

## Source

ProductOS convention.
