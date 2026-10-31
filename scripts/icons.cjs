/* Builds the site icon set from the wordmark's own letter.

   The F is rendered with the site's Archivo file (public/fonts) at the
   wordmark's settings (700, 70% width), traced into rectangles (Archivo's F
   is rectilinear), and written as an outlined SVG, so no installed font is
   ever involved. A hand-snapped 16px master keeps the favicon crisp; the
   PNGs and the ICO are rasterised from the SVGs.

   Run: node scripts/icons.cjs  (needs Playwright; set PLAYWRIGHT to its
   path if it is not resolvable). Then embed provenance in the PNGs with
   `impeccable embed-prompt`. */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(process.env.PLAYWRIGHT || "playwright");

const root = path.resolve(__dirname, "..");
const pub = path.join(root, "public");
const INK = "#15161a";
const BONE = "#f2f0ec";

(async () => {
  const font = fs
    .readFileSync(path.join(pub, "fonts/archivo-var-latin.woff2"))
    .toString("base64");
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 1200 },
  });

  /* 1. Trace the F. */
  await page.setContent(`<style>
    @font-face{font-family:A;src:url(data:font/woff2;base64,${font}) format("woff2");font-weight:100 900;font-stretch:62% 125%}
    html,body{margin:0;background:#fff}
    span{font:700 1000px/1 A;font-stretch:70%;color:#000;display:inline-block;padding:50px}
  </style><span>F</span>`);
  await page.evaluate(() => document.fonts.ready);
  const shot = await page.locator("span").screenshot();
  const rects = await page.evaluate(async (b64) => {
    const img = new Image();
    img.src = `data:image/png;base64,${b64}`;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = img.width;
    c.height = img.height;
    const x = c.getContext("2d");
    x.drawImage(img, 0, 0);
    const { data, width, height } = x.getImageData(0, 0, c.width, c.height);
    const on = (i, j) => data[(j * width + i) * 4] < 128;
    const out = [];
    let open = [];
    for (let j = 0; j < height; j++) {
      const runs = [];
      for (let i = 0; i < width; i++) {
        if (on(i, j)) {
          const s = i;
          while (i < width && on(i, j)) i++;
          runs.push([s, i]);
        }
      }
      const next = [];
      for (const r of runs) {
        const m = open.find((o) => o.x0 === r[0] && o.x1 === r[1]);
        if (m) next.push(m);
        else next.push({ x0: r[0], x1: r[1], y0: j, y1: j + 1 });
      }
      for (const o of open) if (!next.includes(o)) out.push(o);
      for (const n of next) n.y1 = j + 1;
      open = next;
    }
    out.push(...open);
    return out.filter((r) => r.y1 - r.y0 > 3);
  }, shot.toString("base64"));

  /* 2. Fit the glyph into a 32 grid: cap height 62%, optically centred. */
  const minX = Math.min(...rects.map((r) => r.x0));
  const maxX = Math.max(...rects.map((r) => r.x1));
  const minY = Math.min(...rects.map((r) => r.y0));
  const maxY = Math.max(...rects.map((r) => r.y1));
  const scale = (32 * 0.62) / (maxY - minY);
  const ox = (32 - (maxX - minX) * scale) / 2;
  const oy = (32 - (maxY - minY) * scale) / 2;
  const f = (n) => Math.round(n * 100) / 100;
  const d = rects
    .map((r) => {
      const x = f(ox + (r.x0 - minX) * scale);
      const y = f(oy + (r.y0 - minY) * scale);
      const w = f((r.x1 - r.x0) * scale);
      const h = f((r.y1 - r.y0) * scale);
      return `M${x} ${y}h${w}v${h}h${-w}z`;
    })
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>Farrel</title><rect width="32" height="32" fill="${INK}"/><path fill="${BONE}" d="${d}"/></svg>\n`;
  fs.writeFileSync(path.join(pub, "favicon.svg"), svg);

  /* 3. The 16px master, snapped to whole pixels and a touch wider, so the
     letter stays a crisp F instead of four soft columns. */
  const svg16 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="crispEdges"><rect width="16" height="16" fill="${INK}"/><path fill="${BONE}" d="M5 2h2v12h-2zM5 2h6v2h-6zM5 7h5v2h-5z"/></svg>`;

  /* 4. Rasterise. */
  const raster = async (markup, size) => {
    await page.setViewportSize({ width: size, height: size });
    await page.setContent(
      `<style>html,body{margin:0}svg{display:block;width:${size}px;height:${size}px}</style>${markup}`,
    );
    return page.locator("svg").screenshot({ omitBackground: false });
  };
  const png16 = await raster(svg16, 16);
  const png32 = await raster(svg, 32);
  for (const [name, size] of [
    ["apple-touch-icon.png", 180],
    ["icon-192.png", 192],
    ["icon-512.png", 512],
  ]) {
    fs.writeFileSync(path.join(pub, name), await raster(svg, size));
  }

  /* 5. favicon.ico: 16 and 32, PNG-encoded entries. */
  const entries = [
    [16, png16],
    [32, png32],
  ];
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);
  let offset = 6 + 16 * entries.length;
  const dir = [];
  for (const [size, png] of entries) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size, 0);
    e.writeUInt8(size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(png.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += png.length;
    dir.push(e);
  }
  fs.writeFileSync(
    path.join(pub, "favicon.ico"),
    Buffer.concat([header, ...dir, ...entries.map((e) => e[1])]),
  );

  await browser.close();
  console.log(
    `favicon.svg (${rects.length} rects), favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png`,
  );
})();
