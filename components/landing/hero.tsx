import { ArrowRight, Star, Apple } from "lucide-react";
import { AnimateIn } from "./animate-in";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_20%,transparent_80%)]" />
      <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-emerald-500/[0.08] blur-[160px] rounded-full animate-aurora-1" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-teal-500/[0.07] blur-[140px] rounded-full animate-aurora-2" />
      <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] bg-red-500/[0.04] blur-[130px] rounded-full animate-aurora-3" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Left: Copy ── */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            {/* Headline */}
            <AnimateIn>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem] font-black text-white tracking-tight leading-[0.95] mb-6">
                Scan Any Label.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-[length:200%_100%] animate-gradient-x">
                  Know Every Toxin.
                </span>
              </h1>
            </AnimateIn>

            {/* Subtext */}
            <AnimateIn delay={100}>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-md mx-auto lg:mx-0">
                AI reads your ingredient label in 3 seconds and flags seed oils,
                artificial dyes, and hidden MSG — by name.
              </p>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn delay={200}>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
                <a
                  href="https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-2xl active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:bg-emerald-400"
                >
                  <Apple className="w-5 h-5 fill-current" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase tracking-wider opacity-60 mb-0.5">Download on the</span>
                    <span className="text-base font-black">App Store</span>
                  </div>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold transition-colors group"
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimateIn>

            {/* Social proof */}
            <AnimateIn delay={300}>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">5.0 · Free · No account needed</span>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: Phone visuals ── */}
          <AnimateIn delay={200} className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[680px] h-[640px] sm:h-[720px]">

              {/* Secondary phone — results (left, behind) */}
              <div className="absolute left-0 top-[8%] w-[52%] sm:w-[290px] z-10 transition-all duration-700 hover:z-30 hover:scale-[1.03] group-hover:-translate-x-2">
                <div className="relative rounded-[2.8rem] p-[10px] bg-gradient-to-b from-red-500/20 to-transparent border border-red-500/20 backdrop-blur-2xl shadow-2xl">
                  <div className="overflow-hidden rounded-[2.2rem] aspect-[9/19.5] relative">
                    <Image
                      src="/ss/02.png"
                      alt="CleanLabel toxic ingredient detection results"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
                {/* Toxic badge */}
                <div className="absolute -right-4 top-[22%] flex items-center gap-1.5 bg-red-500 text-white text-[11px] font-black px-3 py-2 rounded-full shadow-xl shadow-red-500/30 whitespace-nowrap">
                  ⚠️ 10 Toxins Found
                </div>
              </div>

              {/* Main phone — scanner (right, front) */}
              <div className="absolute right-0 top-0 w-[57%] sm:w-[320px] z-20 transition-all duration-700 hover:scale-[1.03]">
                <div className="relative rounded-[3rem] p-[10px] bg-gradient-to-b from-emerald-500/25 to-transparent border border-emerald-500/30 backdrop-blur-3xl shadow-[0_0_60px_rgba(16,185,129,0.2)]">
                  <div className="overflow-hidden rounded-[2.4rem] aspect-[9/19.5] relative">
                    <Image
                      src="/ss/01.png"
                      alt="CleanLabel AI food scanner scanning ingredient label"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-1/4 w-full animate-scan-line z-30" />
                  </div>
                </div>

                {/* Scanning badge */}
                <div className="absolute -left-8 bottom-[25%] bg-[#0A0A0A]/90 border border-emerald-500/30 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-2xl z-40 hidden sm:flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <div>
                    <div className="text-[10px] text-emerald-400 font-black tracking-widest uppercase">
                      AI Active
                    </div>
                    <div className="text-xs text-white font-semibold whitespace-nowrap">
                      Reading ingredients...
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom floating stat */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#0A0A0A]/80 border border-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl shadow-xl z-30 hidden sm:flex items-center gap-3 whitespace-nowrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-white text-xs font-bold">Free on the App Store</span>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
