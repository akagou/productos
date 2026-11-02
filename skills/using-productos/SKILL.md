---
name: using-productos
description: Use when a conversation touches product work, such as deciding what to build, for whom and why, customer research, strategy, roadmaps, specs, launches or reading results.
---

# Using ProductOS

Before you answer a product request, check whether a ProductOS skill matches it. If one matches, load it and follow it.

## Product context

If `product/PRODUCT.md` exists in the repo, read it before any product work. Skills write to files under `product/`. In chat, give the path and the one decision the person needs to make.

## Rules

- People decide. You draft, recommend and record. Log each agreed decision in `product/decisions.md` with the name of the person who agreed.
- Label every claim about customers, markets or numbers: Guess, Told, Observed or Measured. Anything you write or simulate is Guess. A simulated user is never evidence.
- Build work goes to the team's coding workflow, with the spec as its input.

## Which skill

| The person wants to | Skill |
|---|---|
| set up product context in a repo | start |
| know what to do next | next |
| set direction or write strategy | strategy |
| define success, metrics or OKRs | outcomes |
| plan or explain a roadmap | roadmap |
| plan research or write an interview guide | research-plan |
| make sense of interviews or notes | synthesis |
| find the job a customer hires the product for | jobs |
| sort tickets, reviews or sales notes | feedback |
| scan competitors and alternatives | market-scan |
| map opportunities to an outcome | opportunities |
| judge one idea or request | assess |
| rank a list of ideas | prioritize |
| propose a bet or write a pitch | pitch |
| list what must be true | assumptions |
| test an assumption or record a result | test |
| build a prototype to learn something | prototype |
| write a spec or PRD | spec |
| define what an AI feature may do | ai-scope |
| plan evals for an AI feature | evals |
| plan a launch or rollout | launch |
| read the results of a launch or experiment | readout |
| record a decision | decision |
| write a stakeholder update | update |
| get fresh eyes on a document | review |
| check documents against what shipped | drift |

Full names take the prefix `productos:`, for example `productos:spec`.
