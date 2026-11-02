---
skill: assumptions
status: Draft
updated: 2026-11-02
---

# Assumptions

Ranked for emergency-visibility by dependence (1 to 3) times evidence gap (Guess 3, Told 2, Observed or Measured 1). Rank is in the Test column notes below the table.

| ID | Assumption | Bet | Risk | Confidence | Status | Test | Updated |
|---|---|---|---|---|---|---|---|
| A-001 | Emergencies (water, gas, lockout, no heat) can be spotted from message text, catching at least 95% of emergencies with no more than 2 false alerts per firm per week | emergency-visibility | Feasibility | Guess | Open | Run a keyword/model check on Lena's 500 tagged September messages (46 emergencies); measure missed and false alarms | 2026-11-02 |
| A-002 | Staff act on emergency alerts and do not start ignoring them: at least 50% of alerts are opened within 15 minutes | emergency-visibility | Usability | Guess | Open | Alert 3 firms for 2 weeks; count alerts opened within 15 minutes | 2026-11-02 |
| A-003 | Each firm has one on-call person or phone that alerts can reach: at least 80% of firms | emergency-visibility | Viability | Told (P2, P4 have on-call phones; P1, P3 unknown) | Open | Ask all 62 firms in a short survey | 2026-11-02 |
| A-004 | Tenants use an emergency number when an auto-reply gives one, instead of texting the main line | S3 alternative (not in the pitch) | Value | Guess | Open | Trial the auto-reply with 3 firms; count emergencies that arrive by phone vs text | 2026-11-02 |
| A-005 | Fewer missed emergencies raises weekly active staff share or lowers churn | emergency-visibility | Value | Guess | Open | Check in the product database whether firms with a ticket about a missed emergency churn more | 2026-11-02 |
| A-006 | AI-drafted replies would be sent without a factual error often enough to be safe (P2 lost about $1,900 to one wrong reply) | ai-reply-drafts | Feasibility | Guess | Open | Eval on 100 real messages with the firm's own lease facts, graded by staff | 2026-11-02 |
| A-007 | Staff would use AI drafts and not just keep their templates | ai-reply-drafts | Usability | Guess | Open | Prototype with 3 firms; count drafts sent unedited | 2026-11-02 |
| A-008 | Lintel can send an SMS alert to the on-call phone within 60 seconds for at least 95% of flagged messages, inside the 6-week appetite | emergency-visibility | Feasibility | Guess | Open | Tom spike: send 50 test alerts through the SMS provider, measure delay | 2026-11-02 |
| A-009 | At least 80% of pilot firms set an on-call number in settings in week 1, although staff rarely touch features outside the inbox (E-007) | emergency-visibility | Usability | Guess | Open | Ask pilot firms to set it in onboarding; count who does | 2026-11-02 |
| A-010 | The emergency share of messages stays between 5% and 15% in other months (46 of 500, 9%, in September) | emergency-visibility | Value | Measured for September only | Open | Tag 500 messages each from August and October | 2026-11-02 |
| A-011 | The model check adds no more than $100 a month at current volume (about 83,000 messages a month) | emergency-visibility | Viability | Guess | Open | Price a small model on 100 real messages and extrapolate | 2026-11-02 |
| A-012 | The model catches at least 10 percentage points more emergencies than keyword rules alone at the same false-alarm rate | emergency-visibility | Feasibility | Guess | Open | Compare rules and model on Lena's 500 tagged messages | 2026-11-02 |

## Rank for emergency-visibility
| Rank | ID | Dependence | Gap | Score | Note |
|---|---|---|---|---|---|
| 1 | A-001 | 3 | 3 | 9 | Cheapest: offline, uses data we have |
| 2 | A-005 | 3 | 3 | 9 | Cheap: database query |
| 3 | A-002 | 3 | 3 | 9 | Needs a pilot |
| 4 | A-003 | 3 | 2 | 6 | Survey |
| 5 | A-009 | 2 | 3 | 6 | Pilot |
| 6 | A-008 | 2 | 3 | 6 | Spike |
| 7 | A-010 | 2 | 3 | 6 | Tagging |

Risk types: all four are covered. Desirability is not one of the four risk types; A-004 sits under Value. A-004, A-006 and A-007 belong to other bets.
