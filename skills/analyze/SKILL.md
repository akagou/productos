---
name: analyze
description: Use when someone asks a question of product data, such as "why did activation drop?", "how many teams use X?", "pull the numbers", or asks for a funnel, a cohort or a retention cut, or for a number to put in a pitch or readout.
---

# Analyze

Answers one question from product data and writes `product/research/<YYYY-MM-DD>-<slug>-analysis.md`. The agent writes the query, runs it with read-only access and checks the result before it reports. A number is Measured only after the query has run and passed the checks.

## When to use

- "Why did X drop?", "how many teams use X?", "pull the numbers", funnel, cohort and retention questions.
- A number is needed for a pitch, an outcome or a readout.
- For interviews and notes, use `productos:synthesis`. For the readout of a shipped bet, use `productos:readout`.

## Before you start

- Read `product/PRODUCT.md` and `outcomes.md`. Metric definitions come from `outcomes.md`.
- Read `product/evidence.md` for numbers the team already knows.
- Find the data source: a warehouse or analytics connector, a database the team gives read access to, or a CSV export. If there is none, ask the person for one. Ask one question at a time.

## Steps

1. Restate the request as one measurable question, with a metric, a population and a date range. Name the decision it informs and the person who makes it.
2. Check each metric against its definition in `outcomes.md`. If the request uses another definition, say so and ask which one to use.
3. Write the query. Show it in chat before you run it.
4. Use read-only access. Never write to production data. Run on a replica or an export when one exists.
5. If you have no data access, stop here. Give the person the query and ask them to run it and paste the result. Label nothing Measured until the result comes back.
6. Run the query.
7. Run sanity checks before you read the result:
   - Row counts match what you expect.
   - The date range is complete.
   - Null counts in the key columns are low and explained.
   - There are no duplicate rows or duplicate users.
   - One total matches a number the team already knows, such as paid seats or monthly sign-ups.
8. If a check fails, fix the query or report the failure. Do not report the number.
9. Report the result in numbers, with the denominator. Label it Measured, and name the source and the date range.
10. Add segment cuts only where they change the answer, for example by plan, by account size or by sign-up month.
11. List the caveats: sample size, seasonality, tracking changes during the period, and the customers missing from the data.
12. Write what the result shows and what it does not show. A correlation does not show a cause. Name an experiment that would.
13. Add the main finding to `product/evidence.md`.

## Output

Write `product/research/<YYYY-MM-DD>-<slug>-analysis.md`.

```markdown
---
skill: analyze
status: Draft
updated: YYYY-MM-DD
owner: <name>
source: <warehouse, database or file>
---

# Analysis: <question>

## Question
<One measurable question.> Informs: <decision>, made by <name>.

## Metric definitions
<Metric>: <definition>. Source: outcomes.md, or "Defined here, Guess".

## Query
```sql
<the query, as run>
```
Access: <read-only, replica or export>. Run on: YYYY-MM-DD.

## Sanity checks
| Check | Result | Pass |
|---|---|---|
| Row count | | |
| Date range | | |
| Nulls | | |
| Duplicates | | |
| Total against known number | | |

## Result
<Numbers with denominators.> (Measured, <source>, <date range>)

## Segments
<Only the cuts that change the answer.> (Measured)

## Caveats
- <caveat>

## What this shows
<Plain sentences.>

## What this does not show
<Plain sentences, including any cause the data cannot prove.>
```

## Check before you finish

- [ ] The question is one sentence with a metric, a population and a date range.
- [ ] The file names the decision the answer informs.
- [ ] Metric definitions match `outcomes.md`, or the file says why not.
- [ ] The query appears in the file exactly as it ran, and it is read-only.
- [ ] The sanity checks table has a result for each check, including one total compared with a known number.
- [ ] Every number has a denominator and a confidence label. Measured appears only if the query ran.
- [ ] The file lists caveats and states what the result does not show.

## Then

- Add the main finding to `product/evidence.md` with the next free ID, the confidence label, and a link to this file.
- If the result supports or refutes an assumption, propose the status change to the person. Update `product/assumptions.md` after they confirm.
- If the result changes a metric target, suggest `productos:outcomes`.
- A result that may change a decision goes to a person: offer `productos:decision`.

## Source

The habit of sanity checks before trusting a number comes from Kohavi, Tang and Xu, *Trustworthy Online Controlled Experiments* (2020).
