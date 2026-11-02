---
name: roadmap
description: Use when a team asks for a roadmap, "what are we doing now, next and later", "how do we explain priorities to leadership", "stop dates slipping", or has a feature list with dates and wants it reframed around problems and outcomes.
---

# Roadmap

Writes `product/roadmap.md` in three columns: Now, Next and Later. Each item is a problem or an opportunity linked to an outcome, not a feature with a date. Confidence drops from left to right, and the document says so.

## When to use

- "Make a roadmap", "now next later", "what do we tell leadership we are doing".
- A feature list with dates that the team does not trust.
- To choose which problem to take, use `productos:opportunities` or `productos:prioritize`. For the detail of one bet, use `productos:pitch`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/outcomes.md`, `product/strategy.md`, `product/opportunities.md` and the folders in `product/bets/`.
- Each item needs an outcome from `outcomes.md`. If the file does not exist, offer `productos:outcomes` first.
- Ask at most 2 questions, one at a time: "Who reads this roadmap?" and "What is the team working on now?". When the person says "just draft it", draft and mark every unknown Guess.

## Steps

1. Collect candidate items from the bets, the opportunities, the strategy actions and what the person says. Write each one as a problem or opportunity: who has it and what goes wrong. Rewrite "Add dark mode" as "Evening users strain to read the screen".
2. Link each item to one outcome in `outcomes.md`, by metric name. An item with no outcome goes to "Not doing", or to the open questions if the person disagrees.
3. Place Now items. Now means the team is working on it this cycle and a bet folder exists in `product/bets/`. Link the folder. A Now item without a bet folder moves to Next.
4. Place Next items: problems the team expects to take after Now. Name the first step, such as an assessment or a test. Do not name a solution.
5. Place Later items. Later items are problems only. Remove any solution, feature name or date from a Later item.
6. Label confidence for each column: Now is the highest, Next is lower, Later is the lowest. Write a confidence label on each item. Check that no Later item has a higher label than a Now item.
7. Write the "Not doing" list: requests the team heard and declined, each with a reason. Take items from `strategy.md` when it exists.
8. Add a line that tells the reader how to read the roadmap: items move left when evidence supports them, and Later is a list of problems, not a promise.
9. Ask one named person to approve it. Set the review date.

## Output

Write `product/roadmap.md`.

```markdown
---
skill: roadmap
status: Draft
updated: YYYY-MM-DD
owner: <name>
review: YYYY-MM-DD
---

# Roadmap: <product name>

Confidence drops from left to right. Now is committed work. Next is likely. Later is a list of problems, not a promise. Items move left when evidence supports them.

## Now
| Problem or opportunity | Outcome | Confidence | Bet |
|---|---|---|---|
| <who has what problem> | <metric from outcomes.md> | <Confidence> | [<slug>](bets/<slug>/pitch.md) |

## Next
| Problem or opportunity | Outcome | Confidence | First step |
|---|---|---|---|

## Later
| Problem | Outcome | Confidence |
|---|---|---|

## Not doing
- <Request>. Why: <reason>.

## Open questions
- <question>
```

## Check before you finish

- [ ] No item names a feature.
- [ ] Every item links to a metric in `outcomes.md`.
- [ ] Every Now item links to a folder in `product/bets/`.
- [ ] Later items contain no solution and no date.
- [ ] Every item has a confidence label, and the labels do not rise from Now to Later.
- [ ] The text says that confidence drops from left to right.
- [ ] "Not doing" has at least 1 item with a reason.
- [ ] A named person owns the roadmap, and it has a review date.

## Then

- Update the "Current bets" table in `PRODUCT.md` if a Now item has no row.
- If a Now item has no bet folder, suggest `productos:pitch`.
- Record a major reorder with `productos:decision`.
- Suggest `productos:update` to share the roadmap with stakeholders.

## Source

The Now-Next-Later roadmap comes from Janna Bastow at ProdPad.
