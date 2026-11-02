---
name: voice
description: Use when a team wants copy in its own voice, says "write like us", "our tone of voice", "brand voice" or "use British spelling", or when positioning, launch notes or pricing copy sound generic or unlike the team.
---

# Voice

Writes `product/voice.md`: how the team writes for its customers, and where its product documents differ from the ProductOS style. Skills that write customer copy follow it, and so do decks from `productos:output`. The file starts from the ProductOS style. The team replaces each default with its own rule.

## When to use

- After `productos:start`, before the first positioning, launch or pricing copy.
- "Write like us", "our tone of voice", "we use British spelling", "this does not sound like us".
- Not for the look of pages and screens: use `productos:design-system`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- If `product/voice.md` exists, read it. Do not overwrite it. Ask whether to update it or keep it.
- Find copy that the team wrote and customers read: the landing page, app strings, help pages, emails, the README. Collect 5 to 10 samples. Record the file or URL of each.

## Steps

1. Read the samples. Record what they do: US or UK spelling, "we" and "you" or neither, typical sentence length, how formal they are, and the words the team uses for its main objects.
2. Write each rule so that a reader can check it. "Address the reader as you" passes. "Be friendly" fails.
3. Ask the person to confirm or correct the rules. Ask one question at a time, 3 at most:
   1. Who reads your copy, and where?
   2. Which words must you always use, and which never?
   3. Which sample sounds most like you?

   Skip a question that the samples answer. If the person says "just draft it", stop asking.
4. Take 3 sentences from the samples that break the rules. Rewrite each one. Use real sentences only.
5. Where the samples and the person say nothing, keep the ProductOS default. List each default that stays.
6. Keep the labels and the answer-first order. A voice changes words and tone. It does not change the labels.
7. If the repo has an `AGENTS.md` or `CLAUDE.md`, ask to add this line: `Follow product/voice.md for copy and documents.`

## Output

Write `product/voice.md`.

```markdown
---
skill: voice
status: Draft
updated: YYYY-MM-DD
---

# Voice

## Who reads our copy
<The person from PRODUCT.md, and where they read: the app, email, the website.>

## How we sound
- <A rule a reader can check, for example "Address the reader as you.">

## Spelling and format
- Spelling: <US | UK>.
- Dates: <for example April 12, 2027>.
- Headings: <Sentence case | Title Case>.

## Words
| Use | Not |
|---|---|
| <word> | <word> |

## Before and after
| Before | After | Rule |
|---|---|---|
| <real sentence> | <rewrite> | <the rule it breaks> |

## Changes to the ProductOS style
<Rules for product documents that differ from the ProductOS style, or "None".>

## ProductOS defaults still in use
<List, or "None".>

Samples: <file paths and URLs>.
```

## Check before you finish

- [ ] A reader can check each rule against a sentence.
- [ ] Each sentence in Before and after comes from a listed sample.
- [ ] The labels and the answer-first order are unchanged.
- [ ] Each default that stays is listed.
- [ ] An existing `voice.md` changed only after the person agreed.

## Then

- If `product/positioning.md` exists, offer to rewrite its messages with `productos:positioning`.
- Before the next launch, run `productos:launch`. It follows the voice.
- Decks from `productos:output` follow the voice from now on.

## Source

ProductOS convention. Rules that a reader can check follow ASD-STE100, Simplified Technical English (ASD, 2021).
