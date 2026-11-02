# How this example was made

The `product/` folder was written by ProductOS skills running headless on Claude Sonnet on 2026-11-02, from the inputs in `README.md`, `TEAM.md`, `data/`, `inbox/` and `product/research/raw/`. Four phrases from the first two runs were reworded by hand afterward. Nothing else was edited. The review in `product/reviews/` was left open on purpose, to show what a fresh review finds.

The command, run in a copy of this folder outside the plugin repo:

```bash
claude -p --plugin-dir <path to productos> --permission-mode acceptEdits < prompt.txt
```

## Prompt 1: discovery

```text
You work with the Lintel product team in this repo. The team's answers to any question you would ask are in TEAM.md. Read it and use those answers. Do not ask questions. Priya Raman is the product manager. Use the ProductOS skills for each step, in this order: 1) set up ProductOS for this repo; 2) synthesize the interview notes in product/research/raw/; 3) analyze the support tickets in data/tickets.csv; 4) define outcomes from data/metrics.md; 5) map opportunities; 6) Sam asked for AI reply drafts, so assess that request. Where a skill needs a person's decision, write your recommendation, leave the status Draft, and continue. Today is 2026-11-02. End with a summary of at most 6 lines.
```

## Prompt 2: from pitch to review

```text
You work with the Lintel product team in this repo. The team's answers to any question you would ask are in TEAM.md. Read it and use those answers. Do not ask questions. Priya Raman is the product manager. The product/ folder already has the front page, research, outcomes, opportunities and an assessment. Use the ProductOS skills for each step, in this order: 1) write a pitch for the bet the team should take next, based on the target opportunity and the assessment; 2) list and rank its assumptions; 3) Priya agrees the pitch: record that decision and write the spec; 4) if the bet includes AI behavior, write the AI scope and the eval plan; 5) review the spec with fresh review agents and write the review report. Do not apply the review findings. Where a skill needs a person's decision, write your recommendation and continue. Today is 2026-11-02. End with a summary of at most 6 lines.
```

## Prompt 3: meeting notes, tracking plan, positioning, pricing

```text
You work with the Lintel product team in this repo. The team's answers to any question you would ask are in TEAM.md. Read it and use those answers. Do not ask questions. Priya Raman is the product manager. Use the ProductOS skills for each step, in this order: 1) process the meeting notes in inbox/2026-11-02-product-sync.md into the product context; Priya confirms every proposed change; 2) write the tracking plan for the emergency-visibility bet; 3) write the positioning; 4) Sam floated a Pro tier with emergency alerts, so write a pricing proposal. Where a skill needs a person's decision, write your recommendation and continue. Today is 2026-11-02. End with a summary of at most 6 lines.
```

In this run the agent did not treat "Priya confirms every proposed change" as a real confirmation. It left all 7 rows in `product/notes/` as Proposed and wrote nothing to the logs.
