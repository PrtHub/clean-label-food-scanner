"use client";

import { Check, Star, Zap, ShieldCheck, Heart, Infinity, Crown } from "lucide-react";
import { AnimateIn } from "./animate-in";

const COMMON_FEATURES = [
  "Precision AI Analysis",
  "Deceptive Name Unmasking",
  "15+ Specialty Diet Profiles",
  "Custom Allergen Filters",
  "Encrypted Private History",
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-[#0A0A0A] py-32 scroll-mt-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Invest in Your{" "}
            <span className="text-transparent bg-clip-text bg-[#10B981] bg-size-[200%_100%] animate-gradient-x">
              Longevity.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Full laboratory-grade power for everyone. Pro users unlock unlimited
            exploration of every food aisle.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-[90rem] mx-auto overflow-visible">
          {/* Free Tier */}
          <AnimateIn className="h-full">
            <div className="group relative h-full rounded-[2rem] bg-[#0F0F0F] border border-white/5 p-6 sm:p-8 flex flex-col hover:border-white/10 transition-all duration-500 translate-y-4">
              <div className="mb-8">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  Essentials
                  <span className="text-[8px] bg-white/5 px-2 py-0.5 rounded-full text-gray-400 uppercase tracking-widest border border-white/10">
                    Free
                  </span>
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-white tracking-tighter">
                    1 Free Scan
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">
                  Every Week
                </p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {COMMON_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gray-700 shrink-0" />
                    <span className="text-gray-500 text-xs font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-all"
              >
                Get Started
              </a>
            </div>
          </AnimateIn>

          {/* Weekly Pro */}
          <AnimateIn delay={100} className="h-full">
            <div className="group relative h-full rounded-[2rem] bg-[#0F0F0F] border border-white/5 p-6 sm:p-8 flex flex-col hover:border-white/10 transition-all duration-500">
              <div className="mb-8 relative z-10">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  Weekly Pro
                  <Infinity className="w-4 h-4 text-emerald-400/50" />
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tighter">
                    $6.99
                  </span>
                  <span className="text-gray-500 text-xs font-medium">
                    /week
                  </span>
                </div>
                <p className="text-emerald-400/80 text-[10px] font-black uppercase tracking-widest">
                  Unlimited Access
                </p>
              </div>

              <div className="space-y-3 mb-8 flex-1 relative z-10">
                {COMMON_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500/50 shrink-0" />
                    <span className="text-gray-300 text-xs font-bold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 rounded-xl bg-white/10 border border-white/10 text-white text-xs font-bold hover:bg-white/20 transition-all active:scale-[0.98]"
              >
                Select Weekly
              </a>
            </div>
          </AnimateIn>

          {/* Yearly Pro */}
          <AnimateIn delay={200} className="h-full scale-105 z-20">
            <div className="relative h-full rounded-[2rem] bg-linear-to-b from-emerald-500/20 to-transparent border border-emerald-500/40 p-6 sm:p-8 flex flex-col shadow-[0_0_60px_rgba(16,185,129,0.2)] overflow-hidden group">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 focus:ring-emerald-500">
                <div className="bg-emerald-500 text-[#0A0A0A] text-[8px] font-black px-3 py-1 rounded-full tracking-widest uppercase shadow-xl animate-pulse">
                  Best Value
                </div>
              </div>

              <div className="mb-8 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-base font-bold text-white">Yearly Pro</h3>
                  <Star className="w-4 h-4 text-emerald-400 fill-current" />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black text-white tracking-tighter">
                    $49.99
                  </span>
                  <span className="text-emerald-400/60 text-xs font-medium">
                    /year
                  </span>
                </div>
                <p className="text-emerald-400 text-xs font-black tracking-tight flex items-center gap-2">
                  Only $4.16 per month
                </p>
              </div>

              <div className="space-y-3 mb-8 flex-1 relative z-10">
                {COMMON_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-white text-xs font-black">
                      {item}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-3 border-t border-emerald-500/20 mt-3">
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse shrink-0" />
                  <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                    Unlimited Scans
                  </span>
                </div>
              </div>

              <a
                href="https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full text-center py-4 rounded-xl bg-emerald-500 text-[#0A0A0A] font-black text-xs uppercase tracking-widest overflow-hidden group/btn shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all active:scale-95"
              >
                <span className="relative z-10">Select Pro</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
              </a>
            </div>
          </AnimateIn>

          {/* Lifetime Pro */}
          <AnimateIn delay={300} className="h-full">
            <div className="group relative h-full rounded-[2rem] bg-[#0F0F0F] border border-white/5 p-6 sm:p-8 flex flex-col hover:border-white/10 transition-all duration-500">
              <div className="mb-8 relative z-10">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  Lifetime Pro
                  <Crown className="w-4 h-4 text-amber-400/50" />
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tighter">
                    $99.99
                  </span>
                </div>
                <p className="text-amber-400/80 text-[10px] font-black uppercase tracking-widest">
                  Pay Once, Own Forever
                </p>
              </div>

              <div className="space-y-3 mb-8 flex-1 relative z-10">
                {COMMON_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-amber-500/50 shrink-0" />
                    <span className="text-gray-200 text-xs font-bold">
                      {item}
                    </span>
                  </div>
                ))}
                <div className="pt-3 border-t border-white/5 mt-3">
                  <span className="text-gray-500 text-[10px] font-medium leading-relaxed block">
                    No recurring fees. Ever. Includes all future AI model updates.
                  </span>
                </div>
              </div>

              <a
                href="https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold hover:bg-amber-500/20 transition-all active:scale-[0.98]"
              >
                Get Lifetime
              </a>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={400} className="text-center mt-20">
          <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase opacity-40">
            Secure payments via Apple App Store • Cancel recurring plans anytime
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
