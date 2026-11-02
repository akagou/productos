---
name: drift
description: Use when product documents may be out of date, when someone asks "did we build what the spec said?", "is the roadmap still true?" or "are our docs current?", before a release review, or as a regular check of the product/ folder.
---

# Drift

Compares product documents with each other and with what shipped, and writes a report to `product/reviews/`. It finds two kinds of drift: documents that contradict each other, and specs that differ from the code. It never changes code.

## When to use

- After a build, to compare the spec with what the team shipped.
- Before a release review or a planning meeting.
- Every two to four weeks, as a check of `product/`.
- Not for judging the quality of one document: use `productos:review`.

## Before you start

- If `product/` does not exist, offer `productos:start` and stop.
- Ask which spec to check against the code, or check every spec with status Agreed.

## Steps

1. Check the documents against each other. Record each of these as a problem:
   - A bet in `PRODUCT.md` or `roadmap.md` that links to no outcome in `outcomes.md`.
   - A pitch or spec whose outcome is different from the one in `outcomes.md`.
   - An assumption with status Supported and no evidence ID in its Test column.
   - A decision in `decisions.md` that a later document contradicts.
   - A bet listed in `PRODUCT.md` with no folder in `product/bets/`, or a folder with no row in `PRODUCT.md`.
2. Check each chosen spec against the code. For each acceptance criterion:
   - Search the code, the tests and the changelog.
   - Record Built, Partial or Missing.
   - For Built and Partial, give the file and line, the test, or the commit that shows it.
   - For Missing, say where you searched.
3. Read the commit messages since the spec's `updated` date. Record each user-facing change that no spec describes as Extra.
4. Write the report.
5. In chat, give the counts and the report path. Ask whether to update the documents, or to note the gaps as work for the team.
6. Change a document only when the person agrees. Never change code.

## Output

Write `product/reviews/<YYYY-MM-DD>-drift.md`.

```markdown
---
skill: drift
status: Draft
updated: YYYY-MM-DD
---

# Drift report, <YYYY-MM-DD>

## Documents

| # | Problem | Files | Suggested fix |
|---|---|---|---|
| 1 | <one line> | <paths> | <one line> |

## Build: <spec path>

| Criterion | State | Evidence |
|---|---|---|
| AC1 | Built | <file:line, test or commit> |
| AC2 | Missing | Searched <paths> |

## Extra

| Change | Commit | Suggested fix |
|---|---|---|
| <user-facing change> | <hash> | <add to spec, or record a decision> |
```

## Check before you finish

- [ ] Every build state is Built, Partial, Missing or Extra.
- [ ] Every Built and Partial row names a file, a test or a commit.
- [ ] Every Missing row says where you searched.
- [ ] Every document problem names the files involved.
- [ ] No code was changed.

## Then

- For an Extra change the team wants to keep, record why with `productos:decision` and update the spec.
- For a Missing criterion on a shipped bet, ask the person whether it is still needed. If it is not, record that with `productos:decision`.

## Source

The drift report of the Elephant-Goldfish Model (Rensin, 2026).
