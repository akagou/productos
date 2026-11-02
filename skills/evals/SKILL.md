---
name: evals
description: Use when an AI feature needs a way to measure output quality, when someone asks "how do we know the AI is good enough?", for an eval set, a grader, a pass threshold, a rubric or regression tests for prompts, or before an AI feature launches.
---

# Evals

Writes `product/bets/<slug>/evals.md`: the plan that tells the team whether an AI feature works well enough to ship and to keep changing. The agent drafts the criteria, finds examples and computes results. A named person sets each threshold before the first run, and nobody moves it afterward.

## When to use

- An AI feature has a spec and an `ai-scope.md`.
- "How do we test the AI?", "what is good enough?", "set up evals", "we changed the prompt, is it better?"
- Not for the limits on what the AI may do: use `productos:ai-scope`.
- Not for rollout and measurement of the whole feature: use `productos:launch`.

## Before you start

- Read `product/PRODUCT.md`, `spec.md` and `ai-scope.md` in the bet folder. If `ai-scope.md` does not exist, offer `productos:ai-scope` first.
- Find real examples: logs, tickets, support threads, files users supplied. Check that the team may use them, and anonymize them.
- Ask the owner one question at a time, 3 at most: who judges quality, which failure matters most, and what a bad output costs.

## Steps

1. Write what good output looks like as criteria. Trace each criterion to an acceptance criterion in the spec or to a failure mode in `ai-scope.md`. Write the ID.
2. Build the eval set. Start with 20 to 50 real examples. Include edge cases and adversarial cases. Use real data first, then hand-written examples. Synthetic examples are allowed for coverage. Label each one synthetic. They say nothing about how often a case happens in real use.
3. Choose a grader for each criterion. Code checks (exact match, regex or schema) come first where they work. A model grader with a written rubric covers the rest. Human review of a sample covers what neither can judge.
4. Check each model grader against human labels on a sample before anyone trusts it. Record the agreement rate. Anything a model grader scores without a check is a Guess.
5. Set the metrics and the pass thresholds as numbers. A person sets them before the first run. Write the date they were set.
6. Set when to run: on every prompt, model or tool change.
7. Choose online signals for after launch: user corrections, undo rate, ratings, escalations. Give each an owner and a review schedule.
8. Estimate the cost of one full run and of the monthly total.
9. Run the evals if the feature exists. Paste the results in the run log. Add every real failure to the eval set.

## Output

Write `product/bets/<slug>/evals.md`.

```markdown
---
skill: evals
status: Draft
updated: YYYY-MM-DD
owner: <name>
bet: <slug>
thresholds_set: YYYY-MM-DD
---

# Evals: <bet name>

## What good looks like
| Criterion | Traces to | Grader |
|---|---|---|
| <criterion> | <AC number or failure mode> | <code, model or human> |

## Eval set
- Size: <n> examples. Real: <n>. Hand-written: <n>. Synthetic: <n>.
- Edge cases: <n>. Adversarial: <n>. Safety set: <n>.
- Source and anonymization: <how>.
- Location: <path>

## Graders
| Grader | Type | Rubric or check | Agreement with human labels |
|---|---|---|---|
| <name> | <code, model or human> | <text or link> | <rate and sample size, or "Not checked yet" (Guess)> |

## Metrics and thresholds
| Metric | Pass threshold | Result | Confidence |
|---|---|---|---|
| Schema-valid | at or above 99% | | |
| Rubric pass | at or above 85% | | |
| Safety set failures | 0 | | |

## When to run
<On every prompt, model or tool change.> Owner: <name>.

## Online signals after launch
| Signal | Owner | Review schedule | Alarm level |
|---|---|---|---|

## Cost of running
<Cost per run and per month, with the basis.> (<Confidence>)

## Run log
| Date | Change tested | Results | Verdict |
|---|---|---|---|
```

The thresholds in the table are examples. Replace them with the numbers the owner sets.

## Check before you finish

- [ ] Each criterion traces to an acceptance criterion or a failure mode.
- [ ] The eval set has 20 or more examples, with edge cases, adversarial cases and a safety set.
- [ ] Each synthetic example is labeled, and no frequency claim rests on synthetic data.
- [ ] Each model grader has a rubric and a recorded agreement rate with human labels.
- [ ] Every threshold is a number, and `thresholds_set` is dated before the first run in the run log.
- [ ] The plan says to run the evals on every prompt, model or tool change.
- [ ] Each online signal has an owner and a review schedule.
- [ ] The cost of running the evals has a confidence label.

## Then

- Add a new assumption to `product/assumptions.md` for each criterion the team cannot yet meet.
- Add real findings from runs to `product/evidence.md` with the label Measured.
- Make "evals pass" a line in the readiness checklist of `productos:launch`.
- Suggest `productos:review` with the ai-risk angle.

## Source

The case for error analysis and a small, reviewed eval set follows "Your AI Product Needs Evals" (Husain, 2024). Checking a model grader against human labels follows "Who Validates the Validators?" (Shankar et al., 2024).
