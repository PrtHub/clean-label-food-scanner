"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   META FEED ADS — 1080×1080
   Core principle: nobody cares about the app.
   They care about THEMSELVES.
   Every ad answers: "How does this affect MY life?"
   Each ad has its own visual + typographic identity.
───────────────────────────────────────────────────────────── */

const SANS = "system-ui, -apple-system, 'Helvetica Neue', sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const MONO = "'SF Mono', Menlo, Consolas, monospace";

// ── AD 1: "You Ate 7 Toxins Today" ──
// Typography: serif headline (editorial feel), italic number, clean sans body
// Theme: white, red accents — newspaper exposé
function Ad1() {
  const toxins = [
    { name: "Canola Oil", hide: "Hidden as \"Vegetable Oil\"" },
    { name: "MSG", hide: "Hidden as \"Yeast Extract\"" },
    { name: "Red 40", hide: "Hidden as \"Color Added\"" },
  ];

  return (
    <div style={{ width: 1080, height: 1080, fontFamily: SERIF, position: "relative", overflow: "hidden", background: "#FAFAFA" }}>
      <div style={{ position: "absolute", top: -60, right: -60, width: 350, height: 350, background: "radial-gradient(circle, rgba(220,38,38,0.06) 0%, transparent 70%)" }} />

      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", padding: 72 }}>
        {/* Hook */}
        <div style={{ marginBottom: 44 }}>
          <div style={{ fontFamily: SANS, display: "inline-block", background: "#FEE2E2", color: "#DC2626", fontSize: 17, fontWeight: 800, padding: "10px 24px", borderRadius: 99, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 28 }}>
            This was in your breakfast
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, color: "#111", lineHeight: 1.0, letterSpacing: "-1px" }}>
            You ate <span style={{ color: "#DC2626", fontStyle: "italic" }}>7 toxins</span>
            <br />today.
          </div>
          <p style={{ fontFamily: SANS, fontSize: 24, color: "#6B7280", marginTop: 16, lineHeight: 1.5, fontWeight: 400 }}>
            And you didn&apos;t recognize a single one on the label.
          </p>
        </div>

        {/* Toxin cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
          {toxins.map(({ name, hide }) => (
            <div key={name} style={{ fontFamily: SANS, display: "flex", alignItems: "center", padding: "22px 28px", background: "white", borderRadius: 20, boxShadow: "0 1px 4px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.05)" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 28, color: "#111", fontWeight: 800 }}>{name}</div>
                <div style={{ fontSize: 17, color: "#9CA3AF", fontWeight: 400, marginTop: 2 }}>{hide}</div>
              </div>
              <div style={{ width: 44, height: 44, borderRadius: 99, background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 20, color: "#DC2626", fontWeight: 900 }}>!</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ fontFamily: SANS, display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/icon.png" alt="" style={{ width: 48, height: 48, borderRadius: 16 }} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>CleanLabel</div>
              <div style={{ fontSize: 15, color: "#9CA3AF" }}>Free · No account</div>
            </div>
          </div>
          <div style={{ background: "#111", color: "white", fontSize: 21, fontWeight: 800, padding: "18px 44px", borderRadius: 99 }}>
            Scan Your Food
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AD 2: "Your Kids" ──
// Typography: large sans bold headline, serif italic for the scary effects
// Theme: dark, red urgency
function Ad2() {
  const items = [
    { name: "Red 40", effect: "Linked to hyperactivity in children" },
    { name: "Sodium Nitrite", effect: "Forms carcinogens when heated" },
    { name: "BHA", effect: "Anticipated to be a human carcinogen" },
    { name: "HFCS", effect: "Linked to childhood obesity & fatty liver" },
  ];

  return (
    <div style={{ width: 1080, height: 1080, fontFamily: SANS, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "#080808" }} />

      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", padding: 72 }}>
        {/* Hook */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 64, fontWeight: 900, color: "white", lineHeight: 1.05, letterSpacing: "-2px" }}>
            Do you know what
            <br />your kids are
            <br /><span style={{ color: "#ef4444", fontStyle: "italic", fontFamily: SERIF }}>actually eating?</span>
          </div>
        </div>

        {/* Items — sans name, serif italic effect */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
          {items.map(({ name, effect }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 20, padding: "20px 28px", background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.1)", borderRadius: 20 }}>
              <span style={{ fontSize: 26, color: "white", fontWeight: 800, whiteSpace: "nowrap", minWidth: 220 }}>{name}</span>
              <span style={{ fontFamily: SERIF, fontSize: 20, color: "#f87171", fontWeight: 400, fontStyle: "italic" }}>{effect}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 21, color: "#9ca3af", marginTop: 16, marginBottom: 24, lineHeight: 1.5 }}>
          All found in everyday kids&apos; food — cereals, snack bars, juice boxes.
          <br /><span style={{ color: "white", fontWeight: 700 }}>One scan before you buy. That&apos;s all it takes.</span>
        </p>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/icon.png" alt="" style={{ width: 44, height: 44, borderRadius: 14 }} />
            <span style={{ fontSize: 20, fontWeight: 700, color: "#6b7280" }}>CleanLabel · Free</span>
          </div>
          <div style={{ background: "#ef4444", color: "white", fontSize: 21, fontWeight: 800, padding: "16px 40px", borderRadius: 99 }}>
            Protect Your Family
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AD 3: "Why You Feel Like Crap" ──
// Typography: large serif italic headline, clean sans body
// Theme: warm cream, amber accents
function Ad3() {
  const symptoms = [
    { symptom: "Bloating after meals", cause: "Emulsifiers & carrageenan" },
    { symptom: "Afternoon brain fog", cause: "Maltodextrin & HFCS" },
    { symptom: "Always tired", cause: "Seed oils & inflammation" },
    { symptom: "Skin breaking out", cause: "Artificial dyes & preservatives" },
  ];

  return (
    <div style={{ width: 1080, height: 1080, fontFamily: SANS, position: "relative", overflow: "hidden", background: "#FFFBEB" }}>
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)" }} />

      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", padding: 72 }}>
        {/* Hook — serif italic for emotional weight */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontFamily: SERIF, fontSize: 72, fontWeight: 400, fontStyle: "italic", color: "#111", lineHeight: 1.05 }}>
            Tired? Bloated?
          </div>
          <div style={{ fontSize: 44, fontWeight: 900, color: "#D97706", marginTop: 8 }}>
            It&apos;s not you. It&apos;s your food.
          </div>
        </div>

        {/* Symptom → cause */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
          {symptoms.map(({ symptom, cause }) => (
            <div key={symptom} style={{ display: "flex", alignItems: "center", padding: "20px 28px", background: "white", borderRadius: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.04)", border: "1px solid rgba(217,119,6,0.08)" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 26, color: "#111", fontWeight: 700 }}>{symptom}</div>
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 19, color: "#D97706", fontWeight: 400, fontStyle: "italic", textAlign: "right" }}>← {cause}</div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: SERIF, fontSize: 24, color: "#92400E", fontStyle: "italic", marginTop: 20, marginBottom: 28 }}>
          Scan your food. Find the triggers. Feel the difference.
        </p>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/icon.png" alt="" style={{ width: 48, height: 48, borderRadius: 16 }} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>CleanLabel</div>
              <div style={{ fontSize: 15, color: "#9CA3AF" }}>Free · No account</div>
            </div>
          </div>
          <div style={{ background: "#D97706", color: "white", fontSize: 21, fontWeight: 800, padding: "18px 44px", borderRadius: 99 }}>
            Find Your Triggers
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AD 4: "Being Lied To" ──
// Typography: big bold sans claims, mono-style for the "truth" reveals
// Theme: dark, exposé feel
function Ad4() {
  const lies = [
    { claim: '"All Natural"', truth: "No legal definition. Can mean anything." },
    { claim: '"No Added MSG"', truth: "Contains MSG from yeast extract." },
    { claim: '"Heart Healthy"', truth: "Full of inflammatory seed oils." },
    { claim: '"Zero Trans Fat"', truth: "0.49g per serving. Rounded down." },
  ];

  return (
    <div style={{ width: 1080, height: 1080, fontFamily: SANS, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "#080808" }} />

      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", padding: 72 }}>
        {/* Hook — serif for gravitas */}
        <div style={{ fontFamily: SERIF, fontSize: 64, fontWeight: 400, color: "white", lineHeight: 1.05, marginBottom: 10 }}>
          Food companies are
          <br /><span style={{ fontStyle: "italic", color: "#ef4444" }}>lying to your face.</span>
        </div>
        <p style={{ fontSize: 21, color: "#6b7280", marginBottom: 36 }}>
          The front of the package is marketing. The back is the truth.
        </p>

        {/* Claims — bold sans label, mono truth */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
          {lies.map(({ claim, truth }) => (
            <div key={claim} style={{ padding: "22px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20 }}>
              <div style={{ fontSize: 28, color: "white", fontWeight: 800, marginBottom: 4 }}>{claim}</div>
              <div style={{ fontFamily: MONO, fontSize: 18, color: "#ef4444", fontWeight: 400, letterSpacing: "0.02em" }}>{truth}</div>
            </div>
          ))}
        </div>

        <p style={{ fontFamily: SERIF, fontSize: 26, color: "white", fontStyle: "italic", fontWeight: 400, marginTop: 24, marginBottom: 28 }}>
          Stop trusting the front. Scan the back.
        </p>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/icon.png" alt="" style={{ width: 44, height: 44, borderRadius: 14 }} />
            <span style={{ fontSize: 20, fontWeight: 700, color: "#6b7280" }}>CleanLabel · Free</span>
          </div>
          <div style={{ background: "white", color: "#080808", fontSize: 21, fontWeight: 800, padding: "16px 40px", borderRadius: 99 }}>
            See The Truth
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AD 5: "Grocery Aisle" ──
// Typography: light sans headline with bold numbers, clean and modern
// Theme: fresh mint green
function Ad5() {
  return (
    <div style={{ width: 1080, height: 1080, fontFamily: SANS, position: "relative", overflow: "hidden", background: "#F0FDF4" }}>
      <div style={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }} />

      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", padding: 72 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "inline-block", background: "#DCFCE7", color: "#15803D", fontSize: 17, fontWeight: 800, padding: "10px 24px", borderRadius: 99, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 28, alignSelf: "flex-start" }}>
            At the grocery store
          </div>
          {/* Light weight headline, bold key words */}
          <div style={{ fontSize: 60, fontWeight: 300, color: "#111", lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 28 }}>
            Two products.
            <br /><span style={{ fontWeight: 300 }}>Same shelf. Same price.</span>
          </div>
          <div style={{ display: "flex", gap: 20, marginBottom: 32 }}>
            <div style={{ flex: 1, padding: "32px 24px", background: "#FEE2E2", borderRadius: 24, textAlign: "center" }}>
              <div style={{ fontSize: 64, fontWeight: 900, color: "#DC2626", lineHeight: 1 }}>8</div>
              <div style={{ fontSize: 20, color: "#DC2626", fontWeight: 700, marginTop: 4 }}>toxins</div>
            </div>
            <div style={{ flex: 1, padding: "32px 24px", background: "#DCFCE7", borderRadius: 24, textAlign: "center" }}>
              <div style={{ fontSize: 64, fontWeight: 900, color: "#16A34A", lineHeight: 1 }}>0</div>
              <div style={{ fontSize: 20, color: "#16A34A", fontWeight: 700, marginTop: 4 }}>toxins</div>
            </div>
          </div>
          <div style={{ fontFamily: SERIF, fontSize: 36, fontStyle: "italic", color: "#111", marginBottom: 8 }}>
            How would you know which is which?
          </div>
          <p style={{ fontSize: 22, color: "#6B7280", fontWeight: 400 }}>
            3 seconds. Point your camera. Now you know.
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/icon.png" alt="" style={{ width: 48, height: 48, borderRadius: 16 }} />
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>CleanLabel</div>
              <div style={{ fontSize: 15, color: "#9CA3AF" }}>Free · No account</div>
            </div>
          </div>
          <div style={{ background: "#16A34A", color: "white", fontSize: 21, fontWeight: 800, padding: "18px 44px", borderRadius: 99 }}>
            Never Guess Again
          </div>
        </div>
      </div>
    </div>
  );
}

// ── AD 6: "Pantry Challenge" ──
// Typography: giant serif italic CTA, minimal sans body
// Theme: deep navy gradient, icy blue accent
function Ad6() {
  return (
    <div style={{ width: 1080, height: 1080, fontFamily: SANS, position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #0F172A 0%, #111827 50%, #0C4A6E 100%)" }}>

      <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 72, textAlign: "center" }}>
        {/* Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: 99, padding: "10px 28px", marginBottom: 44 }}>
          <span style={{ fontSize: 17, color: "#38BDF8", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Try this right now
          </span>
        </div>

        {/* Main text — serif italic for the action, sans for context */}
        <div style={{ fontFamily: SERIF, fontSize: 80, fontWeight: 400, fontStyle: "italic", color: "white", lineHeight: 1.0, letterSpacing: "-1px", marginBottom: 36 }}>
          Open your fridge.
          <br />Grab anything.
          <br /><span style={{ fontFamily: SANS, fontStyle: "normal", fontWeight: 900, color: "#38BDF8" }}>Scan it.</span>
        </div>

        <p style={{ fontSize: 26, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, maxWidth: 680, marginBottom: 56 }}>
          Most people find <span style={{ color: "white", fontWeight: 700 }}>3–5 hidden toxins</span> on their first scan.
          <br />In products they&apos;ve trusted for years.
        </p>

        {/* CTA */}
        <div style={{ width: "100%", maxWidth: 520, background: "white", color: "#0F172A", fontSize: 26, fontWeight: 900, padding: "22px 0", borderRadius: 99, textAlign: "center", marginBottom: 16 }}>
          Download Free — Try It Now
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/icon.png" alt="" style={{ width: 36, height: 36, borderRadius: 12 }} />
          <span style={{ fontSize: 19, color: "rgba(255,255,255,0.35)" }}>CleanLabel · Free on iOS · No account</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Gallery
───────────────────────────────────────────── */

const ADS = [
  { id: "7-toxins", label: "You Ate 7 Toxins", format: "1080 × 1080", component: Ad1 },
  { id: "your-kids", label: "Your Kids", format: "1080 × 1080", component: Ad2 },
  { id: "feel-bad", label: "Why You Feel Bad", format: "1080 × 1080", component: Ad3 },
  { id: "being-lied-to", label: "Being Lied To", format: "1080 × 1080", component: Ad4 },
  { id: "grocery-aisle", label: "Grocery Aisle", format: "1080 × 1080", component: Ad5 },
  { id: "pantry-challenge", label: "Pantry Challenge", format: "1080 × 1080", component: Ad6 },
];

export default function AdsPage() {
  const [current, setCurrent] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const captureRef = useRef<HTMLDivElement>(null);

  const ad = ADS[current];
  const Component = ad.component;
  const scale = 0.5;
  const [w, h] = ad.format.replace(/\s/g, "").split("×").map(Number);

  async function handleDownload() {
    if (!captureRef.current || downloading) return;
    setDownloading(true);
    try {
      const { toPng } = await import("html-to-image");
      const imgs = Array.from(captureRef.current.querySelectorAll("img"));
      await Promise.all(
        imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((res) => { img.onload = () => res(); img.onerror = () => res(); })
        )
      );
      await new Promise((r) => requestAnimationFrame(r));
      await new Promise((r) => setTimeout(r, 80));
      await toPng(captureRef.current, { width: w, height: h, pixelRatio: 2, cacheBust: true });
      const dataUrl = await toPng(captureRef.current, { width: w, height: h, pixelRatio: 2, cacheBust: true, includeQueryParams: true });
      const link = document.createElement("a");
      link.download = `cleanlabel-${ad.id}@2x.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Download failed:", err);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div style={{ position: "fixed", top: 0, left: 0, width: w, height: h, zIndex: -1, pointerEvents: "none", opacity: 0 }}>
        <div ref={captureRef} style={{ width: w, height: h }}>
          <Component />
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold">
              Ad Creatives
              <span className="text-gray-500 font-normal ml-2 text-sm">{current + 1} / {ADS.length}</span>
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">{ad.label} · {ad.format} px</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button onClick={() => setCurrent((p) => (p - 1 + ADS.length) % ADS.length)} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => setCurrent((p) => (p + 1) % ADS.length)} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <button onClick={handleDownload} disabled={downloading} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all active:scale-95">
              {downloading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                  Rendering...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 3v13M6 11l6 6 6-6M3 21h18" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Download PNG
                </>
              )}
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-3 flex gap-2 overflow-x-auto scrollbar-none">
          {ADS.map((a, i) => (
            <button key={a.id} onClick={() => setCurrent(i)} className={`shrink-0 text-xs font-bold px-4 py-2 rounded-xl transition-all ${i === current ? "bg-emerald-500 text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}>
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-start overflow-auto py-10" style={{ minHeight: 580 }}>
        <div className="shrink-0 border border-white/5 shadow-2xl shadow-black/80" style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}>
          <Component />
        </div>
      </div>

      <div className="pb-16 text-center">
        <p className="text-gray-600 text-xs">Downloads at exact {ad.format} px · Ready for Meta Ads Manager</p>
      </div>
    </div>
  );
}
