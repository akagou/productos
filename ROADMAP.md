# Roadmap

Candidate skills and other work for ProductOS, grouped by the people who would use them. Product work is not only done by product managers. Researchers, analysts, operations leads, founders, consultants and agencies do much of the same work, and several candidates below come from their practice.

Horizons use the roadmap labels. Now is in progress. Next is planned for the coming releases. Later is a candidate with no date.

A candidate moves to Next when a real person asks for it, or when a run of the skills shows the gap. Every new skill follows [CONTRIBUTING.md](CONTRIBUTING.md).

## Product managers and founders

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `pr-faq` | A press release and FAQ written before the build | Next | Shows in one page whether the customer benefit is clear, before anyone designs. |
| `plan-cycle` | The bets for the next cycle, chosen against capacity | Next | Turns Agreed pitches and the priority list into one plan with a named decider. |
| `tickets` | Issues in Linear, Jira or GitHub from an Agreed spec | Next | Puts acceptance criteria in the tracker the team uses, with links back to the spec. |
| `interview-snapshot` | A one-page debrief right after each customer interview | Next | Keeps continuous discovery cheap: one page per call, ready for synthesis. |
| `win-loss` | Reasons deals were won or lost, from interviews and CRM notes | Next | Sales hears reasons that the product team rarely sees. |
| `churn-analysis` | Why customers leave, from exit interviews and usage before cancellation | Next | Compares what customers say with what they did. |
| `sunset` | A plan to remove a feature: usage, affected customers, migration, notice | Later | Teams skip removal work, and the product grows harder to use. |
| `weekly-review` | The agenda for a weekly product review: metric changes, readouts due, decisions waiting | Later | Gives the team one meeting where `product/` gets read. |
| `market-sizing` | A bottom-up estimate of the reachable market, with the working shown | Later | Founders and business cases need a number that others can check. |
| `investor-update` | A monthly investor update from `product/` and the metrics | Later | Same sources as `update`, for a different reader. |

## Designers and researchers

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `ux-review` | An expert review of a screen, flow or running product | Now | Designers had no skill for their own craft. |
| `design-system` | `DESIGN.md` at the repo root with the team's colors, type and components | Now | Prototypes look like the product. Design tools read the same file. |
| `journey-map` | The customer's steps, actions, feelings and pains across one job | Next | Shows designers where in the experience to act. |
| `usability-test` | A moderated test plan, script and results for a live product | Next | `prototype` covers throwaway builds. Live products need the same method. |
| `service-blueprint` | Customer actions, staff actions, back-office processes and systems for one service | Later | For products where people and software deliver the service together. |
| `design-brief` | A brief for a design exploration: problem, constraints, principles, options to try | Later | Gives a designer or a design agent a clear starting point. |
| `content-review` | A review of labels, empty states, error messages and tone | Later | Words on screen cause many support tickets. |
| `survey` | A survey design with sample, question wording and an analysis plan | Later | Prevents leading questions and counts that cannot be compared. |
| `persona` | A persona built only from evidence IDs | Later | For teams that already use personas. `jobs` comes first. |
| `accessibility-audit` | A full WCAG audit with the test method for each criterion | Later | `ux-review` checks the basics only. |

## Product engineers and engineering leads

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `tracking-plan` | The analytics events a spec needs, before the build | Now | `launch` and `readout` depend on events that nobody defined. |
| `release-notes` | Customer-facing release notes from merged work and specs | Next | The agent can draft them from git history in minutes. |
| `build-vs-buy` | A comparison of building, buying and partnering, with total cost | Next | A common decision that teams make without a written comparison. |
| `tech-debt-case` | The case for platform or debt work in outcome terms | Later | Gives engineering leads the same format as a pitch. |
| `incident-review` | The product side of an incident: customer impact, messages sent, follow-ups | Later | Engineering post-mortems often leave out the customer. |
| `dependency-map` | Dependencies between teams and systems for one bet | Later | Shows early which other team can block the work. |
| `developer-experience` | A review of an API or developer tool: time to first call, docs, errors | Later | For products whose users are developers. |

## Data and analytics

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `analyze` | An answer to one question from product data, with the query | Now | Product people query data every day. |
| `experiment-design` | An A/B test plan with sample size, duration and stop rules | Next | `test` covers small tests. A controlled experiment needs statistical power and guardrails. |
| `metric-definitions` | One definition per metric, with formula, source and owner | Later | Teams argue over numbers that measure different things. |
| `segmentation` | Customer segments from behavior data | Later | Lets `positioning` and `pricing` use real segments. |
| `dashboard-spec` | The questions a dashboard must answer, and the metric behind each | Later | Stops dashboards that nobody reads. |

## Product marketing and go-to-market

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `positioning` | Alternatives, unique attributes, value, best-fit customers, category and message | Now | Business viability had no skill of its own. |
| `pricing` | Value metric, packaging, unit economics and a price test plan | Now | AI features change the cost of each use, so price is a product decision. |
| `voice` | `product/voice.md`: the team's rules, words and examples for copy | Now | Customer copy sounds like the team, not like the model. |
| `battlecard` | One page per competitor: where we win, where we lose, answers to objections | Next | Sales uses it every week, and it reuses the market scan. |
| `messaging-test` | A test of headlines and value claims with best-fit customers | Later | Turns positioning from Guess into evidence. |
| `case-study` | A customer story draft with numbers the customer approved | Later | Proof for sales and the website. |
| `onboarding-review` | A review of the first-run experience against activation data | Later | Combines `analyze` and `ux-review` for the first session. |

## Product leadership and product operations

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `output` | An HTML slide deck from product documents, for a reader outside the team | Now | Stakeholders read slides, not a folder of Markdown. |
| `portfolio-review` | A view across bets and teams: outcome, stage, owner, cost | Later | For leaders with several teams and one budget. |
| `operating-cadence` | A team's recurring meetings, documents and decision rights | Later | The starting point for team harnesses. |
| `retro` | A team retrospective on how the work went | Later | `readout` covers results. This covers the way of working. |
| `roles` | Who decides, who does the work and who is consulted, per decision type | Later | Clears up the decisions that stall between teams. |
| `product-principles` | Principles that settle recurring product and design debates | Later | Saves the team from repeating the same argument. |

## Consultants, agencies and advisors

These come from client work. Most of them help any person who works across teams or joins a product from outside.

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `stakeholder-map` | People, their interests, influence and position, with evidence | Next | Product managers in large companies need it as much as consultants do. |
| `workshop-design` | An agenda, exercises and expected outputs for a working session | Next | For anyone who runs a planning or discovery session. |
| `business-case` | One-off and running costs, benefits, payback and risks for one investment | Next | The document a budget holder signs. |
| `options` | 2 to 4 options compared on stated criteria, with a recommendation | Next | Gives `decision` a fair comparison as input. |
| `kickoff` | A kickoff pack: goals, roles, cadence, risks and first decisions | Later | For new teams and new client projects. |
| `document-review` | Findings from inherited documents, cited and labeled | Later | For anyone who joins a product or a client in the middle of the work. |
| `recommendation` | A memo for a decision maker that gives the answer first | Later | For advice to a person outside the team. |
| `risk-register` | Risks with likelihood, impact, owner and mitigation | Later | For bets that span several teams or months. |
| `current-state` | The current process and systems for one area | Later | The baseline before any change program. |

## Transformation, operations and AI adoption

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `workflow-map` | A team's workflow: steps, time, hand-offs and pains | Next | The starting point for finding where agents can help. |
| `ai-opportunities` | Tasks in a workflow scored for AI fit, value and data readiness | Next | The question every operations lead asks now. |
| `data-readiness` | Whether the data for an AI feature exists, is good enough and can be accessed | Next | Most AI features stall on data access. |
| `change-plan` | Who must change what, with training, messages and measures | Later | Internal tools fail at adoption more often than at build. |
| `adoption-readout` | Usage and impact of an internal tool after rollout | Later | Closes the loop for internal products. |

## AI builders

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `red-team` | Adversarial tests of an AI feature: prompt injection, misuse, data leaks | Next | `evals` measures quality. This looks for abuse. |
| `model-choice` | A model and provider choice by quality, cost, speed and privacy, with eval results | Later | Teams switch models often and rarely write down why. |
| `golden-set` | An eval dataset built from real, anonymized examples | Later | `evals` plans the set. This builds it. |
| `agent-design` | An agent's tools, loop, memory and stop rules | Later | For products where the agent is the product. |
| `ai-cost-model` | Model cost at the expected volume, with sensitivity to usage | Later | Gives `pricing` its cost input. |

## Regulated and enterprise products

| Skill | Produces | Horizon | Why |
|---|---|---|---|
| `privacy-review` | Data flows, legal basis, retention and user rights for one feature | Later | Lets the team answer privacy questions before launch. |
| `ai-act-check` | A risk class under the EU AI Act and the duties that follow from it | Later | For teams that sell AI features in the EU. |
| `security-questionnaire` | Product answers for enterprise security reviews, drafted from the repo | Later | Enterprise deals wait on these forms. |

## Beyond skills

| Item | What | Horizon |
|---|---|---|
| Eval suites | One fictional scenario test per skill: an agent writes the artifact from the skill alone, a second agent grades it against the checklist | Next |
| Product folder checker | A script that checks labels, IDs and links in a team's `product/` folder | Next |
| Connector guide | How to give skills read access to analytics, issue trackers and meeting transcripts | Next |
| Public page | A page that explains ProductOS with the Lintel example | Next |
| Other agents | Packaging for Codex and other agents that read Agent Skills | Later |
| Team harness blueprint | A pattern for a team to set up its own operating system on top of ProductOS | Later |
