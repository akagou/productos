// Structural checks for ProductOS. Run: node scripts/check.mjs
// Exits 1 on any error. Warnings do not fail the run.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const errors = [], warnings = [];
const err = (m) => errors.push(m), warn = (m) => warnings.push(m);
const read = (p) => readFileSync(join(root, p), 'utf8');

const SECTIONS = ['## When to use', '## Before you start', '## Steps', '## Output',
  '## Check before you finish', '## Then', '## Source'];
const HYPE = /\b(seamless(ly)?|robust|leverag(e|es|ed|ing)|game-changing|delve|cutting-edge|best-in-class|world-class|revolutionary|synerg(y|ies)|unlock(s|ed|ing)?|empower(s|ed|ing)?)\b/i;
const CHAT_ONLY = new Set(['using-productos', 'next']);

function frontmatter(text, file) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) { err(`${file}: no frontmatter`); return {}; }
  return Object.fromEntries(m[1].split('\n').filter((l) => l.includes(':'))
    .map((l) => [l.slice(0, l.indexOf(':')).trim(), l.slice(l.indexOf(':') + 1).trim()]));
}

// Manifests
for (const f of ['.claude-plugin/plugin.json', '.claude-plugin/marketplace.json', 'hooks/hooks.json']) {
  try { JSON.parse(read(f)); } catch (e) { err(`${f}: ${e.message}`); }
}
if (!read('hooks/hooks.json').includes('skills/using-productos/SKILL.md')) err('hooks.json: does not load using-productos');

// Skills
const skills = readdirSync(join(root, 'skills'), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const agents = readdirSync(join(root, 'agents')).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
const names = new Set([...skills, ...agents]);
const readme = existsSync(join(root, 'README.md')) ? read('README.md') : '';
const design = read('docs/design.md');
const router = read('skills/using-productos/SKILL.md');

for (const s of skills) {
  const file = `skills/${s}/SKILL.md`;
  if (!existsSync(join(root, file))) { err(`${file}: missing`); continue; }
  const text = read(file);
  const fm = frontmatter(text, file);
  if (fm.name !== s) err(`${file}: name "${fm.name}" does not match folder`);
  if (!fm.description?.startsWith('Use when')) err(`${file}: description must start with "Use when"`);
  if ((fm.description || '').length > 400) err(`${file}: description over 400 characters`);
  const words = text.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
  if (s === 'using-productos') { if (words > 400) err(`${file}: ${words} words, limit 400`); continue; }
  for (const h of SECTIONS) if (!text.includes(`\n${h}\n`)) err(`${file}: missing section "${h}"`);
  if (words > 1100) err(`${file}: ${words} words, limit 1100`);
  else if (words < 450 || words > 900) warn(`${file}: ${words} words, aim for 450 to 900`);
  if (!CHAT_ONLY.has(s) && !text.includes(`skill: ${s}`)) err(`${file}: output template lacks "skill: ${s}"`);
  if (!router.includes(`| ${s} |`)) err(`using-productos: no routing row for ${s}`);
  if (!readme.includes(`\`${s}\``)) err(`README.md: skill ${s} not listed`);
  if (!design.includes(s)) err(`docs/design.md: skill ${s} not mentioned`);
}

// Agents
const review = read('skills/review/SKILL.md');
for (const a of agents) {
  const file = `agents/${a}.md`;
  const fm = frontmatter(read(file), file);
  if (fm.name !== a) err(`${file}: name "${fm.name}" does not match file`);
  if (!fm.tools) err(`${file}: no tools line`);
  if (!review.includes(a)) err(`review skill never uses agent ${a}`);
}

// Cross-references and banned words in every shipped text file
const texts = [...skills.map((s) => `skills/${s}/SKILL.md`), ...agents.map((a) => `agents/${a}.md`), 'README.md', 'docs/design.md']
  .filter((f) => existsSync(join(root, f)));
for (const f of texts) {
  const text = read(f);
  for (const [, ref] of text.matchAll(/productos:([a-z0-9-]+)/g)) if (!names.has(ref)) err(`${f}: unknown reference productos:${ref}`);
  const hit = text.match(HYPE);
  if (hit) err(`${f}: hype word "${hit[0]}"`);
  if (/—|\s--\s/.test(text)) err(`${f}: em dash`);
}

for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.log(`error ${e}`);
console.log(`${skills.length} skills, ${agents.length} agents, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
