---
name: test
description: Use when a team wants to check an assumption cheaply, asks "how do we test this?", "design an experiment", "fake door", "concierge test", "5 interviews", or has test results to record and needs to judge the assumption.
---

# Test

Appends test cards to `product/bets/<slug>/tests.md`. A card has two halves. Before the test, it records the hypothesis, the method, the pass threshold as a number, and the owner. After the test, it records the result, the verdict and what the team learned. The threshold is set before the test and never moves.

## When to use

- "How do we test A-003?", "design an experiment", "we ran the test, what now?".
- After `productos:assumptions` ranks the risks.
- Not for building a prototype: use `productos:prototype`, then return here to record the result.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/assumptions.md` and the row for the assumption. If there is no row, run `productos:assumptions` first.
- Read `product/bets/<slug>/tests.md` if it exists, so you do not repeat an earlier test.
- You need the assumption ID, who will run the test, and the budget in time and money. Ask for what is missing, one question at a time, 3 at most.

## Steps

1. Write the hypothesis from the assumption: "We believe <statement>." It must be possible to prove it false.
2. Choose the smallest method that gives the evidence. Options: a data pull from existing logs, 5 interviews, a survey, a fake door, a concierge test, a prototype test. Pick the cheapest one that a real person's behavior can answer. Explain the choice in a line.
3. Name the metric, and the sample and duration. Write the pass threshold as a number, for example "at least 6 of 20 visitors click Start". Ask the owner to confirm the threshold before the test begins.
4. Write the cost in hours and money, and name the owner.
5. Save the card with the status "Planned". The agent may help design the test, draft the script, write the survey or prepare the data query. It may not play the customer. A simulated user is not a test, and its output is Guess.
6. After the test, record the result as numbers: the sample, the count and the rate. Compare it to the threshold and write Pass or Fail.
7. Do not change the threshold after you see the data. If the threshold was wrong, write that in the learning, mark this card closed, and design a new card with a new threshold.
8. Update the assumption in `product/assumptions.md`.
   - Pass: status Supported.
   - Fail: status Refuted.
   - Unclear, for example a sample that is too small: status stays Testing. The card names the next test.
9. Write what was learned in two or three sentences, and the action it leads to.
10. Add an entry to `product/evidence.md` with the next free ID, the finding, the confidence Observed or Measured, the source (this card), and the date. Use Measured for numbers from real usage or a controlled test, and Observed for what people did or said in sessions.

## Output

Append to `product/bets/<slug>/tests.md`. If the file does not exist, create it with this frontmatter. Add one card per test.

```markdown
---
skill: test
status: Draft
updated: YYYY-MM-DD
bet: <slug>
---

# Tests: <bet name>

## T-001: <short name>
Assumption: A-xxx. Owner: <name>. Status: Planned | Running | Closed.

### Before
- Hypothesis: We believe <statement>.
- Method: <method>, because <reason>.
- Metric: <what is counted>.
- Pass threshold: <number>. Set on <date> by <name>. It does not change.
- Sample and duration: <n people>, <days>.
- Cost: <hours> and <money>.

### After
- Result: <counts and rates>. Dates: <from> to <to>.
- Verdict: Pass | Fail | Unclear.
- Assumption status: Supported | Refuted | Testing. Next test: <if Unclear>.
- Learned: <two or three sentences.>
- Evidence: E-xxx (<Observed | Measured>)
```

## Check before you finish

- [ ] The hypothesis can be proved false.
- [ ] The pass threshold is a number with a date and a name, and it appears before the result.
- [ ] The result gives counts and the sample size.
- [ ] The verdict matches the result and the threshold on the card.
- [ ] The assumption status in `assumptions.md` is Supported, Refuted or Testing, and matches the verdict.
- [ ] The evidence entry has the confidence Observed or Measured, and a link to the card.
- [ ] No simulated user or AI-written answer appears as a result.

## Then

- Update the Test and Updated columns in `product/assumptions.md`.
- When the result changes the bet, update the pitch and record a decision with `productos:decision`.
- If the assumption is Refuted, suggest `productos:assess` or a change of solution in `productos:opportunities`.
- Run `productos:assumptions` to re-rank the next test.

## Source

The Test Card and the Learning Card come from *Testing Business Ideas* (Bland and Osterwalder, 2019).
