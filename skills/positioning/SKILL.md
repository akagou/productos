---
name: positioning
description: Use when a team asks how to position the product, "who is it for and why us", "write a positioning statement", "what category are we in", "what is our headline", or when messaging, a landing page or sales pitches disagree about what the product is.
---

# Positioning

Writes `product/positioning.md`: the context that makes the product's value obvious to the customers who care most, and the message built from it. The agent drafts from the market scan, the jobs and the evidence. A named person decides the category and the message. Until 5 best-fit customers have reacted to it, the whole positioning is Guess.

## When to use

- "Position this product", "positioning statement", "what is our category?", "write the headline".
- Before a launch, a landing page, a sales deck or a pricing change.
- For a deep study of the alternatives, use `productos:market-scan`. For the reasons customers hire the product, see `productos:jobs`.

## Before you start

- Read `product/PRODUCT.md`, `jobs.md`, `evidence.md`, `strategy.md` and the latest `*-market-scan.md` in `product/research/`.
- If `product/positioning.md` exists, update it and keep the date of the last change.
- Without a market scan, offer `productos:market-scan` first. If the person declines, list the alternatives from `PRODUCT.md` and label each Guess.
- You need the product's strongest customers. If the evidence does not name them, ask one question: "Which customers would be hardest to lose, and why?" Ask 3 questions at most.

## Steps

1. List the competitive alternatives: what best-fit customers would do if the product did not exist. Include workarounds and doing nothing. Take them from the market scan and `jobs.md`, with source URLs.
2. List the unique attributes: the capabilities the alternatives lack. Give each one evidence. A claim about a competitor needs a source URL and an access date.
3. Turn each attribute into the value it gives customers. Write the value in the customer's words, with a confidence label.
4. Find the best-fit customers: the traits of the customers who care most about that value. Use retention, expansion or referral data where it exists. Without data, use interview evidence and label it Told or Guess.
5. Choose the market category. List at least 2 candidates. For each one, say what customers assume about it and whether that helps or hurts. Pick one and give the reason. A person confirms the choice.
6. Write the positioning statement: "For <customer> who <need>, <product> is a <category> that <key benefit>. Unlike <alternative>, it <difference>."
7. Write one headline. It states the key benefit in under 12 words.
8. Choose 3 proof points. Tie each one to an attribute and its evidence.
9. Check every sentence for a superlative such as "best" or "fastest". Keep it only with a number and a source. Otherwise delete it.
10. State the next step: show the positioning to 5 best-fit customers, and record what they say.

## Output

Write `product/positioning.md`.

```markdown
---
skill: positioning
status: Draft
updated: YYYY-MM-DD
owner: <name>
---

# Positioning: <product>

## Competitive alternatives
| Alternative | Why best-fit customers use it | Source |
|---|---|---|

## Attributes, value and evidence
| Attribute | Evidence | Value to customers | Confidence |
|---|---|---|---|

## Best-fit customers
<Traits, and the data behind them.> (<Confidence>, <evidence IDs>)

## Market category
| Candidate | What customers assume | Helps or hurts | Confidence |
|---|---|---|---|
Chosen: <category>, because <reason>. Decided by <name>.

## Message
**Statement.** For <customer> who <need>, <product> is a <category> that <key benefit>. Unlike <alternative>, it <difference>.

**Headline.** <Under 12 words.>

| Proof point | Attribute | Evidence | Confidence |
|---|---|---|---|

## Open questions
- <question, owner, date>
```

## Check before you finish

- [ ] The alternatives include a workaround or doing nothing.
- [ ] Each attribute has evidence, and each value has a confidence label.
- [ ] Each claim about a competitor has a source URL and an access date.
- [ ] The category section compares at least 2 candidates and gives a reason for the pick.
- [ ] The statement follows the form, and its customer matches the best-fit customers.
- [ ] The headline is under 12 words.
- [ ] There are 3 proof points, each tied to an attribute and its evidence.
- [ ] No superlative appears without a number and a source.
- [ ] The status is Draft, and the file says that 5 best-fit customers have not yet reacted.

## Then

- Add the findings with Observed or Measured confidence to `product/evidence.md`.
- Add each Guess value claim to `product/assumptions.md` with the next free ID.
- Suggest `productos:test`: show the statement to 5 best-fit customers and record whether they recognize the need.
- Record the category choice with `productos:decision`.
- Suggest `productos:pricing` and `productos:launch` as users of the message.

## Source

The components (competitive alternatives, unique attributes, value, best-fit customers, market category) come from Dunford, *Obviously Awesome* (2019). The statement form comes from Moore, *Crossing the Chasm* (1991).
