import { Camera, Brain, ShieldCheck } from "lucide-react";
import { AnimateIn } from "./animate-in";

const STEPS = [
  {
    icon: Camera,
    step: "01",
    title: "Scan",
    description: "Point your camera at any ingredient label. No barcode. No typing. No database lookup.",
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: Brain,
    step: "02",
    title: "Analyze",
    description: "AI reads every ingredient and cross-references it against 260+ harmful compounds, seed oils, and hidden additives.",
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Verdict",
    description: "Clear Toxic or Clean result in 3 seconds — with plain-English explanations of what each flagged ingredient does to your body.",
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/4 blur-[140px] rounded-full" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/4 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateIn className="text-center mb-20">
          <p className="text-xs font-black text-emerald-400 uppercase tracking-[0.2em] mb-5">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
            Three seconds
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-400">
              to clarity.
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            No more guessing at the grocery store. Just scan, get the truth, move on.
          </p>
        </AnimateIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

          {STEPS.map(({ icon: Icon, step, title, description, color, iconColor, border }, i) => (
            <AnimateIn
              key={step}
              delay={i * 150}
              className={`relative rounded-3xl p-8 sm:p-10 bg-linear-to-b ${color} border ${border} backdrop-blur-sm`}
            >
              {/* Step number watermark */}
              <div className="absolute top-6 right-8 text-5xl font-black text-white/5 tracking-tighter leading-none">
                {step}
              </div>

              <div className={`w-14 h-14 rounded-2xl bg-black/40 border ${border} flex items-center justify-center mb-6 relative z-10`}>
                <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight relative z-10">
                {title}
              </h3>
              <p className="text-zinc-400 leading-relaxed relative z-10">
                {description}
              </p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
