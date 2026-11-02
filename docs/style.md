# Writing style

One voice for the skills, the review agents and every document they write under `product/`. Product readers are busy and read a document once. Write so that one read is enough.

A team can change these rules for its own copy in `product/voice.md`, written by `productos:voice`. Where the two differ, follow `voice.md`. The labels and the answer-first order stay.

## The voice

Write like a sharp colleague who explains a problem across a desk. Use plain verbs and concrete nouns. Make each claim once. State a position and give its basis.

- Write in the active voice and the present tense.
- Instructions take the imperative: "Run the test."
- Keep the articles: "the file", "a customer".
- Put no more than three nouns in a row.
- Call one thing by one word every time. Do not rotate synonyms.
- Keep one topic per paragraph, six sentences at most.
- Vary sentence length. Mostly one idea per sentence.
- Spell in US English.

## Product documents

These rules apply to every file a skill writes under `product/`.

- Put the answer or the decision first. Reasons and evidence follow.
- Write a finding as one plain sentence with a subject and a verb.
- Give every claim about customers, markets or numbers a confidence label from [design.md](design.md#labels). Write the label alone. Put any note in the next sentence.
- Show doubt with a label. Do not soften the sentence.
- Give every number a source, or label it Guess.
- Name the person who decides or acts. A document does not decide, and data does not speak.
- Use a list for three or more items. Do not pack them into one sentence.
- Name the subject in a heading: "Risks", "Open questions". A heading does not tease or count.
- Leave out how the document was made: the prompts, the drafts, the arguments in chat. The reader needs the result.
- Copy that customers read, such as a positioning message, launch notes or a pricing page, gets two or three short sentences per section. Do not join two clauses with ", and". Write two sentences.

## Skill and agent instructions

A model reads `SKILL.md` files and agent definitions with no person to ask. Write them in Simplified Technical English (ASD-STE100).

- Write one instruction per sentence, in 20 words or fewer.
- Keep a description to 25 words or fewer.
- Use simple words, each with one meaning.
- Start a warning with a command: "Stop if the file is missing."
- Say when a skill applies in its `description`. Keep its steps out of the description.

## Patterns to delete

| Pattern | Example | Write instead |
|---|---|---|
| Contrast setup | "It's not a tool. It's a platform." "Days, not weeks." | The positive claim alone. |
| Teaser | "Here's the thing:" "The result?" | The content. |
| Closing line | "In short, ..." "That's the real risk." | Nothing. End when the content ends. |
| Em dash | "the spec — and the tests" | A comma, or two sentences. |
| Filler word | really, actually, very, genuinely | Delete the word. |
| Hedge | arguably, perhaps, somewhat | The claim, or the claim with the label Guess. |
| Hype word | leverage, robust, seamless, delve, unlock, empower | The plain word: "use" for leverage. |
| Opener | "Great question." "Let's unpack this." | The first real sentence. |
| Exclamation mark | "Ready to ship!" | A full stop. |
| Announced count | "Three reasons to act" | The items. |
| Vague claim | "The implications are significant." | The implication, named. |
| Decorative list of three | "faster, cheaper, better" | Only the items that add information. |
| Repeated shape | "No drafts. No delays. No risk." | One sentence with a list. |
| Figure of speech | "The spec carries the build." "The idea survives review." | The action: "The spec lists the build steps." "The team keeps the idea." |
| False agency | "The data tells us." "A decision emerged." | The person: "The analyst read the data." "The team decided." |
| Coined term | "the evidence band" | The ordinary noun, or a description of the action. |
| Stacked nouns | "intake standardization implementation" | The verb: "standardize intake". |
| Same claim twice | A last line that repeats the paragraph | One statement. |
| Tacked-on verdict | "..., and the plan should say so." | End the sentence at the fact. |
| Method jargon | "worked example", "prompt frame" | What the reader gets: "an example build", "how to write a prompt". |

## Words

| Use | Not |
|---|---|
| product manager | product owner |
| Supported, Refuted | validated, proven, disproven |
| Observed, Measured | confirmed by data, data-driven |
| use | leverage, utilize |
| delete | prune |

## Final pass

Do these checks before you save a document.

1. Read the document as a reader who never saw the conversation. Delete what only makes sense to someone who did.
2. Check each label against [design.md](design.md#labels).
3. Check the patterns table above.
4. In this repo, run `node scripts/check.mjs`. It finds the listed words and em dashes. It does not find the other patterns.

The `review` skill gives this guide to the newcomer agent, which reports the sentences that break it.
