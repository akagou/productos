---
name: ux-review
description: Use when someone asks for a UX review, usability check or accessibility check of a screen, flow, prototype or live product, says "walk through this flow", "audit this design", "is this usable?" or "check this against WCAG", before testing with users.
---

# UX review

Writes `product/reviews/<YYYY-MM-DD>-ux-<slug>.md`: an expert review of a screen, a flow, a prototype or the running product. The agent goes through the task as the user, step by step, and checks usability and accessibility. The findings predict problems. They are Guess about real users until 5 users confirm them.

## When to use

- "UX review", "usability check", "accessibility audit", "walk through the flow".
- After a prototype or a build, and before a test with users.
- Not for documents: use `productos:review`.
- This review does not judge visual taste.

## Before you start

- Read `product/PRODUCT.md`, and the spec or prototype notes for the flow.
- You need the material: screenshots, exported designs or a URL. For a URL, use a browser tool if one is available. If none is, ask for screenshots.
- You need the user and the task. Take them from `PRODUCT.md` or the spec. If neither names them, ask: "Who is the user, and what are they trying to do?"

## Steps

1. Name the user and the task in one line each, then the starting point and the finish.
2. List the steps of the task in order, as the user takes them. Give each step a number and a screenshot reference.
3. For each step, ask the 3 walkthrough questions: (a) does the user know what to do, (b) can the user see how to do it, (c) does the user understand the result. Record each no as a finding.
4. Check each step against Nielsen's 10 heuristics: system status, match with the real world, user control, consistency, error prevention, recognition over recall, flexibility, minimal design, error recovery, help. Record only real problems.
5. Check accessibility against WCAG 2.2 level AA: contrast, keyboard use, focus order, labels, alt text and target size. For each check, write the method: Tool (name it), Eye, or Not done with the reason. Do not claim a pass for a check you did not do.
6. Check the words on screen: labels, empty states and error messages. Each one must be plain and say what to do next.
7. Write the findings table. Give each finding a severity (Blocker, Major or Minor), the heuristic or WCAG criterion, the place, what happens and the fix.
8. List what works. Name at least 3 specific things.
9. Mark every finding Guess about real users. Suggest the next step: `productos:prototype` for a fix, or `productos:test` with 5 users.

## Output

Write `product/reviews/<YYYY-MM-DD>-ux-<slug>.md`. The slug is two to four lowercase words joined by hyphens.

```markdown
---
skill: ux-review
status: Draft
updated: YYYY-MM-DD
target: <URL, file or screen name>
user: <who>
task: <what they try to do>
---

# UX review: <target>

## Scope
<What was reviewed, version or date, material used.> Findings are Guess about real users.

## Walkthrough
| Step | User action | Knows what to do | Sees how | Understands result | Screenshot |
|---|---|---|---|---|---|

## Findings
| # | Severity | Heuristic or WCAG | Where | What happens | Fix | State |
|---|---|---|---|---|---|---|

## Accessibility checks
| Check | Method | Result |
|---|---|---|
| Contrast | Tool, Eye or Not done | |
| Keyboard use | | |
| Focus order | | |
| Labels | | |
| Alt text | | |
| Target size | | |

## Words on screen
| Where | Text | Problem | Better text |
|---|---|---|---|

## What works
- <specific thing>

## Next step
<Test with 5 users, or a prototype of the fixes.>
```

## Check before you finish

- [ ] The file names the user and the task, and the walkthrough follows that task in order.
- [ ] Each step answers the 3 walkthrough questions.
- [ ] Each finding has a severity from Blocker, Major or Minor, a criterion, a place and a fix.
- [ ] Each place has a screenshot reference.
- [ ] Each accessibility check says Tool, Eye or Not done, with the reason for Not done.
- [ ] The words check covers labels, empty states and error messages.
- [ ] "What works" lists at least 3 items.
- [ ] The scope says that the findings are Guess about real users, and the file contains no opinion on visual taste.

## Then

- Add each Blocker and Major finding to `product/assumptions.md` as a Usability risk, with confidence Guess.
- Suggest `productos:prototype` or `productos:test` with 5 users from the best-fit group.
- If the findings change the spec, update `spec.md` and suggest `productos:review`.

## Source

The heuristics come from Nielsen, "10 Usability Heuristics for User Interface Design" (1994). The accessibility criteria come from W3C, *Web Content Accessibility Guidelines (WCAG) 2.2* (2023). The walkthrough comes from Wharton, Rieman, Lewis and Polson, "The cognitive walkthrough method: A practitioner's guide" (1994).
