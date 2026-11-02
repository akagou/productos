---
name: tracking-plan
description: Use when a spec is agreed or nearly agreed and nobody has said which analytics events to track, such as "tracking plan", "what should we instrument?", "events for this feature", or "how will we measure this?" before the build starts.
---

# Tracking plan

Writes `product/bets/<slug>/tracking-plan.md`: the analytics events a bet needs, their properties, where each fires, and how to test each one. Every metric has a formula built from listed events, and every event serves a metric.

## When to use

- A spec is Agreed or close to it, and the events are not defined.
- "Tracking plan", "what should we instrument?", "events for this feature".
- For a question about data already collected, use `productos:analyze`. To check that events fire after the build, use `productos:launch`.

## Before you start

- Read `product/PRODUCT.md`, the pitch and spec in `product/bets/<slug>/`, and `product/outcomes.md`.
- Read `evals.md` in the bet folder if it exists. It lists online signals for AI behavior.
- Read `product/decisions.md` for any approval to record personal data.
- Search the codebase for existing tracking calls, such as `track(`, `analytics.` or `capture(`. Note the naming style and the identity fields they use.

## Steps

1. List every metric the bet must move or protect: the outcome in the pitch, the Input and Guardrail metrics in `outcomes.md`, what the readout will need, and the online signals in `evals.md`.
2. Define each metric as a formula, for example "users who finish setup divided by users who start setup, per week".
3. List the events the formulas need. Reuse an existing event when one does the job. Follow the naming style in the code. If there is none, name events as object plus past-tense action, such as "Message Flagged".
4. For each event, list the properties with their types and allowed values. Use enumerations in place of free text.
5. Allow no free text and no personal data in properties, unless `decisions.md` records an approval. Cite the decision ID when one exists.
6. State where each event fires. Fire from the server any event that a metric depends on. Client events can be blocked or lost.
7. State the identity on each event: user ID, account ID or both.
8. Write a QA step for each event, such as a test name or a debug view check. These steps go into the launch checklist.
9. Build the mapping table: metric, role, formula, events. Check both directions. A metric with an event missing needs a new event. An event with no metric is dropped.
10. Propose one acceptance criterion per event, in the form "When <action>, the product records <event>". Give them to the person to add to the spec.

## Output

Write `product/bets/<slug>/tracking-plan.md`.

```markdown
---
skill: tracking-plan
status: Draft
updated: YYYY-MM-DD
owner: <name>
bet: <slug>
---

# Tracking plan: <bet name>

## Naming and identity
<The style used, with an example from the code, or "None found, using Object Action".>
Identity: <user ID, account ID>.

## Metrics
| Metric | Role | Formula | Events |
|---|---|---|---|
| <name> | <North star, Input or Guardrail> | <formula> | <event names> |

## Events
### <Event Name>
- Serves: <metric>
- Fires: <where, and when>. Source: <server or client>.
- Identity: <fields>
- Properties:

| Property | Type | Allowed values |
|---|---|---|
| | | |

- Personal data: None. (Or: approved in D-NNN.)
- QA: <test or debug view step>

## Proposed acceptance criteria
- When <action>, the product records <event>.

## Open questions
| Question | Owner | Due |
|---|---|---|
```

Any baseline value or target in this file needs a confidence label.

## Check before you finish

- [ ] Every metric in the pitch, `outcomes.md` and `evals.md` that applies to the bet has a row in the mapping table.
- [ ] Every metric has a formula that uses only listed events.
- [ ] Every event serves at least one metric.
- [ ] Event names follow the codebase style, or the Object Action form.
- [ ] Every property has a type and allowed values, and none is free text.
- [ ] Every event says where it fires and names its identity. Events that a metric depends on fire from the server.
- [ ] Every event has a QA step and a proposed acceptance criterion.
- [ ] The plan records no personal data, unless a decision ID approves it.

## Then

- Give the acceptance criteria to the person, and ask to add them to `spec.md`.
- Record any approval for personal data with `productos:decision`.
- Name `productos:launch`, which checks that the events fire before release.
- Suggest `productos:readout` for the date when the data is ready to read.

## Source

ProductOS convention.
