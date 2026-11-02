---
name: research-plan
description: Use when a team needs to talk to customers, plan interviews or user research, write a screener, a recruiting message or an interview guide, or asks "what should we ask users?", "how do we validate this?" or "who should we talk to?".
---

# Research plan

Writes `product/research/<YYYY-MM-DD>-<slug>-plan.md`: the decision the research informs, who to talk to, the method, an interview guide and the consent wording. The guide asks about past behavior only. The agent drafts every part, and a person recruits the participants and runs the sessions.

## When to use

- "Plan the research", "write an interview guide", "write a screener", "who should we talk to?".
- Before a bet needs evidence about a customer problem.
- For notes you already have, use `productos:synthesis`. For tickets or reviews in bulk, use `productos:feedback`.

## Before you start

- Read `product/PRODUCT.md`, and `assumptions.md`, `evidence.md` and `opportunities.md` if they exist.
- You need the decision the research informs and who must make it. Ask for what is missing, one question at a time, 3 questions at most.
- Never plan an interview with an AI model. Its answers are Guess.

## Steps

1. Write the decision in one sentence: "We will decide <X> by <date>." List 3 to 5 questions the research must answer. Link each question to an assumption ID where one exists.
2. Define each segment to recruit. List the criteria for who qualifies and who does not, based on recent behavior and not on job title alone.
3. Plan 5 to 8 people per segment. Write 5 to 8 screener questions that ask about what the person did in the last 3 months. Do not reveal the right answer in the question.
4. Draft a short recruiting message: who you are, how long it takes, what you offer, and how to reply. Do not describe the product idea.
5. Choose the method per question: interviews for past behavior and motives, observation for what people do in context, a diary study for events over days, a usability test for task completion with a prototype. Use a survey only to count something the team already understands.
6. Write the interview guide for 45 minutes: a warm-up, 3 to 5 story prompts such as "Tell me about the last time you <did the job>", follow-ups ("What happened next?", "How did you decide?", "What else did you try?"), and a close ("Who else should I talk to?").
7. Check the guide against the banned question types below and rewrite any hit.
8. Write the consent wording: purpose, what you record, who sees it, how long you keep it, and the right to stop at any time. A person approves it before the first session.
9. State where raw notes go: `product/research/raw/`, which stays out of git. Check that `.gitignore` lists it.

Banned question types:
- Hypotheticals: "Would you use...?", "What would you do if...?"
- Leading questions: "Don't you find it hard to...?"
- Questions about future intent: "Will you buy this?"
- Feature wish lists: "What features do you want?"

## Output

Write `product/research/<YYYY-MM-DD>-<slug>-plan.md`.

```markdown
---
skill: research-plan
status: Draft
updated: YYYY-MM-DD
owner: <name>
decision: <the decision, one line>
---

# Research plan: <topic>

## Decision and questions
We will decide <X> by <date>.
| # | Question | Assumption | Method |
|---|---|---|---|

## Who to talk to
| Segment | Include | Exclude | People | Confidence in segment |
|---|---|---|---|---|

### Screener
1. <question> (qualifies if <answer>)

### Recruiting message
<text>

## Method
<Method per question and why. Survey only if counting.>

## Interview guide
- Warm-up: <question>
- Story 1: Tell me about the last time you <...>
  - Follow-ups: <...>
- Close: Who else should I talk to?

## Consent
<wording>

## Notes and data
Raw notes go to `product/research/raw/`, kept out of git. Names are replaced with P1, P2 in the synthesis.

## Schedule and owners
| Step | Owner | Date |
|---|---|---|
```

## Check before you finish

- [ ] The plan names one decision, its date and its owner.
- [ ] Each question links to an assumption ID, or says "none yet".
- [ ] Each segment has include and exclude criteria based on behavior, and plans 5 to 8 people.
- [ ] Every guide question asks about a past event, or follows up on one.
- [ ] The guide has no hypotheticals, leading questions, future-intent questions or wish-list questions.
- [ ] A survey appears only for counting something already understood.
- [ ] The consent wording covers purpose, recording, access, retention and the right to stop.
- [ ] The plan says where raw notes go and that git ignores them.

## Then

- Add each new assumption the plan exposes to `product/assumptions.md` with the next free ID, confidence Guess.
- After the sessions, run `productos:synthesis` with the notes.
- Suggest `productos:review` if the research will support a one-way decision.

## Source

Interview stories and weekly contact with customers come from Torres, *Continuous Discovery Habits* (2021). The banned question types follow Fitzpatrick, *The Mom Test* (2013). Guide structure and consent follow Portigal, *Interviewing Users* (2013).
