---
name: market-scan
description: Use when a team asks who the competitors are, what customers use today, "scan the market", "competitor analysis", "what alternatives exist", "how are we different?" or needs positioning input, pricing comparison or switching reasons.
---

# Market scan

Writes `product/research/<YYYY-MM-DD>-market-scan.md`: how customers get the job done today, across direct competitors, indirect alternatives, workarounds and doing nothing. The agent searches the web and cites every claim. The center of the scan is why customers switch, and not a feature matrix.

## When to use

- "Who are our competitors?", "what do people use today?", "competitor scan", "pricing comparison".
- Before a strategy, a pitch or a positioning decision.
- For the customer's motives, use `productos:jobs`. For customer comments, use `productos:feedback`.

## Before you start

- Read `product/PRODUCT.md`, `jobs.md` and `evidence.md` if they exist.
- You need the job or the customer segment to scan for. If `jobs.md` has it, use that. Otherwise ask one question: "What is the customer trying to get done?"
- Use web search. If search is not available, stop and say so. Do not write the scan from memory.

## Steps

1. Write the job in one line, with no product named. Use `jobs.md` when it exists.
2. List how customers do the job today, in 4 groups: direct competitors, indirect alternatives, workarounds (spreadsheets, email, an agency, an employee), and doing nothing. Search for each group, and use customer forums and reviews to find workarounds.
3. Pick the 5 to 8 alternatives that matter most. Say why you left out the others.
4. For each alternative, record:
   - Who it is for.
   - The price, with the plan name and the date you read it.
   - Its positioning in its own words: one short quote from its site, with URL and access date.
   - Strengths and weaknesses from reviews, each with a cited URL.
   - What it means for this product.
5. Give every claim a source URL. Write Guess on any claim without one. Never fill a gap from memory.
6. Write the switching reasons: why customers leave each alternative, and why they stay. Use reviews, forum posts and interviews. Link to `evidence.md` IDs where they exist.
7. Write the positioning gap in plain words: what customers get from the alternatives that this product must match, what none of them does well, and what this product could say that is true today.
8. If a feature table helps, add it at the end as an appendix. Keep it short.
9. Mark what a person must verify. Sources like vendor sites and reviews are Told.

## Output

Write `product/research/<YYYY-MM-DD>-market-scan.md`.

```markdown
---
skill: market-scan
status: Draft
updated: YYYY-MM-DD
owner: <name>
job: <one line>
---

# Market scan: <job>

## The job
<One line.> (<Confidence>)

## How customers get it done today
| Group | Alternative | For whom | Price | Source |
|---|---|---|---|---|
| Direct | | | | URL, accessed YYYY-MM-DD |
| Indirect | | | | |
| Workaround | | | | |
| Nothing | | | | |

## Alternatives
### <Name>
- For: <who> (<Confidence>, URL)
- Price: <plan and price> (<Confidence>, URL, accessed YYYY-MM-DD)
- Says: "<short quote>" (URL, accessed YYYY-MM-DD)
- Strengths: <point> (<Confidence>, URL)
- Weaknesses: <point> (<Confidence>, URL)
- For us: <meaning>

## Switching reasons
| From | To | Reason | Confidence | Source |
|---|---|---|---|---|

## Positioning gap
<Three to five sentences.> (<Confidence>)

## To verify
- <claim and who checks it>

## Appendix: features
<Optional table.>
```

Add findings with Observed or Measured confidence to `product/evidence.md`. Findings from vendor sites and reviews are Told.

## Check before you finish

- [ ] The scan covers direct, indirect, workaround and doing-nothing alternatives.
- [ ] Every claim has a source URL, or the label Guess.
- [ ] Every positioning quote is short, verbatim, and has a URL and access date.
- [ ] Every price has a plan name and an access date.
- [ ] Strengths and weaknesses cite reviews and do not come from the vendor alone.
- [ ] The switching-reasons table has at least one row for each group scanned.
- [ ] Each alternative states what it means for this product.
- [ ] A feature matrix appears only as an appendix.

## Then

- Add rows to `product/evidence.md` with the next free IDs.
- Run `productos:strategy` or `productos:opportunities` with the positioning gap as input.
- Suggest a repeat scan in 6 months, because prices and positioning change.

## Source

Positioning from competitive alternatives comes from Dunford, *Obviously Awesome* (2019). Competing with non-consumption and with workarounds comes from Christensen, Hall, Dillon and Duncan, *Competing Against Luck* (2016).
