---
name: synthesis
description: Use when a team has interview transcripts, call notes or research notes to make sense of, asks "what did we learn?", "synthesize these interviews", "pull out the insights" or "update the evidence", or wants findings and assumption changes from research.
---

# Synthesis

Writes `product/research/<YYYY-MM-DD>-<slug>-synthesis.md` and adds entries to `product/evidence.md`. The agent extracts single observations with verbatim quotes, groups them, and counts the sources behind each finding. A person confirms any change to an assumption.

## When to use

- After interviews, observation sessions or usability tests, with transcripts or notes.
- "Synthesize these", "what did we learn?", "update the evidence log".
- To plan the research, use `productos:research-plan`. For exports of tickets or reviews, use `productos:feedback`.

## Before you start

- Read `product/PRODUCT.md`, `assumptions.md`, `evidence.md`, and the research plan if one exists.
- Find the input in `product/research/raw/` or in the chat. Ask for what is missing, one question at a time.
- If the input is a simulated or AI-written interview, stop. It is Guess and does not go into the evidence log.

## Steps

1. Give each participant an ID (P1, P2). Remove names, employers and contact details from everything you write. Keep the key from ID to person out of the output.
2. Extract observations from each source. One observation is one thing the person did, said or showed. Give each one the participant ID and a verbatim quote copied from the source. Never invent, trim or reword text inside quote marks. If no quote fits, write the observation without one and mark it "paraphrase".
3. For many transcripts, start one subagent per transcript. Give every subagent the same instructions from step 2 and the same output table. Merge the tables, and check a sample of the quotes against the source.
4. Group the observations by similarity into themes, building the groups from the data first and naming them after. Move an observation if it fits another group better.
5. Write findings. Each finding is one plain sentence with the number of sources behind it and a confidence label.
   - Told: one source, or something a person only said.
   - Observed: seen in behavior, or reported by 3 or more independent sources.
   - Measured: a count from data, with its source.
6. List contradictions between participants, and what the research did not answer.
7. Compare findings with `assumptions.md`. For each affected assumption, propose a status change to Supported or Refuted, with the evidence IDs. A person confirms before the status changes.
8. Propose new opportunities, each as a customer need or problem and not a solution. Label each Guess until a person accepts it.

## Output

Write `product/research/<YYYY-MM-DD>-<slug>-synthesis.md`.

```markdown
---
skill: synthesis
status: Draft
updated: YYYY-MM-DD
owner: <name>
sources: <number of participants>
---

# Synthesis: <topic>

## Method and participants
<Plan link, dates, number of sessions.>
| ID | Segment | Date |
|---|---|---|

## Findings
| ID | Finding | Sources | Confidence |
|---|---|---|---|
| F1 | <sentence> | P1, P3, P4 | Observed |

## Observations by theme
### <Theme>
- P1: "<verbatim quote>" (<what the person did or said>)

## Contradictions
- <what P2 said against what P5 said>

## Not answered
- <question>

## Proposed assumption changes
| Assumption | Proposed status | Evidence | Confirmed by |
|---|---|---|---|

## Proposed opportunities
- <need or problem> (Guess)
```

For each finding, add a row to `product/evidence.md` with the next free ID (E-001 and up): finding, confidence, source (this file and the finding ID), date, and where it is used.

## Check before you finish

- [ ] The file names participants as P1, P2 and contains no names or contact details.
- [ ] Every quote appears word for word in a source.
- [ ] Every finding lists its participant IDs and a confidence label.
- [ ] Observed marks a finding only with behavior or 3 or more independent sources.
- [ ] Any finding from one source is labeled Told.
- [ ] The file lists the contradictions (or says none appeared) and the questions the research did not answer.
- [ ] Each assumption change is a proposal with a named person to confirm it.
- [ ] Each finding has a matching row in `product/evidence.md`.

## Then

- When a person confirms an assumption change, update `product/assumptions.md` and the evidence IDs in it.
- Run `productos:jobs` if the findings describe why customers switch or stay.
- Run `productos:opportunities` to place the proposed opportunities.

## Source

Grouping observations from the data by similarity follows the KJ method (Kawakita Jiro). The habit of extracting single observations from interviews comes from Torres, *Continuous Discovery Habits* (2021).
