import Image from "next/image";
import {
  Check,
  Flame,
  Zap,
  History,
  UserCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Lock,
} from "lucide-react";
import { AnimateIn } from "./animate-in";
import { FEATURES } from "@/lib/landing-data";

const SCANNER_POINTS = [
  "No barcodes required—reads direct text",
  "Works on any product, globally",
  "Instant AI Processing",
  "Instant deceptive name detection",
];

const RESULTS_POINTS = [
  "Clear 'Toxic' or 'Clean' verdict",
  "Every harmful additive flagged",
  "Personalized dietary violations",
  "Plain-english health insights",
];

export function Showcase() {
  return (
    <section
      id="features"
      className="relative bg-[#0A0A0A] py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimateIn className="text-center mb-24">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              The Future of Shopping
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            A Healthier Life, <br />
            <span className="text-transparent bg-clip-text bg-[#10B981] bg-size-[200%_100%] animate-gradient-x">
              Simplified.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            CleanLabel turns your phone into a powerful laboratory-grade
            scanner, unmasking hidden additives in seconds.
          </p>
        </AnimateIn>

        {/* ── Feature 1: Powerful Scanner ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-40">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <AnimateIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <Search className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  AI Vision Scanner
                </h3>
              </div>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                Stop guessing. Our AI reads every single ingredient printed on
                the label and cross-references it with global health databases
                instantly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                {SCANNER_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-inner">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-gray-300 text-sm font-semibold">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
            <AnimateIn
              delay={200}
              className="relative group p-4 sm:p-8 bg-linear-to-b from-white/5 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-3xl shadow-2xl transition-all duration-700 hover:scale-[1.02]"
            >
              <div className="relative aspect-9/19.5 w-[280px] sm:w-[340px] rounded-[2.5rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                <Image
                  src="/ss/01.png"
                  alt="Scanning View"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1/2 bg-linear-to-b from-transparent via-emerald-500/20 to-transparent animate-scan-line pointer-events-none" />
              </div>
              {/* Floating micro-copy */}
              <div className="absolute -right-8 bottom-1/4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-2xl animate-aurora-2">
                Scanning Active...
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* ── Feature 2: Deep Analysis ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-40">
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <AnimateIn
              delay={100}
              className="relative group p-4 sm:p-8 bg-linear-to-b from-red-500/10 to-transparent rounded-[3rem] border border-red-500/20 backdrop-blur-3xl shadow-2xl transition-all duration-700 hover:scale-[1.02]"
            >
              <div className="relative aspect-9/19.5 w-[280px] sm:w-[340px] rounded-[2.5rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                <Image
                  src="/ss/02.png"
                  alt="Results View"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -left-12 top-1/3 p-4 bg-[#0A0A0A]/90 border border-red-500/30 backdrop-blur-xl rounded-2xl shadow-2xl hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Flame className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-red-500 font-bold uppercase tracking-widest whitespace-nowrap">
                      Warning
                    </div>
                    <div className="text-xs text-white font-semibold">
                      Dangerous Additives Found
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <div className="lg:col-span-5">
            <AnimateIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                  <Flame className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Deception Unmasked
                </h3>
              </div>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                Companies hide toxins under scientific aliases. Our AI
                identifies hidden MSG, hidden sugars, and harmful additives
                masked as "natural flavors".
              </p>
              <div className="flex flex-col gap-5">
                {RESULTS_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-all">
                      <Zap className="w-4 h-4 text-red-500" />
                    </div>
                    <span className="text-gray-300 font-semibold group-hover:text-white transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* ── Feature 3 & 4 Grid: Profiles & History ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <AnimateIn className="group relative rounded-[2.5rem] bg-indigo-500/5 border border-white/5 p-8 sm:p-12 overflow-hidden hover:border-indigo-500/30 transition-all duration-700">
            <div className="relative z-10 sm:flex gap-12 items-center">
              <div className="flex-1 mb-10 sm:mb-0">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Your Custom Profiles
                </h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  Keto, Vegan, or Seed-Oil Free. Set your rules once, and the AI
                  handles the rest for every scan.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Keto", "Vegan", "Paleo", "Seed-Oil Free"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative w-full sm:w-[220px] aspect-9/19.5 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                <Image
                  src="/ss/03.png"
                  alt="Profiles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Background Shape */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-500/20 transition-all duration-700" />
          </AnimateIn>

          <AnimateIn
            delay={150}
            className="group relative rounded-[2.5rem] bg-cyan-500/5 border border-white/5 p-8 sm:p-12 overflow-hidden hover:border-cyan-500/30 transition-all duration-700"
          >
            <div className="relative z-10 sm:flex gap-12 items-center">
              <div className="flex-1 mb-10 sm:mb-0">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Track Your Journey
                </h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  Every scan is securely stored on your device via encrypted
                  SQLite. Total privacy, no cloud tracking, and always
                  offline-ready.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-xs font-bold text-cyan-400">
                    Secure Local Storage 🔒
                  </span>
                </div>
              </div>
              <div className="relative w-full sm:w-[220px] aspect-9/19.5 rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
                <Image
                  src="/ss/04.png"
                  alt="History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Background Shape */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 group-hover:bg-cyan-500/20 transition-all duration-700" />
          </AnimateIn>
        </div>

        {/* ── Supporting Features Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => (
            <AnimateIn
              key={feature.title}
              delay={i * 80}
              className="group relative bg-[#0F0F0F] rounded-3xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 shadow-lg"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
