/*
 * Schematic illustrations generated from data: flutes, portraits, title pages.
 * They stand in for photographs until real (public-domain) images are added.
 */
window.HFP = window.HFP || {};
HFP.illus = (function () {
  const MAT = {
    boxwood: { fill: "#dcb878", dark: "#c49a52", stroke: "#8b6a3a" },
    grenadilla: { fill: "#4a352a", dark: "#33241c", stroke: "#1d140f" },
    silver: { fill: "url(#hfp-silver)", dark: "#9aa1a8", stroke: "#7c848b" }
  };
  const IVORY = { fill: "#f4ecda", stroke: "#b9a98a" };
  let uid = 0;

  function flute(d, opts) {
    opts = opts || {};
    const W = 640, Hh = 64, cy = 32;
    const m = MAT[d.material] || MAT.boxwood;
    const x0 = 16, L = 600 * (d.length || 0.9), x1 = x0 + L;
    const rHead = 8, rFoot = d.bore === "conical" ? 5.6 : 7.4;
    const headEnd = x0 + 0.3 * L, footStart = x0 + 0.84 * L;
    const id = "hfp-silver-" + (++uid);
    const fillAttr = d.material === "silver" ? `url(#${id})` : m.fill;
    const parts = [];

    // body outline (conical: cylindrical head, tapering body, small flare at the foot)
    let top, bot;
    if (d.bore === "conical") {
      const flare = d.joints > 1 ? 1.6 : 0;
      top = `M${x0},${cy - rHead} L${headEnd},${cy - rHead} L${footStart},${cy - rFoot} L${x1 - 10},${cy - rFoot} L${x1},${cy - rFoot - flare}`;
      bot = `L${x1},${cy + rFoot + flare} L${x1 - 10},${cy + rFoot} L${footStart},${cy + rFoot} L${headEnd},${cy + rHead} L${x0},${cy + rHead} Z`;
    } else {
      top = `M${x0},${cy - rHead} L${x1},${cy - rHead}`;
      bot = `L${x1},${cy + rHead} L${x0},${cy + rHead} Z`;
    }
    parts.push(`<path d="${top} ${bot}" fill="${fillAttr}" stroke="${m.stroke}" stroke-width="1.2"/>`);
    // a soft highlight along the tube
    parts.push(`<path d="M${x0 + 4},${cy - rHead + 2.5} L${x1 - 6},${cy - (d.bore === "conical" ? rFoot : rHead) + 2.5}" stroke="#fff" stroke-opacity=".28" stroke-width="2" fill="none"/>`);

    const rAt = (x) => {
      if (d.bore !== "conical" || x <= headEnd) return rHead;
      if (x >= footStart) return rFoot;
      return rHead + (rFoot - rHead) * (x - headEnd) / (footStart - headEnd);
    };

    // joints & ivory rings
    const jointsAt = { 1: [], 3: [0.3, 0.84], 4: [0.3, 0.56, 0.84] }[d.joints] || [];
    jointsAt.forEach((f) => {
      const x = x0 + f * L, r = rAt(x) + (d.rings ? 2.2 : 0.6);
      if (d.rings) parts.push(`<rect x="${x - 4}" y="${cy - r}" width="8" height="${2 * r}" rx="2" fill="${IVORY.fill}" stroke="${IVORY.stroke}"/>`);
      else parts.push(`<line x1="${x}" y1="${cy - r}" x2="${x}" y2="${cy + r}" stroke="${m.stroke}" stroke-width="1"/>`);
    });
    if (d.rings) {
      parts.push(`<rect x="${x0 - 3}" y="${cy - rHead - 2}" width="9" height="${2 * rHead + 4}" rx="3" fill="${IVORY.fill}" stroke="${IVORY.stroke}"/>`);
      parts.push(`<rect x="${x1 - 7}" y="${cy - rFoot - 3.5}" width="9" height="${2 * rFoot + 7}" rx="3" fill="${IVORY.fill}" stroke="${IVORY.stroke}"/>`);
    }

    // embouchure
    parts.push(`<ellipse cx="${x0 + 0.1 * L}" cy="${cy}" rx="4.4" ry="2.8" fill="#1b130e"/>`);

    const holes = [0.41, 0.47, 0.53, 0.62, 0.68, 0.74];
    if (d.material === "silver") {
      // Boehm 1847: large cups and an axle along the top
      parts.push(`<line x1="${x0 + 0.36 * L}" y1="${cy - rHead - 2}" x2="${x0 + 0.95 * L}" y2="${cy - rHead - 2}" stroke="#7c848b" stroke-width="1.6"/>`);
      const cups = [0.38, 0.42, 0.46, 0.5, 0.54, 0.59, 0.63, 0.67, 0.71, 0.75, 0.79, 0.86, 0.9, 0.94];
      cups.forEach((f, i) => {
        const x = x0 + f * L;
        parts.push(`<circle cx="${x}" cy="${cy}" r="5.6" fill="#eef0f2" stroke="#7c848b"/>`);
        if (i < 9 && i % 3 !== 2) parts.push(`<circle cx="${x}" cy="${cy}" r="1.8" fill="#1b130e"/>`);
      });
    } else if (d.rings1832) {
      // Boehm 1832: open holes with rings plus some closed keys
      parts.push(`<line x1="${x0 + 0.38 * L}" y1="${cy - rHead - 2}" x2="${x0 + 0.93 * L}" y2="${cy - rHead - 2}" stroke="#c9a14a" stroke-width="1.4"/>`);
      holes.concat([0.8, 0.88, 0.92]).forEach((f, i) => {
        const x = x0 + f * L;
        if (i < 6) {
          parts.push(`<circle cx="${x}" cy="${cy}" r="4.4" fill="none" stroke="#c9a14a" stroke-width="1.5"/>`);
          parts.push(`<circle cx="${x}" cy="${cy}" r="2.6" fill="#1b130e"/>`);
        } else {
          parts.push(`<circle cx="${x}" cy="${cy}" r="4.6" fill="#e2c37a" stroke="#9c7a2e"/>`);
        }
      });
    } else {
      holes.forEach((f) => parts.push(`<circle cx="${x0 + f * L}" cy="${cy}" r="2.3" fill="#1b130e"/>`));
      // keys: flap on top of the tube + lever
      const keySlots = [0.86, 0.565, 0.505, 0.44, 0.91, 0.94, 0.625, 0.35];
      for (let i = 0; i < (d.keys || 0) && i < keySlots.length; i++) {
        const x = x0 + keySlots[i] * L, r = rAt(x);
        const up = i % 2 === 0;
        const yk = up ? cy - r - 3 : cy + r + 3;
        parts.push(`<line x1="${x - 20}" y1="${yk}" x2="${x}" y2="${yk}" stroke="#9c7a2e" stroke-width="1.6" stroke-linecap="round"/>`);
        parts.push(`<rect x="${x - 4}" y="${yk - 2.5}" width="9" height="5" rx="2" fill="#e2c37a" stroke="#9c7a2e" stroke-width=".8"/>`);
      }
    }

    const defs = `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6f7"/><stop offset=".55" stop-color="#c3c9ce"/><stop offset="1" stop-color="#9aa1a8"/></linearGradient></defs>`;
    return `<svg viewBox="0 0 ${W} ${Hh}" role="img" aria-label="${opts.label || "Flute drawing"}" xmlns="http://www.w3.org/2000/svg">${defs}${parts.join("")}</svg>`;
  }

  function initials(name) {
    const words = name.replace(/\(.*?\)/g, "").split(/\s+/).filter((w) => /^[A-ZÀ-Ý]/.test(w));
    if (words.length === 0) return "?";
    if (words.length === 1) return words[0].slice(0, 2);
    return words[0][0] + words[words.length - 1][0];
  }

  function portrait(name, colorVar) {
    const ini = initials(name);
    return `<svg viewBox="0 0 200 200" role="img" aria-label="${name}" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" rx="12" style="fill:var(--paper-2)"/>
      <ellipse cx="100" cy="100" rx="70" ry="80" fill="none" style="stroke:${colorVar}" stroke-width="2"/>
      <ellipse cx="100" cy="100" rx="64" ry="74" fill="none" style="stroke:${colorVar}" stroke-opacity=".4" stroke-width="1"/>
      <text x="100" y="118" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="56" font-weight="600" style="fill:${colorVar}">${ini}</text>
    </svg>`;
  }

  function wrapWords(text, max) {
    const lines = []; let cur = "";
    text.split(/\s+/).forEach((w) => {
      if ((cur + " " + w).trim().length > max && cur) { lines.push(cur); cur = w; }
      else cur = (cur + " " + w).trim();
    });
    if (cur) lines.push(cur);
    return lines;
  }

  function titlePage(title, author, place, year) {
    const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const lines = wrapWords(title.toUpperCase(), 17).slice(0, 6);
    const tl = lines.map((l, i) => `<text x="100" y="${70 + i * 17}" text-anchor="middle" font-size="12" letter-spacing=".5">${esc(l)}</text>`).join("");
    const yA = 70 + lines.length * 17 + 18;
    return `<svg viewBox="0 0 200 260" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg" font-family="Cormorant Garamond, Georgia, serif" style="fill:#3a2d20">
      <rect x="4" y="4" width="192" height="252" rx="3" fill="#f3ead6" stroke="#bfae8c"/>
      <rect x="14" y="14" width="172" height="232" fill="none" stroke="#8b6a3a" stroke-width="1.4"/>
      <rect x="19" y="19" width="162" height="222" fill="none" stroke="#8b6a3a" stroke-width=".6"/>
      <path d="M70 46 h60 M85 50 h30" stroke="#8b6a3a" stroke-width=".8"/>
      ${tl}
      <text x="100" y="${yA}" text-anchor="middle" font-size="11" font-style="italic">${esc(author)}</text>
      <path d="M80 ${yA + 14} q20 -8 40 0" fill="none" stroke="#8b6a3a" stroke-width=".8"/>
      <text x="100" y="222" text-anchor="middle" font-size="11" letter-spacing="1">${esc(place.toUpperCase())}</text>
      <text x="100" y="236" text-anchor="middle" font-size="12">${esc(year)}</text>
    </svg>`;
  }

  return { flute, portrait, titlePage };
})();
