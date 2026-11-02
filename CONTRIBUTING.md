# Writing a ProductOS skill

Every skill follows the same contract, so agents and people find the same parts in the same place. `skills/pitch/SKILL.md` and `skills/spec/SKILL.md` are the reference examples.

## Anatomy

```markdown
---
name: <folder name>
description: Use when <the situations and phrases that call for this skill>.
---

# <Title>

<Two or three sentences: what the skill produces, where it writes it, and the one idea that makes it work.>

## When to use

- <situations and phrases>
- Not for <neighboring case>: use `productos:<other>`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- <the other files this skill reads>
- <the inputs it needs, and what to ask when one is missing>

## Steps

1. <numbered steps, imperative>

## Output

Write `product/<path>`.

<the exact template, in a fenced block, with frontmatter>

## Check before you finish

- [ ] <five to eight checks a reader can verify in the output>

## Then

- <which logs to update, with which IDs>
- <which skill comes next, and the condition for it>

## Source

<the named framework, author and year, or "ProductOS convention">
```

## Rules for authors

- **Description.** Start with "Use when". List triggers, symptoms and phrases. Do not describe the steps: an agent that reads steps in the description follows those and skips the file. Keep it under 400 characters.
- **Length.** 450 to 900 words. `using-productos` stays under 400 words, because it loads in every session.
- **Register.** Write instructions in the imperative, one action per sentence, in plain American English. A reader with English as a second language must understand every sentence on the first pass.
- **Labels.** Use only the lists in [docs/design.md](docs/design.md#labels). Write a label exactly as listed. Never add a qualifier to a label ("Observed, mostly" is wrong).
- **Confidence.** Every claim about customers, markets or numbers in an output template has a confidence label. AI-written or simulated input is Guess.
- **Questions.** When the skill needs input, ask one question at a time, and cap the number of questions. When the person says "just draft it", draft with every unknown marked Guess.
- **Chat.** Write the artifact to its file. In chat, say what was written, the path, and the one decision the person needs to make.
- **Cross-references.** Name other skills as `productos:<name>`. `scripts/check.mjs` checks that each one exists.
- **Checklist.** The checks state properties of the output, not effort ("Each opportunity links to one outcome", not "Think about outcomes"). The review agents use this list as their rubric.
- **Fresh text.** Write every skill new. Cite frameworks by author and year. Do not copy text from other skill libraries.

## Writing style

[docs/style.md](docs/style.md) sets the voice. Skill and agent text follows its Simplified Technical English rules. Output templates follow its rules for product documents. `scripts/check.mjs` finds the listed words and em dashes.

## Checks

Run `node scripts/check.mjs` before you commit. It exits non-zero on any error.

## Testing locally

Load the plugin without installing it: `claude --plugin-dir <path to this repo>`. Run it in a product repo outside this folder. Claude Code blocks writes inside the folder of a loaded plugin, so copy `examples/lintel/` somewhere else before you run skills on it. In a headless run (`claude -p`), also pass `--add-dir <path to this repo>`. Without it, the review agents cannot read the checklists or the style guide.
