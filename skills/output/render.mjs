#!/usr/bin/env node
// Renders a ProductOS slide file (Markdown) to one self-contained HTML deck.
// Usage: node render.mjs <input.md> [output.html]
// A line with only --- separates slides. A file without separators is split at each ## heading.
// Each slide's layout follows from its content (see SKILL.md). The look comes from DESIGN.md at the
// repo root when it exists, else the default theme below. No dependencies.
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const SLOP = /\b(really|actually|very|genuinely|arguably|perhaps|somewhat|utiliz(e|es|ed|ing)|seamless(ly)?|robust|leverag(e|es|ed|ing)|game-changing|delve|cutting-edge|best-in-class|world-class|revolutionary|synerg(y|ies)|unlock(s|ed|ing)?|empower(s|ed|ing)?)\b/i;
// Words that only the product team uses. Readers of a deck get plain words instead.
export const TEAM_WORDS = /\b(behind a (feature )?flag|feature flags?|spikes?|rabbit holes?|no-gos?|appetite|guardrails?|north star|input metric|eval plan|evals?|MVP|sprints?|backlog)\b/i;
const LIMITS = { slides: 12, words: 45, title: 14, items: 5, rows: 7 };

const NUM = /^([~<>+-]?[$€£]?\d[\d,.]*\s?(?:%|x|k|m|bn|pp)?)(?=\s|$)\s*(.*)$/i;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const count = (s) => s.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
const indentOf = (l) => l.match(/^\s*/)[0].length;
const isItem = (l) => /^\s*([-*+]|\d+[.)])\s+/.test(l);
const isTableStart = (l, next) => /^\s*\|/.test(l) && next !== undefined && /^\s*\|?\s*:?-{3,}/.test(next);
const cells = (l) => l.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map((c) => c.replace(/\\\|/g, '|').trim());

// Front matter and DESIGN.md tokens: nested maps of scalars, by indentation.
export function yaml(text) {
  const root = {}, stack = [{ indent: -1, obj: root }];
  for (const raw of text.split('\n')) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue;
    const m = raw.match(/^(\s*)([^:]+?):\s*(.*)$/);
    if (!m) continue;
    while (stack.at(-1).indent >= m[1].length) stack.pop();
    const parent = stack.at(-1).obj;
    if (m[3] === '') { parent[m[2]] = {}; stack.push({ indent: m[1].length, obj: parent[m[2]] }); }
    else parent[m[2]] = m[3].replace(/^(["'])(.*)\1$/, '$2');
  }
  return root;
}

function splitFrontMatter(md) {
  const text = md.replace(/\r\n?/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  return m ? [yaml(m[1]), text.slice(m[0].length)] : [{}, text];
}

export function inline(s) {
  const slots = [];
  const keep = (html) => `\u0000${slots.push(html) - 1}\u0000`;
  s = s.replace(/`([^`]+)`/g, (_, c) => keep(`<code>${esc(c)}</code>`));
  s = esc(s);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) =>
    keep(`<a href="${/^\s*javascript:/i.test(u) ? '#' : u}">${t}</a>`));
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^\w*])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
  s = s.replace(/(^|[^\w])_([^_\s][^_]*?)_(?!\w)/g, '$1<em>$2</em>');
  while (/\u0000\d+\u0000/.test(s)) s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => slots[i]);
  return s;
}

// Markdown to block nodes
export function parse(md) {
  const lines = md.split('\n'), nodes = [];
  let i = 0, m;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if ((m = line.match(/^\s*(```|~~~)/))) {
      const buf = [];
      for (i++; i < lines.length && !lines[i].trim().startsWith(m[1]); i++) buf.push(lines[i]);
      i++;
      nodes.push({ t: 'code', text: buf.join('\n') });
    } else if ((m = line.match(/^(#{1,4})\s+(.*?)\s*#*\s*$/))) {
      nodes.push({ t: 'h', level: m[1].length, text: m[2] }); i++;
    } else if (isTableStart(line, lines[i + 1])) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++]);
      nodes.push({ t: 'table', rows });
    } else if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
      nodes.push({ t: 'quote', md: buf.join('\n') });
    } else if (isItem(line)) {
      const buf = [];
      while (i < lines.length) {
        const l = lines[i];
        if (isItem(l) || (/^\s{2,}\S/.test(l) && buf.length)) { buf.push(l); i++; continue; }
        if (!l.trim() && lines[i + 1] !== undefined && (/^\s{2,}\S/.test(lines[i + 1]) || isItem(lines[i + 1]))) { buf.push(l); i++; continue; }
        break;
      }
      const base = indentOf(buf[0]), items = [];
      for (const l of buf) {
        const im = l.match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
        if (im && im[1].length === base) items.push({ text: im[3], rest: [] });
        else if (items.length) items.at(-1).rest.push(l);
      }
      nodes.push({ t: 'list', ordered: /^\s*\d/.test(buf[0]), start: parseInt(buf[0].trim(), 10) || 1, items });
    } else {
      nodes.push({ t: 'p', text: line.trim() }); i++;
    }
  }
  return nodes;
}

function tableHTML(rows) {
  const head = cells(rows[0]);
  const right = cells(rows[1]).map((c) => c.endsWith(':'));
  const num = (c) => /^[-+~]?[$€£]?\d[\d,.]*\s?(%|k|m|x)?$/i.test(c.trim());
  const body = rows.slice(2).map((r) => `<tr>${cells(r).map((c, i) => {
    const cls = right[i] || num(c) ? ' class="num"' : /^\d{4}-\d{2}-\d{2}$/.test(c.trim()) ? ' class="date"' : '';
    return `<td${cls}>${inline(c)}</td>`;
  }).join('')}</tr>`).join('');
  return `<table><thead><tr>${head.map((h, i) => `<th${right[i] ? ' class="num"' : ''}>${inline(h)}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>`;
}

function listHTML(n) {
  const lis = n.items.map(({ text, rest }) => {
    let box = '';
    const t = text.match(/^\[([ xX])\]\s+(.*)$/);
    if (t) { box = `<span class="box${t[1] === ' ' ? '' : ' done'}"></span>`; text = t[2]; }
    const min = Math.min(...rest.filter((r) => r.trim()).map(indentOf));
    const inner = rest.some((r) => r.trim()) ? html(parse(rest.map((r) => r.slice(Math.min(min, indentOf(r)))).join('\n'))) : '';
    return `<li${box ? ' class="task"' : ''}>${box}${inline(text)}${inner}</li>`;
  }).join('');
  return n.ordered ? `<ol${n.start !== 1 ? ` start="${n.start}"` : ''}>${lis}</ol>` : `<ul>${lis}</ul>`;
}

function html(nodes) {
  return nodes.map((n) => n.t === 'h' ? `<h${Math.max(3, n.level)}>${inline(n.text)}</h${Math.max(3, n.level)}>`
    : n.t === 'p' ? `<p>${inline(n.text)}</p>`
    : n.t === 'code' ? `<pre><code>${esc(n.text)}</code></pre>`
    : n.t === 'quote' ? `<blockquote>${html(parse(n.md))}</blockquote>`
    : n.t === 'table' ? tableHTML(n.rows)
    : listHTML(n)).join('\n');
}

// Slides
export function splitSlides(body) {
  const parts = body.split(/^\s*-{3,}\s*$/m);
  return (parts.length > 1 ? parts : body.split(/\n(?=## )/)).filter((p) => p.trim());
}

function analyze(md, k) {
  let nodes = parse(md);
  const sources = nodes.filter((n) => n.t === 'p' && /^Source:/i.test(n.text));
  nodes = nodes.filter((n) => !sources.includes(n));
  const head = nodes[0]?.t === 'h' && nodes[0].level <= 2 ? nodes.shift() : null;
  const only = nodes.length === 1 ? nodes[0] : null;
  const plainItems = (n) => n.items.every((it) => !it.rest.some((r) => r.trim()));
  let layout = 'standard';
  if (head?.level === 1 && k === 1) layout = 'cover';
  else if (head && !nodes.length) layout = 'statement';
  else if (only?.t === 'list' && only.items.length >= 2 && only.items.length <= 4 && plainItems(only) && only.items.every((it) => NUM.test(it.text))) layout = 'stats';
  else if (only?.t === 'list' && only.ordered && only.items.length >= 3 && only.items.length <= 5 && plainItems(only) && only.items.every((it) => count(it.text) <= 22)) layout = 'steps';
  else if (nodes[0]?.t === 'h' && nodes[0].level === 3 && nodes.filter((n) => n.t === 'h' && n.level === 3).length === 2) layout = 'columns';
  else if (only?.t === 'quote') layout = 'quote';
  return { head, nodes, sources, layout };
}

function slideHTML(s, k, total, ctx) {
  const { head, nodes, sources, layout } = s;
  const title = head ? inline(head.text) : '';
  let body;
  if (layout === 'cover') {
    const meta = [ctx.fm.reader ? `For ${inline(ctx.fm.reader)}` : '', ctx.fm.updated ? esc(longDate(ctx.fm.updated)) : ''].filter(Boolean);
    return `<section class="slide is-cover" aria-label="Slide 1 of ${total}">${ctx.product ? `<p class="kicker">${esc(ctx.product)}</p>` : ''}<h1>${title}</h1>${html(nodes)}${meta.length ? `<div class="meta">${meta.map((x) => `<span>${x}</span>`).join('')}</div>` : ''}</section>`;
  }
  if (layout === 'statement') body = '';
  else if (layout === 'stats') {
    const items = nodes[0].items;
    body = `<div class="stats" style="grid-template-columns:repeat(${items.length},1fr)">${items.map((it) => {
      const [, n, rest] = it.text.match(NUM);
      return `<div class="stat"><b>${esc(n)}</b><span>${inline(rest)}</span></div>`;
    }).join('')}</div>`;
  } else if (layout === 'steps') {
    const items = nodes[0].items;
    body = `<div class="steps" style="grid-template-columns:repeat(${items.length},1fr)">${items.map((it, j) =>
      `<div class="step"><i>${String(nodes[0].start + j).padStart(2, '0')}</i><p>${inline(it.text)}</p></div>`).join('')}</div>`;
  } else if (layout === 'columns') {
    const cols = [];
    for (const n of nodes) n.t === 'h' && n.level === 3 ? cols.push({ label: n.text, nodes: [] }) : cols.at(-1).nodes.push(n);
    body = `<div class="cols">${cols.map((c) => `<div class="col"><h3>${inline(c.label)}</h3>${html(c.nodes)}</div>`).join('')}</div>`;
  } else body = html(nodes);
  const foot = `<footer><span>${sources.map((n) => inline(n.text)).join(' · ')}</span><span>${ctx.product ? `${esc(ctx.product)} · ` : ''}${k}</span></footer>`;
  return `<section class="slide is-${layout}" aria-label="Slide ${k} of ${total}">${title ? `<h2>${title}</h2>` : ''}${layout === 'statement' ? '' : `<div class="body">${body}</div>`}${foot}</section>`;
}

// Style lint on the source. Quotes, code and tables are skipped: they hold other people's words or data.
export function lint(md) {
  const warnings = [];
  const [, body] = splitFrontMatter(md);
  const offset = md.replace(/\r\n?/g, '\n').split('\n').length - body.split('\n').length;
  let fenced = false;
  body.split('\n').forEach((raw, n) => {
    if (/^\s*(```|~~~)/.test(raw)) { fenced = !fenced; return; }
    if (fenced || /^\s*Source:/i.test(raw)) return;
    const where = `line ${n + 1 + offset}`;
    if (/\(\s*(Guess|Told|Observed|Measured)\b|\|\s*(Guess|Told|Observed|Measured)\s*\|/.test(raw)) warnings.push(`${where}: confidence label, say how sure in plain words ("measured in September", "not tested yet")`);
    if (/\b[A-Z]{1,3}-\d{3}\b/.test(raw)) warnings.push(`${where}: ID on a slide, move it to the Source line`);
    const team = raw.replace(/"[^"]*"|“[^”]*”/g, '').match(TEAM_WORDS);
    if (team) warnings.push(`${where}: team word "${team[0]}", use the reader's words`);
    if (/^\s*[|>]/.test(raw)) return;
    const l = raw.replace(/`[^`]*`/g, '').replace(/"[^"]*"|“[^”]*”/g, '').replace(/\]\([^)]*\)/g, ']');
    const at = `line ${n + 1 + offset}`;
    const hit = l.match(SLOP);
    if (hit) warnings.push(`${at}: filler or hype word "${hit[0]}"`);
    if (/—|\s--\s/.test(l)) warnings.push(`${at}: em dash, use a comma or two sentences`);
    if (/\w!(\s|$)/.test(l)) warnings.push(`${at}: exclamation mark`);
    for (const s of l.replace(/^\s*([-*+]|\d+[.)]|#+)\s+/, '').split(/(?<=[.?])\s+/)) {
      if (count(s) > 25) warnings.push(`${at}: sentence of ${count(s)} words, split it`);
    }
  });
  const slides = splitSlides(body);
  if (slides.length > LIMITS.slides) warnings.push(`deck: ${slides.length} slides, cut to ${LIMITS.slides} or fewer`);
  slides.forEach((part, j) => {
    const k = j + 1, s = analyze(part, k), at = `slide ${k}`;
    if (!s.head) warnings.push(`${at}: no title, start it with a ## title that states the claim`);
    else if (count(s.head.text) > LIMITS.title) warnings.push(`${at}: title of ${count(s.head.text)} words, cut to ${LIMITS.title}`);
    const prose = part.split('\n').filter((l) => !/^\s*(\||#|Source:)/i.test(l)).join(' ');
    if (count(prose) > LIMITS.words) warnings.push(`${at}: ${count(prose)} words, cut to ${LIMITS.words}`);
    for (const n of s.nodes) {
      if (n.t === 'list' && n.items.length > LIMITS.items) warnings.push(`${at}: list of ${n.items.length} items, cut to ${LIMITS.items}`);
      if (n.t === 'table' && n.rows.length - 2 > LIMITS.rows) warnings.push(`${at}: table of ${n.rows.length - 2} rows, cut to ${LIMITS.rows}`);
      if (n.t === 'p' && s.layout !== 'cover' && count(n.text) > 20) warnings.push(`${at}: paragraph of ${count(n.text)} words, use a list or cut it`);
    }
  });
  return warnings;
}

// Theme
const DEFAULT = {
  bg: '#F5F2EC', surface: '#EAE5DB', line: '#D8D1C3', ink: '#15130F', ink2: '#4A453C', muted: '#6B6458',
  accent: '#FF5A1F', body: "'Instrument Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  display: "'Instrument Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
};
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
  + '<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">';

function themeFrom(designPath) {
  if (!designPath) return { t: DEFAULT, fonts: FONTS };
  const [d] = splitFrontMatter(readFileSync(designPath, 'utf8'));
  const c = d.colors || {}, ty = d.typography || {};
  const pick = (...keys) => keys.map((k) => c[k]).find(Boolean);
  return {
    t: {
      bg: pick('background', 'neutral-bg', 'surface') || '#FFFFFF',
      surface: pick('surface', 'surface-container', 'neutral') || '#F4F4F4',
      line: pick('border', 'outline', 'line') || '#D9D9D9',
      ink: pick('text', 'on-background', 'on-surface', 'ink') || '#161616',
      ink2: pick('text-muted', 'on-surface-variant') || '#4D4D4D',
      muted: pick('text-muted', 'on-surface-variant') || '#5E5E5E',
      accent: pick('primary') || '#2450D6',
      body: ty.body?.fontFamily || 'system-ui, -apple-system, sans-serif',
      display: (ty.headline || ty.display)?.fontFamily || ty.body?.fontFamily || 'system-ui, sans-serif',
    },
    fonts: '',
  };
}

const CSS = (t) => `
:root{--bg:${t.bg};--surface:${t.surface};--line:${t.line};--ink:${t.ink};--ink-2:${t.ink2};--muted:${t.muted};--accent:${t.accent};
--font-body:${t.body};--font-display:${t.display};--font-mono:'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
--on-ink:color-mix(in srgb,var(--bg) 72%,var(--ink));--frame:color-mix(in srgb,var(--ink) 10%,var(--bg))}
*{box-sizing:border-box}
html,body{margin:0;height:100%;overflow:hidden;background:var(--frame)}
.deck{position:fixed;left:50%;top:50%;width:1280px;height:720px;transform:translate(-50%,-50%)}
.slide{position:absolute;inset:0;display:none;flex-direction:column;padding:60px 88px 0;background:var(--bg);color:var(--ink);font:400 28px/1.4 var(--font-body);overflow:hidden}
.slide.on,.deck.measure .slide{display:flex}
.deck.measure .slide:not(.on){visibility:hidden}
a{color:inherit;text-decoration:underline;text-decoration-color:var(--accent);text-decoration-thickness:2px;text-underline-offset:4px}
h2{font:600 44px/1.08 var(--font-display);letter-spacing:-.022em;margin:0 0 36px;max-width:1040px;text-wrap:balance}
h2::before{content:"";display:block;width:36px;height:4px;background:var(--accent);margin-bottom:26px}
.body{flex:1;min-height:0;font-size:calc(28px * var(--fit,1))}
.body p{margin:0 0 .6em;max-width:34em}
.body ul,.body ol{margin:0;padding:0;list-style:none;max-width:38em}
.body li{position:relative;padding-left:1.1em;margin:0 0 .5em}
.body ul>li::before{content:"";position:absolute;left:0;top:.66em;width:.5em;height:2px;background:var(--accent)}
.body ol{counter-reset:n}
.body ol>li{counter-increment:n;padding-left:1.7em}
.body ol>li::before{content:counter(n,decimal-leading-zero);position:absolute;left:0;top:.35em;font:500 .6em/1 var(--font-mono);color:var(--muted)}
.body li li{font-size:.85em;margin-top:.35em}
.body li.task::before{display:none}
.box{position:absolute;left:0;top:.42em;width:.6em;height:.6em;border:2px solid var(--ink-2);border-radius:2px}
.box.done{background:var(--ink-2)}
.body h3{font:500 14px/1 var(--font-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin:0 0 16px}
code{font:400 .82em/1.3 var(--font-mono);background:var(--surface);padding:1px 6px;border-radius:3px}
pre{background:var(--surface);padding:18px 20px;border-radius:4px;margin:0;font-size:.6em;overflow:hidden}
pre code{background:none;padding:0}
.body blockquote{margin:0 0 .6em;padding-left:.9em;border-left:3px solid var(--accent);color:var(--ink-2)}
table{border-collapse:collapse;width:100%;font-size:.72em;line-height:1.35}
th{font:500 12px/1.25 var(--font-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted);text-align:left;padding:0 20px 10px 0;border-bottom:1.5px solid var(--ink);vertical-align:bottom}
td{padding:11px 20px 11px 0;border-bottom:1px solid var(--line);vertical-align:top}
td.num,th.num{text-align:right;font-variant-numeric:tabular-nums}
td.date{white-space:nowrap;font-variant-numeric:tabular-nums}
footer{display:flex;justify-content:space-between;align-items:center;gap:32px;height:60px;flex:none;margin-top:20px;border-top:1px solid var(--line);font:400 13px/1.3 var(--font-mono);color:var(--muted)}
footer span:last-child{white-space:nowrap}
.is-cover{background:var(--ink);color:var(--bg);justify-content:flex-end;padding:72px 88px}
.is-cover::before{content:"";position:absolute;top:0;left:88px;width:72px;height:8px;background:var(--accent)}
.is-cover .kicker{position:absolute;top:64px;left:88px;margin:0;font:500 14px/1 var(--font-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--on-ink)}
.is-cover h1{font:600 76px/1.02 var(--font-display);letter-spacing:-.03em;margin:0 0 28px;max-width:17ch;text-wrap:balance}
.is-cover p{margin:0 0 10px;max-width:34em;color:var(--on-ink)}
.is-cover .meta{display:flex;align-items:center;gap:32px;margin-top:44px;padding-top:24px;border-top:1px solid color-mix(in srgb,var(--bg) 22%,var(--ink));font:400 15px/1 var(--font-mono);color:var(--on-ink)}
.is-statement h2{font-size:64px;line-height:1.04;letter-spacing:-.03em;max-width:17ch;margin:auto 0}
.stats,.steps{display:grid;gap:40px;margin-top:.3em}
.stat,.step{border-top:2px solid var(--ink);padding-top:22px}
.stat b{display:block;font:600 3.3em/1 var(--font-display);letter-spacing:-.035em;margin-bottom:.32em;font-variant-numeric:tabular-nums}
.stat>span{display:block;font-size:.8em;line-height:1.35;color:var(--ink-2)}
.steps{gap:24px}
.step i{display:block;font:500 13px/1 var(--font-mono);font-style:normal;color:var(--muted);margin-bottom:16px}
.step p{margin:0;font-size:.86em;line-height:1.35}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:64px}
.col h3{padding-bottom:12px;border-bottom:1px solid var(--ink)}
.col{font-size:.92em}
.is-quote .body{display:flex;align-items:center}
.is-quote blockquote{border-left-width:4px;padding-left:36px;font:500 1.5em/1.25 var(--font-display);color:var(--ink)}
.is-quote blockquote p+p{font:400 16px/1.4 var(--font-mono);color:var(--muted);margin-top:24px}
.progress{position:fixed;left:0;bottom:0;height:3px;background:var(--accent);transition:width .2s}
@page{size:1280px 720px;margin:0}
@media print{html,body{overflow:visible;height:auto;background:none}.deck{position:static;transform:none!important}
.slide{position:relative;display:flex!important;visibility:visible!important;break-after:page}.progress{display:none}
*{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
`;

const JS = `
const deck=document.getElementById('deck'),slides=[...deck.children],bar=document.querySelector('.progress');let cur=0;
function scale(){const s=Math.min(innerWidth/1280,innerHeight/720);deck.style.transform='translate(-50%,-50%) scale('+s+')'}
function show(n){cur=Math.max(0,Math.min(slides.length-1,n));slides.forEach((s,i)=>s.classList.toggle('on',i===cur));
bar.style.width=((cur+1)/slides.length*100)+'%';if(location.hash!=='#'+(cur+1))history.replaceState(null,'','#'+(cur+1))}
function fit(){deck.classList.add('measure');for(const b of deck.querySelectorAll('.body')){let f=1;b.style.setProperty('--fit',1);
while(b.scrollHeight>b.clientHeight+1&&f>0.7){f-=0.05;b.style.setProperty('--fit',f.toFixed(2))}}deck.classList.remove('measure')}
addEventListener('keydown',e=>{if(['ArrowRight','ArrowDown','PageDown',' ','Enter'].includes(e.key)){show(cur+1);e.preventDefault()}
else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(e.key)){show(cur-1);e.preventDefault()}
else if(e.key==='Home')show(0);else if(e.key==='End')show(slides.length-1)});
addEventListener('click',e=>{if(e.target.closest('a'))return;show(cur+(e.clientX>innerWidth/3?1:-1))});
addEventListener('hashchange',()=>show(parseInt(location.hash.slice(1),10)-1||0));
addEventListener('resize',scale);scale();show(parseInt(location.hash.slice(1),10)-1||0);
(document.fonts?document.fonts.ready:Promise.resolve()).then(fit);
`;

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const longDate = (d) => { const m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})$/); return m ? `${MONTHS[+m[2] - 1]} ${+m[3]}, ${m[1]}` : String(d); };

export function render(md, { product = '', design = null } = {}) {
  const [fm, body] = splitFrontMatter(md);
  const parts = splitSlides(body);
  const slides = parts.map((p, j) => slideHTML(analyze(p, j + 1), j + 1, parts.length, { fm, product }));
  const { t, fonts } = themeFrom(design);
  const first = parse(parts[0] || '').find((n) => n.t === 'h');
  const title = first ? first.text.replace(/[*_`]/g, '') : 'Slides';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}${product ? ` · ${esc(product)}` : ''}</title>${fonts}<style>${CSS(t)}</style></head>
<body><div class="deck" id="deck">
${slides.join('\n')}
</div><div class="progress"></div><script>${JS}</script></body></html>
`;
}

// CLI
function repoRoot(from) {
  for (let d = resolve(from); ; d = dirname(d)) {
    if (existsSync(join(d, 'product')) && statSync(join(d, 'product')).isDirectory()) return d;
    if (existsSync(join(d, '.git')) || dirname(d) === d) return d;
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [input, output] = process.argv.slice(2);
  if (!input) { console.error('Usage: node render.mjs <input.md> [output.html]'); process.exit(2); }
  const md = readFileSync(input, 'utf8');
  const root = repoRoot(dirname(input));
  const front = join(root, 'product', 'PRODUCT.md');
  const product = existsSync(front) ? (readFileSync(front, 'utf8').match(/^# (.+)$/m)?.[1] || '') : '';
  const design = existsSync(join(root, 'DESIGN.md')) ? join(root, 'DESIGN.md') : null;
  const out = output || input.replace(/\.md$/i, '') + '.html';
  mkdirSync(dirname(resolve(out)), { recursive: true });
  writeFileSync(out, render(md, { product, design }));
  const warnings = lint(md);
  for (const w of warnings) console.log(`warn  ${w}`);
  console.log(`wrote ${out} (${splitSlides(splitFrontMatter(md)[1]).length} slides${design ? ', theme from DESIGN.md' : ''}), ${warnings.length} style warnings`);
}
