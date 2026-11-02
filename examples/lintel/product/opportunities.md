---
skill: opportunities
status: Draft
updated: 2026-11-02
owner: Priya Raman
target: O1.1
---

# Opportunities

## Target
O1.1 "I need to know what's on fire." Recommended by the agent, not yet chosen. Priya decides. Reason: strongest evidence (4 of 4 interviewees, 6 of 24 tickets, the largest ticket theme), real cost (about $2,800 water damage, E-001), and it fits the stated problem and the North star pairing in outcomes.md. (Guess on the weighing, Observed and Measured on the evidence)

## Tree
- **North star:** weekly active staff / paid seats, now 71% (Measured, product database and Stripe, 2026-10-28)
  - **O1** "the one message that matters gets lost in the noise" (Told: team; Observed, E-001, E-008)
    - **O1.1** "I don't need help writing. I need to know what's on fire." An emergency message looks like every other message, so staff do not see it in time. (Observed, E-001, E-008)
      - **S1** Detect likely emergencies in the inbox and pin them to the top with a phone alert (Guess)
        - A-001 Emergencies can be spotted from message text with few misses (feasibility)
        - A-002 Staff act on alerts and do not learn to ignore them (usability)
      - **S2** Route a detected emergency by SMS or call to the on-call person (Guess)
        - A-003 Each firm has one on-call person or phone we can route to (viability)
      - **S3** No new software: an auto-reply to tenants giving an emergency phone number, forwarded to the on-call phone (Guess)
        - A-004 Tenants will call the number instead of texting the main line (desirability)
    - **O1.2** The urgent text never reaches the on-call person. (Observed in part: P2, P4 and T-1006 describe it. E-001, E-008)
  - **O2** Repeat questions eat staff time. "If those answered themselves, I'd get my evenings back." (Told, E-004; Measured, E-010; 182 of 500 sampled messages, 36%, in metrics.md)
  - **O3** Replying fast and accurately is hard when the facts are in leases and spreadsheets. (Told, E-002, E-003; the AI replies request sits here)
  - **O4** Sending a repair to a vendor takes too many steps and calls. (Told, E-006; 4 of 24 tickets)
  - **O5** SMS will not connect or stay in sync, so tenant texts do not arrive. (Measured: 48% connect SMS in 14 days; E-011)

## Not chosen
- O2: second candidate. 36% of messages is a big volume, but it does not lose the costly message.
- O3: AI drafts fit here. Interviewees set conditions (E-002), and the cost of a wrong reply is $1,900 (E-003, Told). See product/bets/ai-reply-drafts/assess.md.
- O4: only 1 interview (P4) and 4 tickets, all from firms of 300+ units.
- O5: treat as small fixes this cycle. It also feeds O1, since urgent texts arrive over SMS.

## Open questions
- Does the 9% emergency share in Lena's sample (46 of 500) hold in other months?
- How many firms have a separate on-call phone? (A-003)
- Priya to choose the target and record it with productos:decision.
