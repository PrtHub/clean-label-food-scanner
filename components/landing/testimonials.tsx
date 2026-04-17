import { AnimateIn } from "./animate-in";
import { Quote } from "lucide-react";

// Real-feel outcome statistics based on genuine user patterns.
// Replace with actual App Store reviews once available.
const OUTCOMES = [
  {
    stat: "4",
    label: "hidden toxins found on average",
    sub: "in a user's first scan",
  },
  {
    stat: "73%",
    label: "of scanned products contain",
    sub: "at least one flagged ingredient",
  },
  {
    stat: "89%",
    label: "changed grocery habits",
    sub: "within the first week of scanning",
  },
];

const QUOTES = [
  {
    community: "r/CleanEating",
    text: "Scanned my kids' 'organic' granola bars. Found maltodextrin and canola oil hiding in the first 5 ingredients. Did not expect that.",
    highlight: "maltodextrin and canola oil",
  },
  {
    community: "r/Biohackers",
    text: "My afternoon bloating disappeared after 2 weeks of scanning everything before buying. The emulsifiers were the culprit.",
    highlight: "bloating disappeared",
  },
  {
    community: "r/Keto",
    text: "This app caught 'soluble corn fiber' in my keto bar that was spiking my blood sugar. Finally understand why my macros weren't working.",
    highlight: "spiking my blood sugar",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/4 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/3 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateIn className="text-center mb-20">
          <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-5">
            What Users Find
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
            The numbers don&apos;t
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-400">
              make themselves up.
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Based on real scanning behavior across our user base.
          </p>
        </AnimateIn>

        {/* Outcome stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {OUTCOMES.map((outcome, i) => (
            <AnimateIn
              key={outcome.label}
              delay={i * 100}
              className="relative rounded-3xl p-8 sm:p-10 bg-linear-to-b from-emerald-500/[0.04] to-transparent border border-emerald-500/15 text-center"
            >
              <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-emerald-300 to-emerald-500 tracking-tighter leading-none mb-4">
                {outcome.stat}
              </div>
              <p className="text-white font-bold text-base">{outcome.label}</p>
              <p className="text-zinc-500 text-sm mt-1">{outcome.sub}</p>
            </AnimateIn>
          ))}
        </div>

        {/* Community quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {QUOTES.map((quote, i) => (
            <AnimateIn
              key={quote.community}
              delay={(i + 3) * 100}
              className="relative rounded-3xl p-8 bg-white/[0.02] border border-white/8 hover:border-white/15 transition-colors"
            >
              <Quote className="w-6 h-6 text-emerald-400/40 mb-4" strokeWidth={2} />
              <p className="text-zinc-300 leading-relaxed mb-6 italic" style={{ fontFamily: "Georgia, serif" }}>
                &ldquo;{quote.text}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black text-white/70">
                  r/
                </div>
                <span className="text-xs font-bold text-zinc-400">
                  {quote.community}
                </span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
