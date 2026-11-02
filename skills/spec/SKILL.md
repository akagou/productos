---
name: spec
description: Use when a bet is agreed and the team needs a spec, PRD, requirements or user stories, when an engineer or coding agent needs to know exactly what to build, or when someone says "write the spec" or "turn this into acceptance criteria".
---

# Spec

Writes `product/bets/<slug>/spec.md`: what to build, for whom, the first slice, and acceptance criteria that a person or a coding agent can test. The spec is the input for the team's coding workflow, so each requirement must be testable and each open question must have an owner.

## When to use

- After a pitch is Agreed, or for a small change that needs no pitch.
- "Write the spec", "PRD", "requirements", "user stories", "acceptance criteria".
- Not for deciding whether to build: use `productos:pitch` or `productos:assess`.
- When the feature includes AI behavior, also use `productos:ai-scope`.

## Before you start

- Read `product/PRODUCT.md`, the pitch in the same bet folder, and the assumptions and decisions that mention the bet.
- If there is no pitch, ask one question: "What problem does this solve, and for whom?" Write the context from the answer and label it Told.
- Read enough of the codebase to name the parts the work touches. Do not design the code.

## Steps

1. Write the context: the problem, outcome and appetite, one line each, with a link to the pitch. Do not copy the pitch.
2. List the users and the job each one does in this feature.
3. Build a story map. The backbone is the user's steps in order, from left to right. Under each step, list the tasks, the most needed first.
4. Mark the first slice: the smallest version of every backbone step that lets one user finish the job from start to end. Later slices go below it.
5. Write acceptance criteria for the first slice as Given, When, Then. Number them AC1, AC2 and so on. For each step, cover first use, empty, normal, error and no permission, or say why a state does not apply.
6. List the non-functional needs, each with a number: speed, scale, privacy, accessibility, cost.
7. List what is out of scope. Start with the no-gos from the pitch.
8. List the open questions, each with an owner and a due date.
9. If the feature includes AI model or agent behavior, link to `ai-scope.md` in the same folder. If it does not exist, run `productos:ai-scope` after this skill.

## Output

Write `product/bets/<slug>/spec.md`.

```markdown
---
skill: spec
status: Draft
updated: YYYY-MM-DD
owner: <name>
bet: <slug>
---

# Spec: <bet name>

## Context
- Problem: <one line>. See [the pitch](pitch.md).
- Outcome: <metric>, from <value> to <value>.
- Appetite: <time, team size>.

## Users and jobs
- <User>: <job in this feature>

## Story map
| <Step 1> | <Step 2> | <Step 3> |
|---|---|---|
| <task> (slice 1) | <task> (slice 1) | <task> (slice 1) |
| <task> (later) |  | <task> (later) |

## First slice
<Two to four sentences: what one user can do from start to end after slice 1.>

## Acceptance criteria
- AC1. Given <state>, when <action>, then <result anyone can observe>.

## Non-functional
- <Need>: <number>

## AI behavior
<"None", or one line and a link to ai-scope.md.>

## Out of scope
- <item>

## Open questions
| Question | Owner | Due |
|---|---|---|

## Hand-off
Build from this spec with the team's coding workflow. Input: `product/bets/<slug>/spec.md`.
```

## Check before you finish

- [ ] The context links to the pitch and does not repeat it.
- [ ] The first slice includes a task under every backbone step.
- [ ] Each acceptance criterion has Given, When and Then, and a tester can check the Then without asking anyone.
- [ ] The criteria cover first use, empty, error and no-permission states, or say why a state does not apply.
- [ ] Each non-functional need has a number.
- [ ] Each open question has an owner and a due date.
- [ ] The spec names no library, schema or other implementation choice unless `decisions.md` records it.
- [ ] If the feature has AI behavior, `ai-scope.md` exists and the spec links to it.

## Then

- Suggest `productos:review`.
- When the spec is Reviewed and the person agrees it, set the status to Agreed and update the bet's stage in `PRODUCT.md` to "Spec".
- Name the hand-off for the team's coding workflow. With Superpowers, start `superpowers:writing-plans` with the spec path. With the Elephant-Goldfish Model, start `egm-draft` with the spec path. Otherwise, give the spec path to the coding agent.
- After the build, suggest `productos:drift` to compare the spec with the code.

## Source

Story maps and the first slice across the whole backbone come from *User Story Mapping* (Patton, 2014). Given, When, Then comes from behavior-driven development (North, 2006).
