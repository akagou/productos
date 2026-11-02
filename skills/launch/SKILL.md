---
name: launch
description: Use when a feature is built and needs a rollout plan, when someone asks about a launch, a beta, a feature flag, a rollback, a go-live checklist or release communication, or says "how do we ship this safely?".
---

# Launch

Writes `product/bets/<slug>/launch.md`: who gets the feature, in which stages, what moves it forward or pulls it back, how the team measures the result, and what the customer is told. The agent drafts the plan and checks what it can, such as analytics events. A named person owns each line and decides each stage gate.

## When to use

- A feature is built or nearly built and needs a plan to reach customers.
- "Launch plan", "rollout", "beta", "feature flag", "rollback", "release notes", "go-live".
- The build itself goes to the team's coding workflow, with `productos:spec` as input. Results after launch go in `productos:readout`.

## Before you start

- Read `product/PRODUCT.md`, the pitch, the spec and `outcomes.md`.
- If the feature uses AI, read `ai-scope.md` and `evals.md`.
- Ask one question at a time, 4 at most, for what is missing: the audience, the date window, who owns each readiness line, and what number would make the team roll back.

## Steps

1. Name the audience and the segments. For each segment, give its size and a confidence label.
2. Define the rollout stages behind a feature flag: internal, then a percentage or beta group, then everyone. Name the flag.
3. Write the criteria to move to the next stage as numbers or checks, such as an error rate below a limit for 7 days.
4. Write the rollback trigger as a number, for example "turn the flag off if the error rate exceeds 2% for one hour". Name the person who can turn it off.
5. Write the measurement: metric, baseline, read date and minimum sample. For an experiment, name the control group and write the success criterion now, before launch.
6. Check the analytics events: list each event, check in the code or the tool that it exists, and record whether it fires. Anything you could not check stays marked Guess.
7. Build the readiness checklist with one owner per line: support docs and replies, sales or customer success briefing, legal and privacy, pricing and billing, analytics events checked and firing. For AI features, add "evals pass".
8. Write the communication plan: what we say to whom, when, and through which channel (changelog, email, in-app). Write each message from the customer's view: the problem, what is new, how to start.
9. Draft each message. A person approves the final text before anyone sends it.

## Output

Write `product/bets/<slug>/launch.md`.

```markdown
---
skill: launch
status: Draft
updated: YYYY-MM-DD
owner: <name>
bet: <slug>
flag: <flag name>
---

# Launch: <bet name>

## Audience
| Segment | Size | What changes for them | Confidence |
|---|---|---|---|

## Rollout
| Stage | Who | Dates | Move on when |
|---|---|---|---|
| 1. Internal | | | |
| 2. <Percentage or beta group> | | | |
| 3. Everyone | | | |

## Rollback
Trigger: <number and time window>. Owner: <name>. How: <turn off the flag, or another step>.

## Measurement
| Metric | Role | Baseline | Read date | Minimum sample | Confidence |
|---|---|---|---|---|---|

Experiment: <"None", or the control group and the success criterion, set on YYYY-MM-DD>.

## Readiness
| Line | Owner | Status |
|---|---|---|
| Support docs and replies | | |
| Sales or customer success briefing | | |
| Legal and privacy | | |
| Pricing and billing | | |
| Analytics events checked and firing | | |
| Evals pass (AI features) | | |

## Communication
| To whom | When | Channel | Message |
|---|---|---|---|
| <segment> | <date> | <changelog, email or in-app> | Problem: <>. New: <>. Start: <> |

## Open questions
| Question | Owner | Due |
|---|---|---|
```

## Check before you finish

- [ ] The rollout has at least three stages behind a named feature flag.
- [ ] Each stage has a "move on when" criterion written as a number or a check.
- [ ] The rollback trigger is a number with a time window and an owner.
- [ ] The measurement gives a baseline, a read date and a minimum sample, and each has a confidence label.
- [ ] For an experiment, the success criterion has a date before the launch date.
- [ ] Every readiness line has an owner, and the analytics line says who checked the events and how.
- [ ] Each message names the problem, what is new and how to start, and uses no internal terms.
- [ ] An AI feature links to `evals.md` and shows whether the evals pass.

## Then

- Set the bet's stage in `PRODUCT.md` to "Launch".
- Add the metric and read date to the bet's row, so `productos:readout` can find them.
- Record the stage decisions with `productos:decision` as they happen.
- At the read date, suggest `productos:readout`.

## Source

Feature flags and staged release follow "Feature Toggles (aka Feature Flags)" (Hodgson, martinfowler.com, 2017). The rest is ProductOS convention.
