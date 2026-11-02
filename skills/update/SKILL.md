---
name: update
description: Use when someone needs a stakeholder update, status report, weekly or monthly update, investor or leadership note, or asks "what changed since last time", "summarize what we shipped and learned", or "write the update for the team".
---

# Update

Writes `product/updates/<YYYY-MM-DD>.md`, a stakeholder update under 300 words. The agent drafts it from the repo: commits, changes in `product/` and the numbers in `outcomes.md`. A named person reads it and sends it. Every item points to a file or commit.

## When to use

- A regular update, or a note after a launch, a decision or a change of plan.
- "What changed since the last update?"
- Not for reading the result of one launch or experiment: use `productos:readout`.
- Not for a status meeting or sprint report: teams keep their own tracker.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Find the last file in `product/updates/` and note its date. If none exists, use the date of the first commit in `product/`, and say so in the update.
- Read `product/outcomes.md`, `product/decisions.md`, `product/evidence.md` and the bet folders. Read the git log since the last update date.
- Ask once who reads it: team, leadership or customers. Adjust the detail: the team gets file paths and detail, leadership gets outcomes and asks, customers get what changed for them and nothing internal. Ask nothing else unless a number is missing.

## Steps

1. List the commits since the last update. Group them by bet. Keep what changed for customers, and skip refactors and chores.
2. List changes in `product/` since the last update: new D-IDs, new E-IDs, new readouts and changes of status.
3. Read the North star and Input metrics. Write each as last value, new value and the source. If the last update has no value, write "No earlier value". Copy the confidence label from `outcomes.md`.
4. Pick the headline: the one most important thing that happened. It is one sentence. Choose a result over an activity.
5. Write "What shipped". Each item gets a commit hash or file path.
6. Write "What we learned". Each item cites an evidence ID with its confidence label. Leave out anything that has no evidence.
7. Write "Decisions made". List each D-ID with its one-line decision and the name of the decider.
8. Write "What is next" from the Now column of `roadmap.md` when it exists. Keep to 3 items.
9. Write "Asks". Each ask names the person asked, what is needed and the date. If there is no ask, write "None".
10. Count the words. Cut to under 300. Cut detail first, never the asks or the numbers.
11. Mark the draft as written by an agent. The person who sends it checks each number against its source.

## Output

Write `product/updates/YYYY-MM-DD.md`.

```markdown
---
skill: update
status: Draft
updated: YYYY-MM-DD
owner: <name>
audience: <Team, Leadership or Customers>
since: YYYY-MM-DD
---

# Update: <Month D, YYYY>

**Headline:** <One sentence.> (<file or commit>)

## Outcome numbers
| Metric | Last update | Now | Source |
|---|---|---|---|
| <metric> | <value> (<Confidence>) | <value> (<Confidence>) | <file> |

## What shipped
- <Item> (<commit or file>)

## What we learned
- <Finding> (<Confidence>, <evidence ID>)

## Decisions made
- <D-ID>: <decision>. Decided by <name>.

## What is next
- <Item> (<file>)

## Asks
- <Name>: <what is needed> by <date>.
```

## Check before you finish

- [ ] The update is under 300 words.
- [ ] The headline is one sentence about a result.
- [ ] Each outcome number shows the last value, the new value, a source and a confidence label.
- [ ] Each shipped item points to a commit or a file.
- [ ] Each learning cites an evidence ID.
- [ ] Each decision shows its D-ID and a named decider.
- [ ] Each ask names the person asked and a date.
- [ ] The detail matches the stated audience.

## Then

- Ask the owner to check the numbers and send the update. Set the status to Reviewed after that.
- If the update shows a decision that no one recorded, suggest `productos:decision`.
- If a number moved against its target, suggest `productos:readout` or `productos:next`.

## Source

ProductOS convention.
