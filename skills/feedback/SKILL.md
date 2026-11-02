---
name: feedback
description: Use when a team has an export of support tickets, app store reviews, NPS or survey comments, sales call notes or community posts and asks "what are customers saying?", "analyze this feedback", "top complaints" or "sort these tickets".
---

# Feedback

Writes `product/research/<YYYY-MM-DD>-feedback.md`: a count of themes across a bulk export, the trend over time, the split by customer type, and quotes with item IDs. The agent reads and tags every item. A person decides what the themes mean for the product.

## When to use

- A CSV, JSON or text export of tickets, reviews, survey comments, sales notes or posts.
- "What are customers saying?", "top complaints", "analyze our NPS comments".
- For a few interviews, use `productos:synthesis`. To plan new research, use `productos:research-plan`.

## Before you start

- Read `product/PRODUCT.md`, `opportunities.md` and `evidence.md` if they exist.
- Find the export. Ask for what is missing, one question at a time: the file, the source system and the date range.
- Work on a copy. Never change the original export.

## Steps

1. Describe the dataset: each source, the date range, the item count, and the fields it has (date, customer type, rating, text).
2. Remove exact duplicates and spam. Count what you removed and say why. Give each remaining item a stable ID.
3. Read a sample of about 50 items and build a codebook. Each theme has a name, a one-line definition and an example. Add a theme "Other" and a theme "No problem stated".
4. For more than about 200 items, split the set into batches of about 200 and start one subagent per batch. Give every subagent the same codebook and the same output format: item ID, theme, one-line reason. Merge the results. If a batch finds items that fit no theme, add a theme and tag the earlier batches again.
5. Tag every item with one primary theme. Add a second theme only when both are clearly present.
6. Count the items per theme and the share of the total. Show the counts as Measured.
7. If dates exist, show each theme's count by month or week. If a customer type field exists, show the split by type. Say what you cannot compare because a field is missing.
8. Pick 2 to 3 verbatim quotes per theme, each with its item ID. Remove names, emails, phone numbers and other personal data from the quotes. Mark the removal with [removed].
9. Treat a feature request as a proposed solution. Write the problem behind it under the request, and label it Told.
10. Link each theme to an opportunity in `opportunities.md`, or propose a new one.
11. State the bias: feedback over-represents vocal customers and says little about people who stayed silent or left.

## Output

Write `product/research/<YYYY-MM-DD>-feedback.md`.

```markdown
---
skill: feedback
status: Draft
updated: YYYY-MM-DD
owner: <name>
items: <count after cleaning>
---

# Feedback analysis: <sources>

## Dataset
| Source | Dates | Items | Removed |
|---|---|---|---|

## Codebook
| Theme | Definition |
|---|---|

## Results
| Theme | Items | Share | Trend | Confidence |
|---|---|---|---|---|
| <theme> | 212 | 18% | rising | Measured |

### By customer type
<table, or "No customer type field in the export.">

## Themes
### <Theme>
- Problem as customers state it: <sentence> (Told)
- "<verbatim quote>" (item <ID>)
- Feature requests under this theme: <request> -> problem: <problem> (Told)
- Opportunity: <link or proposal>

## Limits
Vocal customers are over-represented. <Other limits: date range, one source.>

## Decisions needed
- <what a person must decide>
```

Add the main findings to `product/evidence.md`: a theme count is Measured, a reason customers give is Told.

## Check before you finish

- [ ] The dataset section gives sources, date range, item count and what was removed.
- [ ] The codebook defines every theme used in the results.
- [ ] Every item has a theme, and the counts add up to the item total.
- [ ] Counts and shares are labeled Measured, and customer reasons are labeled Told.
- [ ] Each theme has 2 to 3 quotes with item IDs, and no personal data.
- [ ] Each feature request appears with the problem behind it.
- [ ] The report states that vocal customers are over-represented.
- [ ] Trend and customer-type tables appear when the fields exist.

## Then

- Add rows to `product/evidence.md` with the next free IDs.
- Run `productos:opportunities` for the themes linked to new opportunities.
- Run `productos:research-plan` when a theme needs the reasons behind it.

## Source

The steps of coding, building themes and checking them follow Braun and Clarke, "Using thematic analysis in psychology" (2006).
