import {
  ArrowRight,
  Star,
  Apple,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import { AnimateIn } from "./animate-in";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_20%,transparent_80%)]" />
      <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-emerald-500/[0.07] blur-[160px] rounded-full animate-aurora-1" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-teal-500/6 blur-[140px] rounded-full animate-aurora-2" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-emerald-500/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4 items-center">
          {/* ── Left: Copy ── */}
          <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            {/* Headline */}
            <AnimateIn>
              <h1 className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-black text-white tracking-tight leading-[1.05] mb-5">
                Know Exactly
                <br />
                What You&apos;re Eating.
                <br />
                <span className="text-transparent bg-clip-text bg-[#10B981] bg-size-[200%_100%] animate-gradient-x">
                  Before You Buy It.
                </span>
              </h1>
            </AnimateIn>

            {/* Subtext */}
            <AnimateIn delay={100}>
              <p className="text-base text-gray-500 mb-7 max-w-sm mx-auto lg:mx-0">
                Point your camera at any label. AI flags every toxin in 3
                seconds — no barcode needed.
              </p>
            </AnimateIn>

            {/* Feature tags */}
            <AnimateIn delay={175}>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-9">
                {[
                  { icon: "🫙", label: "Seed Oils" },
                  { icon: "🎨", label: "Artificial Dyes" },
                  { icon: "⚗️", label: "Hidden MSG" },
                  { icon: "🧬", label: "15+ Diet Profiles" },
                  { icon: "☣️", label: "Banned Additives" },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 bg-white/5 border border-white/8 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    <span>{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn delay={250}>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
                <a
                  href="https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black font-bold px-7 py-3.5 rounded-2xl active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:bg-emerald-400"
                >
                  <Apple className="w-5 h-5 fill-current" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase tracking-wider opacity-50 mb-0.5">
                      Download on the
                    </span>
                    <span className="text-sm font-black">App Store</span>
                  </div>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-semibold transition-colors group"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimateIn>

            {/* Social proof */}
            <AnimateIn delay={325}>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">
                  5.0 · Free · No account needed
                </span>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: Single hero phone + floating cards ── */}
          <AnimateIn
            delay={300}
            className="relative flex justify-center lg:justify-end"
          >
            <div
              className="relative flex justify-center items-center"
              style={{ height: "640px", width: "380px" }}
            >
              {/* Deep glow behind phone */}
              <div className="absolute inset-x-8 inset-y-4 bg-emerald-500/20 blur-[60px] rounded-full" />

              {/* The phone */}
              <div className="relative z-10">
                <Image
                  src="/ss/01.png"
                  alt="CleanLabel AI food scanner"
                  width={300}
                  height={648}
                  className="h-auto w-65 sm:w-75 drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
                  priority
                />
              </div>

              {/* Floating card — top left: toxins found */}
              <div className="absolute top-[8%] -left-4 sm:left-0 z-20 flex items-center gap-2.5 bg-[#0F0F0F] border border-red-500/25 px-3.5 py-2.5 rounded-2xl shadow-xl backdrop-blur-xl">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-red-400 font-black tracking-widest uppercase">
                    Toxic
                  </div>
                  <div className="text-xs text-white font-semibold whitespace-nowrap">
                    10 harmful ingredients
                  </div>
                </div>
              </div>

              {/* Floating card — bottom left: clean product */}
              <div className="absolute bottom-[18%] -left-4 sm:left-0 z-20 flex items-center gap-2.5 bg-[#0F0F0F] border border-emerald-500/25 px-3.5 py-2.5 rounded-2xl shadow-xl backdrop-blur-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-emerald-400 font-black tracking-widest uppercase">
                    Clean
                  </div>
                  <div className="text-xs text-white font-semibold whitespace-nowrap">
                    No toxins detected
                  </div>
                </div>
              </div>

              {/* Floating card — right: AI active */}
              <div className="absolute top-[42%] -right-4 sm:right-0 z-20 flex items-center gap-2.5 bg-[#0F0F0F] border border-white/8 px-3.5 py-2.5 rounded-2xl shadow-xl backdrop-blur-xl">
                <div className="relative shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
                </div>
                <div>
                  <div className="text-[9px] text-emerald-400 font-black tracking-widest uppercase mb-0.5">
                    AI Active
                  </div>
                  <div className="text-[11px] text-white font-semibold whitespace-nowrap">
                    Reading label...
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
