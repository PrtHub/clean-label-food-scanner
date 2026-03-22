import { Shield, Sparkles, Apple } from "lucide-react";
import { AnimateIn } from "./animate-in";

export function FinalCTA() {
  return (
    <section
      id="download"
      className="relative bg-[#0A0A0A] py-40 overflow-hidden scroll-mt-16"
    >
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-to-r(rgba(255,255,255,0.02)_1px,transparent_1px),linear-to-b(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,black_20%,transparent_100%)]" />

      {/* Massive Central Aurora */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-emerald-500/10 blur-[180px] rounded-full animate-aurora-1" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-teal-500/5 blur-[140px] rounded-full animate-aurora-2 shadow-[0_0_100px_rgba(20,184,166,0.1)]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <AnimateIn>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2.5rem] bg-linear-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 mb-12 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
            <Shield className="w-10 h-10 text-emerald-400" />
          </div>
        </AnimateIn>

        <AnimateIn delay={100}>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-[#10B981] bg-size-[200%_100%] animate-gradient-x">
              Transform
            </span>{" "}
            <br />
            Your Health?
          </h2>
        </AnimateIn>

        <AnimateIn delay={200}>
          <p className="text-gray-400 text-lg sm:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
            Join thousands of health-conscious shoppers who have taken back
            control of their nutrition. Scan your first label in seconds.
          </p>
        </AnimateIn>

        <AnimateIn delay={300} className="flex flex-col items-center gap-8">
          <div className="relative group/btn">
            <div className="absolute -top-3 -right-2 bg-emerald-500 text-[#0A0A0A] text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase shadow-2xl z-20 pointer-events-none">
              Coming Soon
            </div>
            <a
              href="https://apps.apple.com/app/cleanlabel"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-white text-black font-black px-10 py-5 rounded-[2rem] overflow-hidden active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
            >
              <Apple className="w-7 h-7 fill-current" />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60 mb-0.5">
                  Download on the
                </span>
                <span className="text-xl">App Store</span>
              </div>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>

          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 rounded-full backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-black tracking-widest uppercase">
              Instant Pro Access
            </span>
          </div>
        </AnimateIn>

        <AnimateIn delay={400} className="mt-12">
          <p className="text-gray-500 text-sm font-semibold tracking-wide">
            Compatible with all iOS and Android devices • Advanced AI Analysis
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
