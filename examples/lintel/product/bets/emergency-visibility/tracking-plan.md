---
skill: tracking-plan
status: Draft
updated: 2026-11-02
owner: Priya Raman
bet: emergency-visibility
---

# Tracking plan: Emergency visibility

## Naming and identity
No application code or existing tracking calls are in this repo (searched for `track(`, `analytics.`, `capture(`). I used the Object Action form with a past-tense verb, for example "Message Flagged". Tom checks the names against the real codebase before the build. (Guess)

Identity: every event carries `account_id` (the firm). Events caused by a person also carry `user_id`. System events (detection, alerts) carry no `user_id`. `message_id` is an opaque internal ID, so the team can join events for one message.

## Metrics
Baselines are "not measured yet" unless stated. Thresholds come from `evals.md` and the pitch. They are proposals until Priya sets them.

| Metric | Role | Formula | Events |
|---|---|---|---|
| Median time from emergency arrival to first open | Input (outcomes.md); the pitch's outcome | Median of `seconds_since_arrival` on Flag Opened, `mode` = live, per week. Baseline: not measured yet. | Flag Opened |
| Alerts opened within 15 minutes (A-002) | Pitch stop rule; eval online signal | Count of Alert Sent (`alert_number` = 1) whose message has a Flag Opened within 900 s of that Alert Sent, divided by count of Alert Sent (`alert_number` = 1). Stop if under 50%. | Alert Sent, Flag Opened |
| Flag dismissal rate | Eval online signal | Flag Reviewed (`action` = dismiss) divided by Message Flagged (`mode` = live), per week. Alarm above 40%. | Flag Reviewed, Message Flagged |
| Flags confirmed rate (precision proxy) | Supports A-001 | Flag Reviewed (`action` = confirm) divided by all Flag Reviewed. | Flag Reviewed |
| Alert send failure rate | Eval online signal | Alert Failed divided by (Alert Sent plus Alert Failed), per day. Alarm above 1%. | Alert Sent, Alert Failed |
| Alert delivery time (A-008) | Spec non-functional | Share of Alert Sent (`alert_number` = 1) with `send_latency_ms` at or below 60,000. Target at least 95%. | Alert Sent |
| Flag time (AC1) | Spec non-functional | Share of Message Flagged with `flag_latency_ms` at or below 60,000. Target at least 95%. | Message Flagged |
| Detection fallback rate | Eval online signal (outage); ai-scope Fallback | Detection Skipped divided by messages processed. Messages processed come from the existing message table, not from a new event. | Detection Skipped |
| On-call number set in week 1 (A-009) | Pitch assumption | Pilot accounts with an On-Call Number Changed (`action` = added) within 7 days of the pilot start, divided by pilot accounts. Target at least 80%. | On-Call Number Changed |
| Flags with no alert sent | Spec AC8, AC9 | Alert Skipped counted by `reason`, per week. | Alert Skipped |
| Weekly active staff / paid seats | North star | Existing metric from the product database and Stripe. No new event. (Measured, 71%, Oct 2026) | None |
| Monthly logo churn | Guardrail | Existing metric from the product database and Stripe. No new event. (Measured, 4.1%) | None |

Not covered by events:
- Missed emergencies (recall). Detection recall comes from the monthly staff-tagged sample in `evals.md`. The slice 1 spec has no manual flag, so "emergencies added by hand" cannot be counted until that later slice ships. Until then, misses come from staff reports to Tom. (Guess)
- Model cost per message (A-011). Read it from the model provider's invoice, not from product events.

## Events
All events below fire from the server.

### Message Flagged
- Serves: Dismissal rate, Flag time, Alerts opened within 15 minutes (through the message join).
- Fires: when detection marks an inbound message as a likely emergency and the Urgent strip entry is created. Source: server.
- Identity: `account_id`. No `user_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| message_id | string | opaque internal ID |
| channel | enum | email, sms, web_form |
| detection_source | enum | rules, model, both |
| reason_category | enum | water, gas, lockout, no_heat, other |
| flag_latency_ms | integer | 0 or more, from message received to strip entry created |
| mode | enum | shadow, live (shadow: flag recorded, no strip and no alert; first pilot week) |

- Personal data: None. The model's free-text reason, tenant name, unit and message text are not recorded in the event.
- QA: send a test message "water coming through my ceiling" to a test account in each channel. Check the debug view for one event with the right `channel` and `mode`. Send a non-emergency message and check that no event appears.

### Detection Skipped
- Serves: Detection fallback rate.
- Fires: when the model call times out (over 10 s) or errors and the keyword rules decide alone (AC14). Source: server.
- Identity: `account_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| message_id | string | opaque internal ID |
| reason | enum | model_timeout, model_error |
| rules_flagged | boolean | true, false |

- Personal data: None.
- QA: in a test environment, stub the model to time out. Check one event with `reason` = model_timeout, and that the message still arrives without delay.

### Alert Sent
- Serves: Alerts opened within 15 minutes, Alert send failure rate, Alert delivery time.
- Fires: when the SMS provider accepts an alert for the on-call number (AC6, AC7). Source: server, at the provider response.
- Identity: `account_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| message_id | string | opaque internal ID |
| alert_number | integer | 1 (first alert), 2 (repeat after 15 minutes) |
| send_latency_ms | integer | 0 or more, from message received to provider acceptance |

- Personal data: None. The on-call number and the SMS text are not recorded.
- QA: flag a test message with an on-call number set. Check one Alert Sent with `alert_number` = 1. Leave it unopened for 15 minutes and check one more with `alert_number` = 2, and no third.

### Alert Failed
- Serves: Alert send failure rate.
- Fires: when the provider rejects or fails an alert (AC10). Source: server.
- Identity: `account_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| message_id | string | opaque internal ID |
| alert_number | integer | 1, 2 |
| failure_reason | enum | provider_rejected, provider_error, number_invalid |

- Personal data: None.
- QA: set a test number that the provider rejects. Check the event, and that the strip shows "Alert not sent" on that message.

### Alert Skipped
- Serves: Flags with no alert sent.
- Fires: when a flagged message gets no SMS by design: no on-call number (AC9), a second flag from the same tenant within 30 minutes (AC8), or the repeat cap reached (AC7). Source: server.
- Identity: `account_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| message_id | string | opaque internal ID |
| reason | enum | no_number_set, grouped_same_tenant, repeat_cap_reached |

- Personal data: None. The tenant is not named in the event; "same tenant" is the `reason` value only.
- QA: flag a message on an account with no number and check `reason` = no_number_set. Flag two messages from one test tenant within 30 minutes and check `reason` = grouped_same_tenant on the second.

### Flag Opened
- Serves: Median time to first open, Alerts opened within 15 minutes.
- Fires: the first time any staff member opens a flagged message (AC13). Later opens do not fire it. Source: server, when the message is first loaded for a user.
- Identity: `account_id`, `user_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| message_id | string | opaque internal ID |
| seconds_since_arrival | integer | 0 or more, from message received to first open |
| alert_sent | boolean | true, false (whether an alert went out before the open) |
| mode | enum | shadow, live |

- Personal data: None. `user_id` is the existing internal ID.
- QA: open a flagged test message as two different test users. Check exactly one event, for the first user.

### Flag Reviewed
- Serves: Dismissal rate, Flags confirmed rate.
- Fires: when a staff member clicks Confirm or Dismiss (AC4, AC5). Source: server.
- Identity: `account_id`, `user_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| message_id | string | opaque internal ID |
| action | enum | confirm, dismiss |
| seconds_since_flag | integer | 0 or more |

- Personal data: None.
- QA: click Dismiss and then Confirm on two test messages. Check two events with the right `action`.

### On-Call Number Changed
- Serves: On-call number set in week 1.
- Fires: when an admin saves, changes or removes the on-call number (AC11, AC12). Failed saves do not fire it. Source: server.
- Identity: `account_id`, `user_id`.
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| action | enum | added, changed, removed |

- Personal data: None. The phone number is not recorded.
- QA: as an admin, add, change and remove a number and check three events. Enter an invalid number and check that no event fires. As a non-admin, check that the change is refused and no event fires.

## Proposed acceptance criteria
For Priya to add to `spec.md`.
- When a message is flagged, the product records Message Flagged with channel, detection source, reason category, flag latency and mode.
- When detection falls back to rules only, the product records Detection Skipped with the reason.
- When the SMS provider accepts an alert, the product records Alert Sent with the alert number and send latency.
- When the SMS provider rejects or fails an alert, the product records Alert Failed with the failure reason.
- When a flagged message gets no SMS because no number is set, the tenant was already alerted within 30 minutes, or the repeat cap is reached, the product records Alert Skipped with the reason.
- When a staff member first opens a flagged message, the product records Flag Opened once, with seconds since arrival.
- When a staff member clicks Confirm or Dismiss, the product records Flag Reviewed with the action.
- When an admin saves, changes or removes the on-call number, the product records On-Call Number Changed. No phone number is stored in the event.
- No event carries message text, tenant names, unit numbers, phone numbers or the model's free-text reason.

## Open questions
| Question | Owner | Due |
|---|---|---|
| Which analytics tool and event naming does the codebase use? Rename events to match. | Tom Achterberg | 2026-11-13 |
| Does the shadow week count toward the baseline? Recommendation: no. Only `mode` = live goes into the median. | Priya Raman | 2026-11-13 |
| Is a message ID an acceptable join key if tenants' messages are later deleted? | Tom Achterberg | 2026-11-13 |
| Add a manual "flag by hand" action earlier, so misses can be counted? Recommendation: yes if it fits the appetite, because the miss rate is the main risk (A-001). | Priya Raman | 2026-11-16 |
