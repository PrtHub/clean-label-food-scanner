import { Star } from "lucide-react";
import { AnimateIn } from "./animate-in";

const STATS = [
  { num: "5.0", label: "App Store Rating", stars: true },
  { num: "260+", label: "Toxins Detected" },
  { num: "15+", label: "Diet Profiles Supported" },
  { num: "3 sec", label: "Average Scan Time" },
];

export function SocialProof() {
  return (
    <section className="relative bg-[#0A0A0A] border-y border-white/5 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
          {STATS.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80} className="text-center">
              {stat.stars && (
                <div className="flex items-center justify-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
              )}
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {stat.num}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">
                {stat.label}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
