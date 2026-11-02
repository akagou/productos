---
skill: positioning
status: Draft
updated: 2026-11-02
owner: Priya Raman
---

# Positioning: Lintel

Everything below is Guess until 5 best-fit customers have reacted to it. They have not yet. There is no market scan, `jobs.md` or `strategy.md` in the repo. I did not run a market scan, so the alternatives come from `PRODUCT.md` and TEAM.md, and the competitor facts are Told with no URL. The emergency features are not built. The message below cannot go public until they ship and the eval plan passes.

## Competitive alternatives
| Alternative | Why best-fit customers use it | Source |
|---|---|---|
| Gmail, texts on a work phone, a spreadsheet of open repairs and a whiteboard (today's workaround) | It is free, already there, and everyone knows it. | Told: team, TEAM.md and PRODUCT.md. No URL. |
| Doing nothing: staff scroll the inbox and phone, and hope to notice | No cost or change. The cost shows up as a missed emergency (about $2,800 in one case). | Told: E-001; Observed pattern in 4 of 4 interviews |
| Doorbell PM (competitor, fictional) | Launched AI replies in August 2026. A 450-unit firm is evaluating it before its January 2027 renewal. | Told: TEAM.md and E-005. No URL, no access date. I have not looked at the product, so I make no claim about what it lacks. |

## Attributes, value and evidence
| Attribute | Evidence | Value to customers | Confidence |
|---|---|---|---|
| One inbox for email, SMS and web-form messages, with assign, tag and work orders (built) | README.md; 62 paying firms | "Tenants reach us everywhere": nothing to check in five places. | Told (team) |
| Emergency detection, an Urgent strip pinned at the top, and an SMS to the on-call phone (planned, 6-week bet, not built) | E-001, E-008, pitch.md | The one message that matters stands out and reaches the on-call person. Interviewees' words: "I don't need help writing. I need to know what's on fire." | Guess (the value). The need is Observed (4 of 4 interviews, 6 of 24 tickets). The feature has no eval result yet (A-001). |
| Weekly use by staff: 71% of paid seats active each week | metrics.md | The inbox is where staff already work, so an alert has an audience. | Measured, 2026-10-28 |

No competitor comparison is claimed, so no source is needed. I could not name an attribute that Doorbell PM lacks. A claim like "unlike Doorbell PM, we do emergency alerts" needs a market scan first.

## Best-fit customers
The office manager at a property management firm with 50 to 500 units and 3 to 15 staff, who answers tenants all day and has an on-call phone or person for night messages. (Told, TEAM.md; the on-call part is Told for 2 of 4 interviewees, A-003)
No retention, expansion or referral data separates the customers who value this most. The firm that told Sam it would pay more for night-time alerts has 450 units (Told, E-012 if confirmed). Larger firms may care most. That is a Guess. Check churn and usage by firm size (Tom).

## Market category
| Candidate | What customers assume | Helps or hurts | Confidence |
|---|---|---|---|
| Shared inbox for property managers | One place for tenant messages, assign and tag. They compare it with Gmail and with shared-inbox tools. | Helps: buyers understand it at once. Hurts: it sounds like what they have, and says nothing about emergencies. | Guess |
| Tenant communication platform | Broad: messaging, portal, rent reminders, AI replies. They compare it with Doorbell PM and larger suites. | Hurts: invites a feature-by-feature fight on AI replies, which we are holding (D-001). | Guess |
| Emergency-aware inbox for property managers | An inbox that tells staff what is urgent. A new, narrow label. | Helps: matches the problem in every interview. Hurts: promises detection we have not proven, and it is a safety claim. | Guess |

Chosen (recommendation): "shared inbox for property managers", with the emergency benefit in the sentence, not in the category name. Reason: buyers already know it, it is true today, and the safety claim stays out of the label until the eval plan passes. Decided by: not yet. Priya Raman decides.

## Message
**Statement.** For office managers at property management firms with 50 to 500 units, who need the one urgent tenant message to be seen before the damage is done, Lintel is a shared inbox for property managers that puts likely emergencies at the top and texts the on-call phone. Unlike Gmail, work-phone texts and a repair spreadsheet, it reads every message, in every channel, for what is urgent.

**Headline.** Urgent tenant messages rise to the top, whatever way they arrive.

| Proof point | Attribute | Evidence | Confidence |
|---|---|---|---|
| Email, SMS and web forms in one inbox | One inbox | README.md | Told (team) |
| 71% of paid seats are used every week, so alerts reach people already in the inbox | Weekly use | metrics.md | Measured, 2026-10-28 |
| In a September sample of 500 messages, 46 (9%) were emergencies. Detection accuracy on them is not yet tested. | Emergency detection | metrics.md; evals.md "Not run" | Measured for the sample. The detection claim is Guess. |

Proof point 3 shows the size of the problem and not that we solve it. Replace it with the eval result when there is one. Do not state a catch rate before then.

## Open questions
- Show the statement to 5 best-fit customers and record whether they recognize the need. Owner: Priya Raman. Suggested date: week of 2026-11-16, alongside Lena's sessions. (`productos:test`)
- Run `productos:market-scan` to check what Doorbell PM does and does not do, with URLs and access dates. Owner: Priya Raman. Date: before the January 2027 revisit (D-001).
- Does "texts the on-call phone" in the statement hold if the Pro tier decision (pricing proposal) puts alerts in a paid plan? Owner: Priya Raman.
- Legal check of the words "emergency" and "safety" in public copy. Owner: Sam Ortiz. Date: before launch.
- Add the Guess value claims (planned emergency value; best fit is larger firms) to `assumptions.md` once Priya confirms the ingest rows, so IDs do not collide.
