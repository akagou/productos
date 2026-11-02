---
skill: pitch
status: Agreed
updated: 2026-11-02
owner: Priya Raman
appetite: 6 weeks, 2 engineers and 1 designer
decision: D-001
---

# Emergency visibility

## Problem
On a morning in October 2026, a tenant at a 120-unit firm (P1) texted a burst pipe at 7:12. The office manager checked the inbox at 7:30 and scrolled past it, because "it looked like every other text". Staff saw it at 10:20. The unit below took about $2,800 of water damage. (Told for the cost, Observed for the pattern: E-001, E-008)
Missed or late urgent messages came up in 4 of 4 interviews and 6 of 24 tickets (25%, the largest theme). In a sample of 500 September messages, 46 (9%) were emergencies. Whether other months show the same share is Unknown. (Observed, Measured: E-001, E-008)

## Outcome
Median time from an emergency message arriving to a staff member opening it (input metric in outcomes.md): from not measured to a baseline by 2027-01-15, then a target set from that baseline. It supports weekly active staff / paid seats, 71% now, 80% by 2027-03-31. The link between the two is a Guess (A-005). (Guess)
Guardrail: monthly logo churn stays at or below 4.1%.

## Appetite
6 weeks, 2 engineers and 1 designer. Set by the team (TEAM.md). If the work does not fit, the team cuts scope and keeps the date.

## Solution
1. Detect: the product reads each incoming message (email, SMS, web form) and flags likely emergencies (water, gas, lockout, no heat). It never blocks or delays a message.
2. Pin: the user sees flagged messages in a pinned "Urgent" strip at the top of the inbox. The user can confirm or dismiss with one click, and the product stores dismissals.
3. Alert: the firm sets one on-call phone number in settings. The product sends an SMS to it for each flagged message, and repeats once if nobody opens the message within 15 minutes.
4. Measure: the product records arrival, alert and first-open times for flagged messages. This gives the baseline for the input metric.
5. Rollout: ship behind a flag to 3 firms first, then widen.

## Rabbit holes
- Detection accuracy: start with a tuned keyword and model check on Lena's 500 tagged messages. Set the miss and false-alarm limits in the eval plan before building the UI.
- Alert fatigue: cap repeats at one per message and group alerts for the same tenant within 30 minutes.
- On-call setups differ by firm: support one number per firm only. No rotas or schedules.
- SMS reliability (48% connect within 14 days): fixes stay in the small-fixes lane. Email and web-form detection do not depend on them.

## No-gos
- No AI reply drafts, no auto-replies to tenants, and no emergency phone number auto-reply (S3).
- No automatic dispatch of vendors.
- No changes to the strategy or to the weekly-active definition.

## Riskiest assumptions
| ID | Assumption | Risk | Confidence |
|---|---|---|---|
| A-001 | Emergencies can be spotted from message text with few missed | Feasibility | Guess |
| A-002 | Staff act on alerts and do not learn to ignore them | Usability | Guess |
| A-003 | Each firm has one on-call person or phone that alerts can reach | Viability | Told |
| A-005 | Fewer missed emergencies raises weekly active share or lowers churn | Value | Guess |

## How we will know
Median time from emergency arrival to first open, read on 2027-01-15 (pilot with 3 firms starts in week 6 of the bet). We stop if the check misses more emergencies than the limit set in the eval plan, or if fewer than half of alerts are opened within 15 minutes.

## Open questions
- Does Sam accept holding AI reply drafts until 2027-01-15, given the Doorbell PM renewal risk (E-005)?
- Which 3 firms pilot first?
- Can Tom confirm SMS alert sending is feasible in 6 weeks?
