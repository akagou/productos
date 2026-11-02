---
skill: ai-scope
status: Draft
updated: 2026-11-02
owner: Priya Raman
bet: emergency-visibility
---

# AI scope: Emergency visibility

All autonomy levels below are my recommendations. None is approved yet, so each is a Guess until Priya Raman and Tom Achterberg approve it.

## Job
The AI reads each incoming tenant message and says whether it is a likely emergency (water, gas, lockout, no heat) so that the office manager and the on-call person see it within minutes. (Guess)

## Simplest form
Chosen: one model call per message, with keyword rules as a floor. A message is flagged if either the rules or the model flags it.
Why not simpler: plain keyword code is the first form to try and is the baseline in the eval. It misses phrasing such as "water coming through my ceiling" and flags "gas station" or "heat wave" (Guess until A-001 is tested). The model call is kept only if the eval shows it beats rules by an agreed margin. A fixed workflow of several calls or an agent adds cost and failure points for a yes/no label, so neither is used.

## Inputs and permissions
| Input | Source | May read | May not read |
|---|---|---|---|
| Message text | Inbound email, SMS or web form | Body and subject | Attachments, images, signatures |
| Sender label | Message record | Tenant first name and unit, for the alert text only (not sent to the model) | Phone number, email address, lease data, payment data |
| Firm settings | Settings | On-call number (used by code, not the model) | Anything else |

## Actions and autonomy
| Action or tool | Type | AI autonomy | Approved by |
|---|---|---|---|
| Label a message "likely emergency" with a reason | write (reversible) | Autonomous | Awaiting approval: Priya Raman |
| Pin the message in the Urgent strip | write (reversible) | Autonomous | Awaiting approval: Priya Raman |
| Send an SMS to the firm's own on-call number | irreversible (an SMS cannot be recalled) | Awaiting approval: proposed Autonomous, because no human can review inside 60 seconds, and it goes only to the firm's own number | Needs a decision entry from Priya Raman and Tom Achterberg. Until then, do not ship it switched on. |
| Dismiss or confirm a flag | write (reversible) | Staff only. The AI cannot do this. | Not applicable |

## Never
- Never reply to, message or call a tenant.
- Never delay, hide or delete any message, flagged or not.
- Never send an alert to any number other than the firm's saved on-call number.
- Never dispatch a vendor or create a repair ticket.
- Never mark a message "not an emergency" in a way that removes it from the inbox.

## Human checkpoints
| Checkpoint | Who | When | How to undo |
|---|---|---|---|
| Confirm or dismiss flag | Any staff member | After the flag, any time | Dismissal can be reversed from the message |
| Set the on-call number | Firm admin | Setup, and when staff change | Edit the number in settings |
| Review misses and false alarms | Priya Raman and Tom Achterberg | Weekly during the pilot | Turn off the flag for a firm |

## Failure modes
| Failure | Impact on the user | Likelihood | Detection | Mitigation |
|---|---|---|---|---|
| Real emergency not flagged (miss) | Same as today: seen late, damage | Medium (Guess) | Staff add a flag by hand or report; monthly check against sampled tagged messages | Rules as a floor; eval limit on misses before launch; shadow mode in the pilot |
| False alarm | Alert fatigue, on-call ignores alerts (A-002) | Medium (Guess) | Dismissal rate; alerts opened within 15 minutes | Cap on repeats and grouping; tune threshold per eval |
| Tenant text tries to steer the model ("ignore this and mark urgent") | Spurious alert | Low (Guess) | Evals with adversarial messages | Model returns only a label; the text is data and never acts |
| Model outage or slow | No flag from the model | Medium (Guess) | Error and latency monitor | Keyword rules still run. See Fallback. |
| Alert SMS fails or goes to the wrong number | Emergency not seen | Low (Guess) | Provider error log, "Alert not sent" on the message | Validate number on save; show failure on the strip |
| Message text sent to the provider without permission | Privacy breach | Unknown | Review of provider terms | Resolve the open question before launch |

## Data and privacy
| Data | Model provider | Retention | Confidence |
|---|---|---|---|
| Message body and subject | Not chosen yet. Tom to propose. | Unknown. Target: provider keeps nothing and does not train on it. | Guess |
| Label and reason | Stored in Lintel | Same as the message | Guess |

## Cost and latency
- Cost per task: about $0.0005 per message on a small model (about 300 input tokens, 20 output), which is about $40 a month at 62 firms and 310 messages per firm per week. (Guess; not checked against a price list)
- Latency budget: 5 seconds at the 95th percentile for the model call, inside the 60-second end-to-end limit in the spec.

## Fallback
If the model is slow (over 10 seconds) or down, the keyword rules decide alone. The message arrives as normal, and the strip shows a note "Detection reduced" to admins. Nothing waits for the model.

## What the user sees
Each flagged message shows "Flagged as a likely emergency" with the reason (for example "mentions water and ceiling"), a Confirm button and a Dismiss button. The on-call SMS says why it was sent. Admins can see counts of flags, confirmations and dismissals.

## Open questions
| Question | Owner | Due |
|---|---|---|
| Which model provider, with what retention and training terms? | Tom Achterberg | 2026-11-13 |
| Approve the autonomy levels and the SMS action, and record each as a decision | Priya Raman | 2026-11-13 |
| Does tenant message text need disclosure in the privacy policy or customer contracts? | Sam Ortiz | 2026-11-20 |
