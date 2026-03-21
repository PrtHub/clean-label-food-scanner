import { ShieldCheck, ArrowRight, Star, ChevronRight, Apple } from "lucide-react";
import { AnimateIn } from "./animate-in";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Dynamic Grid System */}
      <div className="absolute inset-0 bg-[linear-to-r(rgba(255,255,255,0.03)_1px,transparent_1px),linear-to-b(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[44px_44px] mask-[radial-gradient(ellipse_80%_60%_at_50%_50%,black_20%,transparent_80%)]" />

      {/* Premium Aurora Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[800px] h-[800px] bg-emerald-500/8 blur-[160px] rounded-full animate-aurora-1" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-teal-500/7 blur-[140px] rounded-full animate-aurora-2" />
      <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] bg-red-500/4 blur-[130px] rounded-full animate-aurora-3" />

      {/* Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* ── Left Content ── */}
          <div className="relative text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 bg-linear-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-xs font-bold tracking-wider uppercase">
                  Precision AI Food Scanner
                </span>
              </div>
            </AnimateIn>

            <AnimateIn delay={100}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white tracking-tight leading-[0.95] mb-8">
                Know What&apos;s
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-size-[200%_100%] animate-gradient-x">
                  Really Inside.
                </span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={200}>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                Point your camera at any label. CleanLabel instantly detects hidden toxins, seed oils, and artificial dyes—even when they are hidden under deceptive names.
              </p>
            </AnimateIn>

            <AnimateIn delay={300}>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5 mb-10">
                <div className="relative group/btn">
                  <div className="absolute -top-3 -right-2 bg-emerald-500 text-[#0A0A0A] text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-2xl z-20 pointer-events-none">
                    Coming Soon
                  </div>
                  <a
                    href="https://apps.apple.com/app/cleanlabel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4.5 rounded-2xl overflow-hidden active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                  >
                    <Apple className="w-5 h-5 fill-current" />
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[10px] uppercase tracking-wider opacity-60">Download on the</span>
                      <span className="text-lg">App Store</span>
                    </div>
                  </a>
                </div>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white font-semibold transition-all duration-300 group"
                >
                  See How It Works
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </AnimateIn>

            <AnimateIn delay={400}>
              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-gray-800 overflow-hidden relative">
                      <Image
                        src={`/ss/0${i}.png`}
                        alt="User"
                        fill
                        className="object-cover scale-150"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    ))}
                    <span className="text-sm font-bold text-white ml-2">4.9/5</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium tracking-wide">Join thousands of health-conscious shoppers</span>
                </div>
              </div>
            </AnimateIn>
          </div>


          {/* ── Right Content: Dynamic App Visuals ── */}
          <div className="relative group perspective-1000">
            <AnimateIn delay={200} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[640px] aspect-4/5 sm:aspect-auto sm:h-[720px]">

                {/* Secondary Phone (Analysis Result) */}
                <div className="absolute left-[5%] top-[10%] w-[55%] sm:w-[280px] z-10 transition-all duration-700 hover:z-30 hover:scale-105 group-hover:-translate-x-4">
                  <div className="relative rounded-[2.5rem] sm:rounded-[3.2rem] p-2 bg-linear-to-b from-gray-200/20 to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl">
                    <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.8rem] aspect-9/19.5 relative">
                      <Image
                        src="/ss/02.png"
                        alt="Analysis Results"
                        fill
                        className="object-cover object-bottom"
                        priority
                      />
                    </div>
                  </div>
                  {/* Floating Notification Badge */}
                  <div className="absolute -right-6 top-1/4 bg-red-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-xl animate-bounce">
                    Toxic Detected! ⚠️
                  </div>
                </div>

                {/* Main Phone (Scanning) */}
                <div className="absolute right-[5%] top-0 w-[60%] sm:w-[320px] z-20 transition-all duration-700 hover:scale-105 group-hover:translate-y-2">
                  <div className="relative rounded-[2.8rem] sm:rounded-[3.5rem] p-2.5 bg-linear-to-b from-emerald-500/20 to-transparent border border-emerald-500/30 backdrop-blur-3xl shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                    <div className="overflow-hidden rounded-[2.2rem] sm:rounded-[3rem] aspect-9/19.5 relative">
                      <Image
                        src="/ss/01.png"
                        alt="Scanning Interface"
                        fill
                        className="object-cover object-bottom"
                        priority
                      />
                      {/* Scanning Light Effect Overlay */}
                      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/10 to-transparent h-1/4 w-full animate-scan-line z-30" />
                    </div>
                  </div>

                  {/* Floating Action Badge */}
                  <div className="absolute -left-10 bottom-[20%] bg-[#0A0A0A]/90 border border-emerald-500/30 backdrop-blur-xl p-4 rounded-2xl shadow-2xl z-40 hidden sm:block">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 text-emerald-400 rotate-90" />
                      </div>
                      <div>
                        <div className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase mb-0.5">Scanning</div>
                        <div className="text-xs text-white font-semibold">Ingredient Analysis...</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
