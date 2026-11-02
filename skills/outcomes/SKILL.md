---
name: outcomes
description: Use when a team asks how to measure success, "what is our North star", "define metrics", "write OKRs", "are we moving the right number", or when PRODUCT.md says "Not measured yet". Also when a goal lists features instead of changes in behavior.
---

# Outcomes

Writes `product/outcomes.md`: one North star metric, 2 to 4 Input metrics the team can move week to week, and at least 1 Guardrail metric that must not get worse. An outcome is a change in customer behavior. A feature shipped is an output, and the skill keeps the two apart.

## When to use

- "Define success", "pick a metric", "write our OKRs", "what should we track".
- A team that reports features shipped as results.
- For direction and approach, use `productos:strategy`. For the result of one launch, use `productos:readout`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/strategy.md` and `product/evidence.md` if they exist. Take any target moved from the strategy.
- Find out whether the team uses OKRs and which data source has the numbers. Ask one question at a time, 3 at most. When the person says "just draft it", mark every value Guess.

## Steps

1. List what the team calls goals. Sort each into an output (something shipped) or an outcome (a change in what customers do or what the business gets). Move outputs to a "Not outcomes" list with the outcome each one is meant to cause.
2. Pick the North star: the one customer behavior or business result that shows customers get value. Write its current value, target, target date and data source. Each value gets a confidence label. A value with no data source is Guess.
3. Test the North star. Ask: can the team move it by working harder this quarter, and does it fall if customers are worse off? If the answer to either is no, it may be a vanity metric. Typical cases are total sign-ups, page views and downloads. Flag it, and offer a replacement.
4. Pick 2 to 4 Input metrics: the behaviors or rates that lead to the North star and that the team can change within a week. Write each with current value, target, date, source and confidence.
5. Pick at least 1 Guardrail metric: a number that must not get worse while the team chases the others, such as error rate, refund rate or support load. Write the limit.
6. Count the metrics. If there is more than one North star, or more than 4 Input metrics, ask the person to cut.
7. If the team uses OKRs, add the same content as an objective with key results. Each key result is a metric from this file. Add no new numbers.
8. Mark every value that an AI wrote or estimated as Guess. Ask the person to name an owner for each metric.
9. Write one line for "How we know it works" in `PRODUCT.md`: the North star, its value and its source.

## Output

Write `product/outcomes.md`.

```markdown
---
skill: outcomes
status: Draft
updated: YYYY-MM-DD
owner: <name>
---

# Outcomes: <product name>

## North star
| Metric | Current | Target | Date | Source | Owner |
|---|---|---|---|---|---|
| <behavior or result> | <value> (<Confidence>) | <value> (<Confidence>) | YYYY-MM-DD | <data source> | <name> |

Why it matters: <one sentence> (<Confidence>)

## Input
| Metric | Current | Target | Date | Source | Owner |
|---|---|---|---|---|---|

## Guardrail
| Metric | Current | Limit | Source | Owner |
|---|---|---|---|---|

## Not outcomes
- <Output>. It should cause: <outcome>.

## Flagged as vanity
- <Metric>. Why: <reason>. Replace with: <metric>.

## OKR view
<Delete this section if the team does not use OKRs.>
Objective: <one sentence>
- KR1: <Input or North star metric>, from <value> to <value> by <date>.
```

## Check before you finish

- [ ] The file has exactly one North star.
- [ ] It has 2 to 4 Input metrics and at least 1 Guardrail.
- [ ] Each metric has a current value, a target, a date, a data source and an owner.
- [ ] Each value has a confidence label, and a value with no source is Guess.
- [ ] No metric counts features shipped or tasks done.
- [ ] Each flagged vanity metric has a replacement.
- [ ] The OKR view, if present, uses only metrics from this file.

## Then

- Update "How we know it works" in `PRODUCT.md` with the line from step 9.
- Suggest `productos:roadmap` to link each item to an outcome.
- If a North star value is Guess, suggest a task to measure it, and add the task to the open questions.
- Record the North star choice with `productos:decision`.

## Source

Outputs and outcomes come from *Outcomes Over Output* (Seiden, 2019). Objectives and key results come from *Measure What Matters* (Doerr, 2018).
