---
name: design-system
description: Use when a team wants prototypes, pages, slides or charts in its own look, says "use our brand", "set up our design system", "write a DESIGN.md" or "make it look like our product", or when a skill needs DESIGN.md and the repo has none.
---

# Design system

Writes `DESIGN.md` at the root of the product repo: the colors, type, spacing and components for prototypes, pages, slides and charts. The file follows the open DESIGN.md format, so design tools and coding agents read the same file. ProductOS gives a plain default. The team replaces it with its own look.

## When to use

- After `productos:start`, when the product has screens.
- "Use our brand", "the prototype does not look like our product".
- Not for the words on screen: use `productos:ux-review`.

## Before you start

- Read `product/PRODUCT.md`. If it does not exist, offer `productos:start` and continue without it if the person declines.
- If `DESIGN.md` exists at the repo root, read it. Do not overwrite it. Ask whether to update it or keep it.
- Find the tokens that the repo defines: CSS custom properties, the Tailwind config, token files, the component library theme and the global stylesheet. Record each value and its file.
- Ask once for brand material that is not in the repo: a brand guide, a design file or the URL of the live product.

## Steps

1. Start from the template below. Replace each default with the value from the repo or the brand material. Keep the token names that the repo uses.
2. Keep a default only where you found nothing. List each default that stays in the Overview, so the team sees what is not theirs yet.
3. Ask the person to confirm or correct the draft. Ask one question at a time, 3 at most:
   1. What is the main brand color?
   2. Which typefaces do you use for headings and for text?
   3. How must the product feel to the people who use it?

   Skip a question that the repo or the brand material answers. If the person says "just draft it", stop asking.
4. Calculate the contrast of each text color on each background, with a tool or the WCAG formula. Body text needs 4.5:1. Large text and field borders need 3:1. Write each ratio in the Colors section.
5. If a pair fails, mark it and propose the nearest color that passes. A person decides on the change.
6. If code defines the tokens, name that file as the source in the Overview. When this file and the code disagree, the code is correct.
7. Delete each section that the product does not need, and add its heading to `omitted`. Do not write rules only to fill a section.
8. If the repo has an `AGENTS.md` or `CLAUDE.md`, ask to add this line: `Read DESIGN.md before you build screens, pages, slides or charts.`

## Output

Write `DESIGN.md` at the repo root, not in `product/`, because design tools look for it there. The defaults give a plain, accessible look in system fonts.

```markdown
---
version: alpha
name: "<Product name>"
description: "<One line on how the product looks.>"
skill: design-system
status: Draft
updated: YYYY-MM-DD
omitted: ["Elevation & Depth", "Shapes"]
colors:
  primary: "#2450D6"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F5F4"
  border: "#D6D3D1"
  text: "#1C1917"
  text-muted: "#57534E"
  error: "#B42318"
typography:
  headline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: 4px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: 10px 16px
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
---

# <Product name>

## Overview
<How the product must feel, in the person's words.>
Source of the tokens: <file path, or "this file">.
ProductOS defaults still in use: <list, or "none">.

## Colors
- Primary: actions and links.
- Text on background: 17.5:1. Muted text on background: 7.6:1. On-primary on primary: 6.6:1.
- Charts: primary for the main series, text-muted and border for the others.

## Typography
- Headline: page titles and section headings.
- Body: running text.
- Label: buttons, field labels and table headers.

## Layout
- Page content is 72rem wide at most. A text column is 40rem wide at most.

## Components
- Primary button: the main action. One per screen.
- Input: the border uses text-muted, so the field passes 3:1.

## Do's and Don'ts
- Use only the tokens in this file. Add no color or size for one element.
- Label chart lines directly instead of with a legend.
- Keep text contrast at 4.5:1 or more.
```

## Check before you finish

- [ ] `DESIGN.md` is at the repo root, and its front matter is valid YAML.
- [ ] Each token matches the source file, or the Overview lists it as a default.
- [ ] Each text and background pair has a contrast ratio. Each pair below the WCAG level is marked.
- [ ] The sections follow the order of the format. Each missing section is in `omitted`.
- [ ] Each rule comes from the person, the brand material or the template.
- [ ] An existing `DESIGN.md` changed only after the person agreed.

## Then

- Record a color change made for contrast with `productos:decision`.
- If a prototype is next, run `productos:prototype`.
- When the look changes in code, run this skill again.

## Source

The file format is DESIGN.md from Google Labs (github.com/google-labs-code/design.md, 2026). The contrast levels come from WCAG 2.2 level AA (W3C, 2023).
