---
skill: spec
status: Draft
updated: 2026-11-02
owner: Priya Raman
bet: emergency-visibility
---

# Spec: Emergency visibility

## Context
- Problem: an emergency tenant message looks like every other message and staff see it hours late. See [the pitch](pitch.md).
- Outcome: median time from an emergency message arriving to a staff member opening it, from not measured to a baseline by 2027-01-15.
- Appetite: 6 weeks, 2 engineers and 1 designer. Decision D-001.

## Users and jobs
- Office manager (and other staff): see at once which message is an emergency and confirm or dismiss it.
- On-call person: get a text on their phone when an emergency arrives, and open it.
- Firm admin (usually the office manager): set the on-call phone number.

## Story map
| Detect | Pin | Alert | Measure |
|---|---|---|---|
| Flag emergency in new email, SMS and web-form messages (slice 1) | Urgent strip at top of inbox (slice 1) | One on-call number in settings (slice 1) | Record arrival, alert and first-open times (slice 1) |
| Confirm or dismiss a flag with one click (slice 1) | Dismissal stored (slice 1) | SMS to on-call number (slice 1) | Weekly report of times per firm (later) |
| Staff can add a flag by hand (later) | Push notification in the app (later) | Repeat once after 15 minutes unopened (slice 1) | |
| Learn from dismissals (later) | | Group alerts for one tenant within 30 minutes (slice 1) | |

## First slice
A firm admin sets an on-call number. When a tenant message that looks like an emergency arrives, it shows in the Urgent strip, the on-call phone gets an SMS, and a staff member can confirm or dismiss the flag. The product records the times, so the team can read the baseline.

## Acceptance criteria
- AC1. Given a new inbound message that the check marks as an emergency, when it arrives, then it appears in the Urgent strip within 60 seconds and is still in the normal inbox list.
- AC2. Given a new inbound message that is not marked, when it arrives, then it appears only in the normal list and no alert is sent.
- AC3. Given the Urgent strip has no flagged messages, when a user opens the inbox, then no strip is shown.
- AC4. Given a flagged message, when a user clicks Dismiss, then the message leaves the strip, stays in the inbox, and the dismissal is saved with the user and time.
- AC5. Given a flagged message, when a user clicks Confirm, then the flag stays and the confirmation is saved with the user and time.
- AC6. Given an on-call number is set, when a message is flagged, then an SMS with the tenant name, unit and the first 100 characters of the message goes to that number within 60 seconds.
- AC7. Given an alert was sent and nobody has opened the message after 15 minutes, when the time passes, then one more SMS is sent. No further SMS follows.
- AC8. Given two flagged messages from the same tenant within 30 minutes, when the second arrives, then the on-call number gets no second SMS and the strip shows both.
- AC9. Given no on-call number is set, when a message is flagged, then it shows in the strip and an admin banner says "Set an on-call number to get alerts".
- AC10. Given the SMS provider rejects or fails to send an alert, when this happens, then the strip shows "Alert not sent" on that message and the failure is logged.
- AC11. Given a staff member who is not an admin, when they open settings, then they cannot change the on-call number and see who can.
- AC12. Given an admin enters an invalid phone number, when they save, then the save is refused with a message that names the problem.
- AC13. Given a flagged message, when a staff member first opens it, then the open time is stored, and the message shows as seen to all staff.
- AC14. Given the check cannot run (outage), when a message arrives, then the message is delivered as normal without delay and the miss is logged.

## Non-functional
- Speed: flag and strip within 60 seconds of arrival, for 95% of messages.
- Alert delivery: SMS sent within 60 seconds for 95% of flagged messages (A-008).
- Accuracy: limits from the eval plan, starting target at least 95% of emergencies caught and no more than 2 false alerts per firm per week (A-001).
- Privacy: message text sent to a model only through the approved processing path. Retention follows the existing message retention. See ai-scope.md.
- Accessibility: the strip is not shown by color alone and works with a screen reader.
- Cost: model cost per message set in the eval plan, to be confirmed by Tom.

## AI behavior
Yes. A model flags likely emergencies. See [ai-scope.md](ai-scope.md) and [evals.md](evals.md).

## Out of scope
- AI reply drafts, auto-replies to tenants, and an emergency phone number auto-reply.
- Automatic dispatch of vendors.
- On-call rotas or schedules (one number per firm).
- Push notifications, weekly reports, learning from dismissals (later slices).
- Fixes to SMS connection (small-fixes lane).

## Open questions
| Question | Owner | Due |
|---|---|---|
| Can the SMS provider send alerts to a number outside the firm's tenant line, and at what cost? | Tom Achterberg | 2026-11-09 |
| Which 3 firms pilot first? | Priya Raman | 2026-11-16 |
| What does the Urgent strip look like on the phone work view? | Lena Cho | 2026-11-13 |
| Does Sam accept holding AI reply drafts until 2027-01-15? | Priya Raman | 2026-11-06 |
| Who may see an alert SMS, given tenant names in text? | Tom Achterberg | 2026-11-13 |

## Hand-off
Build from this spec with the team's coding workflow. Input: `product/bets/emergency-visibility/spec.md`.
