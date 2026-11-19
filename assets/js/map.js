/*
 * FLUTE MAP: every entry on one timeline, one lane per section.
 * Click an element to highlight its connections and hop between them.
 */
window.HFP = window.HFP || {};
HFP.renderMap = function (app, api) {
  "use strict";
  const { index, graph, href, nameOf, tr, loc, esc, lanesOf, TYPES, pageHead, yearSpan, imslpUrl, eraLabel } = api;
  const [Y0, Y1] = HFP.config.mapRange;
  const AXIS_H = 42, ROW_H = 26, LANE_PAD = 10, PAD_L = 16, PAD_R = 40;
  const state = { ppy: window.innerWidth < 600 ? 2.6 : 3.4, lanes: new Set(TYPES), sel: null, open: new Set() };

  // Collapsible groups: an entry with `group: "<head id>"` is hidden on the map until the head entry is opened
  // (e.g. the many Bach works hang under "Bach, Flute Sonatas"). groups[headId] = ids of the members.
  const groups = {};
  Object.keys(index).forEach((id) => {
    const g = index[id].e.group;
    if (g && index[g]) (groups[g] = groups[g] || []).push(id);
  });

  // one map item per (entry, lane): a person who is maker and flutist appears in both lanes
  const items = [];
  Object.keys(index).forEach((id) => {
    const e = index[id].e;
    if (e.start < Y0) return; // prehistoric and ancient entries sit before the map's range: they live on the Flutes page
    lanesOf(id).forEach((lane) => {
      const span = e.end !== undefined;
      items.push({ id, lane, start: e.start, end: span ? (e.end === null ? Y1 : Math.min(e.end, Y1)) : null, group: groups[e.group] ? e.group : null, head: groups[id] ? groups[id].length : 0, label: e.mapLabel || (e.roles ? e.name.replace(/\s*\(.*\)/, "").replace(/ family$/, "").split(" ").pop() : nameOf(id)) });
    });
  });
  const isHidden = (it) => it.group && !state.open.has(it.group);
  // the head of a group wears an arrow: ▸ + number of works when closed, ▾ when open
  const labelOf = (it) => it.head ? `${it.label} ${state.open.has(it.id) ? "▾" : "▸ " + it.head}` : it.label;
  function toggleGroup(id) { if (state.open.has(id)) state.open.delete(id); else state.open.add(id); draw(); }
  // opens the group a (possibly hidden) entry belongs to; true when the map has to be redrawn
  function revealGroupOf(id) {
    const g = index[id] && index[id].e.group;
    if (g && groups[g] && !state.open.has(g)) { state.open.add(g); return true; }
    return false;
  }

  app.innerHTML = `<div class="wrap" style="max-width:1200px">
    ${pageHead(null, tr("nav_map"), tr("intro_map"))}
    <div class="map-controls">
      <span class="muted">${esc(tr("map_lanes"))}:</span>
      <div class="lanes">${TYPES.map((t) => `<label class="lane-toggle" style="--lane-color:var(--c-${t})"><input type="checkbox" value="${t}" checked><span style="color:var(--c-${t})">●</span> ${esc(tr("nav_" + t))}</label>`).join("")}</div>
      <div class="zoom"><button type="button" data-z="-1" aria-label="${esc(tr("zoom_out"))}">−</button><button type="button" data-z="1" aria-label="${esc(tr("zoom_in"))}">+</button></div>
    </div>
    <div class="map-shell"><div class="map-lanes"></div><div class="map-scroll"></div></div>
    <div class="map-panel" aria-live="polite"></div>
  </div>`;

  const laneCol = app.querySelector(".map-lanes");
  const scroller = app.querySelector(".map-scroll");
  const panel = app.querySelector(".map-panel");
  let svg, X, positions;

  function draw() {
    X = (y) => PAD_L + (y - Y0) * state.ppy;
    const width = X(Y1) + PAD_R;
    const lanes = TYPES.filter((t) => state.lanes.has(t));
    positions = [];
    let y = AXIS_H, laneBoxes = [];

    lanes.forEach((lane) => {
      const its = items.filter((i) => i.lane === lane && !isHidden(i)).sort((a, b) => a.start - b.start);
      const rowEnd = [];
      its.forEach((it) => {
        const labelW = labelOf(it).length * 6.3 + 14;
        const x1 = X(it.start) - (it.end === null ? 6 : 0);
        const x2 = it.end !== null ? Math.max(X(it.end), X(it.start) + labelW) : X(it.start) + labelW;
        let r = rowEnd.findIndex((end) => end + 8 < x1);
        if (r === -1) { r = rowEnd.length; rowEnd.push(x2); } else rowEnd[r] = x2;
        positions.push({ ...it, row: r });
      });
      const h = Math.max(rowEnd.length, 1) * ROW_H + LANE_PAD * 2;
      positions.filter((p) => p.lane === lane).forEach((p) => (p.y = y + LANE_PAD + p.row * ROW_H + ROW_H / 2));
      laneBoxes.push({ lane, y, h });
      y += h;
    });
    const height = y + 8;

    const eras = HFP.eras.filter((er) => er.end > Y0 && er.start < Y1).map((er, i) => {
      const a = X(Math.max(er.start, Y0)), b = X(Math.min(er.end, Y1));
      return `<rect x="${a}" y="0" width="${b - a}" height="${height}" style="fill:${i % 2 ? "transparent" : "var(--paper-2)"}"/>
        <text x="${a + 6}" y="15" style="fill:var(--muted);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase">${esc(eraLabel(er))}</text>`;
    }).join("");
    let ticks = "";
    for (let yr = Math.ceil(Y0 / 50) * 50; yr <= Y1; yr += 50) {
      ticks += `<line x1="${X(yr)}" y1="${AXIS_H - 8}" x2="${X(yr)}" y2="${height}" style="stroke:var(--line)" stroke-dasharray="${yr % 100 ? "2 4" : "none"}"/>
        <text x="${X(yr) + 3}" y="${AXIS_H - 12}" style="fill:var(--muted);font-size:10.5px">${yr}</text>`;
    }
    const seps = laneBoxes.map((b) => `<line x1="0" x2="${width}" y1="${b.y}" y2="${b.y}" style="stroke:var(--line)"/>`).join("");
    const nodes = positions.map((p, i) => {
      const color = `var(--c-${p.lane})`;
      const x = X(p.start);
      const shape = p.end !== null
        ? `<rect x="${x}" y="${p.y - 9}" width="${Math.max(X(p.end) - x, 4)}" height="18" rx="4" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="1.2"/>
           <text x="${x + 6}" y="${p.y + 4}">${esc(p.label)}</text>`
        : `<circle cx="${x}" cy="${p.y}" r="5" fill="currentColor"/>${p.head ? `<circle cx="${x}" cy="${p.y}" r="8.5" fill="none" stroke="currentColor" stroke-width="1.2"/>` : ""}<text x="${x + (p.head ? 13 : 9)}" y="${p.y + 4}">${esc(labelOf(p))}</text>`;
      return `<g class="m-item" data-i="${i}" data-id="${p.id}" tabindex="0" role="button"${p.head ? ` aria-expanded="${state.open.has(p.id)}"` : ""} aria-label="${esc(index[p.id].e.name)}" style="color:${color}">${shape}</g>`;
    }).join("");

    scroller.innerHTML = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <g>${eras}${ticks}${seps}</g><g class="m-links"></g><g class="m-nodes">${nodes}</g></svg>`;
    svg = scroller.querySelector("svg");
    laneCol.innerHTML = `<div style="height:${AXIS_H}px;border-bottom:1px solid var(--line)"></div>` +
      laneBoxes.map((b) => `<div style="height:${b.h}px;--lane-color:var(--c-${b.lane})">${esc(tr("nav_" + b.lane))}</div>`).join("");

    // clicking the head of a group opens or closes it and selects it
    const activate = (id) => { if (groups[id]) toggleGroup(id); select(id); };
    svg.querySelectorAll(".m-item").forEach((g) => {
      g.addEventListener("click", (ev) => { ev.stopPropagation(); activate(g.dataset.id); });
      g.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); activate(g.dataset.id); } });
      g.addEventListener("mouseenter", () => { if (!state.sel) highlight(g.dataset.id); });
      g.addEventListener("mouseleave", () => { if (!state.sel) highlight(null); });
    });
    svg.addEventListener("click", () => select(null));
    if (state.sel) highlight(state.sel);
  }

  function anchor(p) {
    const x = p.end !== null ? Math.min(X(p.start) + 14, (X(p.start) + X(p.end)) / 2) : X(p.start);
    return [x, p.y];
  }

  function highlight(id) {
    const linkLayer = svg.querySelector(".m-links");
    linkLayer.innerHTML = "";
    svg.classList.toggle("m-dim", !!id);
    svg.querySelectorAll(".m-item").forEach((g) => g.classList.remove("on", "sel"));
    if (!id) return;
    const near = graph[id];
    svg.querySelectorAll(".m-item").forEach((g) => {
      if (g.dataset.id === id) g.classList.add("on", "sel");
      else if (near.has(g.dataset.id)) g.classList.add("on");
    });
    const from = positions.filter((p) => p.id === id);
    let paths = "";
    from.forEach((a) => {
      const [x1, y1] = anchor(a);
      positions.filter((p) => near.has(p.id)).forEach((b) => {
        const [x2, y2] = anchor(b);
        const my = (y1 + y2) / 2;
        paths += `<path d="M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}" style="stroke:var(--c-${b.lane})"/>`;
      });
    });
    linkLayer.innerHTML = paths;
  }

  function select(id, scroll) {
    state.sel = id;
    highlight(id);
    renderPanel();
    const url = new URL(location.href);
    if (id) url.searchParams.set("focus", id); else url.searchParams.delete("focus");
    history.replaceState(null, "", url);
    if (id && scroll) {
      const p = positions.find((q) => q.id === id);
      if (p) scroller.scrollTo({ left: Math.max(0, X(p.start) - scroller.clientWidth / 3), behavior: scroll === "instant" ? "auto" : "smooth" });
    }
  }

  function renderPanel() {
    if (!state.sel) { panel.innerHTML = `<p class="muted" style="margin:0">${esc(tr("map_hint"))}</p>`; return; }
    const id = state.sel, { e, type } = index[id];
    const dates = e.dates || yearSpan(e);
    const near = [...graph[id]].sort((a, b) => index[a].e.start - index[b].e.start);
    panel.innerHTML = `
      <div class="type" style="color:var(--c-${type})">${esc(tr("nav_" + type))}</div>
      <h3>${esc(e.name)}</h3>
      <div class="sans small muted">${esc([e.composer, dates, e.place || e.origin].filter(Boolean).join(" · "))}</div>
      ${e.tagline ? `<p style="margin:8px 0 0">${esc(loc(e.tagline))}</p>` : ""}
      ${near.length ? `<h4 class="sans small muted" style="margin:14px 0 6px;text-transform:uppercase;letter-spacing:.1em;font-size:.72rem">${esc(tr("map_connected"))}</h4>
        <div class="chips">${near.map((n) => `<button type="button" class="chip t-${index[n].type}" data-go="${n}">${esc(nameOf(n))}</button>`).join("")}</div>` : ""}
      <div class="actions"><a href="${href(id)}">${esc(tr("map_open"))}</a>${e.imslp && type === "repertoire" ? `<a href="${imslpUrl(e.imslp)}" target="_blank" rel="noopener">${esc(tr("imslp"))} ↗</a>` : ""}${groups[id] ? `<button type="button" class="chip t-${type}" data-toggle="${id}">${esc(state.open.has(id) ? tr("map_group_hide") : tr("map_group_show").replace("{n}", groups[id].length))}</button>` : ""}</div>`;
    panel.querySelectorAll("[data-toggle]").forEach((b) => b.addEventListener("click", () => { toggleGroup(b.dataset.toggle); renderPanel(); }));
    panel.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => {
      const target = b.dataset.go;
      let redraw = revealGroupOf(target);
      if (!lanesOf(target).some((l) => state.lanes.has(l))) {
        lanesOf(target).forEach((l) => state.lanes.add(l));
        app.querySelectorAll(".lanes input").forEach((c) => (c.checked = state.lanes.has(c.value)));
        redraw = true;
      }
      if (redraw) draw();
      select(target, true);
    }));
  }

  app.querySelectorAll(".lanes input").forEach((c) => c.addEventListener("change", () => {
    if (c.checked) state.lanes.add(c.value); else state.lanes.delete(c.value);
    draw();
  }));
  app.querySelectorAll("[data-z]").forEach((b) => b.addEventListener("click", () => {
    const centerYear = (scroller.scrollLeft + scroller.clientWidth / 2 - PAD_L) / state.ppy + Y0;
    state.ppy = Math.min(14, Math.max(1.6, state.ppy * (b.dataset.z === "1" ? 1.35 : 1 / 1.35)));
    draw();
    scroller.scrollLeft = X(centerYear) - scroller.clientWidth / 2;
  }));

  const focus = new URLSearchParams(location.search).get("focus");
  revealGroupOf(focus); // a link to a hidden work (e.g. "Show on map" from the Repertoire page) opens its group
  draw();
  if (focus && index[focus]) select(focus, "instant"); else renderPanel();
};
