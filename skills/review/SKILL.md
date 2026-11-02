---
name: review
description: Use when a product document needs fresh eyes before the team decides or builds, when someone asks for a review, critique or second opinion on a strategy, pitch, spec or plan, or when a document is about to move from Draft to Reviewed.
---

# Review

Fresh review agents read one product document, each from a single angle, and the findings go into one report in `product/reviews/`. The agents never see this conversation. The author's context is what makes a self-review weak, so the agents get only the document and the files it cites.

## When to use

- "Review this", "poke holes in it", "is this ready?", "second opinion".
- Before a pitch goes to a decision, or before a spec goes to the coding workflow.
- Not for checking documents against shipped code: use `productos:drift`.

## Before you start

- Find the target document. If the person did not name one, take the most recently changed file under `product/` with `status: Draft`, and confirm it in one line.
- Read the target's frontmatter. The `skill` field names the skill that wrote it.
- Check that you can start subagents. If you cannot, stop and say: "A fresh review needs subagents, and this session cannot start them." Do not review the document yourself in this conversation, because you share the author's context.

## Steps

1. Pick the angles from this table. Add `ai-risk` to any document that describes what an AI model or agent does. If the person names angles, use theirs.

   | Document | Angles |
   |---|---|
   | PRODUCT.md, strategy, outcomes, roadmap | skeptic, business, newcomer |
   | research-plan | customer, skeptic |
   | synthesis, jobs, feedback, market-scan | skeptic, newcomer |
   | opportunities, assess, prioritize | skeptic, business |
   | pitch | customer, skeptic, business, builder |
   | assumptions, test, prototype | skeptic, customer |
   | spec | builder, newcomer, skeptic, customer |
   | ai-scope, evals | ai-risk, builder, skeptic |
   | launch | customer, business, builder |
   | readout | skeptic, business |
   | update | newcomer |

2. Find the checklist. This skill's base directory is shown when it loads. The checklist is the file `<base directory>/../<skill>/SKILL.md`, where `<skill>` is the target's `skill` field. If the field is missing, send "none".

3. Start one agent per angle, all in parallel. The agent type is `productos:<angle>`. Send each agent this prompt and nothing else:

   ```
   Review this document: <absolute path of the target>
   Product front page: <absolute path of product/PRODUCT.md, or "none">
   Checklist: <absolute path of the checklist, or "none">
   Return your findings in the format your instructions give.
   ```

   Do not add a summary of the conversation, the author's intent, or your own opinion. Each of those gives the agent the context that a fresh review must not have.

4. Merge the findings. When two agents report the same problem in the same place, keep one finding, use the higher severity, and list both angles. Drop findings that point to nothing in the document. Number the findings R1, R2 and so on, Blockers first.

5. Write the report (below). In chat, give the counts by severity, the first 3 findings of the table in one line each, and the report path. Ask which findings to fix.

6. Apply the fixes the person agrees to. Set each finding to Fixed or Rejected, and give a reason for each Rejected. A Rejected Blocker needs an entry in `product/decisions.md` with the name of the person who decided.

7. When no Blocker is Open, set the target's `status` to Reviewed. Offer one more pass with new agents only if the fixes changed a whole section. Stop after two passes.

## Output

Write `product/reviews/<YYYY-MM-DD>-<target file name without extension>.md`.

```markdown
---
skill: review
status: Draft
updated: YYYY-MM-DD
target: <path of the target>
angles: <comma-separated angles>
---

# Review of <target title>

| # | Severity | Angle | Problem | Where | Fix | State |
|---|---|---|---|---|---|---|
| R1 | Blocker | skeptic, business | <one line> | <section> | <one line> | Open |

## What works

- <angle>: <the agent's "Works" line>

## Rejected findings

- R<n>: <reason>, decided by <name>
```

## Check before you finish

- [ ] Each agent received only the three paths, with no summary or opinion.
- [ ] Every finding has a severity from Blocker, Major or Minor, and a state from Open, Fixed or Rejected.
- [ ] Duplicate findings are merged and list every angle that raised them.
- [ ] Every Rejected finding has a reason, and every Rejected Blocker has a decision entry.
- [ ] The chat reply gives the counts, the first 3 findings and the report path, and no more.
- [ ] The target's status changed to Reviewed only when no Blocker was Open.

## Then

- When the target is a spec with status Reviewed, suggest the hand-off step in `productos:spec`.
- When a finding shows an untested assumption, add it to `product/assumptions.md` and suggest `productos:test`.

## Source

The fresh-reviewer method of the Elephant-Goldfish Model (Rensin, 2026). The angles follow Cagan's four product risks (Cagan, *Inspired*, 2017) plus a reader with no background and a reviewer for AI behavior.
