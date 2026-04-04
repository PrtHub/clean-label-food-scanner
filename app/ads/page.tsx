"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check, X, Zap } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   DESIGN PRINCIPLE:
   Every ad answers ONE question instantly:
   "What does this app do for ME?"
   No clutter. No generic stock vibes. Pure value.
───────────────────────────────────────────────────────────── */

// ── FEED 1: The Decode (1080×1080)
// Hook: ingredient names people see but don't understand
function FeedDecode() {
  const decoded = [
    { raw: "Yeast Extract", real: "Hidden MSG" },
    { raw: "Vegetable Oil", real: "Seed Oil" },
    { raw: "Natural Flavors", real: "Unknown Chemical" },
    { raw: "Maltodextrin", real: "Sugar Spike" },
    { raw: "Soluble Corn Fiber", real: "Gut Irritant" },
  ];

  return (
    <div
      className="relative overflow-hidden font-sans"
      style={{ width: 1080, height: 1080, fontFamily: "system-ui, sans-serif" }}
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/3 blur-[100px] rounded-full" />

      <div className="relative h-full flex flex-col p-[72px]">
        {/* Top label */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="CleanLabel"
              width={52}
              height={52}
              className="rounded-2xl"
            />
            <span
              style={{
                fontSize: 28,
                fontWeight: 900,
                color: "white",
                letterSpacing: "-0.5px",
              }}
            >
              Clean<span style={{ color: "#34d399" }}>Label</span>
            </span>
          </div>
          <span style={{ fontSize: 18, color: "#6b7280", fontWeight: 600 }}>
            AI Food Scanner
          </span>
        </div>

        {/* Headline */}
        <div className="mb-12">
          <p
            style={{
              fontSize: 22,
              color: "#6b7280",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 12,
            }}
          >
            What Your Label Is Hiding
          </p>
          <h2
            style={{
              fontSize: 64,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            You Read It.
            <br />
            <span style={{ color: "#34d399" }}>We Decode It.</span>
          </h2>
        </div>

        {/* Decode rows */}
        <div className="flex-1 flex flex-col justify-center gap-5">
          {decoded.map(({ raw, real }) => (
            <div key={raw} className="flex items-center gap-0">
              {/* Left: what label says */}
              <div
                className="flex-1 flex items-center gap-4 rounded-2xl border border-white/8 px-7 py-5"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <X className="w-5 h-5 shrink-0" style={{ color: "#ef4444" }} />
                <span
                  style={{ fontSize: 24, color: "#9ca3af", fontWeight: 600 }}
                >
                  {raw}
                </span>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center w-16 shrink-0">
                <div
                  style={{ fontSize: 28, color: "#34d399", fontWeight: 900 }}
                >
                  →
                </div>
              </div>

              {/* Right: what it actually is */}
              <div
                className="flex-1 flex items-center gap-4 rounded-2xl border border-emerald-500/20 px-7 py-5"
                style={{ background: "rgba(52,211,153,0.06)" }}
              >
                <Check
                  className="w-5 h-5 shrink-0"
                  style={{ color: "#34d399" }}
                />
                <span style={{ fontSize: 24, color: "white", fontWeight: 800 }}>
                  {real}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between mt-12">
          <p style={{ fontSize: 20, color: "#6b7280", fontWeight: 600 }}>
            1 free scan per day · No account needed
          </p>
          <div
            className="rounded-full px-10 py-4"
            style={{
              background: "#34d399",
              color: "#080808",
              fontSize: 20,
              fontWeight: 900,
              letterSpacing: "0.05em",
            }}
          >
            Free on App Store
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FEED 2: The Scan Moment (1080×1080)
// Hook: show the phone doing its job with result verdict
function FeedScanMoment() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080, fontFamily: "system-ui, sans-serif" }}
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/6 blur-[140px] rounded-full" />

      <div className="relative h-full flex items-center gap-0">
        {/* Left: copy */}
        <div
          className="flex flex-col justify-between h-full py-[72px] pl-[72px] pr-10"
          style={{ width: 480 }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="CleanLabel"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <span style={{ fontSize: 24, fontWeight: 900, color: "white" }}>
              Clean<span style={{ color: "#34d399" }}>Label</span>
            </span>
          </div>

          <div>
            <p
              style={{
                fontSize: 18,
                color: "#34d399",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 16,
              }}
            >
              3 Seconds Is All It Takes
            </p>
            <h2
              style={{
                fontSize: 58,
                fontWeight: 900,
                color: "white",
                lineHeight: 1.05,
                letterSpacing: "-1px",
                marginBottom: 24,
              }}
            >
              Point.
              <br />
              Scan.
              <br />
              <span style={{ color: "#34d399" }}>Know.</span>
            </h2>
            <p
              style={{
                fontSize: 20,
                color: "#9ca3af",
                lineHeight: 1.6,
                marginBottom: 40,
              }}
            >
              CleanLabel reads the actual ingredient text — not a barcode — and
              tells you exactly what&apos;s harmful and why.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Works on any product, anywhere",
                "Personalized to your diet",
                "No barcodes. No databases.",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(52,211,153,0.15)",
                      border: "1px solid rgba(52,211,153,0.3)",
                    }}
                  >
                    <Check
                      className="w-3.5 h-3.5"
                      style={{ color: "#34d399" }}
                    />
                  </div>
                  <span
                    style={{ fontSize: 18, color: "#d1d5db", fontWeight: 600 }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className="rounded-2xl px-8 py-4 text-center"
              style={{
                background: "white",
                color: "#080808",
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: "0.05em",
                marginBottom: 10,
              }}
            >
              Download Free on iOS
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#6b7280",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              1 free scan every day
            </p>
          </div>
        </div>

        {/* Right: phone screenshot */}
        <div
          className="flex-1 flex items-center justify-center h-full"
          style={{ paddingRight: 56 }}
        >
          <div className="relative">
            <div
              className="absolute -inset-12 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(52,211,153,0.12) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                width: 380,
                borderRadius: 48,
                border: "4px solid rgba(255,255,255,0.08)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="/ss/01.png"
                alt="CleanLabel scanner"
                width={380}
                height={822}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            {/* Live badge */}
            <div
              className="absolute flex items-center gap-2"
              style={{
                top: 40,
                right: -20,
                background: "#080808",
                border: "1px solid rgba(52,211,153,0.3)",
                borderRadius: 99,
                padding: "10px 20px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: "#34d399",
                  animation: "pulse 2s infinite",
                }}
              />
              <span style={{ fontSize: 15, color: "#34d399", fontWeight: 800 }}>
                Scanning...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FEED 3: The Result (1080×1080)
// Hook: show the actual toxic result screen — the value is obvious
function FeedResult() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080, fontFamily: "system-ui, sans-serif" }}
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/6 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/4 blur-[120px] rounded-full" />

      <div className="relative h-full flex items-center">
        {/* Left: phone */}
        <div
          className="flex items-center justify-center h-full"
          style={{ paddingLeft: 56, width: 480 }}
        >
          <div className="relative">
            <div
              className="absolute -inset-12 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(239,68,68,0.1) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                width: 340,
                borderRadius: 44,
                border: "4px solid rgba(239,68,68,0.2)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="/ss/02.png"
                alt="CleanLabel results"
                width={340}
                height={735}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="flex flex-col justify-between h-full py-[72px] pr-[72px] pl-10 flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="CleanLabel"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span style={{ fontSize: 24, fontWeight: 900, color: "white" }}>
                Clean<span style={{ color: "#34d399" }}>Label</span>
              </span>
            </div>
          </div>

          <div>
            <p
              style={{
                fontSize: 18,
                color: "#f87171",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: 16,
              }}
            >
              Real Result. Real Product.
            </p>
            <h2
              style={{
                fontSize: 54,
                fontWeight: 900,
                color: "white",
                lineHeight: 1.05,
                letterSpacing: "-1px",
                marginBottom: 28,
              }}
            >
              Your Snack Has
              <br />
              <span style={{ color: "#ef4444" }}>10 Harmful</span>
              <br />
              Ingredients.
            </h2>
            <p
              style={{
                fontSize: 20,
                color: "#9ca3af",
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              Seed oils, artificial dyes, hidden MSG — all flagged instantly.
              This is what CleanLabel shows you every single time you scan.
            </p>

            {/* Toxin tags */}
            <div className="flex flex-wrap gap-3">
              {[
                "Canola Oil",
                "Red 40",
                "MSG",
                "Maltodextrin",
                "Yellow 6",
                "Corn Syrup",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 17,
                    color: "#f87171",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: 99,
                    padding: "6px 18px",
                    background: "rgba(239,68,68,0.06)",
                    fontWeight: 700,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div
              className="rounded-2xl px-8 py-4 text-center"
              style={{
                background: "#34d399",
                color: "#080808",
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: "0.05em",
                marginBottom: 10,
              }}
            >
              Scan Yours — Free on iOS
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#6b7280",
                textAlign: "center",
                fontWeight: 500,
              }}
            >
              No account · 1 free scan daily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FEED 4: The Free Value (1080×1080)
// Hook: remove every friction point — it's FREE, daily, no account
function FeedFreeValue() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080, fontFamily: "system-ui, sans-serif" }}
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[160px] rounded-full" />

      <div className="relative h-full flex flex-col items-center justify-between p-[80px]">
        {/* Top */}
        <div className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={52}
            height={52}
            className="rounded-2xl"
          />
          <span style={{ fontSize: 28, fontWeight: 900, color: "white" }}>
            Clean<span style={{ color: "#34d399" }}>Label</span>
          </span>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center text-center">
          <div
            className="flex items-center gap-3 rounded-full px-8 py-3 mb-12"
            style={{
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.2)",
            }}
          >
            <Zap className="w-5 h-5" style={{ color: "#34d399" }} />
            <span
              style={{
                fontSize: 18,
                color: "#34d399",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              No Catch. Genuinely Free.
            </span>
          </div>

          <h2
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.0,
              letterSpacing: "-2px",
              marginBottom: 28,
            }}
          >
            Know What&apos;s
            <br />
            In Your Food.
            <br />
            <span style={{ color: "#34d399" }}>Every Day.</span>
          </h2>

          <p
            style={{
              fontSize: 24,
              color: "#9ca3af",
              lineHeight: 1.6,
              maxWidth: 680,
            }}
          >
            1 free AI ingredient scan per day. No subscription. No account. Just
            point your phone at any label and get the truth.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {[
            { val: "1 scan", label: "Free every day" },
            { val: "3 sec", label: "To get results" },
            { val: "0 data", label: "Stored on servers" },
          ].map(({ val, label }) => (
            <div
              key={val}
              className="flex flex-col items-center rounded-3xl py-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                style={{
                  fontSize: 42,
                  fontWeight: 900,
                  color: "white",
                  letterSpacing: "-1px",
                }}
              >
                {val}
              </span>
              <span
                style={{
                  fontSize: 17,
                  color: "#6b7280",
                  fontWeight: 600,
                  marginTop: 6,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="w-full rounded-2xl py-6 text-center"
          style={{
            background: "white",
            color: "#080808",
            fontSize: 22,
            fontWeight: 900,
            letterSpacing: "0.05em",
          }}
        >
          Download Free on iOS
        </div>
      </div>
    </div>
  );
}

// ── STORY 1: The Grocery Moment (1080×1920)
// Scenario: standing in the aisle, about to make the wrong choice
function StoryGroceryMoment() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1920, fontFamily: "system-ui, sans-serif" }}
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-500/7 blur-[140px] rounded-full" />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/4 blur-[120px] rounded-full" />

      <div className="relative h-full flex flex-col px-[80px] py-[90px]">
        {/* Brand */}
        <div className="flex items-center gap-4 mb-16">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={56}
            height={56}
            className="rounded-2xl"
          />
          <span style={{ fontSize: 30, fontWeight: 900, color: "white" }}>
            Clean<span style={{ color: "#34d399" }}>Label</span>
          </span>
        </div>

        {/* Act 1: The question */}
        <div className="mb-14">
          <p
            style={{
              fontSize: 22,
              color: "#6b7280",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 16,
            }}
          >
            You&apos;re at the grocery store
          </p>
          <h2
            style={{
              fontSize: 70,
              fontWeight: 900,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            Is this snack
            <br />
            actually good
            <br />
            <span style={{ color: "#34d399" }}>for you?</span>
          </h2>
        </div>

        {/* The label problem */}
        <div
          className="rounded-3xl p-10 mb-10"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              fontSize: 20,
              color: "#9ca3af",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            The front says:{" "}
            <span style={{ color: "white", fontWeight: 700 }}>
              &ldquo;All Natural&rdquo;
            </span>{" "}
            &nbsp;
            <span style={{ color: "white", fontWeight: 700 }}>
              &ldquo;No Artificial Colors&rdquo;
            </span>
          </p>
          <p
            style={{
              fontSize: 20,
              color: "#9ca3af",
              lineHeight: 1.7,
              fontWeight: 500,
              marginTop: 8,
            }}
          >
            The ingredients say:{" "}
            <span style={{ color: "#f87171", fontWeight: 700 }}>
              something very different.
            </span>
          </p>
        </div>

        {/* Phone */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div
              className="absolute -inset-16 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(52,211,153,0.1) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                width: 420,
                borderRadius: 52,
                border: "4px solid rgba(255,255,255,0.08)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
              }}
            >
              <Image
                src="/ss/01.png"
                alt="CleanLabel scanning"
                width={420}
                height={909}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            <div
              className="absolute flex items-center gap-2"
              style={{
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                background: "#34d399",
                borderRadius: 99,
                padding: "12px 28px",
                boxShadow: "0 8px 32px rgba(52,211,153,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ fontSize: 18, color: "#080808", fontWeight: 900 }}>
                Scanning ingredients...
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-5 mt-20">
          <div
            className="w-full rounded-2xl py-6 text-center"
            style={{
              background: "white",
              color: "#080808",
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            Download Free on iOS
          </div>
          <p style={{ fontSize: 18, color: "#6b7280", fontWeight: 600 }}>
            1 free scan every day · No account needed
          </p>
        </div>
      </div>
    </div>
  );
}

// ── STORY 2: Before & After (1080×1920)
// The transformation: ignorance → knowledge
function StoryBeforeAfter() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1920, fontFamily: "system-ui, sans-serif" }}
    >
      <div className="absolute inset-0 bg-[#080808]" />

      <div className="relative h-full flex flex-col px-[80px] py-[90px]">
        {/* Brand */}
        <div className="flex items-center gap-4 mb-14">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={56}
            height={56}
            className="rounded-2xl"
          />
          <span style={{ fontSize: 30, fontWeight: 900, color: "white" }}>
            Clean<span style={{ color: "#34d399" }}>Label</span>
          </span>
        </div>

        <h2
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            marginBottom: 14,
          }}
        >
          Before CleanLabel
          <br />
          vs After.
        </h2>
        <p
          style={{
            fontSize: 22,
            color: "#6b7280",
            marginBottom: 48,
            fontWeight: 500,
          }}
        >
          The difference is what you know.
        </p>

        {/* Before block */}
        <div
          className="rounded-3xl p-10 mb-8"
          style={{
            background: "rgba(239,68,68,0.05)",
            border: "1px solid rgba(239,68,68,0.2)",
            flex: 1,
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "#f87171",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 24,
            }}
          >
            ✕ &nbsp;Before
          </p>
          <div className="flex flex-col gap-5">
            {[
              'You see "Natural Flavors" — sounds fine',
              'You buy the "No Artificial Colors" version',
              'You trust the "Organic" badge on the front',
              "You don't know what Maltodextrin does to you",
              "You eat it. Again. And again.",
            ].map((t) => (
              <div key={t} className="flex items-start gap-4">
                <X
                  className="w-6 h-6 shrink-0 mt-1"
                  style={{ color: "#ef4444" }}
                />
                <span
                  style={{
                    fontSize: 22,
                    color: "#9ca3af",
                    fontWeight: 500,
                    lineHeight: 1.5,
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* After block */}
        <div
          className="rounded-3xl p-10 mb-14"
          style={{
            background: "rgba(52,211,153,0.05)",
            border: "1px solid rgba(52,211,153,0.2)",
            flex: 1,
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "#34d399",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 24,
            }}
          >
            ✓ &nbsp;After CleanLabel
          </p>
          <div className="flex flex-col gap-5">
            {[
              "You scan. AI reads every single ingredient",
              "Toxins flagged by their real name instantly",
              "You know exactly what you're putting in your body",
              "You put the product back. You choose better.",
              "You eat with confidence.",
            ].map((t) => (
              <div key={t} className="flex items-start gap-4">
                <Check
                  className="w-6 h-6 shrink-0 mt-1"
                  style={{ color: "#34d399" }}
                />
                <span
                  style={{
                    fontSize: 22,
                    color: "white",
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="w-full rounded-2xl py-6 text-center"
          style={{
            background: "#34d399",
            color: "#080808",
            fontSize: 24,
            fontWeight: 900,
            marginBottom: 14,
          }}
        >
          Start Scanning Free
        </div>
        <p
          style={{
            fontSize: 18,
            color: "#6b7280",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          iOS · 1 free scan per day · No account
        </p>
      </div>
    </div>
  );
}

// ── STORY 3: The Result Close-Up (1080×1920)
// Let the app speak for itself — show the full result screen with context
function StoryResultCloseUp() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1920, fontFamily: "system-ui, sans-serif" }}
    >
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-500/6 blur-[140px] rounded-full" />
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/4 blur-[120px] rounded-full" />

      <div className="relative h-full flex flex-col px-[80px] py-[90px]">
        {/* Brand */}
        <div className="flex items-center gap-4 mb-14">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={56}
            height={56}
            className="rounded-2xl"
          />
          <span style={{ fontSize: 30, fontWeight: 900, color: "white" }}>
            Clean<span style={{ color: "#34d399" }}>Label</span>
          </span>
        </div>

        <h2
          style={{
            fontSize: 62,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            letterSpacing: "-1.5px",
            marginBottom: 10,
          }}
        >
          This is what we
          <br />
          found in your
          <br />
          <span style={{ color: "#ef4444" }}>&ldquo;healthy&rdquo; chips.</span>
        </h2>
        <p
          style={{
            fontSize: 22,
            color: "#6b7280",
            marginBottom: 48,
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          One scan. Instant verdict. No guessing.
        </p>

        {/* Full result screenshot */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div
              className="absolute -inset-16 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(239,68,68,0.08) 0%, transparent 70%)",
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                width: 460,
                borderRadius: 52,
                border: "4px solid rgba(239,68,68,0.2)",
                boxShadow: "0 40px 120px rgba(0,0,0,0.7)",
              }}
            >
              <Image
                src="/ss/02.png"
                alt="Toxin results"
                width={460}
                height={996}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        {/* Callout */}
        <div
          className="rounded-3xl p-8 my-10"
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <p
            style={{
              fontSize: 22,
              color: "#f87171",
              fontWeight: 700,
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            10 harmful ingredients found — including seed oils, artificial dyes,
            and hidden MSG. All in one &ldquo;snack.&rdquo;
          </p>
        </div>

        {/* CTA */}
        <div
          className="w-full rounded-2xl py-6 text-center"
          style={{
            background: "white",
            color: "#080808",
            fontSize: 24,
            fontWeight: 900,
            marginBottom: 14,
          }}
        >
          Scan Your Food Free
        </div>
        <p
          style={{
            fontSize: 18,
            color: "#6b7280",
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Free on iOS · No account needed
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Gallery page
───────────────────────────────────────────── */

const ADS = [
  {
    id: "feed-decode",
    label: "Feed — The Decode",
    format: "1080 × 1080",
    component: FeedDecode,
  },
  {
    id: "feed-scan",
    label: "Feed — The Scan Moment",
    format: "1080 × 1080",
    component: FeedScanMoment,
  },
  {
    id: "feed-result",
    label: "Feed — The Result",
    format: "1080 × 1080",
    component: FeedResult,
  },
  {
    id: "feed-free",
    label: "Feed — Free Value",
    format: "1080 × 1080",
    component: FeedFreeValue,
  },
  {
    id: "story-grocery",
    label: "Story — Grocery Moment",
    format: "1080 × 1920",
    component: StoryGroceryMoment,
  },
  {
    id: "story-before",
    label: "Story — Before & After",
    format: "1080 × 1920",
    component: StoryBeforeAfter,
  },
  {
    id: "story-result",
    label: "Story — Result Close-Up",
    format: "1080 × 1920",
    component: StoryResultCloseUp,
  },
];

export default function AdsPage() {
  const [current, setCurrent] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const captureRef = useRef<HTMLDivElement>(null);

  const ad = ADS[current];
  const Component = ad.component;
  const isStory = ad.format.includes("1920");
  const scale = isStory ? 0.32 : 0.5;
  const [w, h] = ad.format.replace(/\s/g, "").split("×").map(Number);

  async function handleDownload() {
    if (!captureRef.current || downloading) return;
    setDownloading(true);
    try {
      const { toPng } = await import("html-to-image");

      // Wait for every <img> inside the capture target to fully load
      const imgs = Array.from(captureRef.current.querySelectorAll("img"));
      await Promise.all(
        imgs.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((res) => {
                img.onload = () => res();
                img.onerror = () => res();
              })
        )
      );

      // Extra paint frame to ensure everything is rendered
      await new Promise((r) => requestAnimationFrame(r));
      await new Promise((r) => setTimeout(r, 80));

      // Capture at 2× density — output: 2160×2160 (feed) or 2160×3840 (story)
      // html-to-image needs two passes to fully embed external resources
      await toPng(captureRef.current, { width: w, height: h, pixelRatio: 2, cacheBust: true });
      const dataUrl = await toPng(captureRef.current, {
        width: w,
        height: h,
        pixelRatio: 2,
        cacheBust: true,
        includeQueryParams: true,
      });

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
      {/* Hidden full-resolution capture target */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: w,
          height: h,
          zIndex: -1,
          pointerEvents: "none",
          opacity: 0,
        }}
      >
        <div ref={captureRef} style={{ width: w, height: h }}>
          <Component />
        </div>
      </div>

      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-[#080808]/90 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-base font-bold">
              Ad Creatives
              <span className="text-gray-500 font-normal ml-2 text-sm">
                {current + 1} / {ADS.length}
              </span>
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">
              {ad.label} · {ad.format} px
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Prev / Next */}
            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setCurrent((p) => (p - 1 + ADS.length) % ADS.length)
                }
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrent((p) => (p + 1) % ADS.length)}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Download */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl transition-all active:scale-95"
            >
              {downloading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Rendering...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M12 3v13M6 11l6 6 6-6M3 21h18"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Download PNG
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab strip */}
        <div className="max-w-7xl mx-auto px-6 pb-3 flex gap-2 overflow-x-auto scrollbar-none">
          {ADS.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setCurrent(i)}
              className={`shrink-0 text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                i === current
                  ? "bg-emerald-500 text-black"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Preview canvas */}
      <div
        className="flex justify-center items-start overflow-auto py-10"
        style={{ minHeight: isStory ? 700 : 580 }}
      >
        <div
          className="shrink-0 border border-white/5 shadow-2xl shadow-black/80"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            marginBottom: isStory ? h * scale - h * (1 - scale) + 40 : 0,
          }}
        >
          <Component />
        </div>
      </div>

      <div className="pb-16 text-center">
        <p className="text-gray-600 text-xs">
          Downloads at exact {ad.format} px · Ready for Meta Ads Manager
        </p>
      </div>
    </div>
  );
}
