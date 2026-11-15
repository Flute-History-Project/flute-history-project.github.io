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
    ["repertoire", "repertoire.html"], ["map", "map.html"], ["sources", "sources.html"], ["contact", "contact.html"], ["credits", "credits.html"]
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

  const lanesOf = (id) => {
    const { e, type } = index[id];
    return e.roles ? e.roles.map((r) => (r === "maker" ? "makers" : "flutists")) : [type];
  };
  const href = (id) => (index[id] ? PAGE_FILE[index[id].type] + "#" + id : "#");
  const nameOf = (id) => { const e = index[id].e; return e.short || e.name; };

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
  function inline(s) {
    return esc(s)
      .replace(REF, (m, id, label) => {
        const it = index[id];
        if (!it) return label || id;
        return `<a class="xref t-${it.type}" href="${href(id)}">${label || esc(nameOf(id))}</a>`;
      })
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }
  const paras = (s) => s.split(/\n\n+/).map((p) => `<p>${inline(p)}</p>`).join("");
  const chip = (id) => `<a class="chip t-${index[id].type}" href="${href(id)}">${esc(nameOf(id))}</a>`;
  const yearSpan = (e) => (e.end === undefined ? String(e.start) : `${e.start}–${e.end === null ? tr("present") : e.end}`);
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
    foot.innerHTML = `<div class="wrap"><span>${esc(H.config.siteName)} · ${esc(tr("footer"))}</span>
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

    if (type === "flutes") {
      figure = (e.image ? photo(e.image, "figure-wide") : "") +
        `<figure class="entry-figure figure-wide">${H.illus.flute(e.drawing, { label: e.name })}<figcaption>${esc(tr("drawing_note"))}</figcaption></figure>`;
      aside = facts([["period", esc(yearSpan(e))], ["origin", esc(e.origin)]]) +
        `<h4 class="sans small muted" style="margin:0 0 4px;letter-spacing:.1em;text-transform:uppercase;font-size:.72rem">${esc(tr("features"))}</h4>` +
        `<ul class="features">${(e.features || []).map((f) => `<li>${inline(loc(f))}</li>`).join("")}</ul>`;
      main = paras(loc(e.description));
    } else if (type === "makers" || type === "flutists") {
      // a long instrument photo (image.wide) goes full width above the text; portraits stay in the side column
      if (e.image && e.image.wide) figure = photo(e.image, "figure-wide");
      aside = (e.image && !e.image.wide ? photo(e.image) : `<figure class="entry-figure">${H.illus.portrait(e.name, color)}</figure>`) +
        facts([["life", esc(e.dates)], ["place", esc(e.place)], ["roles", e.roles.map((r) => esc(tr("role_" + r))).join(", ")]]);
      main = paras(loc(e.bio));
    } else if (type === "treatises") {
      const authorName = e.authorName || (e.author ? index[e.author].e.name : "");
      aside = (e.image ? photo(e.image) : `<figure class="entry-figure">${H.illus.titlePage(e.name, authorName, e.place.replace(/\s*\(.*\)/, ""), String(e.start))}</figure>`) +
        facts([["author", e.author ? `<a class="xref t-${index[e.author].type}" href="${href(e.author)}">${esc(authorName)}</a>` : esc(authorName)],
               ["year", esc(e.start)], ["place", esc(e.place)], ["language", esc(e.language)]]);
      main = paras(loc(e.description)) +
        `<h4 class="sans small muted" style="margin:0 0 4px;letter-spacing:.1em;text-transform:uppercase;font-size:.72rem">${esc(tr("contents"))}</h4>` +
        `<ul class="features">${(e.contents || []).map((c) => `<li>${inline(loc(c))}</li>`).join("")}</ul>`;
    } else if (type === "repertoire") {
      (e.flutes || []).forEach((f) => skip.add(f));
      aside = photo(e.image) + facts([["composer", esc(e.composer)], ["date", esc(e.dates)], ["place", esc(e.place)], ["scoring", esc(e.scoring)], ["kind", esc(tr("kind_" + e.kind))]]) +
        `<div class="related"><div><h4>${esc(tr("playable_on"))}</h4><div class="chips">${(e.flutes || []).map(chip).join("")}</div></div></div>`;
      main = paras(loc(e.description));
    }

    if (e.tips) main += `<div class="box box-tips"><h4>${esc(tr("tips"))}</h4>${paras(loc(e.tips))}</div>`;
    if (e.curio) main += `<div class="box box-curio"><h4>${esc(tr("did_you_know"))}</h4>${paras(loc(e.curio))}</div>`;
    main += relatedHTML(e, type, skip);

    const links = [];
    (e.sources || []).forEach((s) => links.push(ext(s.url, s.label)));
    if (e.wiki) links.push(ext(wikiUrl(e.wiki), tr("wiki")));
    if (e.imslp) links.push(ext(imslpUrl(e.imslp), type === "treatises" ? tr("imslp_t") : type === "repertoire" ? tr("imslp") : "IMSLP"));
    if (e.listen) links.push(ext(listenUrl(e.listen), tr("listen")));
    if (links.length) main += `<div class="related"><div><h4>${esc(tr("sources"))}</h4><div class="small sans" style="display:flex;flex-wrap:wrap;gap:6px 16px">${links.join("")}</div></div></div>`;

    const actions = `<div class="entry-actions">
        <a href="map.html?focus=${e.id}">◎ ${esc(tr("show_on_map"))}</a>
        <a href="contact.html?entry=${e.id}">✎ ${esc(tr("suggest_edit"))}</a></div>`;

    const title = esc(e.name);
    const meta = metaOf(e, type).filter(Boolean).map((m, i) => (i === 0 && type === "repertoire" ? `<strong>${esc(m)}</strong>` : esc(m))).join("<span aria-hidden='true'>·</span>");
    const search = [e.name, e.short, e.composer, e.place, e.origin, e.authorName, loc(e.tagline)].filter(Boolean).join(" ").toLowerCase();

    return `<details class="entry" id="${e.id}" data-type="${type}" data-search="${esc(search)}">
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
    const list = entriesOf(type);
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
      el.open = true;
      el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
    }
    setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
  }

  /* ---------------- Home ---------------- */
  function renderHome(app) {
    const stack = [["renaissance-flute", "1500"], ["hotteterre-flute", "1680"], ["classical-keyed-flute", "1790"], ["boehm-1847", "1847"]];
    const art = stack.map(([id, y]) => `<a href="${href(id)}" style="display:grid;grid-template-columns:44px 1fr;align-items:center;gap:6px;text-decoration:none;color:var(--muted)" title="${esc(index[id].e.name)}"><span class="sans small">${y}</span>${H.illus.flute(index[id].e.drawing, { label: index[id].e.name })}</a>`).join("");

    const cards = [["history", null, H.history.length], ["playing", null, H.playing.length]].concat(TYPES.map((t) => [t, t, entriesOf(t).length])).concat([["map", null, null]]);
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
        return `<section class="chapter" id="${c.id}">
          <div class="dates">${esc(c.dates)}</div><h2>${esc(loc(c.title))}</h2>
          ${c.image ? photo(c.image, "chapter-photo") : ""}
          ${paras(loc(c.body))}
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
            <select name="entry"><option value="">${esc(tr("f_entry_none"))}</option>${options}</select></label>
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
  function renderSources(app) {
    const h4 = (t) => `<h2 style="margin-top:36px">${esc(t)}</h2>`;
    const refs = (H.references || []).map((r) => `<li style="margin-bottom:12px">
        <a href="${r.url}" target="_blank" rel="noopener"><em>${esc(r.title)}</em> ↗</a>${r.author ? `, ${esc(r.author)}` : ""}${r.year ? `, ${esc(r.year)}` : ""}
        <div class="small muted">${esc(loc(r.note))}</div></li>`).join("");

    const treatises = entriesOf("treatises").map((e) => {
      const author = e.authorName || (e.author ? index[e.author].e.name : "");
      return `<li>${esc(author)}, <a class="xref t-treatises" href="${href(e.id)}"><em>${esc(e.name)}</em></a> (${esc(e.place)}, ${e.start})</li>`;
    }).join("");

    // every source cited in any entry, merged by URL, with the entries that use it
    const byUrl = new Map();
    Object.values(index).forEach(({ e }) => (e.sources || []).forEach((src) => {
      if (!byUrl.has(src.url)) byUrl.set(src.url, { label: src.label, url: src.url, ids: [] });
      byUrl.get(src.url).ids.push(e.id);
    }));
    const cited = [...byUrl.values()].sort((a, b) => a.label.localeCompare(b.label)).map((src) =>
      `<li style="margin-bottom:10px"><a href="${src.url}" target="_blank" rel="noopener">${esc(src.label)} ↗</a>
        <div class="chips" style="margin-top:4px"><span class="small muted sans">${esc(tr("src_used_in"))}:</span>${src.ids.sort(byStart).map(chip).join("")}</div></li>`).join("");

    const pending = Object.keys(index).filter((id) => !(index[id].e.sources || []).length).sort(byStart);

    app.innerHTML = `<div class="wrap">
      ${pageHead(null, tr("nav_sources"), tr("intro_sources"))}
      <section class="box box-curio" style="max-width:760px"><h4>${esc(tr("src_method"))}</h4><p>${esc(tr("src_method_text"))}</p></section>
      ${h4(tr("src_general"))}<ul style="max-width:760px">${refs}</ul>
      ${h4(tr("src_primary"))}<ul style="max-width:760px">${treatises}</ul>
      ${h4(tr("src_by_entry"))}<ul style="max-width:760px;padding-left:1.1em">${cited}</ul>
      ${pending.length ? `${h4(tr("src_pending"))}<p class="muted" style="max-width:760px">${esc(tr("src_pending_note"))}</p><div class="chips">${pending.map(chip).join("")}</div>` : ""}
    </div>`;
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
  else if (page === "credits") { renderCredits(app); openFromHash(); }

  if (usedFallback && lang !== "en") {
    const head = app.querySelector(".page-head, .hero");
    if (head) head.insertAdjacentHTML("afterend", `<p class="fallback-note">${esc(tr("fallback"))}</p>`);
  }
})();
