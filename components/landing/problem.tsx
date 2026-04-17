import { AnimateIn } from "./animate-in";

const STATS = [
  {
    num: "73%",
    text: "of grocery store products contain at least one toxic additive.",
  },
  {
    num: "177+",
    text: "hidden chemicals are legally allowed in your food in the US.",
  },
  {
    num: "5 lbs",
    text: "of chemical additives consumed per American per year.",
  },
];

export function Problem() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 sm:py-32 overflow-hidden">
      {/* Ambient red glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-500/5 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/3 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateIn className="text-center mb-16 sm:mb-20">
          <p className="text-xs font-black text-red-400 uppercase tracking-[0.2em] mb-5">
            The Hidden Truth
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
            The food industry is
            <br />
            <span className="text-red-500 italic" style={{ fontFamily: "Georgia, serif" }}>
              lying to you.
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            &ldquo;Natural,&rdquo; &ldquo;Organic,&rdquo; &ldquo;Healthy&rdquo; — these words on the front
            mean nothing. The ingredient list on the back tells the real story. Most of us don&apos;t
            have time to read it. Even if we did, we wouldn&apos;t recognize half the chemicals.
          </p>
        </AnimateIn>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {STATS.map((stat, i) => (
            <AnimateIn
              key={stat.num}
              delay={i * 120}
              className="relative rounded-3xl p-8 sm:p-10 bg-linear-to-b from-red-500/[0.04] to-transparent border border-red-500/10 overflow-hidden group hover:border-red-500/25 transition-colors"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/5 blur-3xl rounded-full group-hover:bg-red-500/10 transition-colors" />
              <div className="relative">
                <div className="text-6xl sm:text-7xl font-black text-red-500 tracking-tighter leading-none mb-5">
                  {stat.num}
                </div>
                <p className="text-zinc-300 leading-relaxed font-medium">{stat.text}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
