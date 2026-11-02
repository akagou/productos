---
name: pitch
description: Use when someone proposes a feature, project or bet and needs it written up for a decision, asks for a one-pager, pitch or proposal, or asks "should we build X?" once the problem is clear.
---

# Pitch

Writes a one-page bet to `product/bets/<slug>/pitch.md`: the problem, the outcome it should move, how much time it is worth, a rough solution, the risks and what is left out. A person sets the time limit first, and the solution is shaped to fit inside it.

## When to use

- "Write this up", "a one-pager for X", "a proposal for X", "should we build X?" when the problem is known.
- Before a planning or betting meeting.
- Not for an open question about whether a problem matters: use `productos:assess` first.
- Build detail goes in `productos:spec`, after the pitch is Agreed.

## Before you start

- Read `product/PRODUCT.md`, and `outcomes.md`, `opportunities.md` and `evidence.md` if they exist.
- If `product/bets/<slug>/assess.md` exists, read it and reuse its evidence.
- You need the problem, the person who has it, and the appetite. Ask for what is missing, one question at a time, 3 questions at most.

## Steps

1. Write the problem as one specific case: who, when, what went wrong, and what it cost them. Cite evidence IDs where they exist.
2. Name the outcome from `outcomes.md` that the bet should move, and the expected change, with a confidence label. If no outcome exists, write "No outcome yet" and add it to the open questions.
3. Ask the person for the appetite: the time the team is willing to spend, such as two weeks or six weeks, and the team size. The appetite is a decision that a person makes. Do not estimate it.
4. Sketch the solution as steps or screens and how they connect. For each step, say what the user does and what the product does. Leave out visual design.
5. List the rabbit holes: the parts where the team could use up the appetite, and how the pitch avoids each one.
6. List the no-gos: what the bet will not do, even where it seems close.
7. Name the riskiest assumptions, and give each a risk type and a confidence label. Add each one to `product/assumptions.md` with the next free ID.
8. Say what the team will measure, when they will read it, and which result would make them stop.

## Output

Write `product/bets/<slug>/pitch.md`. The slug is two to four lowercase words joined by hyphens.

```markdown
---
skill: pitch
status: Draft
updated: YYYY-MM-DD
owner: <name>
appetite: <time, team size>
---

# <Bet name>

## Problem
<One specific case: who, when, what happened, what it cost.> (<Confidence>, <evidence IDs>)
<How often it happens, or "Unknown".> (<Confidence>)

## Outcome
<Outcome from outcomes.md>: from <current value> to <expected value> by <date>. (<Confidence>)

## Appetite
<Time and team size.> If the work does not fit, the team cuts scope and keeps the date.

## Solution
1. <Step or screen>: the user <does>; the product <does>.

## Rabbit holes
- <Risky part>: <how this pitch avoids it>

## No-gos
- <What this bet will not do>

## Riskiest assumptions
| ID | Assumption | Risk | Confidence |
|---|---|---|---|

## How we will know
<Metric>, read on <date>. We stop if <result>.

## Open questions
- <question>
```

## Check before you finish

- [ ] The problem describes one specific case and does not mention the solution.
- [ ] The outcome comes from `outcomes.md`, or the pitch says "No outcome yet".
- [ ] A person set the appetite, and it gives both a time and a team size.
- [ ] The solution lists steps or screens with no visual design detail.
- [ ] The pitch lists at least one rabbit hole and one no-go.
- [ ] Each assumption has a risk type and a confidence label, and has the same ID in `product/assumptions.md`.
- [ ] "How we will know" gives a metric, a read date and a stop condition.
- [ ] The pitch is under 700 words.

## Then

- Add the bet to "Current bets" in `PRODUCT.md` with the stage "Pitch".
- If an assumption has risk Value or Viability and confidence Guess, suggest `productos:test` before the decision.
- Suggest `productos:review` before the decision.
- When the person agrees the bet, set the status to Agreed, record the decision with `productos:decision`, and suggest `productos:spec`.

## Source

Pitches, appetite, rabbit holes and no-gos come from *Shape Up* (Singer, Basecamp, 2019). The risk types come from *Inspired* (Cagan, 2017).
