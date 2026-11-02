---
name: jobs
description: Use when a team asks what job customers hire the product for, why people switch or stay, who the real competitors are, or says "jobs to be done", "JTBD", "job statement" or "why do customers choose us?".
---

# Jobs

Writes `product/jobs.md`: the jobs customers do, written without any product in them, the forces that push people to change or keep them in place, and the alternatives they use today. Each job and force cites evidence IDs or is labeled Guess. A person confirms the jobs.

## When to use

- "What job is the customer hiring this for?", "write the job statements", "why do people switch?".
- After interviews, when the findings describe a situation and a change.
- To plan interviews, use `productos:research-plan`. To study vendors and alternatives in depth, use `productos:market-scan`.

## Before you start

- Read `product/PRODUCT.md`, `evidence.md`, and the syntheses in `product/research/`.
- If `product/jobs.md` exists, update it and keep the existing job IDs.
- Without evidence, draft from `PRODUCT.md` and label everything Guess. Then suggest `productos:research-plan`, with questions about the last time the customer switched.

## Steps

1. List the situations in the evidence where a customer started to look for a new way to do something. Use the moment of change, such as a new role, a failure or a deadline.
2. Write one job statement per situation: "When <situation>, I want to <motivation>, so I can <expected outcome>." Do not name a product, a feature or a technology. Check by replacing your product with a competitor: the sentence must still be true.
3. Split each job into three parts. The functional part is the task that gets done. The emotional part is how the person wants to feel or avoid feeling. The social part is how the person wants others to see them.
4. For each job, describe the four forces of progress, with evidence IDs:
   - Push: what is wrong with the situation today.
   - Pull: what attracts the person to a new solution.
   - Anxiety: the worry about changing.
   - Habit: what keeps the person on the present way.
5. List the alternatives the person uses today for each job. Include doing nothing, a spreadsheet, a person, an agency and a workaround. Add the reason each one is good enough.
6. Label each job part and each force: Guess, Told, Observed or Measured, with evidence IDs. A force from a single interview is Told.
7. Mark the job that the team's current bet serves, and the forces the bet changes. Say which force is weakest in the evidence.
8. Ask the person to confirm each job statement, one at a time.

## Output

Write `product/jobs.md`.

```markdown
---
skill: jobs
status: Draft
updated: YYYY-MM-DD
owner: <name>
---

# Jobs

## J1. <short name>
When <situation>, I want to <motivation>, so I can <expected outcome>. (<Confidence>, <evidence IDs>)

| Part | Statement | Confidence | Evidence |
|---|---|---|---|
| Functional | | | |
| Emotional | | | |
| Social | | | |

### Forces of progress
| Force | What the customer says or does | Confidence | Evidence |
|---|---|---|---|
| Push | | | |
| Pull | | | |
| Anxiety | | | |
| Habit | | | |

### Alternatives today
| Alternative | Why it is good enough | Confidence | Evidence |
|---|---|---|---|
| Doing nothing | | | |

### What it means for the product
<Which force our bet changes, and which force has the least evidence.>

## Open questions
- <question>
```

## Check before you finish

- [ ] Every job statement follows "When..., I want to..., so I can..." and names no product, feature or technology.
- [ ] Each job has a functional, an emotional and a social part, or says why one does not apply.
- [ ] Each job lists all 4 forces, and every job and force has evidence IDs or the label Guess.
- [ ] A force from a single source is not labeled Observed.
- [ ] Each job lists doing nothing and at least one other alternative.
- [ ] A person confirmed each job statement, or the file says it is unconfirmed.
- [ ] The file says which job the current bet serves.

## Then

- Add new evidence rows to `product/evidence.md` only when you extract something new from a source. Cite existing IDs for the rest.
- Run `productos:opportunities` to turn the forces into problems to solve.
- To study the alternatives in the table, use `productos:market-scan`.

## Source

Jobs, and the functional, emotional and social parts, come from Christensen, Hall, Dillon and Duncan, *Competing Against Luck* (2016). The four forces of progress come from Moesta, *Demand-Side Sales 101* (2020). The "when, I want to, so I can" form follows Klement, *When Coffee and Kale Compete* (2016).
