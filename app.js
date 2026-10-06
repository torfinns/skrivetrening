(() => {
  'use strict';

  /* ---------- Data ---------- */
  const DATA = { no: window.OVELSER_NO, en: window.OVELSER_EN };
  const PHRASE_CAT = { no: 'faste vendinger', en: 'set phrases' };
  const WRITE_CAT = { no: 'skriving', en: 'writing' };
  const EXTRA_RULES = {
    'faste vendinger': 'Faste vendinger går igjen i e-poster og søknader. Kan du dem utenat, kan du bruke kreftene på innholdet.',
    'set phrases': 'Faste vendinger på engelsk går igjen i alle jobb-e-poster. Kan du dem utenat, høres du profesjonell ut.'
  };
  for (const L of Object.values(DATA)) {
    L.words.forEach((w, i) => { w.id = `${L.lang}-w${i}`; w.kind = 'word'; });
    L.fix.forEach((w, i) => { w.id = `${L.lang}-f${i}`; w.kind = 'fix'; });
    L.phrases.forEach((w, i) => { w.id = `${L.lang}-p${i}`; w.kind = 'phrase'; w.c = PHRASE_CAT[L.lang]; });
    L.writing.forEach(w => { w.kind = 'write'; w.c = WRITE_CAT[L.lang]; });
    Object.assign(L.rules, EXTRA_RULES);
  }

  const LEVELS = {
    1: { name: 'Ord', short: { word: 8 }, long: { word: 14 } },
    2: { name: 'Ord og setninger', short: { word: 5, fix: 3 }, long: { word: 8, fix: 5 } },
    3: { name: 'Vendinger og korte e-poster', short: { word: 4, fix: 2, phrase: 2, write: 1 }, long: { word: 6, fix: 3, phrase: 3, write: 1 } },
    4: { name: 'Søknader og e-poster', short: { word: 3, fix: 1, phrase: 1, write: 1 }, long: { word: 5, fix: 2, phrase: 2, write: 1 } }
  };
  const FULL_COMP = { short: { word: 2, write: 1 }, long: { word: 3, fix: 1, write: 1 } };
  const LEVEL_AT = [0, 0, 5, 12, 20]; // bestått-økter som trengs for nivå 1..4
  const PASS = 0.6;
  const EN_UNLOCK = 15;
  const SECONDS = { word: 25, fix: 50, phrase: 35, write: 200, full: 480 };

  /* ---------- Lagring ---------- */
  const KEY = 'skrivetrening.v1';
  const blank = () => ({
    v: 1,
    settings: { name: '', length: 'short', enUnlocked: false, apiKey: '', model: 'claude-sonnet-5-5', aiGen: true, lang: 'no', levelOverride: { no: 0, en: 0 } },
    prog: { no: { done: 0, passed: 0, l4: 0 }, en: { done: 0, passed: 0, l4: 0 } },
    stats: { no: {}, en: {} },
    rep: { no: {}, en: {} },
    seen: {},
    ai: { no: { fix: [], write: [] }, en: { fix: [], write: [] } },
    history: [],
    current: null
  });
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (!s || s.v !== 1) return blank();
      const b = blank();
      s.settings = Object.assign(b.settings, s.settings || {});
      s.settings.levelOverride = Object.assign({ no: 0, en: 0 }, s.settings.levelOverride || {});
      for (const k of ['prog', 'stats', 'rep']) s[k] = Object.assign(b[k], s[k] || {});
      s.seen = s.seen || {}; s.history = s.history || [];
      s.ai = s.ai || {};
      for (const l of ['no', 'en']) s.ai[l] = Object.assign({ fix: [], write: [] }, s.ai[l] || {});
      return s;
    } catch (e) { return blank(); }
  }
  let state = load();
  let saveFailed = false;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); saveFailed = false; }
    catch (e) { saveFailed = true; }
  }
  const ui = { screen: 'home', histLang: state.settings.lang, msg: '' };

  /* ---------- Hjelpere ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = n => String(n).padStart(2, '0');
  const dateKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => dateKey();
  const fmtDate = (k, opts = { weekday: 'long', day: 'numeric', month: 'long' }) => {
    const [y, m, d] = k.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('nb-NO', opts);
  };
  const pct = x => Math.round(x * 100) + ' %';
  const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  function seededRng(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
    let a = h >>> 0;
    return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function weightedSample(pool, n, wfn, rng) {
    const items = pool.slice(), out = [];
    while (out.length < n && items.length) {
      const ws = items.map(wfn), total = ws.reduce((a, b) => a + b, 0);
      let r = rng() * total, i = 0;
      for (; i < items.length - 1; i++) { r -= ws[i]; if (r <= 0) break; }
      out.push(items.splice(i, 1)[0]);
    }
    return out;
  }

  /* ---------- Progresjon ---------- */
  function autoLevel(passed) { let l = 1; for (let i = 1; i <= 4; i++) if (passed >= LEVEL_AT[i]) l = i; return l; }
  function levelOf(lang) { return state.settings.levelOverride[lang] || autoLevel(state.prog[lang].passed); }
  function enUnlocked() { return state.settings.enUnlocked || state.prog.no.done >= EN_UNLOCK; }
  function catAcc(lang, c) { const s = state.stats[lang][c]; return s && s.total ? s.right / s.total : null; }

  function composition(lang) {
    const lvl = levelOf(lang), len = state.settings.length;
    const full = lvl === 4 && state.prog[lang].l4 % 5 === 4;
    return { lvl, full, comp: full ? FULL_COMP[len] : LEVELS[lvl][len] };
  }
  function estimateMin(comp, full) {
    let s = 0;
    for (const [k, n] of Object.entries(comp)) s += (k === 'write' && full ? SECONDS.full : SECONDS[k]) * n;
    return Math.max(3, Math.round(s / 60));
  }

  function buildSession(lang, extra) {
    const L = DATA[lang], P = state.prog[lang];
    const { lvl, full, comp } = composition(lang);
    const rng = seededRng(`${today()}|${lang}|${P.done}|${extra ? 'x' + Date.now() : ''}`);
    const cats = L.catOrder.slice(0, Math.min(L.catOrder.length, 3 + P.passed));
    const rep = state.rep[lang];
    const recent = id => has(state.seen, id) && P.done - state.seen[id] < 3;
    const weight = it => {
      let w = 1;
      const acc = catAcc(lang, it.c), tot = (state.stats[lang][it.c] || {}).total || 0;
      if (acc !== null && tot >= 2) w *= 1 + 2 * (1 - acc);
      if (recent(it.id)) w *= 0.1;
      return w;
    };
    const pick = (kind, pool, n) => {
      if (!n) return [];
      const repItems = pool.filter(it => has(rep, it.id)).slice(0, Math.min(2, n));
      const restPool = pool.filter(it => !repItems.includes(it));
      return repItems.concat(weightedSample(restPool, n - repItems.length, weight, rng));
    };
    let wordPool = L.words.filter(w => cats.includes(w.c));
    let fixPool = L.fix.filter(f => cats.includes(f.c));
    if (fixPool.length < (comp.fix || 0) + 2) fixPool = L.fix.slice();
    const bank = state.ai[lang];
    if (aiReady()) fixPool = fixPool.concat(bank.fix);
    else fixPool = fixPool.concat(bank.fix.filter(f => has(rep, f.id)));
    // Setninger: feil som skal tilbake først, så ferske KI-setninger (omtrent 60 %), resten fra den faste banken.
    const pickFix = () => {
      const n = comp.fix || 0; if (!n) return [];
      const repItems = fixPool.filter(it => has(rep, it.id)).slice(0, Math.min(2, n));
      const fresh = aiReady() ? bank.fix.filter(f => !has(state.seen, f.id) && !repItems.includes(f)) : [];
      const nAi = Math.min(fresh.length, Math.ceil((n - repItems.length) * 0.6));
      const aiItems = weightedSample(fresh, nAi, weight, rng);
      const rest = fixPool.filter(it => !repItems.includes(it) && !aiItems.includes(it) && !it.gen);
      return repItems.concat(aiItems, weightedSample(rest, n - repItems.length - aiItems.length, weight, rng));
    };
    const chosen = [
      ...pick('word', wordPool, comp.word || 0),
      ...pickFix(),
      ...pick('phrase', L.phrases, comp.phrase || 0)
    ];
    if (comp.write) {
      const fits = w => (lvl === 3 ? w.lvl === 3 : w.lvl === 4 && !!w.full === full);
      const aiW = bank.write.filter(fits);
      const usedT = new Set(state.history.slice(0, 60).flatMap(h => h.items.filter(i => i.kind === 'write').map(i => i.id)));
      let wpool = L.writing.filter(fits);
      if (!wpool.length) wpool = L.writing.filter(w => w.lvl <= lvl);
      const freshStatic = wpool.filter(w => !usedT.has(w.id));
      if (aiW.length && (rng() < 0.7 || !freshStatic.length)) {
        const w = aiW[0];
        bank.write.splice(bank.write.indexOf(w), 1);
        chosen.push(w);
      } else chosen.push(...weightedSample(wpool, 1, w => (recent(w.id) ? 0.05 : usedT.has(w.id) ? 0.3 : 1), rng));
    }
    // Bland ordoppgavene, men behold rekkefølgen ord → setninger → vendinger → skriving
    const order = { word: 0, fix: 1, phrase: 2, write: 3 };
    chosen.sort((a, b) => order[a.kind] - order[b.kind] || (rng() - 0.5));
    chosen.forEach(it => { state.seen[it.id] = P.done; });
    return {
      id: Date.now().toString(36), lang, date: today(), startedAt: new Date().toISOString(),
      level: lvl, levelName: LEVELS[lvl].name + (full ? ' – hel søknad' : ''), extra: !!extra, idx: 0,
      items: chosen.map(snapshot)
    };
  }
  function snapshot(it) {
    const s = { id: it.id, kind: it.kind, c: it.c };
    for (const k of ['t', 'q', 'o', 'a', 'h', 'e', 'title', 'task', 'skeleton', 'model', 'criteria', 'min', 'max', 'full', 'gen']) if (it[k] !== undefined) s[k] = it[k];
    if (it.gen && it.checks) s.checks = it.checks;
    return s;
  }
  /* ---------- Bytt oppgave ----------
     Har han hatt oppgaven før, kan han bytte den. Oppgaver han bommet på (og som skal komme tilbake), kan ikke byttes. */
  let histCache = { n: -1, no: null, en: null };
  function doneIds(lang) {
    if (histCache.n !== state.history.length) histCache = { n: state.history.length, no: null, en: null };
    if (!histCache[lang]) histCache[lang] = new Set(state.history.filter(h => h.lang === lang).flatMap(h => h.items.filter(i => i.answer !== undefined).map(i => i.id)));
    return histCache[lang];
  }
  function swapCandidates(S, it) {
    const lang = S.lang, L = DATA[lang], P = state.prog[lang], done = doneIds(lang);
    const inSession = new Set(S.items.map(i => i.id));
    const cats = L.catOrder.slice(0, Math.min(L.catOrder.length, 3 + P.passed));
    const fresh = x => !inSession.has(x.id) && !done.has(x.id);
    let pool = [];
    if (it.kind === 'word') pool = L.words.filter(w => cats.includes(w.c));
    else if (it.kind === 'fix') pool = L.fix.filter(f => cats.includes(f.c)).concat(aiReady() ? state.ai[lang].fix : []);
    else if (it.kind === 'phrase') pool = L.phrases;
    else if (it.kind === 'write') {
      const fits = w => (S.level === 3 ? w.lvl === 3 : w.lvl === 4 && !!w.full === !!it.full);
      pool = state.ai[lang].write.filter(fits).concat(L.writing.filter(fits));
    }
    // Helst oppgaver han ikke har hatt (på denne enheten) og ikke nylig; ellers hva som helst som ikke er i økta.
    const recentSeen = x => has(state.seen, x.id) && P.done - state.seen[x.id] < 5;
    const best = pool.filter(x => fresh(x) && !recentSeen(x));
    pool = best.length ? best : pool.filter(x => !inSession.has(x.id));
    // Helst samme tema som oppgaven som byttes ut
    const same = pool.filter(x => x.c === it.c);
    return it.kind !== 'write' && same.length ? same : pool;
  }
  function canSwap(S, it) { return it.answer === undefined; }
  // Fast nummer på hver oppgave, så han kan kjenne den igjen – også på en annen enhet.
  function taskNo(lang, it) {
    if (it.gen) return '';
    const m = /-(w|f|p)(\d+)$/.exec(it.id);
    if (m) return `${{ w: 'Ord', f: 'Setning', p: 'Vending' }[m[1]]} nr. ${+m[2] + 1}`;
    const i = DATA[lang].writing.findIndex(w => w.id === it.id);
    return i >= 0 ? `Skriveoppgave nr. ${i + 1}` : '';
  }
  const KIND_NR = { word: 'Ord', fix: 'Setning', phrase: 'Vending', write: 'Skriveoppgave' };
  function kindList(lang, kind) { const L = DATA[lang]; return { word: L.words, fix: L.fix, phrase: L.phrases, write: L.writing }[kind]; }
  function pickTask(val) {
    const S = state.current, it = S.items[S.idx];
    if (it.answer !== undefined) return;
    const list = kindList(S.lang, it.kind), n = parseInt(val, 10), next = list[n - 1];
    if (!next) { ui.pickMsg = `Skriv et tall fra 1 til ${list.length}.`; render(); return; }
    if (next.id !== it.id && S.items.some(i => i.id === next.id)) { ui.pickMsg = 'Den oppgaven er allerede med i denne økta.'; render(); return; }
    state.seen[next.id] = state.prog[S.lang].done;
    S.items[S.idx] = snapshot(next);
    S.swaps = (S.swaps || 0) + 1;
    ui.pickOpen = false; save(); render();
  }

  function swapCurrent() {
    const S = state.current, it = S.items[S.idx];
    if (!canSwap(S, it)) return;
    const cand = swapCandidates(S, it);
    if (!cand.length) { ui.swapMsg = 'Fant ingen nye oppgaver av denne typen akkurat nå. Prøv denne en gang til – det er også god trening.'; render(); return; }
    const next = cand[Math.floor(Math.random() * cand.length)];
    if (next.gen && next.kind === 'write') { const b = state.ai[S.lang].write; b.splice(b.indexOf(next), 1); }
    state.seen[next.id] = state.prog[S.lang].done;
    S.items[S.idx] = snapshot(next);
    S.swaps = (S.swaps || 0) + 1;
    ui.pickOpen = false; save(); render();
  }

  function findWriting(lang, id) { return DATA[lang].writing.find(w => w.id === id); }

  /* ---------- Retting ---------- */
  const norm = s => String(s ?? '').normalize('NFC').replace(/[’‘`´]/g, "'").replace(/[“”«»]/g, '"').replace(/[ \t\u00a0]+/g, ' ').trim();
  const tokens = s => norm(s).match(/[\p{L}\p{N}]+(?:['\-][\p{L}\p{N}]+)*|[^\s\p{L}\p{N}]/gu) || [];
  const isPunct = t => /^[^\p{L}\p{N}]$/u.test(t);

  function gradeOne(user, ans, cat) {
    const U = tokens(user), A = tokens(ans);
    if (U.join(' ') === A.join(' ')) return { score: 1 };
    const Uw = U.filter(t => !isPunct(t)).join(' '), Aw = A.filter(t => !isPunct(t)).join(' ');
    if (Uw === Aw) return /tegnsetting|punctuation/.test(cat || '')
      ? { score: 0, note: 'Ordene er riktige, men det er tegnsettingen som skal rettes her.' }
      : { score: 0.5, note: 'Ordene er riktige – bare tegnsettingen mangler.' };
    if (Uw.toLowerCase() === Aw.toLowerCase() && !/bokstav|capital/.test(cat || ''))
      return { score: 0.5, note: 'Ordene er riktige, men sjekk store og små bokstaver.' };
    return { score: 0 };
  }
  function gradeText(user, answers, cat) {
    const list = Array.isArray(answers) ? answers : [answers];
    let best = null;
    for (const a of list) { const r = gradeOne(user, a, cat); if (!best || r.score > best.score) best = { ...r, ans: a }; }
    // Velg fasiten som ligner mest når alt er feil
    if (best.score === 0 && list.length > 1) {
      let bestLcs = -1;
      for (const a of list) { const d = diff(tokens(user), tokens(a)); if (d.common > bestLcs) { bestLcs = d.common; best.ans = a; } }
    }
    return best;
  }
  function diff(a, b) {
    const n = a.length, m = b.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const A = [], B = []; let i = 0, j = 0;
    while (i < n && j < m) {
      if (a[i] === b[j]) { A.push([a[i], 0]); B.push([b[j], 0]); i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) { A.push([a[i], 1]); i++; }
      else { B.push([b[j], 1]); j++; }
    }
    while (i < n) A.push([a[i++], 1]);
    while (j < m) B.push([b[j++], 1]);
    return { A, B, common: dp[0][0] };
  }
  function changeCount(wrong, right) {
    const { B, A } = diff(tokens(wrong), tokens(right));
    let runs = 0, inRun = false;
    for (const [, m] of B) { if (m && !inRun) runs++; inRun = !!m; }
    if (!runs) { inRun = false; for (const [, m] of A) { if (m && !inRun) runs++; inRun = !!m; } }
    return runs;
  }
  function renderTokens(marked, cls) {
    let out = '';
    marked.forEach(([t, m], i) => {
      const space = i > 0 && !/^[.,!?:;)]$/.test(t) && !/^[(]$/.test(marked[i - 1][0]) ? ' ' : '';
      out += space + (m ? `<span class="${cls}">${esc(t)}</span>` : esc(t));
    });
    return out;
  }

  /* ---------- Sjekk av fritekst ---------- */
  const ABBR = new Set(['f', 'eks', 'bl', 'a', 'osv', 'ca', 'kl', 'nr', 'mr', 'ms', 'mrs', 'dr', 'e', 'g', 'i', 'etc', 'st', 'mvh', 'tlf']);
  function analyze(lang, text, task) {
    const L = DATA[lang], AC = L.autocheck, issues = [], oks = [];
    const add = (lvl, msg) => { if (msg && !issues.some(x => x.msg === msg)) issues.push({ lvl, msg }); };
    const wordRe = /[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu;
    const words = text.match(wordRe) || [];
    const wc = words.length;
    if (task.min && wc < task.min) add('innhold', `Teksten er kort (${wc} ord). Sikt mot minst ${task.min} ord.`);
    if (task.max && wc > task.max) add('tips', `Teksten er lang (${wc} ord). Prøv å holde deg under ${task.max} – kort og konkret er bra.`);

    // Kjente stavefeil
    const seenW = new Set();
    for (const w of words) {
      const lw = w.toLowerCase().replace(/’/g, "'");
      if (seenW.has(lw) || !has(AC.misspell, lw)) continue;
      seenW.add(lw);
      let fix = AC.misspell[lw], lvl = 'feil';
      if (Array.isArray(fix)) [fix, lvl] = fix;
      const shown = /^\p{Lu}/u.test(w) ? cap(fix) : fix;
      add(lvl, lvl === 'feil' ? `«${w}» skrives «${shown}».` : `«${w}» – mente du «${shown}»?`);
    }
    // Særskriving
    for (const [wrong, right] of AC.split || []) {
      if (new RegExp(`(^|[^\\p{L}])${reEsc(wrong)}(?=[^\\p{L}]|$)`, 'iu').test(text))
        add('feil', lang === 'no' ? `«${wrong}» skrives i ett ord: «${right}».` : `«${wrong}» skrives «${right}».`);
    }
    // og/å
    if (lang === 'no') {
      const skip = new Set(['med', 'om', 'igjen', 'fram', 'frem', 'tilbake', 'så', 'jeg', 'vi', 'du', 'han', 'hun', 'de', 'det', 'alle', 'andre', 'en', 'et', 'ei', 'mange', 'min', 'mitt', 'mine']);
      for (const p of AC.beforeAa) {
        const m = new RegExp(`(^|[^\\p{L}])${reEsc(p)} og (\\p{L}+)`, 'iu').exec(text);
        if (m && !skip.has(m[2].toLowerCase())) add('sjekk', `«${p} og ${m[2]}» – skal det være «å ${m[2]}»? (å + verb)`);
      }
      if (/[\p{L}]\s+men\s/u.test(text)) add('sjekk', 'Husk komma foran «men».');
    }
    // Engelske mønstre
    for (const p of AC.patterns || []) {
      if (new RegExp(p.re, p.f || '').test(text)) add(p.lvl || 'sjekk', p.msg);
    }
    // Store og små bokstaver
    let m; wordRe.lastIndex = 0;
    const capSeen = new Set();
    while ((m = wordRe.exec(text))) {
      const w = m[0], idx = m.index;
      const chunkStart = text.lastIndexOf(' ', idx) + 1, nl = text.lastIndexOf('\n', idx) + 1;
      const chunkEnd = text.slice(idx).search(/\s|$/) + idx;
      const chunk = text.slice(Math.max(chunkStart, nl), chunkEnd);
      if (/@|:\/\/|\.\p{L}/u.test(chunk) || /\d/.test(w)) continue;
      // Finn forrige tegn som ikke er mellomrom
      let k = idx - 1; while (k >= 0 && text[k] === ' ') k--;
      const prev = k < 0 ? '' : text[k];
      let start = k < 0 || prev === '\n' || /[.!?]/.test(prev);
      if (/[.]/.test(prev)) {
        const before = text.slice(0, k).match(/(\p{L}+)$/u);
        if (before && ABBR.has(before[1].toLowerCase())) start = false;
        if (k + 1 === idx) start = false; // ingen mellomrom etter punktum
      }
      const lw = w.toLowerCase();
      if (lang === 'no') {
        if (!start && /^\p{Lu}/u.test(w) && AC.lowercase.includes(lw) && !capSeen.has(lw)) { capSeen.add(lw); add('feil', `«${w}» skrives med liten bokstav på norsk: «${lw}».`); }
      } else {
        if (w === 'i' && !capSeen.has('i')) { capSeen.add('i'); add('feil', '«i» skal alltid være stor I på engelsk.'); }
        if (/^\p{Ll}/u.test(w) && AC.capitalize.includes(lw) && !capSeen.has(lw)) { capSeen.add(lw); add('feil', `«${w}» skal ha stor bokstav på engelsk: «${cap(w)}».`); }
      }
      if (start && /^\p{Ll}/u.test(w) && prev !== '' && !capSeen.has('start')) {
        capSeen.add('start'); add('feil', `Ny setning eller linje skal starte med stor bokstav («${w}» → «${cap(w)}»).`);
      }
      if (k < 0 && /^\p{Ll}/u.test(w)) add('feil', 'Teksten skal starte med stor bokstav.');
    }
    // Tegnsetting
    if (/[ \t]+[,.!?]/.test(text)) add('feil', 'Ikke sett mellomrom foran komma, punktum eller spørsmålstegn.');
    if (/,(?=\p{L})/u.test(text)) add('feil', 'Sett mellomrom etter komma.');
    if (/ {2,}/.test(text)) add('tips', 'Det er doble mellomrom i teksten.');
    const lines = text.split('\n').map(s => s.trim()).filter(Boolean);
    if (lines.length && /^(hei|god dag|dear|hi|hello)\b/i.test(lines[0]) && lines[0].length < 40 && !/[,!]$/.test(lines[0]))
      add('feil', 'Sett komma etter hilsenen (for eksempel «' + (lang === 'no' ? 'Hei Kari,' : 'Dear Mr Brown,') + '»).');
    // Lange setninger og setningsstart
    const sentences = text.replace(/\n+/g, ' ').split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.length > 3);
    if (sentences.some(s => (s.match(wordRe) || []).length > 30)) add('tips', 'Minst én setning er veldig lang. Del den gjerne i to – det er lettere å lese.');
    const starter = lang === 'no' ? /^jeg\b/i : /^I\b/;
    const nStart = sentences.filter(s => starter.test(s)).length;
    if (nStart >= 4 && nStart / sentences.length >= 0.6)
      add('tips', lang === 'no' ? 'Mange setninger starter med «Jeg». Varier litt, for eksempel «På fritiden …» eller «Der lærte jeg …».' : 'Mange setninger starter med «I». Varier litt, for eksempel «In my free time …» eller «This taught me …».');
    // Oppgavespesifikke sjekker
    const full = findWriting(lang, task.id) || task;
    // Felles: ikke komma etter «hilsen» på norsk (hvis oppgaven ikke sjekker det selv)
    if (lang === 'no' && /hilsen\s*,/i.test(text) && !(full.checks || []).some(c => /hilsen/.test(c.re) && c.neg))
      add('feil', 'Ikke sett komma etter «Med vennlig hilsen» på norsk.');
    for (const c of full.checks || []) {
      const hit = new RegExp(c.re, c.f || '').test(text);
      if (c.neg) { if (hit) add('feil', c.bad); }
      else if (hit) { if (c.ok) oks.push(c.ok); }
      else add(c.lvl || 'innhold', c.bad);
    }
    return { issues, oks, wc };
  }

  /* ---------- KI-tilbakemelding (valgfritt) ---------- */
  function aiReady() { return !!state.settings.apiKey.trim(); }
  async function callClaude(system, user, maxTokens) {
    const s = state.settings;
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': s.apiKey.trim(),
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({ model: s.model.trim() || 'claude-sonnet-5-5', max_tokens: maxTokens, system, messages: [{ role: 'user', content: user }] })
    });
    if (!res.ok) {
      let detail = ''; try { detail = (await res.json()).error?.message || ''; } catch (e) { }
      throw new Error(res.status === 401 ? 'API-nøkkelen ble ikke godtatt. Sjekk den under Innstillinger.' : `Feil fra KI-tjenesten (${res.status}). ${detail}`);
    }
    const data = await res.json();
    const raw = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
    const clean = raw.replace(/```json|```/g, '').trim();
    try { return JSON.parse(clean.slice(clean.indexOf('{'), clean.lastIndexOf('}') + 1)); } catch (e) { return { raw }; }
  }

  async function aiFeedback(lang, item, text) {
    const sys = `Du er en vennlig, tydelig og ærlig skrivelærer for en norsk 16-åring som øver på rettskriving og på å skrive e-poster og jobbsøknader ${lang === 'en' ? 'på engelsk' : 'på norsk bokmål'}. Skriv tilbakemeldingen på norsk. Vær konkret og oppmuntrende, men ikke overdriv ros. Finn aldri på feil som ikke finnes i teksten. Svar KUN med gyldig JSON uten markdown, i dette formatet: {"rettskriving":[{"feil":"ordet slik eleven skrev det","riktig":"riktig form","forklaring":"kort regel"}],"ordlyd":[{"original":"elevens formulering","bedre":"bedre formulering","hvorfor":"kort begrunnelse"}],"innhold":["maks 3 konkrete råd om innhold og oppbygging"],"bra":["1–2 ting som fungerer godt"],"forbedret":"hele teksten i forbedret versjon som fortsatt høres ut som en 16-åring"}`;
    const user = `Oppgave: ${item.title}\n${item.task}\n\nSkjelett eleven fikk:\n${item.skeleton}\n\nElevens tekst:\n"""\n${text}\n"""`;
    return callClaude(sys, user, 2000);
  }

  /* ---------- KI-genererte oppgaver (valgfritt) ----------
     Når API-nøkkel er lagt inn, lages nye setninger og skriveoppgaver i bakgrunnen og legges i en reserve.
     De tilpasses feilene i historikken. Uten nøkkel brukes bare den faste oppgavebanken. */
  const gen = { no: { busy: false, at: 0, err: '' }, en: { busy: false, at: 0, err: '' } };
  const FIX_LOW = 6, FIX_BATCH = 10;

  function recentMistakes(lang) {
    const out = [], seenM = new Set();
    for (const S of state.history.filter(h => h.lang === lang).slice(0, 20)) {
      for (const i of S.items) {
        let m = '';
        if (typeof i.score === 'number' && i.score < 1) m = `«${i.answer || '–'}» skulle vært «${i.matched || (Array.isArray(i.a) ? i.a[0] : i.a)}» (${i.c})`;
        if (m && !seenM.has(m)) { seenM.add(m); out.push(m); }
        if (i.kind === 'write' && i.result) for (const x of i.result.issues.filter(x => x.lvl === 'feil')) if (!seenM.has(x.msg)) { seenM.add(x.msg); out.push(x.msg); }
        if (i.kind === 'write' && i.ai && Array.isArray(i.ai.rettskriving)) for (const x of i.ai.rettskriving) {
          const t = `«${x.feil}» skulle vært «${x.riktig}»`; if (!seenM.has(t)) { seenM.add(t); out.push(t); }
        }
      }
      if (out.length >= 25) break;
    }
    return out.slice(0, 25);
  }
  function needsRefill(lang) {
    if (!aiReady() || !state.settings.aiGen) return false;
    const lvl = levelOf(lang), bank = state.ai[lang];
    if (lvl < 2) return false;
    const freshFix = bank.fix.filter(f => !has(state.seen, f.id)).length;
    const needW = lvl >= 3 && bank.write.filter(w => (lvl === 3 ? w.lvl === 3 : w.lvl === 4)).length < 2;
    const needFull = lvl === 4 && !bank.write.some(w => w.full);
    return freshFix < FIX_LOW || needW || needFull;
  }
  function maybeRefill(lang, force) {
    const g = gen[lang];
    if (g.busy || !aiReady()) return;
    if (!force && (!needsRefill(lang) || Date.now() - g.at < (g.err ? 10 * 60e3 : 60e3))) return;
    g.busy = true; g.at = Date.now(); g.err = '';
    generateTasks(lang)
      .then(n => { g.lastAdded = n; })
      .catch(err => { g.err = err.message === 'Failed to fetch' ? 'Fikk ikke kontakt med KI-tjenesten.' : err.message; })
      .finally(() => { g.busy = false; if (ui.screen === 'settings') render(); });
  }

  async function generateTasks(lang) {
    const L = DATA[lang], P = state.prog[lang], lvl = levelOf(lang), bank = state.ai[lang];
    const cats = L.catOrder.slice(0, Math.min(L.catOrder.length, 3 + P.passed));
    const weak = Object.entries(state.stats[lang]).filter(([c, s]) => s.total >= 3 && cats.includes(c))
      .map(([c, s]) => [c, s.right / s.total]).sort((a, b) => a[1] - b[1]).filter(([, a]) => a < 0.9).slice(0, 4).map(([c]) => c);
    const mistakes = recentMistakes(lang);
    const usedTitles = [...new Set(state.history.flatMap(h => h.items.filter(i => i.kind === 'write').map(i => i.title)).concat(bank.write.map(w => w.title)))].slice(0, 60);
    const wantW = [];
    if (lvl === 3 && bank.write.filter(w => w.lvl === 3).length < 2) wantW.push('lvl3', 'lvl3');
    if (lvl === 4) {
      if (bank.write.filter(w => w.lvl === 4 && !w.full).length < 2) wantW.push('lvl4', 'lvl4');
      if (!bank.write.some(w => w.full)) wantW.push('full');
    }
    const nFix = Math.max(0, FIX_BATCH - bank.fix.filter(f => !has(state.seen, f.id)).length) || (wantW.length ? 0 : FIX_BATCH);
    const en = lang === 'en';
    const sys = `Du lager øvingsoppgaver i rettskriving og skriving for en norsk 16-åring ${en ? 'som øver på engelsk (britisk eller amerikansk staving godtas begge)' : 'som skriver norsk bokmål'}. Alt som presenteres som riktig, MÅ følge gjeldende rettskriving${en ? '' : ' fra Språkrådet'}. Bruk bare feil som er utvetydige – aldri valgfrie former eller stilsaker. Er du i tvil om noe er riktig, la være å bruke det. Instruksjoner og forklaringer skrives på norsk. Svar KUN med gyldig JSON uten markdown.`;
    let user = `Lag ${nFix} setninger med feil som eleven skal rette${wantW.length ? `, og ${wantW.length} skriveoppgave${wantW.length > 1 ? 'r' : ''}` : ''}.

SETNINGER
- Kategorier eleven har lært (bruk bare disse, skrevet nøyaktig slik): ${cats.map(c => `«${c}»`).join(', ')}.
${weak.length ? `- Eleven sliter mest med: ${weak.join(', ')}. La omtrent halvparten av setningene øve på dette.\n` : ''}${mistakes.length ? `- Nylige feil eleven har gjort (lag nye setninger som øver på de samme ordene og reglene, ikke kopier dem):\n${mistakes.map(m => '  - ' + m).join('\n')}\n` : ''}- Hver setning: 6–16 ord, ${en ? 'på engelsk' : 'på bokmål'}, hverdag, skole, fritid eller jobb for en ungdom. Varier temaene.
- Hver setning skal ha 1 eller 2 feil, alle fra samme kategori. Ingen andre feil.
- "riktig" er en liste med alle godkjente riktige versjoner (vanligvis bare én). Rett bare feilene – ikke endre noe annet.
- "forklaring": én kort setning på norsk om regelen, gjerne med et huskeknep.
`;
    if (wantW.length) {
      user += `
SKRIVEOPPGAVER – typer som trengs, i denne rekkefølgen: ${wantW.join(', ')}
- lvl3: kort e-post eller melding (40–100 ord) i hverdag eller deltidsjobb: til sjef, kollega, lærer, trener, kunde, utleier o.l.
- lvl4: enten én del av en jobbsøknad/CV, eller en e-post i arbeidslivet (for eksempel sykemelding til sjefen, svar på klage fra kunde, be om attest, takke for intervju, si opp deltidsjobben, spørre om lønn eller vakter, presentere seg for ny kollega). 50–150 ord.
- full: en hel jobbsøknad på en tenkt stilling som passer en 16–18-åring. Gi en kort, konkret stillingsannonse i oppgaveteksten (bedrift, arbeidsoppgaver, hva de ser etter). 150–350 ord.
- Ikke gjenta disse temaene: ${usedTitles.length ? usedTitles.join('; ') : '(ingen ennå)'}.
- "oppgave": instruks på norsk som sier nøyaktig hva som skal med.
- "skjelett": mal ${en ? 'på engelsk' : 'på norsk'} med [klammer] for det eleven skal fylle inn, med \\n for linjeskift.
- "eksempel": et godt svar ${en ? 'på engelsk' : 'på norsk'} slik en flink 16-åring kunne skrevet det, nøkternt og konkret, ikke overselgende.
- "kriterier": 3–5 korte punkter eleven kan krysse av for selv.
- "sjekker": 2–4 innholdssjekker. "ord" er ord eller korte uttrykk der minst ett MÅ finnes i en god tekst (små bokstaver, gi gjerne flere varianter). "mangler" er tilbakemeldingen hvis ingen finnes. "ok" er en kort ros hvis de finnes.
`;
    }
    user += `
JSON-format:
{"setninger":[{"kategori":"…","feil":"setningen med feil","riktig":["riktig setning"],"forklaring":"…"}],"skriveoppgaver":[{"type":"lvl3|lvl4|full","tittel":"kort tittel","oppgave":"…","skjelett":"…","eksempel":"…","kriterier":["…"],"min":40,"max":100,"sjekker":[{"ord":["…"],"mangler":"…","ok":"…"}]}]}`;

    const out = await callClaude(sys, user, 8000);
    if (out.raw) throw new Error('KI-svaret kunne ikke leses. Prøver igjen senere.');
    const stamp = Date.now().toString(36);
    const known = new Set(L.fix.map(f => norm(f.q).toLowerCase()).concat(bank.fix.map(f => norm(f.q).toLowerCase())));
    let added = 0;
    (out.setninger || []).forEach((x, i) => {
      const q = norm(x.feil), a = (Array.isArray(x.riktig) ? x.riktig : [x.riktig]).map(norm).filter(Boolean);
      if (!q || !a.length || a.some(v => v === q) || known.has(q.toLowerCase())) return;
      const nq = (q.match(/[\p{L}]+/gu) || []).length; if (nq < 3 || nq > 25) return;
      const c = cats.includes(x.kategori) ? x.kategori : (L.catOrder.find(k => k === x.kategori) || cats[0]);
      known.add(q.toLowerCase());
      bank.fix.push({ id: `${lang}-ai${stamp}-${i}`, kind: 'fix', gen: true, c, q, a: a.length === 1 ? a[0] : a, e: String(x.forklaring || '').slice(0, 300), made: today() });
      added++;
    });
    const DEF = { lvl3: [30, 110], lvl4: [40, 160], full: [120, 380] };
    (out.skriveoppgaver || []).forEach((x, i) => {
      const type = DEF[x.type] ? x.type : null;
      if (!type || !x.tittel || !x.oppgave || !x.skjelett || !x.eksempel) return;
      const num = (v, d) => (Number.isFinite(+v) && +v > 5 && +v < 600 ? Math.round(+v) : d);
      let min = num(x.min, DEF[type][0]), max = num(x.max, DEF[type][1]); if (max <= min) [min, max] = DEF[type];
      const checks = (Array.isArray(x.sjekker) ? x.sjekker : []).slice(0, 4).map(c => {
        const ws = (Array.isArray(c.ord) ? c.ord : [c.ord]).map(w => String(w || '').trim().toLowerCase()).filter(w => w.length > 1);
        return ws.length && c.mangler ? { re: ws.map(reEsc).join('|'), f: 'i', ok: String(c.ok || ''), bad: String(c.mangler) } : null;
      }).filter(Boolean);
      bank.write.push({
        id: `${lang}-aiw${stamp}-${i}`, kind: 'write', gen: true, c: WRITE_CAT[lang],
        lvl: type === 'lvl3' ? 3 : 4, full: type === 'full' || undefined,
        title: String(x.tittel).slice(0, 80), task: String(x.oppgave), skeleton: String(x.skjelett).replace(/\\n/g, '\n'),
        model: String(x.eksempel).replace(/\\n/g, '\n'), criteria: (Array.isArray(x.kriterier) ? x.kriterier : []).map(String).slice(0, 5),
        min, max, checks, made: today()
      });
      added++;
    });
    if (bank.fix.length > 60) bank.fix = bank.fix.filter(f => has(state.rep[lang], f.id)).concat(bank.fix.filter(f => !has(state.rep[lang], f.id)).slice(-40));
    save();
    if (!added) throw new Error('KI-tjenesten svarte, men ingen av oppgavene besto kontrollen. Prøver igjen senere.');
    return added;
  }

  /* ---------- Fullføring ---------- */
  function finishSession() {
    const S = state.current; if (!S) return;
    const lang = S.lang, P = state.prog[lang];
    const graded = S.items.filter(i => typeof i.score === 'number');
    const score = graded.length ? graded.reduce((a, i) => a + i.score, 0) / graded.length : 1;
    S.score = score; S.graded = graded.length; S.passed = score >= PASS;
    S.finishedAt = new Date().toISOString();
    for (const it of S.items) {
      const st = state.stats[lang][it.c] || (state.stats[lang][it.c] = { right: 0, total: 0 });
      if (typeof it.score === 'number') {
        st.total++; st.right += it.score;
        const rep = state.rep[lang];
        if (it.score < 1) rep[it.id] = 2;
        else if (has(rep, it.id)) { rep[it.id]--; if (rep[it.id] <= 0) delete rep[it.id]; }
      }
    }
    // KI-setninger som er besvart riktig, fjernes fra reserven. Feil besvarte blir liggende til de kommer tilbake.
    const bank = state.ai[lang];
    bank.fix = bank.fix.filter(f => {
      const done = S.items.find(i => i.id === f.id);
      if (done && typeof done.score === 'number' && !has(state.rep[lang], f.id)) { delete state.seen[f.id]; return false; }
      return true;
    });
    const lvlBefore = levelOf(lang);
    P.done++; if (S.passed) P.passed++; if (S.level === 4) P.l4++;
    S.levelUp = levelOf(lang) > lvlBefore;
    delete S.idx;
    state.history.unshift(S);
    state.current = null;
    ui.last = S;
    save();
    maybeRefill(lang);
  }

  function streak() {
    const days = new Set(state.history.map(h => h.date));
    let d = new Date(), n = 0;
    if (!days.has(dateKey(d))) d.setDate(d.getDate() - 1);
    while (days.has(dateKey(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* ---------- Visning ---------- */
  const app = $('#app');
  function render() {
    const scr = ui.screen;
    document.body.dataset.screen = scr;
    app.innerHTML = (scr === 'run' ? '' : header()) + ({ home, run, summary, history, settings }[scr])() + (scr === 'run' ? '' : nav());
    afterRender();
  }
  function header() {
    const st = streak();
    return `<header class="top"><h1 class="brand">Skrivetrening</h1>${st ? `<p class="streak" title="Dager på rad">${st} ${st === 1 ? 'dag' : 'dager'} på rad</p>` : ''}</header>`;
  }
  function nav() {
    const b = (s, l) => `<button class="tab${ui.screen === s ? ' on' : ''}" data-act="go" data-to="${s}" ${ui.screen === s ? 'aria-current="page"' : ''}>${l}</button>`;
    return `<nav class="tabs" aria-label="Meny">${b('home', 'I dag')}${b('history', 'Historikk')}${b('settings', 'Innstillinger')}</nav>`;
  }
  function langSwitch(cur, act) {
    const en = enUnlocked();
    return `<div class="seg" role="group" aria-label="Språk">
      <button class="${cur === 'no' ? 'on' : ''}" data-act="${act}" data-lang="no">Norsk</button>
      <button class="${cur === 'en' ? 'on' : ''}" data-act="${act}" data-lang="en" ${en ? '' : 'disabled'}>English</button>
    </div>${en ? '' : `<p class="note">Engelsk låses opp etter ${EN_UNLOCK} norske økter (${state.prog.no.done} av ${EN_UNLOCK} fullført).</p>`}`;
  }

  function home() {
    const lang = state.settings.lang, P = state.prog[lang], L = DATA[lang];
    const name = state.settings.name.trim();
    const cur = state.current && state.current.lang === lang ? state.current : null;
    const doneToday = state.history.filter(h => h.date === today() && h.lang === lang);
    const { lvl, full, comp } = composition(lang);
    const parts = [];
    const nb = { word: ['ordoppgave', 'ordoppgaver'], fix: ['setning å rette', 'setninger å rette'], phrase: ['fast vending', 'faste vendinger'], write: ['skriveoppgave', 'skriveoppgaver'] };
    for (const k of ['word', 'fix', 'phrase', 'write']) if (comp[k]) parts.push(`${comp[k]} ${nb[k][comp[k] > 1 ? 1 : 0]}`);
    if (full) parts[parts.length - 1] = 'en hel søknad';
    const listText = parts.length > 1 ? parts.slice(0, -1).join(', ') + ' og ' + parts.at(-1) : parts[0];
    const mins = estimateMin(comp, full);

    let main;
    if (cur) {
      const left = cur.items.length - cur.idx;
      main = `<section class="today">
        <h2>Du er midt i en økt</h2>
        <p class="lead">${left} ${left === 1 ? 'oppgave' : 'oppgaver'} igjen. Svarene dine er lagret.</p>
        <button class="btn primary big" data-act="resume">Fortsett økta</button>
      </section>`;
    } else if (doneToday.length) {
      const last = doneToday[0];
      main = `<section class="today done">
        <h2>Dagens økt er gjort</h2>
        <p class="lead">${last.graded ? `${pct(last.score)} riktig på ${lang === 'no' ? 'norsk' : 'engelsk'}.` : 'Bra jobba!'} Kom tilbake i morgen for nye oppgaver.</p>
        <div class="row"><button class="btn" data-act="start" data-extra="1">Ta en ekstra økt</button><button class="btn ghost" data-act="go" data-to="history">Se svarene</button></div>
      </section>`;
    } else {
      main = `<section class="today">
        <h2>${name ? `Hei, ${esc(name)}. ` : ''}Dagens økt</h2>
        <p class="lead">${listText}. Omtrent ${mins} minutter.</p>
        <button class="btn primary big" data-act="start">Start dagens økt</button>
      </section>`;
    }

    // Uke
    const days = new Set(state.history.filter(h => h.lang === lang).map(h => h.date));
    let week = '';
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const k = dateKey(d), on = days.has(k);
      week += `<li class="${on ? 'on' : ''}${i === 0 ? ' now' : ''}"><span class="wd">${d.toLocaleDateString('nb-NO', { weekday: 'short' }).replace('.', '')}</span><span class="dot" aria-label="${on ? 'trent' : 'ikke trent'}"></span></li>`;
    }

    // Nivå
    const nextAt = LEVEL_AT[lvl + 1];
    const auto = !state.settings.levelOverride[lang];
    let levelTxt = `Nivå ${lvl} av 4: ${LEVELS[lvl].name}.`;
    let bar = '';
    if (auto && nextAt !== undefined) {
      const from = LEVEL_AT[lvl], left = nextAt - P.passed;
      bar = `<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${nextAt - from}" aria-valuenow="${P.passed - from}"><span style="width:${Math.round((P.passed - from) / (nextAt - from) * 100)}%"></span></div>
        <p class="small">${left} ${left === 1 ? 'bestått økt' : 'beståtte økter'} til neste nivå: ${LEVELS[lvl + 1].name}. En økt er bestått med minst ${pct(PASS)} riktig.</p>`;
    } else if (!auto) bar = `<p class="small">Nivået er satt manuelt under Innstillinger.</p>`;
    else bar = `<p class="small">Du er på øverste nivå. Oppgavene fortsetter å variere hver dag.</p>`;

    // Svake områder
    const weak = Object.entries(state.stats[lang]).filter(([c, s]) => s.total >= 4 && c !== WRITE_CAT[lang])
      .map(([c, s]) => [c, s.right / s.total]).filter(([, a]) => a < 0.85).sort((a, b) => a[1] - b[1]).slice(0, 3);
    const weakHtml = weak.length ? `<section class="block"><h3>Øv mest på</h3><ul class="weak">${weak.map(([c, a]) => `<li><span>${esc(c)}</span><span class="small">${pct(a)} riktig</span></li>`).join('')}</ul><p class="small">Disse dukker oftere opp i øktene dine.</p></section>` : '';

    return `<main class="page">
      ${langSwitch(lang, 'lang')}
      ${main}
      <section class="block"><h3>Siste sju dager</h3><ol class="week">${week}</ol></section>
      <section class="block"><h3>Nivå</h3><p>${levelTxt}</p>${bar}</section>
      ${weakHtml}
      ${saveFailed ? '<p class="warn">Svarene kunne ikke lagres i nettleseren. Sjekk at privat modus er slått av.</p>' : ''}
    </main>`;
  }

  function run() {
    const S = state.current, it = S.items[S.idx], L = DATA[S.lang];
    const answered = it.answer !== undefined;
    const n = S.items.length;
    let body = '';
    const kindLabel = { word: 'Ord', fix: 'Rett setningen', phrase: 'Fast vending', write: 'Skriveoppgave' }[it.kind];
    const inputAttrs = 'autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"';

    if (it.kind === 'word') {
      const sentence = esc(it.q).replace('___', answered ? `<mark class="gap ${it.score === 1 ? 'right' : 'wrong'}">${esc(it.answer || '…')}</mark>` : '<mark class="gap">&nbsp;</mark>');
      body += `<p class="prompt">${sentence}</p>`;
      if (it.t === 'c') {
        body += `<div class="choices">${it.o.map(o => {
          let cls = '';
          if (answered) cls = o === it.a ? 'right' : (o === it.answer ? 'wrong' : 'dim');
          return `<button class="choice ${cls}" data-act="choose" data-val="${esc(o)}" ${answered ? 'disabled' : ''}>${esc(o)}</button>`;
        }).join('')}</div>`;
      } else {
        body += `<p class="hint">Fyll inn hele ordet. Hint: <strong class="mask">${esc(it.h).replace(/_/g, '<span class="miss">_</span>')}</strong></p>
          <form data-act="submit" class="answer"><label class="sr" for="ans">Ditt svar</label>
          <input id="ans" class="line" ${inputAttrs} value="${esc(it.answer ?? '')}" ${answered ? 'readonly' : ''} placeholder="Skriv ordet">
          ${answered ? '' : '<button class="btn primary">Sjekk</button>'}</form>`;
      }
    } else if (it.kind === 'fix') {
      const nCh = changeCount(it.q, Array.isArray(it.a) ? it.a[0] : it.a);
      body += `<p class="instr">Skriv setningen på nytt uten feil. Det er ${nCh} ${nCh === 1 ? 'ting' : 'ting'} å rette.</p>
        <p class="prompt wrongtext">${esc(it.q)}</p>
        <form data-act="submit" class="answer"><label class="sr" for="ans">Riktig setning</label>
        <textarea id="ans" class="lined short" rows="2" ${inputAttrs} ${answered ? 'readonly' : ''} placeholder="Skriv riktig setning her">${esc(it.answer ?? '')}</textarea>
        ${answered ? '' : '<div class="row"><button type="button" class="btn ghost" data-act="copyq">Kopier inn setningen</button><button class="btn primary">Sjekk</button></div>'}</form>`;
    } else if (it.kind === 'phrase') {
      const scaffold = (Array.isArray(it.a) ? it.a[0] : it.a).split(' ').map(w => w[0] + '…').join(' ');
      body += `<p class="instr">${esc(it.q)}</p><p class="hint">Starten av hvert ord: <strong class="mask">${esc(scaffold)}</strong></p>
        <form data-act="submit" class="answer"><label class="sr" for="ans">Vendingen</label>
        <input id="ans" class="line" ${inputAttrs} value="${esc(it.answer ?? '')}" ${answered ? 'readonly' : ''} placeholder="Skriv hele vendingen">
        ${answered ? '' : '<button class="btn primary">Sjekk</button>'}</form>`;
    } else if (it.kind === 'write') {
      body += `<h2 class="wtitle">${esc(it.title)}</h2><p class="instr">${esc(it.task)}</p>
        <details class="skeleton" ${answered ? '' : 'open'}><summary>Skjelett – slik kan teksten bygges opp</summary><pre>${esc(it.skeleton)}</pre></details>
        <form data-act="submit" class="answer"><label class="sr" for="ans">Din tekst</label>
        <textarea id="ans" class="lined" rows="${it.full ? 16 : 8}" ${inputAttrs} ${answered ? 'readonly' : ''} placeholder="Skriv din versjon her. Bytt ut alt i [klammer] med ditt eget.">${esc(answered ? it.answer : (it.draft || ''))}</textarea>
        <p class="small counter" id="wc">${countWords(answered ? it.answer : it.draft || '')} ord${it.min ? `, mål ${it.min}–${it.max}` : ''}</p>
        ${answered ? '' : '<button class="btn primary">Lever teksten</button>'}</form>
        ${answered ? '' : '<p class="small">Autoretting er slått av i feltet – det er du som skriver.</p>'}`;
    }

    if (!answered) {
      let note = '';
      const nr = taskNo(S.lang, it);
      const list = kindList(S.lang, it.kind);
      note = `<div class="taskbar"><span class="tasknr">${nr || 'Laget til deg'}</span><span class="tb-btns">
          <button class="btn ghost small-btn" data-act="pickopen" aria-expanded="${ui.pickOpen ? 'true' : 'false'}">Velg nr.</button>
          ${swapCandidates(S, it).length ? '<button class="btn ghost small-btn" data-act="swap">Bytt oppgave</button>' : ''}</span></div>`;
      if (ui.pickOpen) note += `<form class="pick" data-act="pick" novalidate>
          <label for="picknr">${KIND_NR[it.kind]} nr. (1–${list.length})</label>
          <div class="row"><input id="picknr" type="number" inputmode="numeric" min="1" max="${list.length}" autocomplete="off" required>
          <button class="btn primary small-btn">Gå til</button></div>
          ${ui.pickMsg ? `<p class="small warn-text" role="status">${esc(ui.pickMsg)}</p>` : ''}</form>`;
      ui.pickMsg = '';
      if (has(state.rep[S.lang], it.id)) note += `<p class="seen-note">Denne bommet du på sist. Prøv igjen, eller bytt – da kommer den tilbake senere.</p>`;
      if (ui.swapMsg) { note += `<p class="small" role="status">${esc(ui.swapMsg)}</p>`; ui.swapMsg = ''; }
      body = note + body;
    }
    if (answered) body += feedback(it, L, S.lang);

    const last = S.idx === n - 1;
    return `<main class="page run">
      <div class="runbar"><button class="btn ghost small-btn" data-act="pause">Pause</button>
        <p class="count">${kindLabel}, oppgave ${S.idx + 1} av ${n}</p></div>
      <div class="meter thin"><span style="width:${Math.round((S.idx + (answered ? 1 : 0)) / n * 100)}%"></span></div>
      <article class="task">${body}</article>
      ${answered ? `<button class="btn primary big next" data-act="next">${last ? 'Se resultatet' : 'Neste oppgave'}</button>` : ''}
    </main>`;
  }
  const countWords = t => (String(t || '').match(/[\p{L}\p{N}]+/gu) || []).length;

  function ruleFor(L, c) { return L.rules[c] || ''; }
  function feedback(it, L, lang) {
    if (it.kind === 'write') return writeFeedback(it, lang);
    const ok = it.score === 1, half = it.score === 0.5;
    let h = `<section class="fb ${ok ? 'ok' : half ? 'half' : 'bad'}" aria-live="polite">`;
    h += `<p class="verdict">${ok ? 'Riktig!' : half ? 'Nesten!' : 'Ikke helt.'}</p>`;
    if (it.note) h += `<p>${esc(it.note)}</p>`;
    if (!ok) {
      if (it.kind === 'word') h += `<p>Riktig svar: <strong class="correct">${esc(it.a)}</strong></p>`;
      else {
        const target = it.matched || (Array.isArray(it.a) ? it.a[0] : it.a);
        const d = diff(tokens(it.answer), tokens(target));
        h += `<p class="cmp"><span class="lbl">Du skrev</span> ${renderTokens(d.A, 'del') || '<em>ingenting</em>'}</p>
              <p class="cmp"><span class="lbl">Riktig</span> ${renderTokens(d.B, 'ins')}</p>`;
      }
    }
    if (it.e) h += `<p class="rule">${esc(it.e)}</p>`;
    else if (!ok && ruleFor(L, it.c)) h += `<p class="rule"><strong>${esc(cap(it.c))}:</strong> ${esc(ruleFor(L, it.c))}</p>`;
    if (!ok) h += `<p class="small">Denne kommer tilbake i en senere økt.</p>`;
    return h + '</section>';
  }
  const LVL_NAME = { feil: 'Rettskriving', sjekk: 'Sjekk om dette er riktig', innhold: 'Innhold og oppbygging', tips: 'Tips' };
  function writeFeedback(it, lang) {
    const r = it.result || { issues: [], oks: [] };
    let h = `<section class="fb write" aria-live="polite">`;
    const groups = ['feil', 'sjekk', 'innhold', 'tips'];
    const nErr = r.issues.filter(i => i.lvl === 'feil').length;
    h += `<p class="verdict">${nErr === 0 ? 'Ingen vanlige stavefeil funnet.' : `${nErr} ${nErr === 1 ? 'ting' : 'ting'} å rette i rettskrivingen.`}</p>`;
    h += `<p class="small">Den automatiske sjekken fanger vanlige feil, men ikke alt. Sammenlign med eksempelet under.</p>`;
    for (const g of groups) {
      const list = r.issues.filter(i => i.lvl === g);
      if (list.length) h += `<h4 class="g-${g}">${LVL_NAME[g]}</h4><ul class="issues g-${g}">${list.map(i => `<li>${esc(i.msg)}</li>`).join('')}</ul>`;
    }
    if (r.oks.length) h += `<h4 class="g-ok">Dette har du fått med</h4><ul class="issues g-ok">${r.oks.map(o => `<li>${esc(o)}</li>`).join('')}</ul>`;
    if (it.criteria) {
      h += `<h4>Sjekk selv</h4><ul class="checklist">${it.criteria.map((c, i) => `<li><label><input type="checkbox" data-act="crit" data-i="${i}" ${(it.self || [])[i] ? 'checked' : ''}> ${esc(c)}</label></li>`).join('')}</ul>`;
    }
    h += `<details class="model"><summary>Vis et eksempel på en god tekst</summary><pre>${esc(it.model)}</pre></details>`;
    h += aiBlock(it);
    return h + '</section>';
  }
  function aiBlock(it) {
    if (it.ai) return renderAi(it.ai);
    if (it.aiLoading) return `<p class="ai-wait">Henter tilbakemelding …</p>`;
    if (!state.settings.apiKey.trim()) return `<p class="small">Vil du ha tilbakemelding på ordlyd og innhold fra KI? Det kan slås på under Innstillinger.</p>`;
    return `${it.aiError ? `<p class="warn">${esc(it.aiError)}</p>` : ''}<button class="btn" data-act="ai">Få tilbakemelding på ordlyd og innhold</button>`;
  }
  function renderAi(a) {
    if (a.raw) return `<section class="ai"><h4>Tilbakemelding fra KI</h4><pre>${esc(a.raw)}</pre></section>`;
    let h = `<section class="ai"><h4>Tilbakemelding fra KI</h4>`;
    if (a.bra?.length) h += `<p class="ai-h">Dette fungerer</p><ul>${a.bra.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
    if (a.rettskriving?.length) h += `<p class="ai-h">Rettskriving</p><ul>${a.rettskriving.map(x => `<li><span class="del">${esc(x.feil)}</span> → <span class="ins">${esc(x.riktig)}</span>${x.forklaring ? ` <span class="small">${esc(x.forklaring)}</span>` : ''}</li>`).join('')}</ul>`;
    else h += `<p class="ai-h">Rettskriving</p><p>Ingen stavefeil funnet.</p>`;
    if (a.ordlyd?.length) h += `<p class="ai-h">Ordlyd</p><ul>${a.ordlyd.map(x => `<li>«${esc(x.original)}» → «${esc(x.bedre)}»${x.hvorfor ? ` <span class="small">${esc(x.hvorfor)}</span>` : ''}</li>`).join('')}</ul>`;
    if (a.innhold?.length) h += `<p class="ai-h">Innhold og oppbygging</p><ul>${a.innhold.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
    if (a.forbedret) h += `<details><summary>Se forbedret versjon</summary><pre>${esc(a.forbedret)}</pre></details>`;
    return h + '</section>';
  }

  function summary() {
    const S = ui.last; if (!S) { ui.screen = 'home'; return home(); }
    const wrong = S.items.filter(i => typeof i.score === 'number' && i.score < 1);
    const right = S.items.filter(i => i.score === 1).length;
    const P = state.prog[S.lang], lvl = levelOf(S.lang), nextAt = LEVEL_AT[lvl + 1];
    let progress = '';
    if (S.levelUp) progress = `<p class="levelup">Nytt nivå: ${LEVELS[lvl].name}. Oppgavene blir litt mer krevende fra neste økt.</p>`;
    else if (!S.passed && S.graded) progress = `<p>Økta telte ikke mot neste nivå denne gangen (under ${pct(PASS)}). Oppgavene du bommet på, kommer tilbake.</p>`;
    else if (nextAt !== undefined && !state.settings.levelOverride[S.lang]) progress = `<p>${nextAt - P.passed} ${nextAt - P.passed === 1 ? 'bestått økt' : 'beståtte økter'} til neste nivå.</p>`;
    return `<main class="page">
      <section class="today done"><h2>Økta er ferdig</h2>
        ${S.graded ? `<p class="score">${pct(S.score)}</p><p class="lead">${right} av ${S.graded} helt riktig.</p>` : '<p class="lead">Skriveoppgaven er levert.</p>'}
        ${progress}
      </section>
      ${wrong.length ? `<section class="block"><h3>Øv på disse</h3><ul class="mistakes">${wrong.map(i => `<li><span class="del">${esc(i.answer || '–')}</span> → <span class="ins">${esc(i.matched || (Array.isArray(i.a) ? i.a[0] : i.a))}</span><span class="small"> ${esc(i.c)}</span></li>`).join('')}</ul></section>` : ''}
      <div class="row"><button class="btn primary" data-act="go" data-to="home">Til forsiden</button><button class="btn ghost" data-act="share" data-id="${S.id}">Del med en forelder</button></div>
    </main>`;
  }

  function history() {
    const lang = ui.histLang;
    const list = state.history.filter(h => h.lang === lang);
    const stats = Object.entries(state.stats[lang]).filter(([, s]) => s.total).sort((a, b) => a[1].right / a[1].total - b[1].right / b[1].total);
    const statHtml = stats.length ? `<section class="block"><h3>Treffsikkerhet per tema</h3><ul class="bars">${stats.map(([c, s]) => {
      const a = s.right / s.total;
      return `<li><span class="bl">${esc(cap(c))}</span><span class="bar"><span style="width:${Math.round(a * 100)}%" class="${a < 0.6 ? 'lo' : a < 0.85 ? 'mid' : 'hi'}"></span></span><span class="small">${pct(a)}, ${s.total} oppg.</span></li>`;
    }).join('')}</ul></section>` : '';
    const sessions = list.length ? list.map(S => {
      const items = S.items.map(i => {
        const mark = typeof i.score !== 'number' ? 'w' : i.score === 1 ? 'r' : i.score === 0.5 ? 'h' : 'x';
        if (i.kind === 'write') return `<li class="hi-w"><p>${taskNo(S.lang, i) ? `<span class="tasknr">${taskNo(S.lang, i)}</span> ` : ''}<strong>${esc(i.title)}</strong></p><pre>${esc(i.answer)}</pre>
          ${i.result && i.result.issues.length ? `<ul class="issues">${i.result.issues.map(x => `<li>${esc(x.msg)}</li>`).join('')}</ul>` : ''}
          ${i.ai ? renderAi(i.ai) : ''}</li>`;
        const correct = i.matched || (Array.isArray(i.a) ? i.a[0] : i.a);
        const q = i.kind === 'word' ? i.q.replace('___', '…') : i.q;
        const nr = taskNo(S.lang, i);
        return `<li class="m-${mark}"><span class="q">${nr ? `<span class="tasknr">${nr}</span> ` : ''}${esc(q)}</span><span class="ansline">${mark === 'r' ? `<span class="ins">${esc(i.answer)}</span>` : `<span class="del">${esc(i.answer || '–')}</span> → <span class="ins">${esc(correct)}</span>`}</span></li>`;
      }).join('');
      return `<details class="sess"><summary><span>${esc(cap(fmtDate(S.date)))}${S.extra ? ', ekstra' : ''}</span><span class="small">${esc(S.levelName)}</span><span class="sc">${S.graded ? pct(S.score) : 'Levert'}</span></summary>
        <ol class="hitems">${items}</ol><button class="btn ghost" data-act="share" data-id="${S.id}">Del denne økta</button></details>`;
    }).join('') : `<p class="empty">Her kommer svarene dine når du har fullført første økt.</p>`;
    return `<main class="page">
      <h2>Historikk</h2>
      ${langSwitch(lang, 'hlang')}
      ${statHtml}
      <section class="block"><h3>Økter (${list.length})</h3>${sessions}</section>
      <section class="block"><h3>Sikkerhetskopi</h3>
        <p class="small">Svarene lagres bare i denne nettleseren på denne enheten. Ta en kopi av og til, eller hvis du bytter mobil.</p>
        <div class="row"><button class="btn" data-act="export">Last ned kopi</button><label class="btn ghost">Hent inn kopi<input type="file" accept="application/json,.json" data-act="import" hidden></label></div>
      </section>
    </main>`;
  }

  function settings() {
    const s = state.settings;
    const lvlSel = lang => `<select data-set="lvl-${lang}">${[0, 1, 2, 3, 4].map(v => `<option value="${v}" ${s.levelOverride[lang] === v ? 'selected' : ''}>${v ? `Nivå ${v}: ${LEVELS[v].name}` : `Automatisk (nå nivå ${autoLevel(state.prog[lang].passed)})`}</option>`).join('')}</select>`;
    return `<main class="page">
      <h2>Innstillinger</h2>
      ${ui.msg ? `<p class="ok-msg" role="status">${esc(ui.msg)}</p>` : ''}
      <section class="block form">
        <label>Navn <input data-set="name" value="${esc(s.name)}" autocomplete="given-name" placeholder="Brukes i hilsenen på forsiden"></label>
        <fieldset><legend>Lengde på økta</legend>
          <label class="radio"><input type="radio" name="len" data-set="length" value="short" ${s.length === 'short' ? 'checked' : ''}> Kort, omtrent 5 minutter</label>
          <label class="radio"><input type="radio" name="len" data-set="length" value="long" ${s.length === 'long' ? 'checked' : ''}> Lang, omtrent 10 minutter</label>
        </fieldset>
      </section>
      <section class="block form"><h3>For foreldre</h3>
        <label class="radio"><input type="checkbox" data-set="enUnlocked" ${s.enUnlocked ? 'checked' : ''}> Lås opp engelsk nå</label>
        <label>Nivå på norsk ${lvlSel('no')}</label>
        <label>Nivå på engelsk ${lvlSel('en')}</label>
        <p class="small">Automatisk nivå øker når økter bestås med minst ${pct(PASS)} riktig: nivå 2 etter ${LEVEL_AT[2]}, nivå 3 etter ${LEVEL_AT[3]} og nivå 4 etter ${LEVEL_AT[4]} beståtte økter.</p>
      </section>
      <section class="block form"><h3>KI: tilbakemelding og nye oppgaver</h3>
        <p class="small">Valgfritt. Med en API-nøkkel fra Anthropic får skriveoppgavene tilbakemelding på ordlyd og innhold, og appen lager nye setninger og skriveoppgaver tilpasset feilene han gjør. Uten nøkkel brukes den faste oppgavebanken. Nøkkelen lagres bare på denne enheten og sendes kun til Anthropic. Sett en lav månedlig utgiftsgrense i Anthropic-kontoen.</p>
        <label>API-nøkkel <input type="password" data-set="apiKey" value="${esc(s.apiKey)}" autocomplete="off" placeholder="sk-ant-…"></label>
        <label>Modell <input data-set="model" value="${esc(s.model)}" autocomplete="off" spellcheck="false"></label>
        <label class="radio"><input type="checkbox" data-set="aiGen" ${s.aiGen ? 'checked' : ''}> Lag nye oppgaver med KI</label>
        ${aiStatus()}
      </section>
      <section class="block form"><h3>Data</h3>
        <p class="small">${state.history.length} økter lagret. Fullført: ${state.prog.no.done} på norsk, ${state.prog.en.done} på engelsk.</p>
        <button class="btn danger" data-act="reset">Slett all historikk og start på nytt</button>
      </section>
    </main>`;
  }

  function aiStatus() {
    if (!aiReady()) return '';
    const line = lang => {
      const b = state.ai[lang], g = gen[lang];
      const fresh = b.fix.filter(f => !has(state.seen, f.id)).length;
      let t = `${DATA[lang].label}: ${fresh} nye setninger og ${b.write.length} skriveoppgaver i reserve.`;
      if (g.busy) t += ' Lager nye nå …';
      else if (g.err) t += ` Siste forsøk feilet: ${g.err}`;
      return `<li>${esc(t)}</li>`;
    };
    const langs = enUnlocked() ? ['no', 'en'] : ['no'];
    return `<ul class="small ai-status">${langs.map(line).join('')}</ul>
      ${levelOf(state.settings.lang) < 2 ? '<p class="small">KI-oppgaver tas i bruk fra nivå 2 (setninger).</p>' : ''}
      <button class="btn" data-act="gen" ${gen[state.settings.lang].busy || !state.settings.aiGen ? 'disabled' : ''}>Lag nye oppgaver nå</button>`;
  }

  function afterRender() {
    if (ui.screen === 'run') {
      const it = state.current.items[state.current.idx];
      requestAnimationFrame(() => {
        if (it.answer === undefined) { const a = ui.pickOpen ? $('#picknr') : $('#ans'); if (a && (ui.pickOpen || it.kind !== 'write')) a.focus(); }
        else { const nx = $('.next'); if (nx) nx.focus({ preventScroll: true }); const fb = $('.fb'); if (fb) fb.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' }); }
      });
    } else window.scrollTo(0, 0);
    if (ui.screen === 'home' || ui.screen === 'summary') { maybeRefill('no'); if (enUnlocked()) maybeRefill('en'); }
    ui.msg = '';
  }

  /* ---------- Handlinger ---------- */
  function answerCurrent(val) {
    const S = state.current, it = S.items[S.idx];
    if (it.answer !== undefined) return;
    if (it.kind === 'word' && it.t === 'c') { it.answer = val; it.score = val === it.a ? 1 : 0; }
    else if (it.kind === 'write') {
      if (!norm(val)) return;
      clearTimeout(draftTimer);
      it.answer = val.replace(/\s+$/, ''); delete it.draft;
      it.result = analyze(S.lang, it.answer, findWriting(S.lang, it.id) || it);
    } else {
      if (!norm(val)) return;
      it.answer = norm(val);
      const r = gradeText(it.answer, it.a, it.c);
      it.score = r.score; if (r.note) it.note = r.note;
      if (Array.isArray(it.a)) it.matched = r.ans;
    }
    save(); render();
  }

  document.addEventListener('click', async e => {
    const el = e.target.closest('[data-act]'); if (!el) return;
    const act = el.dataset.act;
    if (act === 'go') { ui.screen = el.dataset.to; render(); }
    else if (act === 'lang') { state.settings.lang = el.dataset.lang; save(); render(); }
    else if (act === 'hlang') { ui.histLang = el.dataset.lang; render(); }
    else if (act === 'start') {
      if (state.current && state.current.lang !== state.settings.lang && !confirm('Du har en uferdig økt på det andre språket. Vil du forkaste den?')) return;
      state.current = buildSession(state.settings.lang, el.dataset.extra === '1'); save(); ui.screen = 'run'; render();
    }
    else if (act === 'resume') { ui.screen = 'run'; render(); }
    else if (act === 'pause') { save(); ui.screen = 'home'; render(); }
    else if (act === 'choose') answerCurrent(el.dataset.val);
    else if (act === 'copyq') { const a = $('#ans'); a.value = state.current.items[state.current.idx].q; a.focus(); }
    else if (act === 'next') {
      const S = state.current;
      ui.pickOpen = false;
      if (S.idx < S.items.length - 1) { S.idx++; save(); render(); }
      else { finishSession(); ui.screen = 'summary'; render(); }
    }
    else if (act === 'ai') {
      const S = state.current, it = S.items[S.idx];
      it.aiLoading = true; it.aiError = ''; render();
      try { it.ai = await aiFeedback(S.lang, it, it.answer); }
      catch (err) { it.aiError = err.message === 'Failed to fetch' ? 'Fikk ikke kontakt med KI-tjenesten. Sjekk nettet og prøv igjen.' : err.message; }
      delete it.aiLoading; save(); if (ui.screen === 'run') render();
    }
    else if (act === 'share') shareSession(el.dataset.id);
    else if (act === 'gen') { maybeRefill(state.settings.lang, true); render(); }
    else if (act === 'swap') swapCurrent();
    else if (act === 'pickopen') { ui.pickOpen = !ui.pickOpen; render(); }
    else if (act === 'export') {
      const blob = new Blob([JSON.stringify({ ...state, settings: { ...state.settings, apiKey: '' } }, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `skrivetrening-${today()}.json`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    }
    else if (act === 'reset') {
      if (confirm('Slette all historikk og fremgang? Dette kan ikke angres.') && confirm('Er du helt sikker?')) {
        const keep = { name: state.settings.name, apiKey: state.settings.apiKey, model: state.settings.model };
        state = blank(); Object.assign(state.settings, keep); save(); ui.msg = 'All historikk er slettet.'; render();
      }
    }
  });
  document.addEventListener('submit', e => {
    const pf = e.target.closest('[data-act="pick"]');
    if (pf) { e.preventDefault(); pickTask($('#picknr').value); return; }
    const f = e.target.closest('[data-act="submit"]'); if (!f) return;
    e.preventDefault(); answerCurrent($('#ans').value);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && e.target.id === 'ans' && e.target.tagName === 'TEXTAREA') {
      const it = state.current?.items[state.current.idx];
      if (it && it.kind === 'fix' && !e.shiftKey) { e.preventDefault(); answerCurrent(e.target.value); }
    }
  });
  let draftTimer;
  document.addEventListener('input', e => {
    const t = e.target;
    if (t.id === 'ans' && ui.screen === 'run') {
      const it = state.current.items[state.current.idx];
      if (it.kind === 'write') {
        const wc = $('#wc'); if (wc) wc.textContent = `${countWords(t.value)} ord${it.min ? `, mål ${it.min}–${it.max}` : ''}`;
        it.draft = t.value; clearTimeout(draftTimer); draftTimer = setTimeout(save, 600);
      }
    }
    const key = t.dataset.set; if (!key) return;
    const s = state.settings;
    if (key === 'name' || key === 'apiKey' || key === 'model') s[key] = t.value;
    save();
  });
  document.addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.act === 'crit') { const it = state.current.items[state.current.idx]; it.self = it.self || []; it.self[+t.dataset.i] = t.checked; save(); return; }
    if (t.dataset.act === 'import') { importFile(t.files[0]); return; }
    const key = t.dataset.set; if (!key) return;
    const s = state.settings;
    if (key === 'length') s.length = t.value;
    else if (key === 'enUnlocked') s.enUnlocked = t.checked;
    else if (key === 'aiGen') s.aiGen = t.checked;
    else if (key === 'apiKey' || key === 'model') { /* lagres ved input; tegner siden på nytt så KI-valgene vises */ }
    else if (key.startsWith('lvl-')) s.levelOverride[key.slice(4)] = +t.value;
    else return;
    save(); render();
  });

  function importFile(file) {
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const d = JSON.parse(r.result);
        if (d.v !== 1 || !Array.isArray(d.history)) throw new Error();
        if (!confirm(`Kopien har ${d.history.length} økter. Vil du erstatte det som er lagret nå?`)) return;
        const key = state.settings.apiKey;
        localStorage.setItem(KEY, JSON.stringify(d)); state = load(); if (!state.settings.apiKey) state.settings.apiKey = key; save();
        ui.msg = 'Kopien er hentet inn.'; ui.screen = 'settings'; render();
      } catch (e) { alert('Filen kunne ikke leses. Velg en kopi lastet ned fra Skrivetrening.'); }
    };
    r.readAsText(file);
  }

  async function shareSession(id) {
    const S = state.history.find(h => h.id === id); if (!S) return;
    const name = state.settings.name.trim();
    let txt = `Skrivetrening${name ? ` – ${name}` : ''}\n${cap(fmtDate(S.date))}, ${DATA[S.lang].label}, ${S.levelName}\n`;
    if (S.graded) txt += `${pct(S.score)} riktig (${S.items.filter(i => i.score === 1).length} av ${S.graded})\n`;
    const wrong = S.items.filter(i => typeof i.score === 'number' && i.score < 1);
    if (wrong.length) txt += `\nFeil:\n${wrong.map(i => `- ${i.answer || '–'} → ${i.matched || (Array.isArray(i.a) ? i.a[0] : i.a)}`).join('\n')}\n`;
    for (const w of S.items.filter(i => i.kind === 'write' && i.answer)) txt += `\n${w.title}:\n${w.answer}\n`;
    try {
      if (navigator.share) await navigator.share({ title: 'Skrivetrening', text: txt });
      else { await navigator.clipboard.writeText(txt); alert('Kopiert. Lim inn i en melding eller e-post.'); }
    } catch (e) { if (e.name !== 'AbortError') prompt('Kopier teksten:', txt); }
  }

  if (state.settings.lang === 'en' && !enUnlocked()) state.settings.lang = 'no';
  render();
})();
