/**
 * MenasudPage.jsx  v2
 * ─────────────────────────────────────────────────────────
 * Injectable one-page section for AKSA Capital website.
 *
 * ✅ Logo SVG inline — faithful to the real Menasud logo:
 *    red→orange→green gradient ring + interlocked "M" mark
 *    + "MENASUD" / "INTERNATIONAL" wordmark
 * ✅ Colors extracted from AKSA Capital screenshot:
 *    BG #FFFFFF / #F5F4F1 · Dark #131A23
 *    Text #1B1B1B · Gold accent #C8A96E
 *    Logo red #C0392B · orange #C8782A · green #5D8A3C
 * ✅ Typography: Cormorant Garamond (display) + Montserrat (UI)
 * ✅ Sharp corners (no border-radius) — matches AKSA style
 * ✅ Zero global CSS override
 *
 * Usage:
 *   import MenasudPage from './MenasudPage'
 *   import logoSrc from './assets/menasud.jpeg'  // optional
 *   <MenasudPage logo={logoSrc} />
 */

import { useEffect, useRef } from "react";
import menasud2 from './assets/menasud2.png';

/* ═══════════════════════════════════════════════════
   SCOPED STYLES — injected into <head> once
═══════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

.mns {
  --red:    #C0392B;
  --orange: #C8782A;
  --green:  #5D8A3C;
  --gold:   #C8A96E;
  --gold2:  #E2C992;
  --dark:   #131A23;
  --bg:     #FFFFFF;
  --bg2:    #F5F4F1;
  --t1:     #1B1B1B;
  --t2:     #4A4A4A;
  --t3:     #888888;
  --bdr:    #E2DED8;
  --ff1:    'Cormorant Garamond', Georgia, serif;
  --ff2:    'Montserrat', 'Trebuchet MS', sans-serif;
}
.mns *, .mns *::before, .mns *::after { box-sizing:border-box; margin:0; padding:0; }
.mns { font-family:var(--ff2); color:var(--t1); background:var(--bg); -webkit-font-smoothing:antialiased; }

/* ── fade ── */
.mns-f  { opacity:0; transform:translateY(22px); transition:opacity .7s cubic-bezier(.22,1,.36,1), transform .7s cubic-bezier(.22,1,.36,1); }
.mns-f.mns-on { opacity:1; transform:translateY(0); }
.mns-d1{transition-delay:.07s} .mns-d2{transition-delay:.14s}
.mns-d3{transition-delay:.21s} .mns-d4{transition-delay:.28s}
.mns-d5{transition-delay:.35s} .mns-d6{transition-delay:.42s}
.mns-d7{transition-delay:.49s}

/* ── layout ── */
.mns-wrap { max-width:1160px; margin:0 auto; padding:0 40px; }
.mns-sec  { padding:96px 0; }
.mns-sec--alt { background:var(--bg2); }

/* ── section header ── */
.mns-ey   { font-family:var(--ff2); font-size:10px; font-weight:600; letter-spacing:4px; text-transform:uppercase; color:var(--gold); margin-bottom:14px; }
.mns-h2   { font-family:var(--ff1); font-size:clamp(30px,3.8vw,46px); font-weight:400; color:var(--t1); letter-spacing:-.5px; line-height:1.15; margin-bottom:14px; }
.mns-h2 em{ font-style:italic; color:var(--orange); }
.mns-rule { width:40px; height:2px; border:none; background:linear-gradient(90deg,var(--red),var(--green)); margin-bottom:28px; }
.mns-lead { font-size:14px; font-weight:300; line-height:1.8; color:var(--t2); max-width:540px; margin-bottom:52px; }

/* ══ HERO ══ */
.mns-hero { min-height:100vh; background:#E8E7E4; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
.mns-hero::before {
  content:''; position:absolute; inset:0;
  background-image: linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);
  background-size:80px 80px; pointer-events:none;
}
.mns-hero::after {
  content:''; position:absolute; inset:0;
  background:
    radial-gradient(ellipse 55% 45% at 12% 70%,rgba(192,57,43,.13) 0%,transparent 60%),
    radial-gradient(ellipse 50% 45% at 88% 28%,rgba(93,138,60,.10) 0%,transparent 60%),
    radial-gradient(ellipse 40% 55% at 50% 50%,rgba(200,169,110,.05) 0%,transparent 65%);
  pointer-events:none;
}
.mns-hero-in   { position:relative; z-index:2; text-align:center; padding:0 32px; display:flex; flex-direction:column; align-items:center; }
.mns-hero-logo { margin-bottom:44px; }
.mns-hero-logo img,
.mns-hero-logo svg { width:clamp(130px,16vw,172px); height:auto; display:block; filter:drop-shadow(0 8px 32px rgba(200,169,110,.35)); }
.mns-badge     { font-family:var(--ff2); font-size:10px; font-weight:500; letter-spacing:5px; text-transform:uppercase; color:var(--gold); margin-bottom:20px; }
.mns-htitle    { font-family:var(--ff1); font-size:clamp(44px,7vw,86px); font-weight:300; color:#fff; letter-spacing:-2px; line-height:1.0; margin-bottom:8px; }
.mns-htitle span { display:block; font-weight:500;
  background:linear-gradient(100deg,var(--red) 0%,var(--orange) 50%,var(--green) 100%);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}
.mns-htagline  { font-family:var(--ff2); font-size:clamp(10px,1.3vw,12px); font-weight:400; letter-spacing:5.5px; text-transform:uppercase; color:rgba(255,255,255,.35); margin:22px 0 46px; }
.mns-hbtn      { display:inline-block; padding:15px 44px; border:1px solid rgba(200,169,110,.45); font-family:var(--ff2); font-size:10px; font-weight:600; letter-spacing:3.5px; text-transform:uppercase; color:var(--gold2); background:transparent; cursor:pointer; transition:background .3s,color .3s,border-color .3s; }
.mns-hbtn:hover{ background:rgba(200,169,110,.12); border-color:var(--gold); color:#fff; }
.mns-scroll    { position:absolute; bottom:36px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:8px; font-family:var(--ff2); font-size:9px; letter-spacing:3px; text-transform:uppercase; color:rgba(255,255,255,.22); z-index:2; }
.mns-scroll-ln { width:1px; height:44px; background:linear-gradient(to bottom,var(--gold),transparent); animation:mns-pulse 2s ease-in-out infinite; }
@keyframes mns-pulse { 0%,100%{opacity:.3} 50%{opacity:.9} }

/* ══ CARDS GRID ══ */
.mns-grid  { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:1px; background:var(--bdr); border:1px solid var(--bdr); }
.mns-card  { background:var(--bg); padding:32px 26px 36px; position:relative; overflow:hidden; transition:background .25s; }
.mns-sec--alt .mns-card { background:var(--bg2); }
.mns-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--red),var(--green)); transform:scaleX(0); transform-origin:left; transition:transform .35s; }
.mns-card:hover { background:#fff; }
.mns-card:hover::after { transform:scaleX(1); }
.mns-ck    { display:block; font-size:28px; margin-bottom:18px; line-height:1; }
.mns-ckk   { font-family:var(--ff2); font-size:9px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:var(--gold); margin-bottom:7px; }
.mns-cn    { font-family:var(--ff1); font-size:20px; font-weight:500; color:var(--t1); margin-bottom:10px; letter-spacing:-.2px; }
.mns-cd    { font-size:12.5px; font-weight:300; line-height:1.75; color:var(--t2); }

/* ══ SPLIT ══ */
.mns-split { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:center; }
.mns-vis   { position:relative; }
.mns-vis-b { width:100%; aspect-ratio:4/3; background:linear-gradient(145deg,#1B2838,#0D1117); display:flex; align-items:center; justify-content:center; font-size:64px; position:relative; overflow:hidden; }
.mns-vis-b::before { content:''; position:absolute; top:0; left:0; width:100%; height:3px; background:linear-gradient(90deg,var(--red),var(--orange),var(--green)); }
.mns-vis-c { position:absolute; bottom:-12px; right:-12px; width:60px; height:60px; border-right:2px solid var(--gold); border-bottom:2px solid var(--gold); pointer-events:none; }
.mns-fl    { list-style:none; margin-bottom:36px; }
.mns-fl li { font-size:13px; font-weight:400; color:var(--t2); padding:12px 0; border-bottom:1px solid var(--bdr); display:flex; align-items:center; gap:12px; line-height:1.5; }
.mns-fl li:last-child { border-bottom:none; }
.mns-fb    { width:5px; height:5px; border-radius:50%; background:linear-gradient(135deg,var(--red),var(--green)); flex-shrink:0; }

/* ══ PARTNERS ══ */
.mns-prow  { display:flex; flex-wrap:wrap; gap:24px; }
.mns-partner { flex:1 1 280px; border:1px solid var(--bdr); padding:40px 36px; display:flex; gap:20px; align-items:flex-start; transition:box-shadow .3s; }
.mns-partner:hover { box-shadow:0 8px 40px rgba(0,0,0,.07); }
.mns-pi    { width:52px; height:52px; flex-shrink:0; border:1px solid var(--bdr); display:flex; align-items:center; justify-content:center; font-size:22px; }
.mns-pn    { font-family:var(--ff1); font-size:20px; font-weight:500; color:var(--t1); margin-bottom:6px; }
.mns-pd    { font-size:12.5px; font-weight:300; color:var(--t3); line-height:1.6; }

/* ══ SERVICES ══ */
.mns-sg    { display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); border-top:1px solid var(--bdr); border-left:1px solid var(--bdr); }
.mns-si    { padding:36px 28px; border-right:1px solid var(--bdr); border-bottom:1px solid var(--bdr); transition:background .25s; position:relative; overflow:hidden; }
.mns-si::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,var(--red),var(--green)); transform:scaleX(0); transform-origin:left; transition:transform .3s; }
.mns-si:hover { background:#faf9f7; }
.mns-si:hover::before { transform:scaleX(1); }
.mns-sico  { font-size:26px; margin-bottom:16px; display:block; }
.mns-stt   { font-family:var(--ff1); font-size:17px; font-weight:500; color:var(--t1); margin-bottom:10px; }
.mns-sde   { font-size:12.5px; font-weight:300; line-height:1.75; color:var(--t2); }

/* ══ TEAM ══ */
.mns-tg    { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:24px; }
.mns-tc    { border:1px solid var(--bdr); padding:36px 32px 32px; transition:box-shadow .3s; position:relative; overflow:hidden; }
.mns-tc::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--red),var(--orange),var(--green)); transform:scaleX(0); transform-origin:left; transition:transform .35s; }
.mns-tc:hover { box-shadow:0 12px 48px rgba(0,0,0,.09); }
.mns-tc:hover::before { transform:scaleX(1); }
.mns-tav   { width:52px; height:52px; border-radius:50%; background:var(--dark); display:flex; align-items:center; justify-content:center; font-family:var(--ff1); font-size:20px; font-weight:500; color:var(--gold); margin-bottom:20px; flex-shrink:0; }
.mns-tname { font-family:var(--ff1); font-size:20px; font-weight:500; color:var(--t1); margin-bottom:4px; }
.mns-trole { font-family:var(--ff2); font-size:10px; font-weight:500; letter-spacing:2.5px; text-transform:uppercase; color:var(--gold); margin-bottom:20px; line-height:1.6; }
.mns-tmail { display:inline-flex; align-items:center; gap:8px; font-family:var(--ff2); font-size:11px; font-weight:500; letter-spacing:1px; color:var(--t2); text-decoration:none; border:1px solid var(--bdr); padding:10px 18px; transition:border-color .25s,background .25s,color .25s; }
.mns-tmail:hover { border-color:var(--orange); background:var(--orange); color:#fff; }

/* ══ RESPONSIVE ══ */
@media(max-width:900px){ .mns-split{ grid-template-columns:1fr; gap:48px; } }
@media(max-width:680px){ .mns-wrap{padding:0 20px;} .mns-sec{padding:72px 0;} .mns-grid{grid-template-columns:1fr 1fr;} .mns-tg{grid-template-columns:1fr;} }
@media(max-width:420px){ .mns-grid{grid-template-columns:1fr;} }
`;

/* ═══════════════════════════════════════════════
   INLINE SVG LOGO — faithful to the real mark
   · Outer gradient ring: red → orange → green
   · Interlocked double-M letterform
   · Wordmark: MENASUD / INTERNATIONAL
═══════════════════════════════════════════════ */
function MenasudLogo({ size = 160 }) {
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Menasud International"
    >
      <defs>
        <linearGradient id="mns-ring-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#C0392B" />
          <stop offset="45%"  stopColor="#C8782A" />
          <stop offset="100%" stopColor="#5D8A3C" />
        </linearGradient>
        <linearGradient id="mns-m-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#C0392B" />
          <stop offset="50%"  stopColor="#C8782A" />
          <stop offset="100%" stopColor="#5D8A3C" />
        </linearGradient>
      </defs>

      {/* ── Outer ring ── */}
      <circle cx="110" cy="110" r="96" fill="none" stroke="url(#mns-ring-g)" strokeWidth="5.5" />

      {/* ── Primary M (bold outer) ── */}
      <path
        d="M60 158 L60 78 L110 128 L160 78 L160 158"
        fill="none"
        stroke="url(#mns-m-g)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ── Secondary M (thinner, slightly smaller — creates interlock depth) ── */}
      <path
        d="M72 150 L72 90 L110 132 L148 90 L148 150"
        fill="none"
        stroke="url(#mns-m-g)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />

      {/* ── Wordmark: MENASUD ── */}
      <text
        x="110" y="186"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="5"
        fill="#1B1B1B"
      >
        MENASUD
      </text>

      {/* ── Wordmark: INTERNATIONAL ── */}
      <text
        x="110" y="200"
        textAnchor="middle"
        fontFamily="'Montserrat', 'Trebuchet MS', sans-serif"
        fontSize="7"
        fontWeight="400"
        letterSpacing="4"
        fill="#888888"
      >
        INTERNATIONAL
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   INTERSECTION HOOK
═══════════════════════════════════════════════ */
function useFade() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("mns-on"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ═══════════════════════════════════════════════
   SECTION HEADER
═══════════════════════════════════════════════ */
function SecHead({ ey, title, italic, desc }) {
  return (
    <>
      <p className="mns-ey">{ey}</p>
      <h2 className="mns-h2">{title}{italic && <> <em>{italic}</em></>}</h2>
      <hr className="mns-rule" />
      {desc && <p className="mns-lead">{desc}</p>}
    </>
  );
}

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */
const PRODUCTS = [
  { ic:"⛽", kk:"Distillate",  nm:"Diesel EN590",  dc:"Low-sulfur automotive diesel meeting European EN590 specifications for road transport." },
  { ic:"✈️", kk:"Aviation",    nm:"Jet Fuel A1",   dc:"Aviation turbine fuel meeting Def Stan 91-091 and ASTM D1655 for international airlines." },
  { ic:"🛢️", kk:"Heavy Fuel",  nm:"Fuel Oil",      dc:"Residual fuel for marine vessels, industrial boilers, and large-scale power generation." },
  { ic:"🚗", kk:"Gasoline",    nm:"Essence",       dc:"Premium and regular unleaded motor gasoline blended for modern combustion engines." },
  { ic:"🔥", kk:"LPG",         nm:"GPL",           dc:"Liquefied petroleum gas for domestic, commercial heating, and automotive applications." },
  { ic:"💡", kk:"Illuminant",  nm:"Kerosene",      dc:"Refined illuminating kerosene for heating, cooking, and lighting purposes." },
  { ic:"🏗️", kk:"Bitumen",     nm:"Bitume",        dc:"Road-grade and industrial bitumen for infrastructure paving and waterproofing." },
];
const MINING = [
  { ic:"🔶", kk:"Base Metal",  nm:"Cuivre",    dc:"High-grade copper cathodes and wire rods from certified African mining operations." },
  { ic:"⚙️", kk:"Iron Ore",   nm:"Fer",       dc:"Iron ore pellets and DRI for integrated steel manufacturing supply chains." },
  { ic:"🥈", kk:"Light Metal", nm:"Aluminium", dc:"Primary aluminium ingots and billets from certified regional smelters." },
  { ic:"🌾", kk:"Agriculture", nm:"Engrais",   dc:"Bulk fertilisers — urea, DAP, NPK — for North African and MENA agricultural markets." },
];
const PARTNERS = [
  { ic:"🏦", nm:"Hoche Partners", dc:"Financial structuring & investment advisory — Paris, France" },
  { ic:"⛽", nm:"Petrol Maroc",   dc:"Strategic distribution partner across North African markets" },
];
const SERVICES = [
  { ic:"🔍", tt:"Due Diligence",       dc:"Independent quality inspection and cargo certification on every transaction." },
  { ic:"📦", tt:"Logistics & Freight", dc:"Full supply chain management from loading port to final destination." },
  { ic:"📄", tt:"Trade Finance",       dc:"LC, SBLC, and bank guarantees to secure cross-border commodity deals." },
  { ic:"⚖️", tt:"Compliance",          dc:"AML, KYC, and international sanctions screening on all counterparties." },
  { ic:"📊", tt:"Market Intelligence", dc:"Real-time commodity pricing and regional demand analytics." },
  { ic:"🌍", tt:"Africa & MENA Desk",  dc:"Dedicated expertise for Sub-Saharan Africa and the Middle East." },
];
const TEAM = [
  { in:"SA", nm:"Samuel Akdim",      rl:"CEO",                                         em:"sakdime@menasud.lu" },
  { in:"RV", nm:"Rafael Vrhovac",    rl:"Managing Director",                           em:"rvrhovac@menasud.lu" },
  { in:"SD", nm:"Safouane Dannoune", rl:"Strategic Sourcing",                          em:"sdannoune@menasud.lu" },
  { in:"OI", nm:"Omar IHDA",         rl:"Business Development – Africa & Middle East", em:"oihda@menasud.lu" },
];

/* ═══════════════════════════════════════════════
   EXTRACTED COMPONENTS (hooks must be top-level)
═══════════════════════════════════════════════ */
function ProductCard({ ic, kk, nm, dc, d }) {
  const r = useFade();
  return (
    <div ref={r} className={`mns-card mns-f mns-d${d}`}>
      <span className="mns-ck">{ic}</span>
      <p className="mns-ckk">{kk}</p>
      <h3 className="mns-cn">{nm}</h3>
      <p className="mns-cd">{dc}</p>
    </div>
  );
}
function VisualBlock() {
  const r = useFade();
  return (
    <div ref={r} className="mns-vis mns-f">
      <div className="mns-vis-b"><img src={menasud2} alt="Menasud" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
      <div className="mns-vis-c" />
    </div>
  );
}
function InfraBlock() {
  const r = useFade();
  return (
    <div ref={r} className="mns-f mns-d2">
      <SecHead
        ey="Infrastructure"
        title="Storage &"
        italic="Logistics"
        desc="End-to-end infrastructure capabilities ensuring reliable storage, handling, and delivery of energy commodities across Africa, MENA, and beyond."
      />
      <ul className="mns-fl">
        {[
          "Above-ground crude and refined product tank farms",
          "Floating roof and fixed-roof storage facilities",
          "LPG pressurised sphere storage",
          "Cross-country and marine pipeline network access",
          "Custom blending and additive injection services",
          "Third-party terminal agreements across Africa & MENA",
        ].map(t => (
          <li key={t}><span className="mns-fb"/>{t}</li>
        ))}
      </ul>
    </div>
  );
}
function PartnerCard({ ic, nm, dc, d }) {
  const r = useFade();
  return (
    <div ref={r} className={`mns-partner mns-f mns-d${d}`}>
      <div className="mns-pi">{ic}</div>
      <div>
        <p className="mns-pn">{nm}</p>
        <p className="mns-pd">{dc}</p>
      </div>
    </div>
  );
}
function ServiceItem({ ic, tt, dc, d }) {
  const r = useFade();
  return (
    <div ref={r} className={`mns-si mns-f mns-d${d}`}>
      <span className="mns-sico">{ic}</span>
      <h4 className="mns-stt">{tt}</h4>
      <p className="mns-sde">{dc}</p>
    </div>
  );
}
function TeamCard({ ins, nm, rl, em, d }) {
  const r = useFade();
  return (
    <div ref={r} className={`mns-tc mns-f mns-d${d}`}>
      <div className="mns-tav">{ins}</div>
      <p className="mns-tname">{nm}</p>
      <p className="mns-trole">{rl}</p>
      <a href={`mailto:${em}`} className="mns-tmail">✉&ensp;Send Email</a>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════ */
export default function MenasudPage({ logo }) {

  useEffect(() => {
    const id = "mns-styles";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = CSS;
    document.head.appendChild(el);
  }, []);

  const heroLogoRef = useFade();
  const heroCopyRef = useFade();

  return (
    <div className="mns">

      {/* ──────────── HERO ──────────── */}
      <section className="mns-hero" id="menasud">
        <div className="mns-hero-in">
          <div ref={heroLogoRef} className="mns-hero-logo mns-f">
            {logo
              ? <img src={logo} alt="Menasud International" />
              : <MenasudLogo size={160} />
            }
          </div>
          <div ref={heroCopyRef} className="mns-f mns-d2">
            <p className="mns-badge">Menasud International</p>
            <h1 className="mns-htitle">
              Energy &amp;
              <span>Mining Trading</span>
            </h1>
            <p className="mns-htagline">Global Commodity Solutions</p>
            <button
              className="mns-hbtn"
              onClick={() => document.getElementById("menasud-contact")?.scrollIntoView({ behavior:"smooth" })}
            >
              Contact Our Team
            </button>
          </div>
        </div>
        <div className="mns-scroll">
          <span>Scroll</span>
          <div className="mns-scroll-ln" />
        </div>
      </section>

      {/* ──────────── PETROLEUM ──────────── */}
      <section className="mns-sec" id="menasud-products">
        <div className="mns-wrap">
          <SecHead
            ey="Petroleum Products"
            title="Energy Trading"
            italic="Portfolio"
            desc="Menasud International sources, trades, and delivers a comprehensive range of refined petroleum products to industrial, institutional, and governmental clients across key global markets."
          />
          <div className="mns-grid">
            {PRODUCTS.map((p, i) => <ProductCard key={p.nm} {...p} d={(i%7)+1} />)}
          </div>
        </div>
      </section>

      {/* ──────────── INFRA ──────────── */}
      <section className="mns-sec mns-sec--alt" id="menasud-infra">
        <div className="mns-wrap">
          <div className="mns-split">
            <VisualBlock />
            <InfraBlock />
          </div>
        </div>
      </section>

      {/* ──────────── MINING ──────────── */}
      <section className="mns-sec" id="menasud-mining">
        <div className="mns-wrap">
          <SecHead
            ey="Mining"
            title="Mineral &"
            italic="Mining Trading"
            desc="Strategic trading of base metals and agricultural commodities sourced from sub-Saharan Africa and the broader MENA region, leveraging long-standing relationships with certified producers."
          />
          <div className="mns-grid">
            {MINING.map((m, i) => <ProductCard key={m.nm} ic={m.ic} kk={m.kk} nm={m.nm} dc={m.dc} d={i+1} />)}
          </div>
        </div>
      </section>

      {/* ──────────── PARTNERS ──────────── */}
      <section className="mns-sec mns-sec--alt" id="menasud-partners">
        <div className="mns-wrap">
          <SecHead
            ey="Partners"
            title="Strategic"
            italic="Alliances"
            desc="Menasud operates alongside trusted financial and industry partners to structure, finance, and secure every transaction."
          />
          <div className="mns-prow">
            {PARTNERS.map((p, i) => <PartnerCard key={p.nm} ic={p.ic} nm={p.nm} dc={p.dc} d={i+1} />)}
          </div>
        </div>
      </section>

      {/* ──────────── SERVICES ──────────── */}
      <section className="mns-sec" id="menasud-services">
        <div className="mns-wrap">
          <SecHead
            ey="Services"
            title="What We"
            italic="Offer"
            desc="Beyond product supply, Menasud delivers fully integrated trading services across the complete commodity value chain."
          />
          <div className="mns-sg">
            {SERVICES.map((s, i) => <ServiceItem key={s.tt} ic={s.ic} tt={s.tt} dc={s.dc} d={(i%4)+1} />)}
          </div>
        </div>
      </section>

      {/* ──────────── TEAM ──────────── */}
      <section className="mns-sec mns-sec--alt" id="menasud-contact">
        <div className="mns-wrap">
          <SecHead
            ey="Contact"
            title="Our"
            italic="Team"
            desc="Reach our international trading team directly — we respond within one business day."
          />
          <div className="mns-tg">
            {TEAM.map((m, i) => <TeamCard key={m.em} ins={m.in} nm={m.nm} rl={m.rl} em={m.em} d={i+1} />)}
          </div>
        </div>
      </section>

    </div>
  );
}
