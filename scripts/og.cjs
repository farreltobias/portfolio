/* Builds the link-preview card (public/og.png, 1200 × 630), drawn as a sheet
   of the set: ink frame with crop marks, the ramp, the Home positioning line
   and a title block whose Address cell is read from astro.config.mjs, so the
   card always names the site's real address.

   Run: node scripts/og.cjs  (needs Playwright; set PLAYWRIGHT to its path if
   it is not resolvable). Then embed provenance with `impeccable embed-prompt`. */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require(process.env.PLAYWRIGHT || "playwright");

const root = path.resolve(__dirname, "..");
const config = fs.readFileSync(path.join(root, "astro.config.mjs"), "utf8");
const site = new URL(config.match(/site:\s*["']([^"']+)["']/)[1]);
const font = (f) =>
  fs.readFileSync(path.join(root, "public/fonts", f)).toString("base64");

const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:Archivo;src:url(data:font/woff2;base64,${font("archivo-var-latin.woff2")}) format("woff2");font-weight:100 900;font-stretch:62% 125%}
@font-face{font-family:"Plex Mono";src:url(data:font/woff2;base64,${font("plex-mono-400-latin.woff2")}) format("woff2");font-weight:400}
*{margin:0;box-sizing:border-box}
html,body{width:1200px;height:630px;background:#f2f0ec;color:#15161a}
.sheet{position:absolute;inset:48px;border:1px solid #15161a;display:grid;grid-template-rows:auto 1fr auto}
.sheet::before{content:"";position:absolute;inset:-9px;background:
linear-gradient(#5d5d5e,#5d5d5e) left top/10px 1px,linear-gradient(#5d5d5e,#5d5d5e) left top/1px 10px,
linear-gradient(#5d5d5e,#5d5d5e) right top/10px 1px,linear-gradient(#5d5d5e,#5d5d5e) right top/1px 10px,
linear-gradient(#5d5d5e,#5d5d5e) left bottom/10px 1px,linear-gradient(#5d5d5e,#5d5d5e) left bottom/1px 10px,
linear-gradient(#5d5d5e,#5d5d5e) right bottom/10px 1px,linear-gradient(#5d5d5e,#5d5d5e) right bottom/1px 10px;background-repeat:no-repeat}
.head{display:flex;justify-content:space-between;align-items:flex-end;padding:22px 30px 18px;border-bottom:1px solid #15161a}
.mark{font-family:Archivo;font-weight:700;font-stretch:70%;text-transform:uppercase;font-size:34px;line-height:1;letter-spacing:.02em}
.leg{font-family:Archivo;font-weight:600;text-transform:uppercase;letter-spacing:.16em;font-size:14px;color:#5d5d5e}
.body{padding:34px 30px 0;display:grid;grid-template-columns:52px 1fr;column-gap:30px}
.ramp{display:grid;grid-template-rows:repeat(11,1fr);border:1px solid #c8c7c3;height:260px}
h1{font-family:Archivo;font-weight:700;font-stretch:70%;text-transform:uppercase;font-size:76px;line-height:.92;letter-spacing:-.005em;max-width:900px}
.tb{display:grid;grid-template-columns:1.4fr 1fr 1fr;border-top:1px solid #15161a}
.tb div{padding:12px 30px 14px}.tb div+div{border-left:1px solid #c8c7c3}
.tb p{font-family:"Plex Mono";font-size:18px;margin-top:6px}
</style><div class="sheet">
<div class="head"><div class="mark">Farrel</div><div class="leg">Product Engineer</div></div>
<div class="body"><div class="ramp">${["#15161a", "#2e2e31", "#464648", "#5d5d5e", "#757474", "#8b8a89", "#a09f9e", "#b5b4b1", "#c8c7c3", "#dfddd8", "#f2f0ec"].map((c) => `<span style="background:${c}"></span>`).join("")}</div>
<h1>I build software that simplifies how products and operations run.</h1></div>
<div class="tb"><div><span class="leg">Drawing</span><p>Farrel — Product Engineer</p></div><div><span class="leg">Sheet</span><p>Cover</p></div><div><span class="leg">Address</span><p>${site.host}</p></div></div>
</div>`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
  });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(root, "public/og.png") });
  await browser.close();
  console.log(`og.png (Address: ${site.host})`);
})();
