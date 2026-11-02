---
name: output
description: Use when someone wants slides or a deck to present, send or share, says "make slides", "turn this into a deck", "a deck for the board", "share this with stakeholders" or "export this", or wants several product documents combined for one reader.
---

# Output

Turns product documents into an HTML slide deck. The agent writes the slides as short Markdown. The script `render.mjs` in this skill's folder picks a layout for each slide and writes one HTML file, so every deck has the same look and the markup costs no tokens. The deck takes its colors and fonts from `DESIGN.md` when the repo has one.

## When to use

- "Make slides of the pitch", "a deck for the leadership meeting", "send this to the board".
- When a reader outside the team needs several documents as one story.
- For a stakeholder update, write it with `productos:update` first, then turn it into slides here.
- Not for a fresh-eyes check: use `productos:review` on the source documents first.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- Read `product/voice.md` if it exists. Read the documents the deck draws on.
- You need the reader, and what they must decide or do. Ask for what is missing, one question at a time, 2 at most.

## Steps

1. Write the answer in one sentence. It is the title of slide 1.
2. Write `product/output/<slug>.md` with the template below. Follow these rules:
   - Write 6 to 12 slides. Separate slides with a line that contains only `---`.
   - Give each slide one claim, as a `##` title of 14 words or fewer. "Urgent messages get lost in the inbox", not "Problem".
   - Keep each slide under 45 words. Use lists, numbers and tables. Write no paragraph longer than 20 words.
   - Take every claim from a file in `product/`. Add no new claim.
   - Write for a reader who never saw `product/`. Put no confidence labels or IDs on a slide. When it matters how sure a claim is, say it in plain words: "measured in September", "not tested yet". Put IDs in the Source line.
   - Use the reader's words. Replace team words such as feature flag, spike or guardrail.
   - End each slide with its source: `Source: product/<path>`.
   - Pick the layout by what you write. See the table below.
   - Make the last slide the decision or the action, with an owner for each open question.
   - Write no slide about the agenda, the method or thanks.
3. Run the script. `<base directory>` is the folder of this skill, shown when the skill loads:
   `node <base directory>/render.mjs product/output/<slug>.md`
4. Fix each warning in the Markdown. Leave words inside quotes as they are. Run the script again until it prints no warnings.
5. Do not edit the HTML. To change the look, change `DESIGN.md` and run the script again.
6. Read each slide as the reader. Delete what only the team understands.

| You write | The slide shows |
|---|---|
| `#` title on slide 1, and one line | A dark cover with the reader and the date |
| `##` title and nothing else | One large statement |
| `##` title, 2 to 4 items that start with a number | Large numbers |
| `##` title, a numbered list of 3 to 5 short steps | Steps in a row |
| `##` title, two `###` headings with lists | Two columns |
| `##` title and a `>` quote | A large quote |
| `##` title and a list or a table | Title and content |

## Output

Write `product/output/<slug>.md`. The script writes `product/output/<slug>.html` next to it.

```markdown
---
skill: output
status: Draft
updated: YYYY-MM-DD
reader: <who reads it>
ask: <the decision or action the reader takes>
---

# <The answer in one sentence>
<Who owns it, and what you ask for.>

---

## <A claim about numbers>
- 9% of 500 September messages were emergencies
- 4 of the 4 firms we interviewed had missed one

Source: product/<path> (E-001, E-008)

---

## <A claim about a sequence>
1. Detect likely emergencies in email, SMS and web forms
2. Pin them in an Urgent strip at the top of the inbox
3. Text the on-call phone, and repeat once after 15 minutes

Source: product/<path>

---

## <The decision you ask for>
- [ ] <open question> Owner: <name>
```

In the HTML, the arrow keys move between slides. Print to PDF gives one slide per page.

## Check before you finish

- [ ] Slide 1 states the answer, and the last slide states the decision or action.
- [ ] Each slide has one claim as its title.
- [ ] Each claim comes from a file in `product/`. IDs appear only in Source lines.
- [ ] No slide uses a confidence label or a word that only the team uses.
- [ ] Each slide that makes a claim names its source file.
- [ ] No slide describes the agenda or the method.
- [ ] The script printed no warnings outside quotes.
- [ ] Nobody edited the HTML by hand.

## Then

- If the reader decides something, record it with `productos:decision`.
- Run the script again after the source changes. The HTML does not update by itself.

## Source

The answer-first order follows *The Minto Pyramid Principle* (Minto, 1987). One claim per slide title follows the assertion-evidence slide (Alley, *The Craft of Scientific Presentations*, 2013).
