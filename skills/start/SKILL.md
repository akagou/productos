---
name: start
description: Use when a product repo has no product/ folder, when someone says "set up ProductOS", "onboard this product" or "write down what this product is", or when another ProductOS skill needs product/PRODUCT.md and it does not exist.
---

# Start

Sets up `product/` in the product's repo: a front page, `PRODUCT.md`, and three empty logs for assumptions, evidence and decisions. Every later skill reads the front page first, so it must be short and correct. Any fact the team has not confirmed is labeled Guess.

## When to use

- A new product, or an existing product with no `product/` folder.
- "Set up ProductOS here", "write down what this product is".
- Not for writing strategy: use `productos:strategy` after this.

## Before you start

- If `product/PRODUCT.md` exists, stop and offer `productos:next`.
- Find what the repo already says about the product: the README, docs, landing page copy, the app manifest, and the last 30 commit messages.

## Steps

1. Draft the front page from those sources. Label every statement Guess, because nobody has confirmed it yet.
2. Ask the person to confirm or correct the draft. Ask one question at a time, at most five, in this order:
   1. Who is it for?
   2. What is their problem, in their words?
   3. What do they use today?
   4. Which one number shows that the product works?
   5. What is the team working on now?

   Skip a question the person has already answered. If they say "just draft it", stop asking.
3. When the person confirms a statement, change its label from Guess to Told. Keep their words.
4. Create the four files below. Create no other files: each skill creates its own file the first time it runs.
5. If raw research such as transcripts, recordings or exports will be stored in the repo, add `product/research/raw/` to `.gitignore`. Raw notes often contain names and contact details.
6. If the repo has an `AGENTS.md` or `CLAUDE.md`, ask to add this line to it: `Product context is in product/. Read product/PRODUCT.md before product work.`

## Output

Write `product/PRODUCT.md`:

```markdown
---
skill: start
status: Draft
updated: YYYY-MM-DD
---

# <Product name>

<One sentence: what it is and who it is for.>

## Who it is for
<A person specific enough to recruit for an interview.> (<Confidence>)

## Their problem
<In their words, with a quote where there is one.> (<Confidence>)

## What they use today
<Tools, workarounds, other people, or nothing.> (<Confidence>)

## How we know it works
<One number, its current value and its source, or "Not measured yet".>

## Strategy
<Three lines, or "Not written yet".>

## Current bets
| Bet | Stage | Owner | Link |
|---|---|---|---|

## Team
<Names and roles.>

## Open questions
- <question>
```

Write `product/assumptions.md`:

```markdown
---
skill: assumptions
status: Draft
updated: YYYY-MM-DD
---

# Assumptions

| ID | Assumption | Bet | Risk | Confidence | Status | Test | Updated |
|---|---|---|---|---|---|---|---|
```

Write `product/evidence.md`:

```markdown
---
skill: synthesis
status: Draft
updated: YYYY-MM-DD
---

# Evidence

| ID | Finding | Confidence | Source | Date | Used in |
|---|---|---|---|---|---|
```

Write `product/decisions.md`:

```markdown
---
skill: decision
status: Draft
updated: YYYY-MM-DD
---

# Decisions

Newest first. Each entry uses the format in productos:decision.
```

## Check before you finish

- [ ] `PRODUCT.md` is under 300 words.
- [ ] Statements about customers, their problem or numbers have a confidence label, and Guess marks each one the person did not confirm.
- [ ] "Who it is for" names a person you could find and interview. A market segment such as "small businesses" fails this check.
- [ ] "Their problem" does not mention the product.
- [ ] `product/` contains only the four files.

## Then

- If the product has screens and the repo has no `DESIGN.md`, suggest `productos:design-system`. It puts the team's colors and type in one file.
- If "How we know it works" says "Not measured yet", suggest `productos:outcomes`.
- Otherwise suggest `productos:next`.

## Source

The order of customer, problem and existing alternatives follows the Lean Canvas (Maurya, *Running Lean*, 2012).
