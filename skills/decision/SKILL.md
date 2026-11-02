---
name: decision
description: Use when a person makes or confirms a product decision and it needs recording, such as "log this decision", "we decided to...", "why did we choose X", a pitch or spec becomes Agreed, or a team argues about a choice already made. Not for deciding on someone's behalf.
---

# Decision

Appends one entry to `product/decisions.md`, newest first, with IDs D-001, D-002 and so on. Each entry names the person who decided, whether the door is One-way or Two-way, the evidence, the options and a revisit trigger. An AI agent drafts the entry. It never decides.

## When to use

- "Log this decision", "record that we chose X", "why did we do Y".
- Another skill ends with "record the decision": a pitch, strategy, roadmap change or readout.
- For a question still open, use the open questions of the document or `productos:assess`. The team's own record covers technical choices inside the code.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/decisions.md` to find the next free ID and to check whether an older entry covers the same choice. Read `product/evidence.md` for IDs.
- You need 3 facts from the person: what was decided, who decided, and what else they considered. Ask one question at a time, 3 at most. Do not guess the decider.

## Steps

1. Write the decision in one sentence, in the active voice: "We will ...". It must be specific enough that a new teammate can tell if the team followed it.
2. Name the decider: a person, with a role. If the person says "the team" or an AI agent, ask for one human name. An AI agent can never be the decider.
3. Set the date to the day the person decided. Do not use the day you write.
4. Set the door. A Two-way decision is cheap to reverse: the team can reverse it in days. A One-way decision is costly or impossible to reverse, such as a public price, a deleted data set or a signed contract. If unsure, ask: "Could we undo this within a month at low cost?" If yes, Two-way.
5. If the door is One-way, ask who else must agree. List each person and whether they agreed. A One-way decision is not final until each person has agreed.
6. Write the why in 2 to 4 sentences. Cite evidence IDs and their confidence labels. A reason with no evidence is Guess.
7. List the options considered. Include at least 2, and one must be "Do nothing" with what happens if the team does nothing. Give each option one line on why the team did not pick it.
8. Set "Revisit when": a date or a trigger that a person can observe, such as "retention falls below 30% for 2 weeks".
9. Add links: the documents, bets and earlier decisions that relate. If this entry replaces an older one, mark the older entry "Replaced by D-NNN" and do not delete it.
10. Insert the entry at the top of the log, below the heading text. Update the `updated` date.

## Output

Append to `product/decisions.md`. Insert the entry above the older ones. The file keeps the frontmatter that `productos:start` wrote.

```markdown
---
skill: decision
status: Draft
updated: YYYY-MM-DD
---

## D-NNN: <Decision in one sentence>

- Decision: We will <action>.
- Date: YYYY-MM-DD
- Decided by: <name, role>
- Door: <One-way or Two-way>
- Must also agree: <names and status, or "Not needed" for Two-way>
- Why: <2 to 4 sentences.> (<Confidence>, <evidence IDs>)
- Options considered:
  1. <Chosen option>
  2. <Option>. Not chosen because <reason>.
  3. Do nothing. Result: <what happens>.
- Revisit when: <date or trigger>
- Links: <paths and D-IDs>
- Status: <Active, or Replaced by D-NNN>
```

## Check before you finish

- [ ] The ID is the next free number and no ID repeats.
- [ ] The entry is above older entries.
- [ ] "Decided by" is a named human.
- [ ] Door is exactly One-way or Two-way.
- [ ] A One-way entry lists each person who must also agree.
- [ ] The why cites at least 1 evidence ID with a confidence label, or says Guess.
- [ ] Options include at least 2 entries, one of them "Do nothing".
- [ ] "Revisit when" gives a date or a trigger someone can observe.

## Then

- If the decision settles an assumption, update its status in `product/assumptions.md`.
- If it makes a bet Agreed, update the stage in `PRODUCT.md`.
- Add the D-ID to the document that led to it.
- Suggest `productos:update` when the decision affects stakeholders.

## Source

Door types come from the 2015 letter to Amazon shareholders (Bezos), which calls them Type 1 and Type 2 decisions. The entry format follows "Documenting Architecture Decisions" (Nygard, 2011).
