---
name: prioritize
description: Use when the team has more bets or ideas than capacity and asks "what first?", "rank these", "RICE", "cost of delay", "what do we cut" or "what goes on the roadmap", or when stakeholders argue about order.
---

# Prioritize

Writes `product/priorities.md`: a ranked list of bets or ideas, a cut line from the team's capacity, a "not now" list and a sensitivity line. The agent does the scoring and a named person sets the final order. Git keeps the earlier versions of the file.

## When to use

- "Rank these bets", "what should we do first?", "RICE this list".
- Before a planning meeting, or when a new request arrives and the list must change.
- To decide whether one idea is worth doing, use `productos:assess`.
- To choose among solutions to one problem, use `productos:opportunities` instead.

## Before you start

- Read `product/PRODUCT.md`, `outcomes.md`, `evidence.md` and `assumptions.md`. Read any `pitch.md` or `assess.md` in `product/bets/`.
- Read the earlier `product/priorities.md` if it exists, and use its capacity figure as the default.
- You need the list of items and the team's capacity for the period, in person-weeks. Ask for what is missing, one question at a time, 3 at most.

## Steps

1. List the items. Each one is a bet or an idea with a slug, and each has an owner.
2. Choose one method, and say why in a sentence.
   - RICE, when the items are comparable and data exists. Score = Reach x Impact x Confidence / Effort.
   - Cost of delay divided by duration, when timing matters, for example a deadline, a market window or a growing loss. Score = cost of delay per week / weeks to build.
3. Score every input. Reach is a count per period. Impact is 0.25, 0.5, 1, 2 or 3. Effort is in person-weeks. Cost of delay is value per week.
4. Give each input a confidence label: Guess, Told, Observed or Measured. In RICE, convert the label to a multiplier: Guess 0.5, Told 0.7, Observed 0.9, Measured 1. State this table in the file.
5. Round every number to one or two significant figures. A score of 4,127 reads as 4,100. False precision hides how rough the inputs are.
6. Rank by score. Do not fix the order by hand. Show the person the ranking before you apply any judgment.
7. Draw the cut line. Add the effort of the ranked items from the top until the capacity is full. Items below the line go in the "Not now" list, each with a reason and a revisit date. An item below the line is not a failure. It is a stated choice.
8. Write the sensitivity line: which single input change would reorder the top 3. Test each input of the top items by raising and lowering it by one step.
9. Present the ranking and ask the named person for the final order. They may move items against the scores. Write down the reason for each move.

## Output

Write `product/priorities.md`.

```markdown
---
skill: prioritize
status: Draft
updated: YYYY-MM-DD
owner: <name>
method: RICE | Cost of delay
capacity: <person-weeks, period>
---

# Priorities

## Method
<Method>, because <reason>. Confidence multipliers: Guess 0.5, Told 0.7, Observed 0.9, Measured 1.

## Ranking
| Rank | Bet | Reach | Impact | Confidence | Effort | Score |
|---|---|---|---|---|---|---|
| 1 | <slug> | <n per period> | <0.25-3> | <label> | <person-weeks> | <rounded> |

## Cut line
Capacity is <n> person-weeks. The items above the line need <n>.

## Not now
| Bet | Reason | Revisit |
|---|---|---|

## Sensitivity
<Input and change> would move <bet> above <bet>. (<Confidence>)

## Final order
Set by <name> on <date>. <Moves against the scores, with reasons, or "No changes".>
```

For cost of delay, replace the Reach, Impact and Confidence columns with "Cost of delay per week", "Basis" and "Confidence".

## Check before you finish

- [ ] The file names one method with a reason.
- [ ] Every input has a confidence label, and the label table is in the file.
- [ ] Numbers are rounded, and no score has more than 2 significant figures.
- [ ] The cut line follows from a stated capacity.
- [ ] "Not now" lists every item below the line, each with a reason and a revisit date.
- [ ] The sensitivity line names one input and the items that swap.
- [ ] A named person set the final order, and each move against the scores has a reason.

## Then

- Record the final order with `productos:decision`.
- Update "Current bets" in `PRODUCT.md`.
- For the top item without a pitch, suggest `productos:pitch`.
- If the top items are mostly Guess, suggest `productos:assumptions` and `productos:test` before the team commits.
- When the order changes the plan for the quarter, suggest `productos:roadmap`.

## Source

RICE comes from "RICE: Simple prioritization for product managers" (McBride, Intercom, 2016). Cost of delay divided by duration comes from *The Principles of Product Development Flow* (Reinertsen, 2009).
