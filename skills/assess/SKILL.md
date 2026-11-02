---
name: assess
description: Use when someone brings an idea or request, from a stakeholder, a customer, sales or the team, and asks "should we do this?", "can we add X?", "a customer wants X" or "is this worth it?", before any pitch or spec exists.
---

# Assess

Writes `product/bets/<slug>/assess.md`: a short assessment of one idea or request, ending in a verdict of Pursue, Hold or Drop. The first step separates the request, which is a solution, from the problem under it. Most requests change once that problem is clear.

## When to use

- A stakeholder, customer or colleague asks for a feature or project.
- "Should we do X?", "is this worth it?", "sales wants X".
- Not for choosing among many opportunities: use `productos:opportunities`.
- When the verdict is Pursue, the next document is `productos:pitch`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `outcomes.md`, `strategy.md`, `evidence.md` and `opportunities.md` if they exist.
- You need the request in the requester's words and the name of the requester. Ask for what is missing, one question at a time, 3 at most.

## Steps

1. Quote the request as given, with the requester's name and role. Label it Told.
2. Write the problem under the request. Ask "What would that give them that they cannot do now?" until the answer describes a person's situation and not a feature. If you cannot tell, write "Unknown" and ask the requester through the person.
3. Answer each question below in one or two lines, with a confidence label and evidence IDs. If there is no evidence, write Guess. Do not fill gaps with plausible numbers.
   - What problem, for whom?
   - How big and how often? Give counts and a time period.
   - Which outcome would it move, and how would we measure that?
   - What do customers use today?
   - Why us, and why now?
   - What else must be true? Check sales, support, legal and data.
4. Search `evidence.md` and the other product files before you write Guess. Use what is already known.
5. Give the verdict, using one of Pursue, Hold or Drop, and the reason in one sentence. A person makes this call. Propose a verdict and ask for confirmation.
6. If the verdict is Hold, write the revisit trigger: an event or a number, with a date to check. "Later" is not a trigger.
7. If the verdict is Pursue, name the one assumption that matters most, add it to `product/assumptions.md`, and say the next skill is `productos:pitch`.
8. If the verdict is Drop, draft a short reply that the person can send to the requester. Say what was considered, why the answer is no, and what would change it. Keep it respectful and under 100 words.

## Output

Write `product/bets/<slug>/assess.md`. The slug is two to four lowercase words joined by hyphens.

```markdown
---
skill: assess
status: Draft
updated: YYYY-MM-DD
owner: <name>
verdict: Pursue | Hold | Drop
---

# Assess: <idea name>

## Request
"<Request as given.>" <Name, role.> (Told)

## Problem under the request
<The situation of a person, with no solution in it.> (<Confidence>, <evidence IDs>)

## Questions
| Question | Answer | Confidence | Evidence |
|---|---|---|---|
| What problem, for whom? | | | |
| How big and how often? | | | |
| Which outcome, measured how? | | | |
| What do customers use today? | | | |
| Why us, why now? | | | |
| What else must be true? | | | |

## Verdict
**<Pursue | Hold | Drop>.** <Reason in one sentence.> Decided by <name>.

## Revisit trigger
<Hold only: event or number, and the date to check.>

## Reply to the requester
<Drop only: the short message.>
```

## Check before you finish

- [ ] The request and the problem under it are in separate sections, and the problem names no solution.
- [ ] Every row of the table has a confidence label, and each number has a source or the label Guess.
- [ ] "How big and how often" gives a count and a time period, or says "Unknown".
- [ ] The outcome comes from `outcomes.md`, or the document says "No outcome yet".
- [ ] The verdict is exactly Pursue, Hold or Drop, with a reason, and a named person decided it.
- [ ] A Hold has a revisit trigger with a date, and a Drop has a reply the person can send.
- [ ] The document is under 500 words.

## Then

- Record the verdict with `productos:decision`.
- For Pursue, run `productos:pitch` and add the bet to "Current bets" in `PRODUCT.md`.
- For Hold, add the trigger to the open questions in `PRODUCT.md`.
- If the same request comes up again, suggest `productos:feedback` to count how many customers ask.

## Source

The questions come from the opportunity assessment in *Inspired* (Cagan, 2nd ed., 2017).
