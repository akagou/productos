---
name: ingest
description: Use when someone pastes or points to a meeting transcript, call notes, a document, an email thread or a Slack thread and wants it added to the product context, such as "process this", "add this to product", "log this call" or "what changed?".
---

# Ingest

Reads one source and writes a digest to `product/notes/<YYYY-MM-DD>-<slug>.md`: the source, a short summary, and a table of proposed changes to the product logs. The agent extracts and checks for duplicates. A person confirms the table before anything reaches a log.

## When to use

- A transcript, call notes, document, email thread or Slack thread that may change what the team knows.
- "Process this", "add this to product", "what changed?".
- For interviews to compare across participants, use `productos:synthesis`. For ticket or review exports, use `productos:feedback`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/decisions.md`, `evidence.md` and `assumptions.md`, and the open questions in `PRODUCT.md`.
- Get the source and its date. Ask for the date if the source does not show it.
- If the source is a raw customer transcript with personal data, tell the person where it goes. Save it in `product/research/raw/`, which stays out of git, or keep it outside the repo. Keep names and contact details out of the digest.

## Steps

1. Record the source: type, date, and who was there. Write team members by name and customers as participant IDs (P1, P2). Keep the key from ID to person out of the repo.
2. Write a summary of 3 to 5 lines about what the source adds to the product context.
3. For many files, start one subagent per file. Give each the same instructions and the same table. Merge the tables and remove duplicates.
4. Extract candidate changes. Give each one a type: decision, evidence, assumption, open question or action.
5. Apply these rules:
   - A decision needs a named person who decided in the source. Anything else is an open question with an owner.
   - A customer statement is Told. Copy the quote word for word, with the participant ID. If you paraphrase, mark it "paraphrase".
   - A number said aloud is Told, unless the source data is attached to the source.
   - Anything you infer is Guess.
6. Search the existing logs for each candidate. If an entry already covers it, link to that ID in the table and add no new row.
7. Compare each decision candidate with the Active entries in `decisions.md`. If the source contradicts one, write "Contradicts D-NNN" in the table. Do not change the older entry. The person decides what happens next.
8. Assign the IDs the new entries will get, counting from the next free number in each log.
9. Show the table in chat, and ask the person to confirm, change or drop each row. Write nothing to the logs before they answer.
10. Write the confirmed rows. Decisions use the format in `productos:decision`. Evidence goes to `evidence.md`, assumptions to `assumptions.md`, and open questions to `PRODUCT.md`. Actions stay in the digest, with an owner and a date.

## Output

Write `product/notes/<YYYY-MM-DD>-<slug>.md`. The slug is two to four lowercase words joined by hyphens.

```markdown
---
skill: ingest
status: Draft
updated: YYYY-MM-DD
owner: <name>
source_type: <transcript, notes, document, email, Slack>
source_date: YYYY-MM-DD
---

# <Source title>

## Source
- Type and date: <type>, <date>
- Team: <names>
- Customers: <P1, P2>
- Location: <path, link, or "outside the repo">

## Summary
<3 to 5 lines.>

## Proposed changes
| # | Type | Target file | ID | Text | Confidence | Status |
|---|---|---|---|---|---|---|
| 1 | Evidence | evidence.md | E-012 | "<quote>" (P1) | Told | Proposed |
| 2 | Decision | decisions.md | D-004 | We will <action>. Decided by <name>. | Told | Proposed |
| 3 | Open question | PRODUCT.md | none | <question>. Owner: <name> | Guess | Proposed |

## Already in the logs
- <Candidate>: see <E-003>

## Contradictions
- <Candidate> contradicts <D-002>. Not changed.

## Actions
| Action | Owner | Due |
|---|---|---|
```

Set the Status column to Confirmed, Changed or Dropped after the person answers.

## Check before you finish

- [ ] The source lists its type, date and participants, with customers only as IDs.
- [ ] The summary has 3 to 5 lines.
- [ ] Each decision row names a person who decided in the source.
- [ ] Each customer quote is word for word in the source.
- [ ] Each number said aloud is Told, unless the source data is attached.
- [ ] Each row has an ID or links to an existing ID, and no row duplicates a log entry.
- [ ] Each contradiction names the existing decision and leaves it unchanged.
- [ ] The digest and the logs contain no names or contact details of customers.
- [ ] Every row has a Status, and the logs contain only rows marked Confirmed or Changed.

## Then

- If a confirmed row settles an assumption, suggest `productos:assumptions` to update its status.
- A contradiction needs a ruling from a person: offer `productos:decision`.
- For a batch of interviews, suggest `productos:synthesis`.
- Suggest `productos:next` when the logs are updated.

## Source

ProductOS convention.
