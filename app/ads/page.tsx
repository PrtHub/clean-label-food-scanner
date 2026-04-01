"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldAlert,
  ShieldCheck,
  Star,
  Scan,
  Eye,
  Lock,
  Zap,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  AlertTriangle,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Ad Creative Components
   Each is a fixed-dimension div ready to screenshot.
   ───────────────────────────────────────────── */

// ── FEED AD 1: Shock Discovery (1080x1080) ──
function FeedShock() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-emerald-500/5 blur-[100px] rounded-full" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-between h-full p-16">
        {/* Top badge */}
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/25 rounded-full px-6 py-3">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          <span className="text-red-400 text-lg font-bold tracking-wide uppercase">
            Ingredient Alert
          </span>
        </div>

        {/* Center - Product verdict */}
        <div className="flex flex-col items-center text-center -mt-4">
          <div className="w-[200px] h-[200px] rounded-[3rem] bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center mb-10 shadow-[0_0_80px_rgba(239,68,68,0.15)]">
            <ShieldAlert className="w-24 h-24 text-red-500" />
          </div>

          <h2 className="text-[72px] leading-[1] font-black text-white tracking-tight mb-6">
            Your &ldquo;Healthy&rdquo;
            <br />
            <span className="text-red-500">Snack Is Lying</span>
          </h2>

          <p className="text-[28px] text-gray-400 max-w-[700px] leading-snug">
            We scanned 50 &ldquo;organic&rdquo; products.
            <br />
            <span className="text-red-400 font-bold">
              42 contained hidden toxins.
            </span>
          </p>
        </div>

        {/* Toxic ingredients preview */}
        <div className="flex flex-col items-center gap-5 w-full">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Maltodextrin",
              "Canola Oil",
              "Red 40",
              "MSG",
              "Yellow 6",
              "Corn Syrup",
            ].map((ing) => (
              <span
                key={ing}
                className="text-red-400 text-[18px] font-semibold border border-red-500/30 rounded-full px-5 py-2 bg-red-500/5"
              >
                {ing}
              </span>
            ))}
          </div>

          {/* App branding */}
          <div className="flex items-center gap-4 mt-2">
            <Image
              src="/icon.png"
              alt="CleanLabel"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <span className="text-white text-[28px] font-black tracking-tight">
              Clean<span className="text-emerald-400">Label</span>
            </span>
            <span className="text-gray-600 text-[20px]">|</span>
            <span className="text-gray-400 text-[20px] font-medium">
              Free on the App Store
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FEED AD 2: Feature Showcase (1080x1080) ──
function FeedFeature() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-emerald-500/8 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 blur-[100px] rounded-full" />

      <div className="relative flex h-full">
        {/* Left side - Text */}
        <div className="flex-1 flex flex-col justify-between p-16 pr-8">
          {/* Top */}
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="CleanLabel"
              width={56}
              height={56}
              className="rounded-2xl"
            />
            <div>
              <span className="text-white text-[28px] font-black tracking-tight block leading-tight">
                Clean<span className="text-emerald-400">Label</span>
              </span>
              <span className="text-gray-500 text-[16px] font-medium">
                AI Food Scanner
              </span>
            </div>
          </div>

          {/* Middle */}
          <div>
            <h2 className="text-[62px] leading-[1.05] font-black text-white tracking-tight mb-8">
              Scan Any
              <br />
              Label.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Know Every
                <br />
                Toxin.
              </span>
            </h2>

            <div className="space-y-5">
              {[
                "AI reads actual ingredients",
                "Flags toxins in seconds",
                "Personalized to your diet",
                "No barcodes needed",
              ].map((point) => (
                <div key={point} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 text-[22px] font-semibold">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-gray-400 text-[18px] font-medium">
              Free on iOS
            </span>
          </div>
        </div>

        {/* Right side - Screenshot */}
        <div className="flex items-center justify-center pr-10">
          <div className="relative">
            <div className="absolute -inset-8 bg-emerald-500/10 blur-[60px] rounded-full" />
            <div className="relative w-[380px] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/60">
              <Image
                src="/ss/01.png"
                alt="CleanLabel scanner"
                width={380}
                height={823}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FEED AD 3: Before/After Scan (1080x1080) ──
function FeedBeforeAfter() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="relative flex flex-col h-full p-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Image
              src="/icon.png"
              alt="CleanLabel"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <span className="text-white text-[26px] font-black tracking-tight">
              Clean<span className="text-emerald-400">Label</span>
            </span>
          </div>
          <span className="text-gray-500 text-[18px] font-medium">
            Free on the App Store
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[56px] leading-[1.05] font-black text-white tracking-tight text-center mb-14">
          What You See vs.
          <br />
          <span className="text-red-500">What&apos;s Actually Inside</span>
        </h2>

        {/* Split comparison */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Before - what you see */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Eye className="w-7 h-7 text-gray-400" />
              <span className="text-gray-400 text-[22px] font-bold uppercase tracking-widest">
                The Label Says
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-5">
              {[
                "Natural Flavors",
                "Vegetable Oil",
                "Spice Extractives",
                "Organic Corn Starch",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-white text-[24px] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="text-emerald-400 text-[20px] font-bold bg-emerald-500/10 rounded-full px-6 py-2">
                Looks Clean
              </span>
            </div>
          </div>

          {/* After - what AI finds */}
          <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.03] p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Scan className="w-7 h-7 text-red-400" />
              <span className="text-red-400 text-[22px] font-bold uppercase tracking-widest">
                AI Detects
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center space-y-5">
              {[
                "Hidden MSG (Yeast Extract)",
                "Seed Oil (Canola)",
                "Artificial Color (Red 40)",
                "Maltodextrin (Sugar Spike)",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-red-300 text-[24px] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="text-red-400 text-[20px] font-bold bg-red-500/10 rounded-full px-6 py-2">
                4 Toxins Found
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── FEED AD 4: Social Proof / Trust (1080x1080) ──
function FeedTrust() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full" />

      <div className="relative flex flex-col items-center justify-between h-full p-16">
        {/* Icon */}
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={120}
            height={120}
            className="rounded-[2rem] shadow-2xl"
          />
          <span className="text-white text-[36px] font-black tracking-tight">
            Clean<span className="text-emerald-400">Label</span>
          </span>
        </div>

        {/* Center text */}
        <div className="text-center -mt-4">
          <h2 className="text-[68px] leading-[1.05] font-black text-white tracking-tight mb-8">
            Your Food
            <br />
            Deserves
            <br />
            <span className="text-emerald-400">Transparency</span>
          </h2>
          <p className="text-[26px] text-gray-400 max-w-[700px] leading-relaxed">
            No account. No tracking. No data sold.
            <br />
            Just honest ingredient analysis.
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex items-center gap-10">
            {[
              { icon: Lock, text: "Privacy-First" },
              { icon: Zap, text: "Instant Results" },
              { icon: ShieldCheck, text: "AI-Powered" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-gray-300 text-[20px] font-bold">
                  {text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-gray-400 text-[22px] font-medium">
              Free on the App Store
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── STORY AD 1: Scanner in Action (1080x1920) ──
function StoryScanner() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1920 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/8 blur-[120px] rounded-full" />
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-teal-500/5 blur-[100px] rounded-full" />

      <div className="relative flex flex-col items-center h-full px-16 py-20">
        {/* Top - App branding */}
        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={56}
            height={56}
            className="rounded-2xl"
          />
          <span className="text-white text-[32px] font-black tracking-tight">
            Clean<span className="text-emerald-400">Label</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-[72px] leading-[1.05] font-black text-white tracking-tight text-center mb-6">
          Stop Guessing.
          <br />
          <span className="text-emerald-400">Start Scanning.</span>
        </h2>

        <p className="text-[28px] text-gray-400 text-center mb-14 max-w-[800px]">
          Point your camera at any ingredient label.
          <br />
          Get an instant AI verdict.
        </p>

        {/* Phone screenshot */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute -inset-16 bg-emerald-500/8 blur-[80px] rounded-full" />
          <div className="relative w-[480px] rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/60">
            <Image
              src="/ss/01.png"
              alt="CleanLabel scanner"
              width={480}
              height={1040}
              className="w-full h-auto"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -right-2 top-[30%] bg-emerald-500 text-white text-[18px] font-bold px-6 py-3 rounded-full shadow-2xl">
            AI Scanning...
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-5 mt-14">
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <div className="bg-white text-black text-[26px] font-black uppercase tracking-widest px-14 py-5 rounded-full">
            Download Free
          </div>
          <span className="text-gray-500 text-[20px]">
            Available on the App Store
          </span>
        </div>
      </div>
    </div>
  );
}

// ── STORY AD 2: Toxic Reveal (1080x1920) ──
function StoryToxicReveal() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1920 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/8 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full" />

      <div className="relative flex flex-col items-center h-full px-16 py-20">
        {/* Top */}
        <div className="flex items-center gap-4 mb-10">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={56}
            height={56}
            className="rounded-2xl"
          />
          <span className="text-white text-[32px] font-black tracking-tight">
            Clean<span className="text-emerald-400">Label</span>
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-[64px] leading-[1.08] font-black text-white tracking-tight text-center mb-5">
          We Scanned
          <br />
          America&apos;s
          <br />
          <span className="text-red-500">#1 Selling Chips</span>
        </h2>

        <p className="text-[28px] text-gray-400 text-center mb-14">
          Here&apos;s what the AI found...
        </p>

        {/* Results screenshot */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute -inset-16 bg-red-500/6 blur-[80px] rounded-full" />
          <div className="relative w-[480px] rounded-[3rem] overflow-hidden border-4 border-red-500/20 shadow-2xl shadow-black/60">
            <Image
              src="/ss/02.png"
              alt="CleanLabel results showing toxins"
              width={480}
              height={1040}
              className="w-full h-auto"
            />
          </div>
          {/* Warning badge */}
          <div className="absolute -left-2 top-[25%] bg-red-500 text-white text-[18px] font-bold px-6 py-3 rounded-full shadow-2xl flex items-center gap-2">
            <ShieldAlert className="w-5 h-5" />
            10 Toxins Detected
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-5 mt-14">
          <p className="text-[24px] text-gray-400 text-center max-w-[700px]">
            Seed oils, artificial dyes, and MSG —
            <br />
            all hiding in plain sight.
          </p>
          <div className="bg-emerald-500 text-white text-[26px] font-black uppercase tracking-widest px-14 py-5 rounded-full shadow-lg shadow-emerald-500/25">
            Scan Your Food Free
          </div>
        </div>
      </div>
    </div>
  );
}

// ── STORY AD 3: Problem/Solution (1080x1920) ──
function StoryProblemSolution() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1920 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />

      <div className="relative flex flex-col h-full px-16 py-20">
        {/* Top branding */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <Image
            src="/icon.png"
            alt="CleanLabel"
            width={48}
            height={48}
            className="rounded-xl"
          />
          <span className="text-white text-[28px] font-black tracking-tight">
            Clean<span className="text-emerald-400">Label</span>
          </span>
        </div>

        {/* Problem section */}
        <div className="rounded-[2rem] border border-red-500/20 bg-red-500/[0.03] p-12 mb-10">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-red-400" />
            <span className="text-red-400 text-[24px] font-black uppercase tracking-widest">
              The Problem
            </span>
          </div>
          <h3 className="text-[48px] leading-[1.1] font-black text-white mb-8">
            85% of &ldquo;Healthy&rdquo; foods
            <br />
            contain hidden toxins
          </h3>
          <div className="space-y-5">
            {[
              "MSG disguised as 'Yeast Extract'",
              "Seed oils labeled 'Vegetable Oil'",
              "Sugar spikes from 'Maltodextrin'",
              "Banned dyes still in US products",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <X className="w-6 h-6 text-red-400 shrink-0" />
                <span className="text-gray-300 text-[24px] font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Solution section */}
        <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/[0.03] p-12 mb-10 flex-1">
          <div className="flex items-center gap-3 mb-8">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <span className="text-emerald-400 text-[24px] font-black uppercase tracking-widest">
              The Solution
            </span>
          </div>
          <h3 className="text-[48px] leading-[1.1] font-black text-white mb-8">
            CleanLabel&apos;s AI
            <br />
            catches them all
          </h3>
          <div className="space-y-5">
            {[
              "Point your camera at any label",
              "AI reads every ingredient instantly",
              "Hidden toxins exposed by name",
              "Personalized to YOUR dietary needs",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <Check className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="text-gray-300 text-[24px] font-semibold">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-5">
          <div className="bg-white text-black text-[26px] font-black uppercase tracking-widest px-14 py-5 rounded-full">
            Download Free on iOS
          </div>
          <span className="text-gray-500 text-[20px]">
            No account required
          </span>
        </div>
      </div>
    </div>
  );
}

// ── CAROUSEL CARDS (1080x1080 each) ──
function CarouselCard1() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/6 blur-[120px] rounded-full" />

      <div className="relative flex flex-col items-center justify-center h-full p-16 text-center">
        <div className="w-[160px] h-[160px] rounded-full bg-red-500/10 border-2 border-red-500/25 flex items-center justify-center mb-12 shadow-[0_0_60px_rgba(239,68,68,0.1)]">
          <AlertTriangle className="w-20 h-20 text-red-500" />
        </div>

        <h2 className="text-[72px] leading-[1.05] font-black text-white tracking-tight mb-8">
          Did You Know?
        </h2>

        <p className="text-[32px] text-gray-300 max-w-[750px] leading-snug mb-10">
          The average American consumes
          <br />
          <span className="text-red-400 font-black text-[40px]">
            10+ hidden toxins daily
          </span>
          <br />
          without even knowing it.
        </p>

        <span className="text-gray-500 text-[22px] font-medium">
          Swipe to see how to fix this &rarr;
        </span>
      </div>
    </div>
  );
}

function CarouselCard2() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-emerald-500/6 blur-[120px] rounded-full" />

      <div className="relative flex h-full items-center p-16">
        <div className="flex-1 pr-8">
          <div className="flex items-center gap-3 mb-8">
            <Scan className="w-8 h-8 text-emerald-400" />
            <span className="text-emerald-400 text-[22px] font-bold uppercase tracking-widest">
              Step 1
            </span>
          </div>
          <h2 className="text-[56px] leading-[1.08] font-black text-white tracking-tight mb-6">
            Point &
            <br />
            Scan
          </h2>
          <p className="text-[26px] text-gray-400 leading-relaxed">
            Just point your camera at any ingredient label. No barcodes needed.
            Our AI reads the actual text.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-emerald-500/8 blur-[60px] rounded-full" />
          <div className="relative w-[380px] rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image
              src="/ss/01.png"
              alt="Scanner"
              width={380}
              height={823}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselCard3() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-[30%] left-0 w-[500px] h-[500px] bg-red-500/6 blur-[120px] rounded-full" />

      <div className="relative flex h-full items-center p-16">
        <div className="relative mr-8">
          <div className="absolute -inset-8 bg-red-500/6 blur-[60px] rounded-full" />
          <div className="relative w-[380px] rounded-[2.5rem] overflow-hidden border-4 border-red-500/15 shadow-2xl">
            <Image
              src="/ss/02.png"
              alt="Results"
              width={380}
              height={823}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex-1 pl-8">
          <div className="flex items-center gap-3 mb-8">
            <ShieldAlert className="w-8 h-8 text-red-400" />
            <span className="text-red-400 text-[22px] font-bold uppercase tracking-widest">
              Step 2
            </span>
          </div>
          <h2 className="text-[56px] leading-[1.08] font-black text-white tracking-tight mb-6">
            Toxins
            <br />
            <span className="text-red-500">Exposed</span>
          </h2>
          <p className="text-[26px] text-gray-400 leading-relaxed">
            Every harmful ingredient flagged instantly. Seed oils, dyes, MSG —
            nothing hides from our AI.
          </p>
        </div>
      </div>
    </div>
  );
}

function CarouselCard4() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width: 1080, height: 1080 }}
    >
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[150px] rounded-full" />

      <div className="relative flex flex-col items-center justify-center h-full p-16 text-center">
        <Image
          src="/icon.png"
          alt="CleanLabel"
          width={140}
          height={140}
          className="rounded-[2.5rem] shadow-2xl mb-12"
        />

        <h2 className="text-[68px] leading-[1.05] font-black text-white tracking-tight mb-6">
          Protect Your
          <br />
          <span className="text-emerald-400">Health Today</span>
        </h2>

        <p className="text-[28px] text-gray-400 mb-14 max-w-[700px]">
          Join thousands scanning smarter.
          <br />
          Free forever. No account needed.
        </p>

        <div className="bg-white text-black text-[30px] font-black uppercase tracking-widest px-16 py-6 rounded-full mb-8">
          Download Free
        </div>

        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-7 h-7 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <span className="text-gray-500 text-[20px] mt-3">
          Available on the App Store
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Ads Gallery Page
   ───────────────────────────────────────────── */

const ADS = [
  {
    id: "feed-shock",
    label: "Feed — Shock Discovery",
    format: "1080 x 1080",
    component: FeedShock,
  },
  {
    id: "feed-feature",
    label: "Feed — Feature Showcase",
    format: "1080 x 1080",
    component: FeedFeature,
  },
  {
    id: "feed-before-after",
    label: "Feed — Before vs After",
    format: "1080 x 1080",
    component: FeedBeforeAfter,
  },
  {
    id: "feed-trust",
    label: "Feed — Trust / Privacy",
    format: "1080 x 1080",
    component: FeedTrust,
  },
  {
    id: "story-scanner",
    label: "Story — Scanner in Action",
    format: "1080 x 1920",
    component: StoryScanner,
  },
  {
    id: "story-toxic",
    label: "Story — Toxic Reveal",
    format: "1080 x 1920",
    component: StoryToxicReveal,
  },
  {
    id: "story-problem",
    label: "Story — Problem / Solution",
    format: "1080 x 1920",
    component: StoryProblemSolution,
  },
  {
    id: "carousel-1",
    label: "Carousel 1 — Hook",
    format: "1080 x 1080",
    component: CarouselCard1,
  },
  {
    id: "carousel-2",
    label: "Carousel 2 — Scan",
    format: "1080 x 1080",
    component: CarouselCard2,
  },
  {
    id: "carousel-3",
    label: "Carousel 3 — Results",
    format: "1080 x 1080",
    component: CarouselCard3,
  },
  {
    id: "carousel-4",
    label: "Carousel 4 — CTA",
    format: "1080 x 1080",
    component: CarouselCard4,
  },
];

export default function AdsPage() {
  const [current, setCurrent] = useState(0);
  const ad = ADS[current];
  const Component = ad.component;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Controls bar */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold">
              Ad Creatives{" "}
              <span className="text-gray-500 font-normal">
                ({current + 1}/{ADS.length})
              </span>
            </h1>
            <p className="text-sm text-gray-500">
              {ad.label} &middot; {ad.format}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setCurrent((p) => (p - 1 + ADS.length) % ADS.length)
              }
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((p) => (p + 1) % ADS.length)}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="max-w-7xl mx-auto px-6 pb-4 flex gap-2 overflow-x-auto">
          {ADS.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setCurrent(i)}
              className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                i === current
                  ? "bg-emerald-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Canvas - scrollable container for the fixed-size ad */}
      <div className="flex justify-center py-10 overflow-auto">
        <div
          className="shrink-0 shadow-2xl shadow-black/50 border border-white/5"
          style={{ transform: "scale(0.5)", transformOrigin: "top center" }}
        >
          <Component />
        </div>
      </div>

      {/* Instructions */}
      <div className="max-w-2xl mx-auto px-6 pb-16 text-center">
        <p className="text-gray-500 text-sm">
          Each creative is rendered at exact pixel dimensions ({ad.format}).
          <br />
          To screenshot at full resolution: open browser DevTools, set device to{" "}
          {ad.format.replace(" x ", "x")}, then capture.
        </p>
      </div>
    </div>
  );
}
