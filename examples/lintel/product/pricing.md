---
skill: pricing
status: Draft
updated: 2026-11-02
owner: Priya Raman
---

# Pricing: Lintel

Every price below is a proposal and a Guess. Nothing is set. The price owner is not named in TEAM.md. I recommend that Sam Ortiz sets the price, since a price change touches existing customers (usually One-way) and he must agree to One-way decisions. Priya Raman proposes.

Inputs from the 2026-11-02 sync (rows E-012, E-013, E-014, A-013 in `product/notes/2026-11-02-product-sync.md`) are Proposed and not yet confirmed into the logs.

## Value metric
| Candidate | Tracks value | Easy to count | Risk | Confidence |
|---|---|---|---|---|
| Paid staff seat (today, $39 per user per month) | Weakly for alerts. The value of an alert grows with tenants and emergencies, not with staff count. | Yes. Already in Stripe. | A firm with few staff and many units pays little for a lot of value. A firm with many staff and few units pays too much. | Guess |
| Units managed | Well. More units give more tenants and more emergencies (50 to 500 units in the target firms). | Medium. Firms must report and update unit counts, and Lintel does not hold them today (Guess). | A new metric for existing customers is a bigger, One-way change. Needs billing work that does not fit the 6-week appetite. | Guess |
| Alerts sent (usage) | Directly. | Yes, from the Alert Sent event in the tracking plan. | Customers would pay more in a bad month, and might switch alerts off to save money. This is wrong for a safety feature. | Guess |
| Flat add-on per firm | Medium. One on-call number per firm in slice 1. | Yes. | A new item in billing. | Guess |

Chosen: keep paid seats as the metric. Reason: billing and every customer's invoice use it already (Told: metrics.md names Stripe), a change needs no build, and I have no evidence that units track value better. Revisit after the pilot if large firms with few seats ask for more (E-012 is one 450-unit firm).

## Packaging
| Tier | For | Contains | Limit | Price | Confidence |
|---|---|---|---|---|---|
| Standard (today) | Firms with 50 to 500 units and 3 to 15 staff | Shared inbox for email, SMS and web forms; assign, tag; work orders | Nothing new is taken away. | $39 per seat per month (Measured, current price) | Measured |
| Standard plus, during the pilot (recommended for now) | The 3 pilot firms | Everything in Standard, plus emergency detection, the Urgent strip and the SMS alert to one on-call number | Pilot firms only, behind a flag, shadow week first | $39 (no change) | Guess |
| Pro (to test, not to sell yet) | Firms that want alerts to reach people at night, such as the 450-unit firm | Everything in Standard, plus the emergency alert SMS with the 15-minute repeat. Later slices could add on-call rotas, a voice-call escalation and weekly response-time reports (not built, not in the bet). | Alerts. Detection and the Urgent strip stay in Standard (see below). | $49 per seat per month, a $10 step (Guess: no evidence for the number) | Guess |

### The tension to decide
- The one firm that said it would pay more named exactly the alert SMS (Told, E-012). If the alert is in Standard, that firm's word buys nothing. If the alert is in Pro, firms on Standard see the flag in the Urgent strip but get no text at night.
- Priya is unsure about charging for a safety feature. I agree this needs care. A firm on Standard could miss an emergency that Lintel had detected. That is a reputational and possibly legal risk (Guess, to check with a lawyer).
- Recommendation: do not decide the Pro price now. The feature is not built and the pilot has 3 firms. Run the pilot with everything free. Decide the packaging before general availability, not after, because moving a feature from free to paid later takes it away from customers and is hard to undo. Decision date: read of the pilot on 2027-01-15. Owner: Priya Raman proposes, Sam Ortiz decides.
- If Pro goes ahead, my recommendation is that detection, the Urgent strip and one alert SMS to one on-call number stay in Standard, and Pro adds convenience on top (rotas, call escalation, reports). This keeps the safety floor free. It will probably earn less from the firm that asked. That trade is Sam's and Priya's to make.

## Willingness to pay
| Source | Finding | Confidence |
|---|---|---|
| Sam's call with a 450-unit firm, Friday 2026-10-30, relayed in the sync | The firm "would pay more" "if urgent texts reach the on-call phone at night". No amount was named. | Told, second-hand, one firm (E-012, Proposed) |
| Pitch / interviews | An emergency cost one firm about $2,800 in water damage (E-001). This is a cost of the problem, not a price anyone said they would pay. | Told |
| Price questions to customers | None asked. | Unknown |

No Van Westendorp survey was run. Stated answers are Told, never Measured.

## Competitor prices
| Alternative | Plan | Price | Source, accessed |
|---|---|---|---|
| Doorbell PM | Unknown | Unknown (Guess) | Not looked up. No market scan exists. Run `productos:market-scan`. Not accessed. |
| Gmail, work phone, spreadsheet, whiteboard | None | Close to $0 | Told: PRODUCT.md. No URL. |

## Unit economics
Inputs and labels:
- Revenue per firm today: 418 seats / 62 firms = 6.7 seats, times $39 = about $263 a month. (Measured inputs from metrics.md; the average is my arithmetic)
- Messages per firm: median 310 a week, times 4.33 weeks = about 1,340 a month. (Measured median, metrics.md)
- Model cost: $0.0005 per message (ai-scope.md, Guess, not checked against a price list), times 1,340 = about $0.67 a firm a month. It runs on all messages in every tier, since detection feeds the strip.
- SMS cost: about 1 cent per message in the US (Told, Tom, from the provider page; volume price not confirmed until 2026-11-09).
- Flag volume: 9% of messages (46 of 500, September only, A-010) gives about 120 flagged messages a month for a firm at the median. One alert plus at most one repeat gives at most 240 SMS, so at most $2.40 a month. False alarms add a few more. (Guess: the 9% looks high for true emergencies, and grouping lowers it, so this is a ceiling.)

| Tier | Cost to serve | AI cost | Price | Gross margin | Confidence |
|---|---|---|---|---|---|
| Standard / Standard plus (6.7 seats) | Hosting and support: Unknown | Model $0.67 plus SMS up to $2.40 = up to about $3.10 | $263 | The alert and model costs are about 1.2% of revenue. Margin before hosting and support: (263 − 3.10) / 263 = about 98.8% | Guess |
| Pro (6.7 seats at $49) | Hosting and support: Unknown | Same, up to about $3.10 | $328 | About 99.1% before hosting and support | Guess |

I have no hosting or support cost, so these are not gross margins. They show that the alert and model costs do not justify a tier. If Pro goes ahead, the reason is what customers value, not what it costs.

## AI usage rules
- Detection model: no customer limit. Cost is about $0.67 per firm a month and is not something the customer controls. (Guess)
- Alerts: no hard cap, and never switch off alerts at a limit. A cap on emergency alerts is unsafe. Soft rule: if a firm sends more than 500 alerts in a month (about double my ceiling), Tom reviews it for a false-alarm problem and contacts the firm. The customer sees nothing at that number. (Guess)
- The cost depends on volume: the SMS price is Told and the message volume per firm is the median. A firm with 10 times the median would cost about $30 a month. Check the largest firm before launch.

## Change plan
- No existing customer pays more and nothing in Standard is removed, so no notice is needed for now. If the Pro tier later moves a feature that existing Standard customers already use, that becomes a price change for existing customers. Plan then: 90 days' notice and the old price kept for that period. (Guess: the notice length is my suggestion, not agreed.)
- Pilot firms are told in writing that the alerts are free during the pilot and that pricing is decided after 2027-01-15. Priya sends the note, and Sam approves it.

## Price test
- Before general availability, ask 5 firms with an on-call phone, after they see the Urgent strip in Lena's sessions (week of 2026-11-16, if Priya adds the question): what they pay now for tools that handle urgent messages, and at what price the alert would be too cheap, a good value, getting expensive and too expensive (Van Westendorp). Answers are Told.
- After the pilot, offer Pro at $49 per seat to the 3 pilot firms from 2027-01-15 and count who pays. This is the first price anyone can actually pay. It is only 3 firms, so it is weak evidence.
- Stop conditions: stop the paid offer if no pilot firm accepts at the price, or if monthly logo churn passes the 4.1% guardrail (outcomes.md). Plan the test with `productos:test`. Owner: Priya Raman.

## Decision
Price set by: not set. Recommended to be set by Sam Ortiz, proposed by Priya Raman. Date: not set. Record: none yet. The next step is a decision entry in `decisions.md` after the pilot read on 2027-01-15, or earlier if a firm names a price.

## Open questions
| Question | Owner | Due |
|---|---|---|
| Who sets the price? | Priya Raman and Sam Ortiz | 2026-11-13 |
| Volume pricing for SMS alerts | Tom Achterberg | 2026-11-09 |
| Hosting and support cost per firm, to compute real gross margin | Tom Achterberg | 2026-11-20 |
| Do Standard-tier firms carry a risk if they get a flag but no alert? Ask the privacy lawyer in the same conversation. | Priya Raman | 2026-11-10 |
| Run a market scan for Doorbell PM and other prices | Priya Raman | 2026-12-15 |
| Add Guess inputs to `assumptions.md` once the ingest rows are confirmed (A-013 for willingness to pay) | Priya Raman | 2026-11-09 |
