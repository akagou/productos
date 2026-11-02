---
name: assumptions
description: Use when a pitch, spec, strategy or opportunity is written and the team asks "what must be true?", "what are we assuming?", "what is the riskiest part?", "what should we test first?", or before a team commits to a bet.
---

# Assumptions

Maintains `product/assumptions.md`, the log of everything that must be true for a bet to work. It reads a document, extracts the assumptions, writes each as a statement that a test can prove false, and ranks them. The top of the list is what the team tests first.

## When to use

- After `productos:pitch`, `productos:spec`, `productos:strategy` or `productos:opportunities`.
- "What are we assuming?", "what could kill this?", "what do we test first?".
- When new evidence changes the confidence or status of an existing assumption.
- Not for running a test: use `productos:test`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read the source document: a pitch, spec, strategy or opportunities file. Ask for its path if it is not clear.
- Read the current `product/assumptions.md` and `product/evidence.md`. Reuse an existing ID before you add a new one.

## Steps

1. Read the source document. List every claim that the bet depends on, as the document states it or implies it.
2. Prompt for each risk type in turn, and add what the document missed.
   - Value: will customers want this and choose it over what they use now?
   - Usability: can they figure out how to use it?
   - Feasibility: can we build it with our time, skills and technology?
   - Viability: does it work for the business, including cost, law, sales and support?
3. Write each assumption as a statement that a test can prove false. Add a number where possible. "At least 30% of trial teams invite a second member in week 1" passes. "Users will like collaboration" fails.
4. Give each assumption the next free ID in the form A-001, a risk type, and a confidence label. Anything you inferred from the document and not from a customer is Guess.
5. Look in `evidence.md` for support. If an entry exists, link its ID and use its confidence. If it has none, keep Guess.
6. Rank by two ratings from 1 to 3. Dependence: how much of the bet fails if this is false. Evidence gap: 3 for Guess, 2 for Told, 1 for Observed or Measured. Sort by dependence times gap, highest first. Break ties by which test is cheaper.
7. For each of the top 5, suggest the smallest test that could prove it false, and write it in the Test column as a short phrase.
8. Update `product/assumptions.md`. Add new rows, and edit the status, confidence and "Updated" date of existing rows. Do not delete rows. A Refuted assumption stays in the log.
9. Show the ranked top 3 for the bet in chat, each with its ID, statement and suggested test. Ask the person which to test first.

## Output

Write `product/assumptions.md`. Keep the log format from `productos:start` and add rows.

```markdown
---
skill: assumptions
status: Draft
updated: YYYY-MM-DD
---

# Assumptions

| ID | Assumption | Bet | Risk | Confidence | Status | Test | Updated |
|---|---|---|---|---|---|---|---|
| A-001 | <Statement a test can prove false, with a number.> | <slug> | Value | Guess | Open | <short phrase, or test card link> | YYYY-MM-DD |
```

Write the ranking for the bet in chat, with this shape:

```
Top 3 for <slug>
1. A-0xx <statement>. Test: <method>. Why first: <dependence and gap>.
2. ...
3. ...
```

## Check before you finish

- [ ] Each assumption is a statement that a test can prove false.
- [ ] Each assumption has a number where a number is possible, or a reason it has none.
- [ ] Each row has an ID, a bet slug, one risk type, a confidence label and a status, each written exactly as in the lists.
- [ ] All 4 risk types were considered, and the file or chat says which have no assumptions and why.
- [ ] No row was deleted, and changed rows have a new "Updated" date.
- [ ] The ranking uses dependence and evidence gap, and the top 3 are named in chat.
- [ ] No assumption is marked Supported on the word of the agent.

## Then

- Run `productos:test` on the top assumption. If the cheapest test is a built artifact, use `productos:prototype`.
- After the top assumption is Refuted or Supported, update the bet's pitch, and suggest `productos:review`.
- Record any decision to stop a bet, because of a Refuted assumption, with `productos:decision`.

## Source

The assumption types and the practice of ranking assumptions by importance and evidence come from *Testing Business Ideas* (Bland and Osterwalder, 2019). The 4 risks, Value, Usability, Feasibility and Viability, come from *Inspired* (Cagan, 2017).
