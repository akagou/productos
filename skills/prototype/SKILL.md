---
name: prototype
description: Use when the team wants to try an idea before specifying it, asks "mock this up", "build a quick prototype", "fake door", "clickable demo", "technical spike", "wizard of oz", or needs something real to put in front of 5 users.
---

# Prototype

Writes `product/bets/<slug>/prototype.md`: the plan for a throwaway prototype that answers one question, and the record of what it showed. The coding agent builds it in `prototypes/<slug>/` or on a separate branch. A product person can get a working prototype in an afternoon, which makes this cheaper than most meetings.

## When to use

- "Build a quick prototype", "a clickable demo", "let's see if it works", "put it in front of users".
- When the riskiest assumption cannot be settled by talking to people.
- For the production build, use `productos:spec`.
- To choose a test method in general, use `productos:test` instead.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/assumptions.md` and the row of the assumption to check. If there is none, run `productos:assumptions` first.
- Read the pitch or spec in the same bet folder, if it exists.
- For screens, read `DESIGN.md` at the repo root. If it does not exist, offer `productos:design-system`.
- You need the assumption ID, a time box in hours, and the name of the person who owns the session. Ask for what is missing, one question at a time, 3 at most.

## Steps

1. Write the one question the prototype answers, and the assumption ID. If it answers more than one question, split it into two prototypes.
2. Pick the form by risk type.
   - Usability: a clickable flow.
   - Value: a fake door or a concierge version.
   - Feasibility: a technical spike on the hardest part.
   - AI features: a person behind the curtain, or the real model on real sample inputs.
3. Set the time box in hours. The prototype stops when the time is used. A person sets the number. Suggest 4 hours for a flow and 8 for a spike.
4. Write a build brief for the coding agent: the question, the form, the screens or inputs, the fake parts, and what to leave out. Tell the agent to put the code in `prototypes/<slug>/` or on a branch named `prototype/<slug>`, with a README line that says "Throwaway". For screens, tell the agent to follow `DESIGN.md`.
5. Build it with the coding agent. Mark it throwaway: write no tests, do not merge it into product code, do not polish it. Keeping a prototype is a new spec, written with `productos:spec`.
6. Plan the session before you build anything that depends on it: 5 users who match the person in `PRODUCT.md`, 3 to 5 tasks, what to watch, and a pass threshold written as a number, for example "4 of 5 finish task 1 without help". A person recruits the users. The agent never plays them. Output from a simulated user is Guess.
7. Run the session. Record what each user did, where they stopped, and what they said in their own words.
8. Record the result with `productos:test`, which compares it to the threshold and updates the assumption.
9. Write the outcome in the file: what the team learned, and one of three actions: build it, change it, or stop.

## Output

Write `product/bets/<slug>/prototype.md`.

```markdown
---
skill: prototype
status: Draft
updated: YYYY-MM-DD
owner: <name>
assumption: A-xxx
---

# Prototype: <bet name>

## Question
<The one question.> Assumption: A-xxx.

## Form and time box
<Form>, because the risk is <risk type>. Time box: <hours>.

## Build
- Location: `prototypes/<slug>/` or branch `prototype/<slug>`.
- Real: <what works>. Fake: <what is faked>. Left out: <list>.
- Throwaway: no tests, never merged into product code.

## Session plan
- Users: <5, who, and how they are recruited>. Recruited by <name>.
- Tasks: <list>.
- Watch for: <list>.
- Pass threshold: <number>, set before the session.

## Results
<Per user: what they did, where they stopped, quotes.> (<Observed | Measured>)
Test card: T-xxx in `tests.md`.

## Decision
<Keep | Change | Stop.> Decided by <name>. <Reason.>
```

## Check before you finish

- [ ] The prototype answers one question and names one assumption ID.
- [ ] The form matches the risk type of that assumption.
- [ ] The time box is in hours and a person set it.
- [ ] The build is marked throwaway, lives outside product code, and has no tests.
- [ ] The session plan has 5 users, tasks, what to watch and a numeric pass threshold set before the session.
- [ ] No simulated user supplies a result. Results have a confidence label.
- [ ] The result is recorded with `productos:test`, and the decision names a person.

## Then

- Run `productos:test` to record the result and update the assumption status.
- If the verdict is Keep, run `productos:spec`. The prototype is a reference, not a base.
- If the result shows a new risk, run `productos:assumptions`.
- Delete the prototype branch or folder when the decision is made, or note why it stays.

## Source

The 5-user rule comes from "Why You Only Need to Test with 5 Users" (Nielsen, 2000). The fake door, concierge and person-behind-the-curtain forms come from *The Right It* (Savoia, 2019).
