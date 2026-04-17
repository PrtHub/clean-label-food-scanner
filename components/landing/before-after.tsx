import Image from "next/image";
import { AnimateIn } from "./animate-in";
import { X, Check } from "lucide-react";

const FRONT_CLAIMS = ["All Natural", "No Artificial Colors", "Made with Real Fruit", "Heart Healthy"];
const BACK_TOXINS = [
  "Red 40",
  "Canola Oil",
  "Natural Flavors",
  "Yellow 5",
  "Maltodextrin",
  "Corn Syrup",
  "MSG",
  "Carrageenan",
];

export function BeforeAfter() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/4 blur-[140px] rounded-full -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] rounded-full -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateIn className="text-center mb-20">
          <p className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] mb-5">
            The Gap Between Marketing & Reality
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-5">
            What the box says
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-400 italic" style={{ fontFamily: "Georgia, serif" }}>
              vs what&apos;s really inside.
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Companies spend billions making the front of the package look healthy.
            The ingredient list tells a different story. CleanLabel reads the fine print so you don&apos;t have to.
          </p>
        </AnimateIn>

        {/* Before / After grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* BEFORE — what you think you're eating */}
          <AnimateIn className="relative rounded-3xl p-8 sm:p-10 bg-linear-to-b from-white/[0.02] to-transparent border border-white/8 overflow-hidden">
            <div className="absolute top-6 right-6 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
              Before Scanning
            </div>

            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-500/10 border border-gray-500/20 flex items-center justify-center">
                <X className="w-5 h-5 text-zinc-500" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">
                What you think
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              &ldquo;This looks healthy.&rdquo;
            </h3>
            <p className="text-zinc-500 mb-8">Based on the front of the package.</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {FRONT_CLAIMS.map((claim) => (
                <span
                  key={claim}
                  className="px-4 py-2 bg-white/[0.03] border border-white/8 rounded-full text-sm font-semibold text-zinc-400"
                >
                  &ldquo;{claim}&rdquo;
                </span>
              ))}
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/5 p-5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-1">🤷</div>
                <div className="text-sm text-zinc-600">No idea what&apos;s actually inside</div>
              </div>
            </div>
          </AnimateIn>

          {/* AFTER — the real picture */}
          <AnimateIn
            delay={150}
            className="relative rounded-3xl p-8 sm:p-10 bg-linear-to-b from-emerald-500/[0.04] to-transparent border border-emerald-500/20 overflow-hidden group hover:border-emerald-500/30 transition-colors"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full" />

            <div className="absolute top-6 right-6 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
              After Scanning
            </div>

            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" strokeWidth={2.5} />
              </div>
              <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                What&apos;s actually inside
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              8 hidden toxins flagged.
            </h3>
            <p className="text-zinc-500 mb-8">By name. In 3 seconds.</p>

            <div className="flex flex-wrap gap-2 mb-8 relative">
              {BACK_TOXINS.map((toxin) => (
                <span
                  key={toxin}
                  className="px-4 py-2 bg-red-500/8 border border-red-500/25 rounded-full text-sm font-bold text-red-400"
                >
                  {toxin}
                </span>
              ))}
            </div>

            <div className="rounded-2xl bg-black/40 border border-emerald-500/15 p-5 flex items-center gap-4">
              <div className="relative shrink-0">
                <Image
                  src="/icon.png"
                  alt="CleanLabel"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-xl"
                />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Exact ingredient breakdown</div>
                <div className="text-zinc-500 text-xs">Plus why each one matters — in plain English</div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
