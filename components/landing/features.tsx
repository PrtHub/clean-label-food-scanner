import { AnimateIn } from "./animate-in";
import { FEATURES } from "@/lib/landing-data";

export function Features() {
  return (
    <section
      id="features"
      className="relative bg-[#0A0A0A] py-24 sm:py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/4 blur-[140px] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/4 blur-[140px] rounded-full translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <AnimateIn className="text-center mb-16 sm:mb-20">
          <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-5">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
            Everything you need to
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-400">
              eat with confidence.
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Six core capabilities. One app. Your phone does the rest.
          </p>
        </AnimateIn>

        {/* 3x2 grid (desktop) / 1x6 stack (mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES.map(({ icon: Icon, title, description }, i) => (
            <AnimateIn
              key={title}
              delay={i * 80}
              className="group relative rounded-3xl p-8 bg-white/[0.02] border border-white/8 hover:border-emerald-500/25 hover:bg-white/[0.03] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/15 transition-all">
                <Icon className="w-5 h-5 text-emerald-400" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight leading-tight">
                {title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed">
                {description}
              </p>

              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
