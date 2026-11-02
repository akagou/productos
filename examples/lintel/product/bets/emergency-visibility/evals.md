---
skill: evals
status: Draft
updated: 2026-11-02
owner: Priya Raman
bet: emergency-visibility
thresholds_set: Not set yet. The numbers below are proposals. Priya Raman sets them before the first run, and the date goes here.
---

# Evals: Emergency visibility

Nobody has run an eval yet. Every number below is a target.

## What good looks like
| Criterion | Traces to | Grader |
|---|---|---|
| A real emergency (water, gas, lockout, no heat) is flagged | AC1, failure mode "miss" | Code: compare to Lena's tags |
| A non-emergency is not flagged | AC2, failure mode "false alarm" | Code: compare to Lena's tags |
| Each flag carries a short reason a person can read | "What the user sees" in ai-scope.md | Model grader with rubric, plus human sample |
| Text inside a message cannot make the model flag by instruction | Failure mode "steering" | Code on the adversarial set |
| Output is only a label, a reason and valid JSON; no action text | Never list in ai-scope.md | Code: schema check |
| The model returns within 5 seconds for 95% of calls | Latency budget; AC1 | Code: timing |

## Eval set
- Size: 500 to start. Real: 500 (Lena's September 2026 sample, 46 emergencies). Hand-written: 30 added. Synthetic: 0.
- Edge cases: 20 hand-written (for example "heat wave", "gas station", indirect phrasing, "locked out of the mailbox", Spanish text). Adversarial: 10 hand-written (instructions inside the message). Safety set: 10 hand-written emergencies phrased indirectly, which must all be caught.
- Source and anonymization: the 500 September messages with names, phone numbers, emails and unit numbers removed by Tom's team. Needs Tom's confirmation that the team may use them. Hand-written cases are labeled hand-written.
- Limit: the real set comes from one month and 62 firms, so the 9% emergency share (A-010) and the phrasing may not hold elsewhere. Add August and October samples (A-010).
- Location: to be created at product/bets/emergency-visibility/eval-set/ (not in git).

## Graders
| Grader | Type | Rubric or check | Agreement with human labels |
|---|---|---|---|
| Label match | Code | Predicted label equals Lena's tag | Not applicable (the tags are the human labels) |
| Schema and no-action check | Code | Output parses to {label, reason}; nothing else | Not applicable |
| Reason quality | Model | Rubric: names the signal in the message in 15 words or fewer, makes no claim not in the message | Not checked yet (Guess). Check on 40 reasons labeled by Lena before use. |
| Reason sample review | Human | Lena reviews 40 reasons per run | Not applicable |

## Metrics and thresholds
All thresholds are proposals from the agent, to be set by Priya Raman.
| Metric | Pass threshold | Result | Confidence |
|---|---|---|---|
| Recall on emergencies in the real set (46) | at or above 95% (at most 2 misses) | Not run | Guess |
| Recall on the safety set (10) | 100% | Not run | Guess |
| False alerts per firm per week (projected from the real set) | at or below 2 | Not run | Guess |
| Model recall minus rules-only recall at the same false-alarm rate | at or above 10 points (A-012) | Not run | Guess |
| Adversarial set flagged only because of the embedded instruction | 0 | Not run | Guess |
| Schema-valid output | at or above 99% | Not run | Guess |
| Reason rubric pass | at or above 85% | Not run | Guess |
| Latency, 95th percentile | at or below 5 seconds | Not run | Guess |

Note: with only 46 real emergencies, a 95% recall figure has a wide margin. Treat a pass as weak evidence and keep the pilot in shadow mode (flags recorded, alerts off) for the first week.

## When to run
On every prompt, model, threshold or keyword-rule change, and monthly on a fresh 200-message sample tagged by staff. Owner: Tom Achterberg.

## Online signals after launch
| Signal | Owner | Review schedule | Alarm level |
|---|---|---|---|
| Alerts opened within 15 minutes (A-002) | Priya Raman | Weekly in the pilot | Below 50% |
| Dismissal rate of flags | Priya Raman | Weekly | Above 40% |
| Emergencies added by hand (misses) | Tom Achterberg | Weekly | Any miss reviewed; more than 2 per firm per month |
| Alert send failures | Tom Achterberg | Daily in the pilot | Above 1% |
| Median time from arrival to first open | Priya Raman | Weekly, read 2027-01-15 | No baseline yet |

## Cost of running
One run is 540 model calls, about $0.30 at the ai-scope estimate of $0.0005 per message, plus about 1 hour of Lena's time for the reason sample. About $5 a month if run weekly, plus staff time for tagging. (Guess; price not checked)

## Run log
| Date | Change tested | Results | Verdict |
|---|---|---|---|
| | | | |
