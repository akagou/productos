---
skill: ingest
status: Draft
updated: 2026-11-02
owner: Priya Raman
source_type: notes
source_date: 2026-11-02
---

# Product sync, 2026-11-02

## Source
- Type and date: meeting notes typed by Lena, 2026-11-02 15:00
- Team: Priya Raman, Sam Ortiz, Tom Achterberg, Lena Cho
- Customers: none present. One 450-unit firm is quoted second-hand through Sam (no participant ID; the logs already call it "the 450-unit firm").
- Location: inbox/2026-11-02-product-sync.md

## Summary
- The team took missed emergencies as this cycle's target (already D-001). Sam agreed and accepts holding AI reply drafts, with a look in January after the 450-unit firm's renewal.
- Tom found that alerts to an on-call phone work with the existing SMS provider, at about 1 cent per message. Volume pricing is still to be confirmed.
- A 450-unit firm told Sam it would pay more for night-time urgent texts. Sam asks whether alerts belong in a Pro tier. Priya wants a pricing proposal first.
- Lena will test the urgent strip with pilot firms. Priya will ask the privacy lawyer whether pilot firms must be told that message text goes to a model.

## Proposed changes
Priya Raman confirms each row. My recommendation is in the last column. Nothing has been written to the logs yet.

| # | Type | Target file | ID | Text | Confidence | Status | Recommendation |
|---|---|---|---|---|---|---|---|
| 1 | Decision | decisions.md | D-002 | We hold AI reply drafts and revisit them in January 2027, after the 450-unit firm's renewal. Decided by Sam Ortiz ("Fine, AI drafts wait. But I want to look at it again in January, after [the 450-unit firm]'s renewal."). Fits the D-001 revisit date of 2027-01-15. Names no new date. | Told | Proposed | Confirm. Closes the spec question "Does Sam accept holding AI reply drafts?" |
| 2 | Evidence | evidence.md | E-012 | A 450-unit firm "would pay more" "if urgent texts reach the on-call phone at night" (relayed by Sam from a Friday call; paraphrase of the firm's words, one firm) | Told | Proposed | Confirm. Second-hand and one firm. |
| 3 | Evidence | evidence.md | E-013 | Tom checked that alerts to an on-call phone work with the SMS provider the team already uses for tenant SMS | Told | Proposed | Confirm. It is not a test, so A-008 stays open. |
| 4 | Evidence | evidence.md | E-014 | SMS price on the provider's page is about 1 cent per message in the US. Volume pricing is not confirmed. | Told | Proposed | Confirm. |
| 5 | Assumption | assumptions.md | A-013 | Firms will pay extra for emergency alerts (for example in a Pro tier), at a price that covers SMS and model cost. Risk: Viability. Test: the pricing proposal, then ask 5 firms with an on-call phone. | Guess (E-012 is one firm) | Proposed | Confirm. Rank it with A-001, A-002 and A-005. |
| 6 | Open question | PRODUCT.md | none | Should emergency alerts be in a paid Pro tier? Owner: Priya Raman. Input: pricing proposal (step 4). | Guess | Proposed | Confirm. |
| 7 | Open question | PRODUCT.md | none | Must pilot firms be told that message text goes to a model? Owner: Priya Raman, ask the privacy lawyer by 2026-11-10. | Guess | Proposed | Confirm. Note: ai-scope.md lists the same question under Sam Ortiz, due 2026-11-20. Priya decides who owns it. |

## Already in the logs
- "We take missed emergencies as the target for this cycle", said by Priya: D-001, same date. No new row.
- Alerts to an on-call phone are feasible in the 6-week appetite: partly covered by A-008. See row 3.
- Open question "Can the SMS provider send alerts to a number outside the firm's tenant line, and at what cost?" in spec.md is partly answered by rows 3 and 4. Volume pricing is still open (Tom, 2026-11-09).

## Contradictions
- None. Sam's agreement (row 1) fits D-001. D-001 is not changed. It says "Must also agree: Not needed", and Sam's agreement is recorded as D-002.

## Actions
| Action | Owner | Due |
|---|---|---|
| Confirm volume pricing for SMS alerts | Tom Achterberg | 2026-11-09 |
| Ask the privacy lawyer about disclosing that message text goes to a model | Priya Raman | 2026-11-10 |
| Run 5 usability sessions on the urgent strip with pilot firms | Lena Cho | Week of 2026-11-16 |
| Write the pricing proposal for alerts and a Pro tier | Priya Raman (drafted by agent, step 4) | Before any tier decision |

## Notes
- The spec says the 3 pilot firms are chosen by 2026-11-16, and Lena's sessions are that same week. Priya should pick the firms first. (Guess)
