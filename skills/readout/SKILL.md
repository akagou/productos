---
name: readout
description: Use when the read date of a launch, test or experiment has come, when someone asks "did it work?", "what happened after launch?", "should we keep this?", or wants results compared with what was expected and a keep, change or stop call.
---

# Readout

Writes `product/bets/<slug>/readout.md`: what the team expected, what happened, and a verdict of Keep, Change or Stop. The agent pulls the numbers and drafts the comparison. A named person decides the verdict. The threshold was set before launch, and nobody moves it after seeing data.

## When to use

- The read date in the pitch, the tests or `launch.md` has come.
- "Did it work?", "results", "keep or kill?", "experiment readout".
- The plan to measure goes in `productos:launch` or `productos:test`. A stakeholder summary follows this one, in `productos:update`.

## Before you start

- Read `product/PRODUCT.md`, then the pitch, `launch.md` and any test files in the bet folder.
- Read the assumptions and evidence that mention the bet.
- Find the data: a dashboard, a query, an export. If you cannot reach it, ask the person for the numbers and their source, one question at a time, 3 at most.

## Steps

1. Copy what was expected: metric, threshold and read date. Link the file each one comes from. If the threshold exists in no file, write "No threshold set", and do not invent one.
2. Write what happened. Give each number with its source or query, and label it Measured. Write qualitative signals such as interviews, support threads and comments as Observed or Told. Write the sample size.
3. Compare the result with the threshold. Do not change the threshold.
4. Read the guardrail metrics. State any that moved the wrong way.
5. List what else may explain the result: season, other launches, campaigns, outages, a change in who was in the sample. Say which ones you checked.
6. List the surprises: anything the team did not expect, in either direction.
7. Give the verdict from Keep, Change or Stop, with the reason. A person confirms it.
8. If the data cannot support a verdict, write no verdict. Say what data is missing and set a new read date.
9. Write what changes: assumption statuses, new evidence, and opportunities.

## Output

Write `product/bets/<slug>/readout.md`.

```markdown
---
skill: readout
status: Draft
updated: YYYY-MM-DD
owner: <name>
bet: <slug>
read_date: YYYY-MM-DD
---

# Readout: <bet name>

## What we expected
| Metric | Threshold | Read date | Source |
|---|---|---|---|
| <metric> | <number> | <date> | [<file>](<link>) |

## What happened
| Metric | Result | Sample | Source or query | Confidence |
|---|---|---|---|---|
Qualitative signals:
- <signal> (<Observed or Told>, <source>)

## Guardrail metrics
| Metric | Baseline | Result | Moved the wrong way? |
|---|---|---|---|

## Other explanations
- <factor>: <checked or not, and what it showed>

## Surprises
- <surprise>

## Verdict
<Keep | Change | Stop>: <reason, in one or two sentences, comparing the result with the threshold>. Decided by <name>.

<If no verdict: "No verdict. Missing: <data>. New read date: <date>.">

## Updates
| Log | Entry | Change |
|---|---|---|
| assumptions.md | A-<id> | <old status> to <new status> |
| evidence.md | E-<id> | <new finding> |
| opportunities.md | <name> | <change> |
```

## Check before you finish

- [ ] The expected metric, threshold and read date link to the files they come from.
- [ ] The threshold is the same as before launch.
- [ ] Each number has a source or query, a sample size and a confidence label.
- [ ] Qualitative signals are labeled Observed or Told, and no AI-written text is labeled above Guess.
- [ ] The readout lists guardrail metrics and at least one other explanation.
- [ ] The verdict is Keep, Change or Stop with a reason, or the readout gives no verdict, the missing data and a new read date.
- [ ] A named person decided the verdict.
- [ ] Each assumption that the result touches has a new status, and each new finding has an evidence entry.

## Then

- Update `product/assumptions.md`: set each tested assumption to Supported or Refuted, with the readout as the test link.
- Add evidence entries to `product/evidence.md` with the next free IDs and the label Measured or Observed.
- Update `product/opportunities.md` where the result changes an opportunity.
- Record the verdict with `productos:decision`, and set the bet's stage in `PRODUCT.md`.
- Suggest `productos:update` to share the result, and `productos:next` for the next bet.

## Source

ProductOS convention. The verdict follows the learning card in *Testing Business Ideas* (Bland and Osterwalder, 2019).
