import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { AnimateIn } from "./animate-in";
import { FAQ_ITEMS } from "@/lib/landing-data";

export function FAQ() {
  return (
    <section id="faq" className="relative bg-[#0A0A0A] py-32 scroll-mt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <AnimateIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-white/5 border border-white/10 backdrop-blur-sm">
            <MessageCircleQuestion className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">Common Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 underline decoration-emerald-500/30 underline-offset-8">
            Got Questions? <span className="text-gray-500">We have answers.</span>
          </h2>
        </AnimateIn>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <AnimateIn key={i} delay={i * 50}>
              <details className="group relative rounded-3xl bg-[#0F0F0F] border border-white/5 overflow-hidden transition-all duration-300 open:border-emerald-500/30 open:bg-linear-to-b open:from-[#0F0F0F] open:to-emerald-500/5 hover:border-white/10">
                <summary className="flex items-center justify-between cursor-pointer px-8 py-7 text-left list-none outline-none">
                  <span className="text-lg font-bold text-white pr-8 group-open:text-emerald-400 transition-colors">
                    {item.q}
                  </span>
                  <div className="relative w-6 h-6 shrink-0">
                    <Plus className="absolute inset-0 w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                    <Minus className="absolute inset-0 w-6 h-6 text-emerald-400 transition-transform duration-300 rotate-90 opacity-0 group-open:rotate-0 group-open:opacity-100" />
                  </div>
                </summary>
                <div className="px-8 pb-8 -mt-2">
                  <p className="text-gray-400 text-[15px] leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </details>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400} className="mt-20 text-center">
          <div className="inline-block p-1 rounded-2xl bg-linear-to-r from-emerald-500/20 via-white/5 to-emerald-500/20">
            <div className="bg-[#0F0F0F] rounded-xl px-8 py-6 border border-white/5">
              <p className="text-gray-400 font-medium mb-4">Still have questions?</p>
              <a 
                href="mailto:support@cleanlabel.app" 
                className="text-white font-bold hover:text-emerald-400 transition-colors underline decoration-emerald-500/40 underline-offset-4"
              >
                Contact our support team →
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
