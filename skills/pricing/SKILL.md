---
name: pricing
description: Use when a team sets or changes a price, asks "how should we charge", "what should the tiers be", "is our price too low", "should we raise prices", "usage-based or seats", or needs the margin on AI features before launch.
---

# Pricing

Writes `product/pricing.md`: the value metric, the packaging, the evidence on willingness to pay, the unit economics, the AI usage rules and the rollout plan. The agent gathers prices and computes margins. A named person sets the price. A price is never Measured until customers have paid it.

## When to use

- "How should we charge?", "design the tiers", "raise the price", "price the AI feature".
- Before a launch, or when margins look wrong.
- For the market's prices only, use `productos:market-scan`. For who the product is for, use `productos:positioning`.

## Before you start

- Read `product/PRODUCT.md`, `positioning.md`, `strategy.md`, `evidence.md`, the latest market scan in `product/research/`, and any `ai-scope.md` under `product/bets/`.
- Read `product/voice.md` if it exists. Write customer copy in that voice.
- If `product/pricing.md` exists, update it and keep the current price table.
- You need the price owner. Ask: "Who sets the price?" The answer must be one person.
- You need current prices and customer counts, if the product is live. Ask for what is missing, one question at a time, 4 at most.

## Steps

1. Pick the value metric: the unit customers pay by, which grows with the value they get, such as seats, units managed, messages or usage. List at least 2 candidates. For each one, say how it tracks value, how easy it is to predict and to count, and how it could hurt customers. Choose one and give the reason.
2. Design the packaging. For each tier, write who it is for, what it contains and the limit that separates it from the next tier.
3. Collect willingness-to-pay evidence. Use conversations about what customers pay now and what would be too much. A Van Westendorp survey asks 4 questions: at what price is it too cheap, a bargain, getting expensive, too expensive. Label survey and interview answers Told, because they are stated and not paid.
4. List competitor prices from `productos:market-scan`, each with plan name, source URL and access date. If a price is missing, write Guess.
5. Compute unit economics per tier. Cost to serve = hosting + support + AI model cost. AI model cost = cost per task from `ai-scope.md` x expected tasks per customer per month. Show the gross margin, with the arithmetic and a label on each input.
6. For AI usage, decide how to limit it: a cap, credits or overage. Write the rule, the number and what the customer sees at the limit.
7. If customers already pay, plan the change: how long they keep the old price, the notice period and the message they receive.
8. Plan a price test with `productos:test` before a full rollout. Name the metric and the stop condition.
9. Ask the named person to set the price. Do not set it yourself. Write their name and the date.

## Output

Write `product/pricing.md`.

```markdown
---
skill: pricing
status: Draft
updated: YYYY-MM-DD
owner: <name>
---

# Pricing: <product>

## Value metric
| Candidate | Tracks value | Easy to count | Risk | Confidence |
|---|---|---|---|---|
Chosen: <metric>, because <reason>.

## Packaging
| Tier | For | Contains | Limit | Price | Confidence |
|---|---|---|---|---|---|

## Willingness to pay
| Source | Finding | Confidence |
|---|---|---|

## Competitor prices
| Alternative | Plan | Price | Source, accessed YYYY-MM-DD |
|---|---|---|---|

## Unit economics
| Tier | Cost to serve | AI cost | Price | Gross margin | Confidence |
|---|---|---|---|---|---|

## AI usage rules
<Cap, credits or overage, the number, what the customer sees.> (<Confidence>)

## Change plan
<Old price kept until, notice period, message.>

## Price test
<Test card link, metric, stop condition.>

## Decision
Price set by <name> on <date>. Record: <D-ID>.
```

## Check before you finish

- [ ] The value metric section compares at least 2 candidates and gives a reason.
- [ ] Each tier states who it is for, what it contains and the limit.
- [ ] Survey and interview answers are labeled Told.
- [ ] No price is labeled Measured unless customers have paid it.
- [ ] Each competitor price has a plan, a URL and an access date.
- [ ] The unit economics show the AI cost as cost per task x volume, with the source `ai-scope.md`.
- [ ] A named person is listed as the one who sets the price.
- [ ] The file has a price test and, for existing customers, a change plan.

## Then

- Record the price with `productos:decision`. A price rise for existing customers is usually One-way.
- Add each Guess input to `product/assumptions.md`.
- Run the price test with `productos:test`, then update this file with the result.
- Suggest `productos:launch` once the price is agreed.

## Source

The value metric and packaging steps follow Ramanujam and Tacke, *Monetizing Innovation* (2016). The four price questions come from Van Westendorp, the price sensitivity meter (1976).
