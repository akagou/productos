---
name: opportunities
description: Use when the team needs to choose which customer problem to work on, asks for an opportunity solution tree or "what should we build next", has a list of feature requests to sort out, or needs to compare several solutions for one problem.
---

# Opportunities

Writes `product/opportunities.md`: an opportunity solution tree as a nested list. The root is the North star metric, the branches are customer needs, pains and desires, and the leaves under one target opportunity are 3 or more candidate solutions with their riskiest assumptions. The tree forces a team to compare solutions before it picks one.

## When to use

- "Opportunity solution tree", "what problem should we take next", "we have 20 feature requests".
- After research or a synthesis, to turn findings into a map of needs.
- To judge a single idea from a stakeholder, use `productos:assess`.
- To rank whole bets, use `productos:prioritize` instead.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/outcomes.md` for the North star metric. If it does not exist, offer `productos:outcomes`. Without it, write "No outcome yet" at the root.
- Read `product/evidence.md`, `product/research/` and `product/assumptions.md` if they exist.
- You need customer evidence. If there is none, ask one question: "What have customers told you in their own words?" Label the answers Told. Ask at most 3 questions.

## Steps

1. Put the North star metric at the root, with its current value and source.
2. Extract opportunities from the evidence. Write each one as a need, pain or desire in the customer's words, with a short quote where one exists. Give each an ID: O1, O2, and O1.1 for a child.
3. Test each opportunity. A solution written as a need fails: "We need a dashboard" becomes "I cannot tell which accounts are about to leave". Rewrite it from the evidence, or drop it.
4. Nest by theme. A child opportunity is a narrower form of its parent. Keep the tree to 3 levels.
5. Give each opportunity evidence IDs from `evidence.md`. If there are none, label it Guess. Never invent a quote.
6. Ask the person to choose one target opportunity, a leaf that is narrow enough to solve in one bet. Write the reason in a sentence, for example size, frequency, strategic fit or evidence strength. The person decides. You propose.
7. Under the target, list at least 3 candidate solutions: S1, S2, S3. Make them different in kind, not 3 sizes of one idea. Include one that needs no new software.
8. Under each solution, list its riskiest assumptions. Add each one to `product/assumptions.md` with the next free ID and a risk type. Link the ID in the tree.
9. Say which solution looks most promising to you, with one reason, and label it Guess.

## Output

Write `product/opportunities.md`.

```markdown
---
skill: opportunities
status: Draft
updated: YYYY-MM-DD
owner: <name>
target: <opportunity ID>
---

# Opportunities

## Target
<Opportunity ID and text.> Chosen by <name> because <reason>. (<Confidence>)

## Tree
- **North star:** <metric>, now <value> (<source>)
  - **O1** <need in the customer's words> (<Confidence>, <evidence IDs>)
    - **O1.1** <narrower need> (<Confidence>, <evidence IDs>)
      - **S1** <solution> (<Confidence>)
        - A-xxx <riskiest assumption> (<risk type>)
      - **S2** <solution> (<Confidence>)
        - A-xxx <riskiest assumption> (<risk type>)
      - **S3** <solution> (<Confidence>)
        - A-xxx <riskiest assumption> (<risk type>)
  - **O2** <need> (<Confidence>, <evidence IDs>)

## Not chosen
- <Opportunity ID>: <reason, in one line>

## Open questions
- <question>
```

## Check before you finish

- [ ] The root is the North star metric from `outcomes.md`, or says "No outcome yet".
- [ ] Each opportunity describes a customer need, pain or desire, and names no solution.
- [ ] Evidence IDs or the label Guess back each opportunity.
- [ ] The document names one target opportunity and the reason, and a person chose it.
- [ ] The target has at least 3 solutions that differ in kind.
- [ ] Each solution has at least one assumption, and each ID exists in `product/assumptions.md`.
- [ ] Any quote came from `evidence.md` or from the person. No quote was written by the agent.

## Then

- Add the new assumptions to `product/assumptions.md` and run `productos:assumptions` on the most promising solution.
- Record the target choice with `productos:decision`.
- To judge one solution as a bet, suggest `productos:assess`, then `productos:pitch`.
- If many opportunities have the label Guess, suggest `productos:research-plan`.

## Source

The opportunity solution tree comes from *Continuous Discovery Habits* (Torres, 2021).
