/*
 * The Historical Flute Project: page rendering, cross-links and translations.
 * Every page is a thin HTML shell; <body data-page="…"> tells this script what to draw.
 */
(function () {
  "use strict";
  const H = window.HFP;
  const LANGS = ["en", "fr", "it"];
  const PAGES = [
    ["home", "index.html"], ["history", "history.html"], ["playing", "playing.html"], ["flutes", "flutes.html"],
    ["makers", "makers.html"], ["treatises", "treatises.html"], ["flutists", "flutists.html"],
    ["repertoire", "repertoire.html"], ["recordings", "recordings.html"], ["map", "map.html"], ["sources", "sources.html"], ["contact", "contact.html"], ["credits", "credits.html"]
  ];
  const PAGE_FILE = Object.fromEntries(PAGES);
  const TYPES = ["flutes", "makers", "flutists", "treatises", "repertoire"];

  /* ---------------- Language ---------------- */
  let lang = "en";
  try { const s = localStorage.getItem("hfp-lang"); if (LANGS.includes(s)) lang = s; } catch (e) { /* storage unavailable */ }
  const qpLang = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(qpLang)) lang = qpLang;
  document.documentElement.lang = lang;

  let usedFallback = false;
  const tr = (key) => (H.i18n[lang] && H.i18n[lang][key]) || H.i18n.en[key] || key;
  // Prose fields: a string (English) or { en, fr, it }. Flags when English is shown in place of a translation.
  function loc(v) {
    if (v == null) return "";
    if (typeof v === "string") { if (lang !== "en") usedFallback = true; return v; }
    if (v[lang]) return v[lang];
    if (lang !== "en") usedFallback = true;
    return v.en || "";
  }

  /* ---------------- Index & graph ---------------- */
  const index = {};
  const personType = (p) => (p.roles[0] === "maker" ? "makers" : "flutists");
  H.flutes.forEach((e) => (index[e.id] = { e, type: "flutes" }));
  H.people.forEach((e) => (index[e.id] = { e, type: personType(e) }));
  H.treatises.forEach((e) => (index[e.id] = { e, type: "treatises" }));
  H.repertoire.forEach((e) => (index[e.id] = { e, type: "repertoire" }));
  // An entry with `group: "<head id>"` is nested inside its head entry on the list page and folded under it on the
  // Flute Map (e.g. the Bach flute works inside "Bach Flute Sonatas"). groups[headId] = member entries, in id order.
  const groups = {};
  H.repertoire.forEach((e) => { if (e.group && index[e.group]) (groups[e.group] = groups[e.group] || []).push(e); });
  Object.values(groups).forEach((g) => g.sort((a, b) => a.id.localeCompare(b.id)));

  const lanesOf = (id) => {
    const { e, type } = index[id];
    return e.roles ? e.roles.map((r) => (r === "maker" ? "makers" : "flutists")) : [type];
  };
  const href = (id) => (index[id] ? PAGE_FILE[index[id].type] + "#" + id : recs[id] ? "recordings.html#" + id : "#");
  const nameOf = (id) => { if (!index[id] && recs[id]) return recs[id].name; const e = index[id].e; return e.short || e.name; };

  const REF = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;
  function refsIn(v) {
    if (!v) return [];
    const texts = typeof v === "string" ? [v] : Object.values(v);
    const out = [];
    texts.forEach((t) => { for (const m of t.matchAll(REF)) out.push(m[1]); });
    return out;
  }
  const graph = {};
  Object.keys(index).forEach((id) => (graph[id] = new Set()));
  function connect(a, b) {
    if (a === b) return;
    if (!index[b]) { console.warn(`[HFP] "${a}" refers to unknown id "${b}"`); return; }
    graph[a].add(b); graph[b].add(a);
  }
  Object.values(index).forEach(({ e }) => {
    (e.links || []).forEach((t) => connect(e.id, t));
    (e.flutes || []).forEach((t) => connect(e.id, t));
    if (e.author) connect(e.id, e.author);
    ["description", "bio", "tips", "curio"].forEach((f) => refsIn(e[f]).forEach((t) => connect(e.id, t)));
  });
  const byStart = (a, b) => (index[a].e.start || 0) - (index[b].e.start || 0);

  /* ---------------- Text helpers ---------------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  /* ---------------- Citations ----------------
     {{key, locator; key2, locator}} in any text becomes a numbered note pointing to the
     entry's reference list; {{?}} marks a statement whose source is still being checked.
     `notes` collects the citations of one entry (or one chapter); without it they are hidden. */
  const CITE = /\s*\{\{([^}]+)\}\}/g;
  function parseCite(body) {
    if (body.trim() === "?") return [{ key: "?" }];
    return body.split(";").map((s) => {
      if (s.trim() === "?") return { key: "?" };
      const m = s.trim().match(/^([a-z0-9]+)\s*(?:,\s*(.+))?$/i);
      return m ? { key: m[1], loc: (m[2] || "").trim() } : null;
    }).filter(Boolean);
  }
  const citesIn = (t) => [...String(t || "").matchAll(CITE)].flatMap((m) => parseCite(m[1]));
  const newNotes = (prefix) => ({ prefix, list: [], map: new Map() });
  function shortCite(key, locator) {
    const b = H.bib[key];
    if (!b) return key;
    return [b.author ? b.author.split(" ").pop() : "", b.title, b.year].filter(Boolean).join(", ") + (locator ? ", " + locator : "");
  }
  function citeMark(body, notes) {
    if (!notes) return "";
    const parts = parseCite(body).map((it) => {
      if (it.key === "?") return `<a class="cite-needed" href="sources.html#verify" title="${esc(tr("cite_needed"))}">?</a>`;
      if (!H.bib[it.key]) console.warn(`[HFP] unknown source "${it.key}"`);
      const k = it.key + "|" + it.loc;
      if (!notes.map.has(k)) { notes.list.push(it); notes.map.set(k, notes.list.length); }
      const n = notes.map.get(k);
      return `<a href="#${notes.prefix}-ref-${n}" title="${esc(shortCite(it.key, it.loc))}">${n}</a>`;
    });
    return `<sup class="cite">[${parts.join(", ")}]</sup>`;
  }
  // Full bibliographic reference, used in entry reference lists and on the Sources page.
  function fullCite(key, locator) {
    const b = H.bib[key];
    if (!b) return esc(key) + (locator ? ", " + esc(locator) : "");
    const pub = [b.edition, b.place && b.publisher ? `${b.place}: ${b.publisher}` : b.place || b.publisher, b.year, b.journal ? "" : b.volume].filter(Boolean).join(", ");
    let s = b.author ? esc(b.author) + ", " : "";
    if (b.journal) s += `‘${esc(b.title)}’, <em>${esc(b.journal)}</em> ${esc(b.volume || "")} (${esc(b.year)})${b.pages ? ", " + esc(b.pages) : ""}`;
    else if (b.inBook) s += `‘${esc(b.title)}’, in <em>${esc(b.inBook)}</em> (${esc(pub)})${b.pages ? ", " + esc(b.pages) : ""}`;
    else s += `<em>${esc(b.title)}</em>${pub ? ` (${esc(pub)})` : ""}`;
    if (locator) s += ", " + esc(locator);
    if (b.url) s += ` <a href="${b.url}" target="_blank" rel="noopener" title="${esc(b.isbn ? "ISBN " + b.isbn : b.url)}">↗</a>`;
    if (b.online) s += ` · <a href="${b.online}" target="_blank" rel="noopener">${esc(tr(b.onlineLabel || "online_summary"))} ↗</a>`;
    return s;
  }
  function refsHTML(notes) {
    if (!notes.list.length) return "";
    return `<div class="refs"><h4>${esc(tr("refs_title"))}</h4><ol>${notes.list.map((it, i) =>
      `<li id="${notes.prefix}-ref-${i + 1}">${fullCite(it.key, it.loc)}</li>`).join("")}</ol></div>`;
  }

  // Historical Recordings are a separate page, not nodes of the Flute Map: [[rec-…]] links resolve here.
  const recs = Object.fromEntries((H.recordings || []).map((r) => [r.id, r]));

  function inline(s, notes) {
    return esc(s)
      .replace(CITE, (m, body) => citeMark(body, notes))
      .replace(REF, (m, id, label) => {
        const it = index[id];
        if (!it && recs[id]) return `<a class="xref t-recordings" href="recordings.html#${id}">${label || esc(recs[id].name)}</a>`;
        if (!it) return label || id;
        return `<a class="xref t-${it.type}" href="${href(id)}">${label || esc(nameOf(id))}</a>`;
      })
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }
  const paras = (s, notes) => s.split(/\n\n+/).map((p) => `<p>${inline(p, notes)}</p>`).join("");
  const chip = (id) => `<a class="chip t-${index[id].type}" href="${href(id)}">${esc(nameOf(id))}</a>`;
  const yearSpan = (e) => e.when ? loc(e.when) : (e.end === undefined ? String(e.start) : `${e.start}–${e.end === null ? tr("present") : e.end}`);
  const eraOf = (y) => H.eras.find((er) => y >= er.start && y < er.end) || H.eras[H.eras.length - 1];
  const ext = (url, label) => `<a href="${url}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
  const wikiUrl = (q) => `https://${lang}.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(q)}`;
  const imslpUrl = (q) => `https://imslp.org/index.php?search=${encodeURIComponent(q)}`;
  const listenUrl = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

  /* ---------------- Photos (public-domain / free-licence images) ---------------- */
  // image: { src, caption, credit, url } — url points to the image's licence page.
  function photo(img, cls) {
    if (!img) return "";
    const cap = loc(img.caption);
    return `<figure class="entry-figure photo ${cls || ""}">
      <a href="${img.url}" target="_blank" rel="noopener"><img src="${img.src}" alt="${esc(cap.replace(/\[\[[^|\]]*\|?|\]\]|\*/g, ""))}" loading="lazy"></a>
      <figcaption>${inline(cap)}${img.credit ? ` <span class="credit">${esc(img.credit)}</span>` : ""}</figcaption></figure>`;
  }

  /* ---------------- Header / footer ---------------- */
  const LOGO = `<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><g transform="rotate(-35 15 15)"><rect x="1" y="12.5" width="28" height="5" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="6" cy="15" r="1.2" fill="currentColor"/><circle cx="14" cy="15" r=".9" fill="currentColor"/><circle cx="17.5" cy="15" r=".9" fill="currentColor"/><circle cx="21" cy="15" r=".9" fill="currentColor"/></g></svg>`;

  function renderChrome(page) {
    const head = document.getElementById("site-header");
    head.className = "site-header";
    head.innerHTML = `
      <div class="header-row">
        <a class="brand" href="index.html">${LOGO}<span class="brand-name">${esc(H.config.siteName)}<small>${esc(tr("tagline"))}</small></span></a>
        <div class="lang-switch" role="group" aria-label="Language">
          ${LANGS.map((l) => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("")}
        </div>
        <button class="menu-btn" type="button" aria-expanded="false">${esc(tr("menu"))}</button>
      </div>
      <nav class="site-nav" aria-label="Main">
        ${PAGES.map(([k, f]) => `<a href="${f}"${k === page ? ' aria-current="page"' : ""}>${esc(tr("nav_" + k))}</a>`).join("")}
      </nav>`;
    head.querySelectorAll("[data-lang]").forEach((b) =>
      b.addEventListener("click", () => {
        try { localStorage.setItem("hfp-lang", b.dataset.lang); } catch (e) { /* ignore */ }
        const u = new URL(location.href);
        u.searchParams.set("lang", b.dataset.lang);
        location.href = u.toString();
      }));
    const nav = head.querySelector(".site-nav"), mb = head.querySelector(".menu-btn");
    mb.addEventListener("click", () => { nav.classList.toggle("open"); mb.setAttribute("aria-expanded", nav.classList.contains("open")); });

    const foot = document.getElementById("site-footer");
    foot.className = "site-footer";
    const support = H.config.donateUrl
      ? `<a class="support-link" href="${H.config.donateUrl}" target="_blank" rel="noopener">☕ ${esc(tr("support_link"))}</a>`
      : `<a class="support-link" href="credits.html#support">☕ ${esc(tr("support_link"))}</a>`;
    const band = `<div class="support-band"><div class="wrap"><p>${esc(tr("support_band"))}</p>
      <a class="btn kofi" href="${H.config.donateUrl || "credits.html#support"}"${H.config.donateUrl ? ' target="_blank" rel="noopener"' : ""}>☕ ${esc(tr("support_btn"))} · ${esc(H.config.donateLabel)}</a></div></div>`;
    foot.innerHTML = band + `<div class="wrap"><span>${esc(H.config.siteName)} · ${esc(tr("footer"))}</span>
      <span class="footer-links">${support}<a href="contact.html">${esc(tr("nav_contact"))}</a></span></div>`;
    document.title = (page === "home" ? "" : tr("nav_" + page) + " · ") + H.config.siteName;
  }

  const pageHead = (kicker, title, intro) =>
    `<header class="page-head">${kicker ? `<div class="kicker">${esc(kicker)}</div>` : ""}<h1>${esc(title)}</h1>${intro ? `<p>${esc(intro)}</p>` : ""}</header>`;

  /* ---------------- List pages ---------------- */
  function entriesOf(type) {
    const list = {
      flutes: H.flutes,
      makers: H.people.filter((p) => p.roles.includes("maker")),
      flutists: H.people.filter((p) => p.roles.includes("flutist")),
      treatises: H.treatises,
      repertoire: H.repertoire
    }[type];
    return list.slice().sort((a, b) => a.start - b.start);
  }

  function metaOf(e, type) {
    if (type === "flutes") return [yearSpan(e), e.origin];
    if (type === "makers" || type === "flutists") return [e.dates, e.place];
    if (type === "treatises") return [e.authorName || (e.author && index[e.author] ? index[e.author].e.name : ""), String(e.start), e.place];
    if (type === "repertoire") return [e.composer, e.dates, e.scoring];
    return [];
  }

  function facts(rows) {
    return `<dl class="facts">${rows.filter((r) => r[1]).map(([k, v]) => `<dt>${esc(tr(k))}</dt><dd>${v}</dd>`).join("")}</dl>`;
  }

  // "Possible repertoire" / "Playable on" come only from repertoire.flutes, never from text mentions.
  const playable = (pieceId, fluteId) => (index[pieceId].e.flutes || []).includes(fluteId);
  function relatedHTML(e, type, skip) {
    const groups = {};
    [...graph[e.id]].filter((id) => !skip.has(id))
      .filter((id) => !(type === "flutes" && index[id].type === "repertoire" && !playable(id, e.id)))
      .filter((id) => !(type === "repertoire" && index[id].type === "flutes"))
      .sort(byStart).forEach((id) => {
      (groups[index[id].type] = groups[index[id].type] || []).push(id);
    });
    const blocks = TYPES.filter((t) => groups[t]).map((t) => {
      const label = t === "repertoire" && type === "flutes" ? tr("rel_repertoire_flute") : tr("rel_" + t);
      return `<div><h4>${esc(label)}</h4><div class="chips">${groups[t].map(chip).join("")}</div></div>`;
    });
    return blocks.length ? `<div class="related">${blocks.join("")}</div>` : "";
  }

  function entryHTML(e, type) {
    const color = `var(--c-${type})`;
    let figure = "", aside = "", main = "";
    const skip = new Set();
    const notes = newNotes(e.id);
    const kids = (type === "repertoire" && groups[e.id]) || []; // works folded inside this entry

    if (type === "flutes") {
      // prehistoric finds have no schematic drawing (drawing: null): the photograph stands alone
      figure = (e.image ? photo(e.image, "figure-wide") : "") +
        (e.drawing ? `<figure class="entry-figure figure-wide">${H.illus.flute(e.drawing, { label: e.name })}<figcaption>${esc(tr("drawing_note"))}</figcaption></figure>` : "");
      aside = facts([["period", esc(yearSpan(e))], ["origin", esc(e.origin)]]) +
        `<h4 class="sans small muted" style="margin:0 0 4px;letter-spacing:.1em;text-transform:uppercase;font-size:.72rem">${esc(tr("features"))}</h4>` +
        `<ul class="features">${(e.features || []).map((f) => `<li>${inline(loc(f))}</li>`).join("")}</ul>`;
      main = paras(loc(e.description), notes);
    } else if (type === "makers" || type === "flutists") {
      // a long instrument photo (image.wide) goes full width above the text; portraits stay in the side column
      if (e.image && e.image.wide) figure = photo(e.image, "figure-wide");
      aside = (e.image && !e.image.wide ? photo(e.image) : `<figure class="entry-figure">${H.illus.portrait(e.name, color)}</figure>`) +
        facts([["life", esc(e.dates)], ["place", esc(e.place)], ["roles", e.roles.map((r) => esc(tr("role_" + r))).join(", ")]]);
      main = paras(loc(e.bio), notes);
    } else if (type === "treatises") {
      const authorName = e.authorName || (e.author ? index[e.author].e.name : "");
      aside = (e.image ? photo(e.image) : `<figure class="entry-figure">${H.illus.titlePage(e.name, authorName, e.place.replace(/\s*\(.*\)/, ""), String(e.start))}</figure>`) +
        facts([["author", e.author ? `<a class="xref t-${index[e.author].type}" href="${href(e.author)}">${esc(authorName)}</a>` : esc(authorName)],
               ["year", esc(e.start)], ["place", esc(e.place)], ["language", esc(e.language)]]);
      main = paras(loc(e.description), notes) +
        `<h4 class="sans small muted" style="margin:0 0 4px;letter-spacing:.1em;text-transform:uppercase;font-size:.72rem">${esc(tr("contents"))}</h4>` +
        `<ul class="features">${(e.contents || []).map((c) => `<li>${inline(loc(c))}</li>`).join("")}</ul>`;
    } else if (type === "repertoire") {
      (e.flutes || []).forEach((f) => skip.add(f));
      kids.forEach((k) => skip.add(k.id)); // the folded works appear as drop-downs, not as chips
      aside = photo(e.image) + facts([["composer", esc(e.composer)], ["date", esc(e.dates)], ["place", esc(e.place)], ["scoring", esc(e.scoring)], ["kind", esc(tr("kind_" + e.kind))]]) +
        `<div class="related"><div><h4>${esc(tr("playable_on"))}</h4><div class="chips">${(e.flutes || []).map(chip).join("")}</div></div></div>`;
      main = paras(loc(e.description), notes) +
        (kids.length ? `<div class="subentries"><h4>${esc(tr("group_works").replace("{n}", kids.length))}</h4>${kids.map((k) => entryHTML(k, "repertoire")).join("")}</div>` : "");
    }

    if (e.tips) main += `<div class="box box-tips"><h4>${esc(tr("tips"))}</h4>${paras(loc(e.tips), notes)}</div>`;
    if (e.curio) main += `<div class="box box-curio"><h4>${esc(tr("did_you_know"))}</h4>${paras(loc(e.curio), notes)}</div>`;
    main += refsHTML(notes);
    main += relatedHTML(e, type, skip);
    // recordings on the Historical Recordings page that bear on this piece (ids of recordings.js entries)
    const recIds = (e.recordings || []).filter((id) => recs[id]);
    if (recIds.length) main += `<div class="related"><div><h4>${esc(tr("rec_hear"))}</h4><div class="chips">${recIds.map(recChip).join("")}</div></div></div>`;

    const links = [];
    (e.sources || []).forEach((s) => links.push(ext(s.url, s.label)));
    if (e.wiki) links.push(ext(wikiUrl(e.wiki), tr("wiki")));
    if (e.imslp) links.push(ext(imslpUrl(e.imslp), type === "treatises" ? tr("imslp_t") : type === "repertoire" ? tr("imslp") : "IMSLP"));
    if (e.listen) links.push(ext(listenUrl(e.listen), tr("listen")));
    const recEntry = type === "flutists" && (H.recordings || []).find((r) => r.person === e.id);
    if (recEntry) links.unshift(`<a href="recordings.html#${recEntry.id}">♪ ${esc(tr("rec_hear"))}</a>`);
    if (links.length) main += `<div class="related"><div><h4>${esc(tr("further"))}</h4><div class="small sans" style="display:flex;flex-wrap:wrap;gap:6px 16px">${links.join("")}</div></div></div>`;

    const actions = `<div class="entry-actions">
        <a href="map.html?focus=${e.id}">◎ ${esc(tr("show_on_map"))}</a>
        <a href="contact.html?entry=${e.id}">✎ ${esc(tr("suggest_edit"))}</a></div>`;

    const title = esc(e.name);
    const meta = metaOf(e, type).filter(Boolean).map((m, i) => (i === 0 && type === "repertoire" ? `<strong>${esc(m)}</strong>` : esc(m))).join("<span aria-hidden='true'>·</span>");
    const searchOf = (x) => [x.name, x.short, x.composer, x.place, x.origin, x.authorName, loc(x.tagline)].filter(Boolean).join(" ").toLowerCase();
    // a head entry is found by its own text (data-own) or by that of the works folded inside it
    const search = searchOf(e) + kids.map((k) => " " + searchOf(k)).join("");

    return `<details class="entry" id="${e.id}" data-type="${type}" data-search="${esc(search)}"${kids.length ? ` data-own="${esc(searchOf(e))}"` : ""}>
      <summary>
        <span class="entry-title">${title}</span>
        <span class="chev" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></span>
        <span class="entry-meta">${meta}</span>
        ${e.tagline ? `<span class="entry-tagline">${inline(loc(e.tagline))}</span>` : ""}
      </summary>
      <div class="entry-body">
        <div class="entry-grid">${figure}<aside>${aside}</aside><div>${main}</div></div>
        ${actions}
      </div>
    </details>`;
  }

  function renderList(type, app) {
    const list = entriesOf(type).filter((e) => !(e.group && groups[e.group])); // folded works live inside their head entry
    let html = "", lastEra = null;
    list.forEach((e) => {
      const era = eraOf(e.start);
      if (era !== lastEra) {
        html += `<div class="era" data-era="${era.id}"><h2>${esc(era.label[lang] || era.label.en)}</h2></div>`;
        lastEra = era;
      }
      html += entryHTML(e, type);
    });
    app.innerHTML = `<div class="wrap">
      ${pageHead(null, tr("nav_" + type), tr("intro_" + type))}
      <div class="toolbar"><input type="search" placeholder="${esc(tr("search"))}" aria-label="${esc(tr("search"))}"></div>
      <div id="list">${html}</div>
      <p class="muted" id="noresults" hidden>${esc(tr("no_results"))}</p>
    </div>`;
    wireList(app);
  }

  // Search box, era headings and open-from-link behaviour shared by every list page.
  function wireList(app) {
    const input = app.querySelector("input[type=search]");
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      let any = false;
      app.querySelectorAll("#list > *").forEach((el) => {
        if (el.classList.contains("entry")) {
          const ok = !q || el.dataset.search.includes(q);
          el.hidden = !ok; any = any || ok;
        }
      });
      // folded groups: show the works that match (all of them when the head entry itself matches);
      // a match inside a group opens it
      app.querySelectorAll("#list > .entry[data-own]").forEach((head) => {
        const ownHit = !q || head.dataset.own.includes(q);
        let hit = false;
        head.querySelectorAll(".subentries > .entry").forEach((s) => {
          const ok = ownHit || s.dataset.search.includes(q);
          s.hidden = !ok; hit = hit || ok;
        });
        if (q && !ownHit && hit) head.open = true;
      });
      // hide era headings with no visible entries
      app.querySelectorAll(".era").forEach((h) => {
        let n = h.nextElementSibling, vis = false;
        while (n && !n.classList.contains("era")) { if (!n.hidden) vis = true; n = n.nextElementSibling; }
        h.hidden = !vis;
      });
      app.querySelector("#noresults").hidden = any;
    });

    app.querySelectorAll("details.entry").forEach((d) =>
      d.addEventListener("toggle", () => { if (d.open) history.replaceState(null, "", "#" + d.id); }));
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
  }

  function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === "DETAILS") {
      // a work folded inside another entry: open the outer entries first, so the work's own toggle sets the address
      const outer = [];
      for (let p = el.parentElement && el.parentElement.closest("details"); p; p = p.parentElement && p.parentElement.closest("details")) outer.unshift(p);
      outer.forEach((p) => (p.open = true));
      el.open = true;
      el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
    } else {
      // e.g. a reference note (#entry-ref-2) inside a closed entry
      for (let d = el.closest("details"); d; d = d.parentElement && d.parentElement.closest("details")) d.open = true;
      el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
    }
    setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }

  /* ---------------- Historical recordings ---------------- */
  // Tracks stored on this site have `file`; the others play from the archive that holds them (`ia: [item, file]` or `src`).
  const trackSrc = (tk) => tk.file || tk.src || `https://archive.org/download/${tk.ia[0]}/${encodeURIComponent(tk.ia[1])}`;
  const recChip = (id) => index[id] ? chip(id)
    : `<a class="chip t-recordings" href="recordings.html#${id}">${esc(recs[id].name)}</a>`;
  const recYears = (r) => {
    const ys = r.tracks.flatMap((tk) => (String(tk.when).match(/\b1[89]\d\d\b/g) || []).map(Number));
    if (!ys.length) return "";   // undated discs
    const [a, b] = [Math.min(...ys), Math.max(...ys)];
    return a === b ? String(a) : `${a}–${b}`;
  };

  function trackHTML(tk) {
    const hosted = !!tk.file;
    // edition details (label, number, matrix, side) stay out of sight until asked for
    const detail = [tk.label, tk.matrix ? `${tr("rec_matrix")} ${tk.matrix}` : "", tk.disc].filter(Boolean).map(esc).join(" · ");
    const links = (tk.links || []).map(([label, url]) => ext(url, label)).join(" · ");
    const badge = hosted ? tr("rec_on_site") : `${tr("rec_streams")} ${tk.host || "Internet Archive"}`;
    return `<li class="track">
      <div class="track-title">${esc(tk.title)}</div>
      ${tk.by ? `<div class="track-by">${esc(tk.by)}</div>` : ""}
      <div class="track-meta">${esc(tk.when || "")}</div>
      <audio controls preload="none"><source src="${trackSrc(tk)}" type="${hosted ? "audio/mp4" : "audio/mpeg"}"></audio>
      <div class="track-foot"><span class="track-badge ${hosted ? "on-site" : "stream"}">${esc(badge)}</span>
        <details class="track-disc"><summary>${esc(tr("rec_disc"))}</summary>
          <div>${detail ? esc(detail) + "<br>" : ""}${esc(tk.from || "")}${links ? " · " + links : ""}</div></details></div>
    </li>`;
  }

  function recordingHTML(r) {
    const notes = newNotes(r.id);
    const aside = facts([["life", esc(r.dates)], ["place", esc(r.place)], ["rec_recorded", esc(recYears(r))]]) +
      (r.person && index[r.person] ? `<div class="related"><div><h4>${esc(tr("nav_flutists"))}</h4><div class="chips">${chip(r.person)}</div></div></div>` : "");
    let main = paras(loc(r.bio), notes);
    if (r.listen) main += `<div class="box box-tips"><h4>${esc(tr("rec_listen_for"))}</h4>${paras(loc(r.listen), notes)}</div>`;
    main += `<h4 class="sans small muted" style="margin:18px 0 6px;letter-spacing:.1em;text-transform:uppercase;font-size:.72rem">${esc(tr("rec_tracks"))} (${r.tracks.length})</h4>
      <ol class="tracks">${r.tracks.map(trackHTML).join("")}</ol>`;
    main += refsHTML(notes);
    if ((r.links || []).length) main += `<div class="related"><div><h4>${esc(tr("related"))}</h4><div class="chips">${r.links.filter((id) => index[id] || recs[id]).map(recChip).join("")}</div></div></div>`;

    const meta = [r.dates, r.place, recYears(r) ? "♪ " + recYears(r) : ""].filter(Boolean).map(esc).join("<span aria-hidden='true'>·</span>");
    const search = [r.name, r.place, loc(r.tagline), ...r.tracks.map((tk) => tk.title + " " + (tk.by || ""))].join(" ").toLowerCase();
    return `<details class="entry" id="${r.id}" data-type="recordings" data-search="${esc(search)}">
      <summary>
        <span class="entry-title">${esc(r.name)}</span>
        <span class="chev" aria-hidden="true"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></span>
        <span class="entry-meta">${meta}</span>
        <span class="entry-tagline">${inline(loc(r.tagline))}</span>
      </summary>
      <div class="entry-body">
        <div class="entry-grid"><aside>${aside}</aside><div>${main}</div></div>
        <div class="entry-actions"><a href="contact.html?entry=${r.id}">✎ ${esc(tr("suggest_edit"))}</a></div>
      </div>
    </details>`;
  }

  function renderRecordings(app) {
    const X = H.recordingsExtra || {};
    let html = "", last = null;
    H.recordings.slice().sort((a, b) => a.start - b.start).forEach((r) => {
      const era = r.start < 1925 ? "acoustic" : "electric";
      if (era !== last) { html += `<div class="era"><h2>${esc(tr("rec_era_" + era))}</h2></div>`; last = era; }
      html += recordingHTML(r);
    });
    const notes = newNotes("rec-extra");
    // pieces worth hearing that this page does not play: text plus a link to where they can be heard
    const wanted = (X.unavailable || []).map((o) => `<li>${inline(loc(o.text), notes)} ${(o.links || []).map(([label, url]) => ext(url, label)).join(" · ")}</li>`).join("");
    app.innerHTML = `<div class="wrap">
      ${pageHead(null, tr("nav_recordings"), tr("intro_recordings"))}
      <section class="box box-curio" style="max-width:760px"><h4>${esc(tr("rec_note_title"))}</h4><p>${esc(tr("rec_note"))}</p></section>
      <div class="toolbar"><input type="search" placeholder="${esc(tr("search"))}" aria-label="${esc(tr("search"))}"></div>
      <div id="list">${html}</div>
      <p class="muted" id="noresults" hidden>${esc(tr("no_results"))}</p>
      <section id="unavailable" style="max-width:760px;margin-top:36px">
        ${wanted ? `<h2>${esc(tr("rec_unavailable"))}</h2><ul>${wanted}</ul>${refsHTML(notes)}` : ""}
        <h4 class="sans small muted" style="margin:24px 0 6px;letter-spacing:.1em;text-transform:uppercase;font-size:.72rem">${esc(tr("rec_further"))}</h4>
        <ul class="biblio small">${(X.further || []).map((k) => `<li>${fullCite(k)}</li>`).join("")}</ul>
      </section>
    </div>`;
    wireList(app);
  }

  /* ---------------- Home ---------------- */
  function renderHome(app) {
    const stack = [["renaissance-flute", "1500"], ["hotteterre-flute", "1680"], ["classical-keyed-flute", "1790"], ["boehm-1847", "1847"]];
    const art = stack.map(([id, y]) => `<a href="${href(id)}" style="display:grid;grid-template-columns:44px 1fr;align-items:center;gap:6px;text-decoration:none;color:var(--muted)" title="${esc(index[id].e.name)}"><span class="sans small">${y}</span>${H.illus.flute(index[id].e.drawing, { label: index[id].e.name })}</a>`).join("");

    const cards = [["history", null, H.history.length], ["playing", null, H.playing.length]].concat(TYPES.map((t) => [t, t, entriesOf(t).length])).concat([["recordings", "recordings", (H.recordings || []).length], ["map", null, null]]);
    const curios = Object.values(index).filter(({ e }) => e.curio);

    app.innerHTML = `<div class="wrap">
      <section class="hero">
        <div>
          <h1>${esc(tr("home_title"))}</h1>
          <p class="lede">${esc(tr("home_lede"))}</p>
          <p style="display:flex;flex-wrap:wrap;gap:10px"><a class="btn" href="map.html">${esc(tr("home_map_cta"))}</a><a class="btn secondary" href="history.html">${esc(tr("home_history_cta"))}</a></p>
        </div>
        <div class="hero-art">${art}</div>
      </section>
      <section class="motivation"><p>${esc(tr("home_p1"))}</p><p>${esc(tr("home_p2"))}</p></section>
      <h2 style="margin-top:32px">${esc(tr("home_explore"))}</h2>
      <div class="cards">${cards.map(([k, t, n]) => `
        <a class="card" href="${PAGE_FILE[k]}" style="${t ? `--type-color:var(--c-${t})` : ""}">
          <h3>${esc(tr("nav_" + k))}</h3><p>${esc(tr("intro_" + k))}</p></a>`).join("")}
      </div>
      <section class="box box-curio" id="curio" style="max-width:720px"></section>
    </div>`;

    const box = app.querySelector("#curio");
    let i = Math.floor(Math.random() * curios.length);
    const show = () => {
      const { e } = curios[i % curios.length];
      box.innerHTML = `<h4>${esc(tr("did_you_know"))}</h4>${paras(loc(e.curio))}
        <p class="sans small" style="display:flex;gap:16px;flex-wrap:wrap">${chip(e.id)}<button type="button" class="chip" id="next-curio">${esc(tr("another"))} ↻</button></p>`;
      box.querySelector("#next-curio").addEventListener("click", () => { i++; show(); });
    };
    show();
  }

  /* ---------------- History ---------------- */
  function renderHistory(app, list, key) {
    list = list || H.history; key = key || "history";
    app.innerHTML = `<div class="wrap">
      ${pageHead(null, tr("nav_" + key), tr("intro_" + key))}
      <nav class="history-toc">${list.map((c) => `<a href="#${c.id}">${esc(loc(c.title))}</a>`).join("")}</nav>
      ${list.map((c) => {
        const ids = [...new Set(refsIn(c.body))].filter((id) => index[id]).sort(byStart);
        const notes = newNotes(c.id);
        const body = paras(loc(c.body), notes);
        return `<section class="chapter" id="${c.id}">
          <div class="dates">${esc(c.dates)}</div><h2>${esc(loc(c.title))}</h2>
          ${c.image ? photo(c.image, "chapter-photo") : ""}
          ${body}
          ${refsHTML(notes)}
          <div class="chips">${ids.map(chip).join("")}</div>
        </section>`;
      }).join("")}
    </div>`;
    openFromHash();
  }

  /* ---------------- Contact & suggestions ---------------- */
  function renderContact(app) {
    const params = new URLSearchParams(location.search);
    const pre = params.get("entry");
    const options = TYPES.map((t) => `<optgroup label="${esc(tr("nav_" + t))}">${entriesOf(t)
      .filter((e) => index[e.id].type === t)
      .map((e) => `<option value="${e.id}"${e.id === pre ? " selected" : ""}>${esc(nameOf(e.id))}</option>`).join("")}</optgroup>`).join("");
    const recOptions = `<optgroup label="${esc(tr("nav_recordings"))}">${(H.recordings || [])
      .map((r) => `<option value="${r.id}"${r.id === pre ? " selected" : ""}>${esc(r.name)}</option>`).join("")}</optgroup>`;

    app.innerHTML = `<div class="wrap">
      ${pageHead(null, tr("nav_contact"), tr("intro_contact"))}
      <form class="form" id="suggest">
        <div class="row2">
          <label><span>${esc(tr("f_name"))}</span><input name="name" autocomplete="name"></label>
          <label><span>${esc(tr("f_email"))}</span><input name="email" type="email" autocomplete="email"></label>
        </div>
        <div class="row2">
          <label><span>${esc(tr("f_type"))}</span>
            <select name="type">
              <option value="new">${esc(tr("t_new"))}</option>
              <option value="correction"${pre ? " selected" : ""}>${esc(tr("t_correction"))}</option>
              <option value="source">${esc(tr("t_source"))}</option>
              <option value="other">${esc(tr("t_other"))}</option>
            </select></label>
          <label><span>${esc(tr("f_entry"))}</span>
            <select name="entry"><option value="">${esc(tr("f_entry_none"))}</option>${options}${recOptions}</select></label>
        </div>
        <label><span>${esc(tr("f_message"))}</span><textarea name="message" required placeholder="${esc(tr("f_message_ph"))}"></textarea></label>
        <div><button class="btn" type="submit">${esc(tr("f_send"))}</button></div>
        <p class="muted small">${esc(tr("f_note"))}</p>
      </form>
    </div>`;

    app.querySelector("#suggest").addEventListener("submit", (ev) => {
      ev.preventDefault();
      const f = new FormData(ev.target);
      const typeLabel = ev.target.type.options[ev.target.type.selectedIndex].text;
      const entry = f.get("entry");
      const subject = `[${H.config.siteName}] ${typeLabel}${entry ? ": " + nameOf(entry) : ""}`;
      const body = [
        `${tr("f_type")}: ${typeLabel}`,
        entry ? `${tr("f_entry")}: ${nameOf(entry)} (${location.origin}${location.pathname.replace(/[^/]*$/, "")}${href(entry)})` : "",
        `${tr("f_name")}: ${f.get("name") || "-"}`,
        `${tr("f_email")}: ${f.get("email") || "-"}`,
        "",
        f.get("message")
      ].filter((l) => l !== null).join("\n");
      location.href = `mailto:${H.config.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  /* ---------------- Credits ---------------- */
  function renderCredits(app) {
    const C = H.credits;
    app.innerHTML = `<div class="wrap">
      ${pageHead(null, tr("nav_credits"), tr("intro_credits"))}
      <div class="credits">
        <figure class="entry-figure credits-photo">${C.photo
          ? `<img src="${C.photo}" alt="${esc(C.name)}" width="640" height="960" loading="lazy">`
          : H.illus.portrait(C.name, "var(--accent)")}</figure>
        <div>
          <h2>${esc(C.name)}</h2>
          ${paras(loc(C.bio))}
          ${C.website ? `<p class="sans"><a class="btn secondary" href="${C.website}" target="_blank" rel="noopener">${esc(tr("credits_website"))}: ${esc(C.website.replace(/^https?:\/\/(www\.)?/, ""))} ↗</a></p>` : ""}
          <h3>${esc(tr("credits_about"))}</h3>
          <p>${esc(loc(C.about))}</p>
          <h3>${esc(tr("credits_instruments"))}</h3>
          <div class="chips" style="margin-bottom:1.5em">${C.instruments.map(chip).join("")}</div>
          <h3>${esc(tr("credits_sources"))}</h3>
          <p class="small">${esc(loc(C.sourcesText))}</p>
          <section class="box box-tips support-box" id="support">
            <h3>☕ ${esc(tr("support_title"))}</h3>
            <p>${esc(tr("support_text"))}</p>
            ${H.config.donateUrl
              ? `<p><a class="btn" href="${H.config.donateUrl}" target="_blank" rel="noopener">${esc(tr("support_btn"))} · ${esc(H.config.donateLabel)} ↗</a></p>`
              : `<p class="small muted sans">${esc(tr("support_soon"))}</p>`}
          </section>
        </div>
      </div>
    </div>`;
  }


  /* ---------------- Sources ---------------- */
  // Every text-bearing unit of the site: entries, history chapters and "How they played" chapters.
  function textUnits() {
    const units = Object.values(index).map(({ e, type }) => ({
      id: e.id, start: e.start || 0, chip: chip(e.id),
      texts: ["description", "bio", "tips", "curio", "body"].map((f) => loc(e[f])).filter(Boolean)
    }));
    [["history", H.history], ["playing", H.playing]].forEach(([key, list]) => (list || []).forEach((c) => units.push({
      id: c.id, start: 0, chip: `<a class="chip" href="${key}.html#${c.id}">${esc(loc(c.title))}</a>`, texts: [loc(c.body)]
    })));
    (H.recordings || []).forEach((r) => units.push({
      id: r.id, start: r.start, chip: `<a class="chip t-recordings" href="recordings.html#${r.id}">${esc(r.name)}</a>`, texts: [loc(r.bio), loc(r.listen)].filter(Boolean)
    }));
    if (H.recordingsExtra && (H.recordingsExtra.unavailable || []).length) units.push({
      id: "rec-extra", start: 9999, chip: `<a class="chip t-recordings" href="recordings.html#unavailable">${esc(tr("rec_unavailable"))}</a>`, texts: (H.recordingsExtra.unavailable || []).map((o) => loc(o.text))
    });
    return units;
  }

  function renderSources(app) {
    const h2 = (t, id) => `<h2${id ? ` id="${id}"` : ""} style="margin-top:36px">${esc(t)}</h2>`;
    const units = textUnits();
    const citedIn = {};   // source key -> set of unit chips
    const needs = [];     // units with a {{?}} marker
    const uncited = [];   // units with no citation at all
    units.forEach((u) => {
      const cs = u.texts.flatMap(citesIn);
      cs.forEach((c) => { if (c.key !== "?") (citedIn[c.key] = citedIn[c.key] || new Map()).set(u.id, u.chip); });
      if (cs.some((c) => c.key === "?")) needs.push(u);
      else if (!cs.length) uncited.push(u);
    });
    const used = (key) => citedIn[key] ? `<div class="chips" style="margin-top:4px"><span class="small muted sans">${esc(tr("src_used_in"))} (${citedIn[key].size}):</span>${[...citedIn[key].values()].join("")}</div>` : "";
    const bibList = (kind) => Object.keys(H.bib).filter((k) => H.bib[k].kind === kind)
      .sort((a, b) => (citedIn[b] ? citedIn[b].size : 0) - (citedIn[a] ? citedIn[a].size : 0))
      .map((k) => `<li id="src-${k}" style="margin-bottom:14px">${fullCite(k)}
        ${H.bib[k].note ? `<div class="small muted">${esc(loc(H.bib[k].note))}</div>` : ""}${used(k)}</li>`).join("");

    const treatises = entriesOf("treatises").map((e) => {
      const author = e.authorName || (e.author ? index[e.author].e.name : "");
      return `<li>${esc(author)}, <a class="xref t-treatises" href="${href(e.id)}"><em>${esc(e.name)}</em></a> (${esc(e.place)}, ${e.start})</li>`;
    }).join("");

    // web pages linked from the entries for further reading, merged by URL
    const byUrl = new Map();
    Object.values(index).forEach(({ e }) => (e.sources || []).forEach((src) => {
      if (!byUrl.has(src.url)) byUrl.set(src.url, { label: src.label, url: src.url, ids: [] });
      byUrl.get(src.url).ids.push(e.id);
    }));
    const pages = [...byUrl.values()].sort((a, b) => a.label.localeCompare(b.label)).map((src) =>
      `<li style="margin-bottom:8px"><a href="${src.url}" target="_blank" rel="noopener">${esc(src.label)} ↗</a>
        <span class="chips" style="margin-left:6px">${src.ids.sort(byStart).map(chip).join("")}</span></li>`).join("");

    const toCheck = Object.keys(H.bib).filter((k) => H.bib[k].verify && citedIn[k]).map((k) => `<li>${fullCite(k)}</li>`).join("");

    app.innerHTML = `<div class="wrap sources-page">
      ${pageHead(null, tr("nav_sources"), tr("intro_sources"))}
      <section class="box box-curio" style="max-width:760px"><h4>${esc(tr("src_method"))}</h4>${paras(tr("src_method_text"))}</section>
      ${h2(tr("src_secondary"), "secondary")}<ul class="biblio">${bibList("secondary")}</ul>
      ${h2(tr("src_primary"), "primary")}<p class="muted" style="max-width:760px">${esc(tr("src_primary_note"))}</p>
      <ul class="biblio">${bibList("primary")}</ul><ul style="max-width:760px">${treatises}</ul>
      ${h2(tr("src_online"), "online")}<p class="muted" style="max-width:760px">${esc(tr("src_online_note"))}</p>
      <ul class="biblio">${bibList("online")}</ul>
      <details style="max-width:760px"><summary class="sans small">${esc(tr("src_pages"))}</summary><ul class="small">${pages}</ul></details>
      ${h2(tr("src_verify"), "verify")}<p class="muted" style="max-width:760px">${esc(tr("src_verify_note"))}</p>
      ${needs.length ? `<h4>${esc(tr("src_needs"))}</h4><div class="chips">${needs.map((u) => u.chip).join("")}</div>` : ""}
      ${uncited.length ? `<h4>${esc(tr("src_uncited"))}</h4><div class="chips">${uncited.map((u) => u.chip).join("")}</div>` : ""}
      ${toCheck ? `<h4>${esc(tr("src_pages_pending"))}</h4><ul class="small">${toCheck}</ul>` : ""}
    </div>`;
    openFromHash();
  }

  /* ---------------- Boot ---------------- */
  const page = document.body.dataset.page;
  renderChrome(page);
  const app = document.getElementById("app");
  if (page === "home") renderHome(app);
  else if (page === "history") renderHistory(app);
  else if (page === "playing") renderHistory(app, H.playing, "playing");
  else if (TYPES.includes(page)) renderList(page, app);
  else if (page === "map") H.renderMap(app, { index, graph, href, nameOf, tr, loc, esc, lanesOf, TYPES, pageHead, yearSpan, imslpUrl, eraLabel: (er) => er.label[lang] || er.label.en });
  else if (page === "sources") renderSources(app);
  else if (page === "contact") renderContact(app);
  else if (page === "recordings") renderRecordings(app);
  else if (page === "credits") { renderCredits(app); openFromHash(); }

  if (usedFallback && lang !== "en") {
    const head = app.querySelector(".page-head, .hero");
    if (head) head.insertAdjacentHTML("afterend", `<p class="fallback-note">${esc(tr("fallback"))}</p>`);
  }
})();
