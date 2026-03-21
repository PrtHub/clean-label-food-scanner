"use client"

import { Check, Star, Zap, ShieldCheck, Heart, Infinity } from "lucide-react";
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
    <section id="pricing" className="relative bg-[#0A0A0A] py-32 scroll-mt-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Pricing Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Invest in Your <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">Longevity.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            Full laboratory-grade power for everyone. Pro users unlock unlimited exploration of every food aisle.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <AnimateIn className="h-full">
            <div className="group relative h-full rounded-[2.5rem] bg-[#0F0F0F] border border-white/5 p-8 sm:p-10 flex flex-col hover:border-white/10 transition-all duration-500">
              <div className="mb-10">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  Essentials
                  <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-full text-gray-400 uppercase tracking-widest border border-white/10">Free Plan</span>
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white tracking-tighter">5 Free Scans</span>
                </div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">Included Monthly</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {COMMON_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-gray-600 shrink-0" />
                    <span className="text-gray-400 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://apps.apple.com/app/cleanlabel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all"
              >
                Get Started
              </a>
            </div>
          </AnimateIn>

          {/* Monthly Pro */}
          <AnimateIn delay={100} className="h-full">
            <div className="group relative h-full rounded-[2.5rem] bg-[#0F0F0F] border border-white/5 p-8 sm:p-10 flex flex-col hover:border-white/10 transition-all duration-500">
              <div className="mb-10 relative z-10">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  Monthly Pro
                  <Infinity className="w-4 h-4 text-emerald-400/50" />
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-white tracking-tighter">$6.99</span>
                  <span className="text-gray-500 text-sm font-medium">/month</span>
                </div>
                <p className="text-emerald-400/80 text-xs font-black uppercase tracking-widest">Unlimited Access</p>
              </div>

              <div className="space-y-4 mb-10 flex-1 relative z-10">
                {COMMON_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-500/50 shrink-0" />
                    <span className="text-gray-200 text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://apps.apple.com/app/cleanlabel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-4 rounded-2xl bg-white/10 border border-white/10 text-white text-sm font-bold hover:bg-white/20 transition-all active:scale-[0.98]"
              >
                Select Monthly
              </a>
            </div>
          </AnimateIn>

          {/* Yearly Pro */}
          <AnimateIn delay={200} className="h-full">
            <div className="relative h-full rounded-[2.5rem] bg-linear-to-b from-emerald-500/15 to-transparent border border-emerald-500/30 p-8 sm:p-10 flex flex-col shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden group">
              {/* Popular Badge */}
              <div className="absolute top-6 right-6 focus:ring-emerald-500">
                <div className="bg-emerald-500 text-[#0A0A0A] text-[10px] font-black px-4 py-1 rounded-full tracking-widest uppercase shadow-xl animate-pulse">
                  Save 75%
                </div>
              </div>

              <div className="mb-10 relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-lg font-bold text-white">Yearly Pro</h3>
                  <Star className="w-4 h-4 text-emerald-400 fill-current" />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-6xl font-black text-white tracking-tighter">$19.99</span>
                  <span className="text-emerald-400/60 text-sm font-medium">/year</span>
                </div>
                <p className="text-emerald-400 text-sm font-black tracking-tight flex items-center gap-2">
                  Only $1.66 per month
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1 relative z-10">
                {COMMON_FEATURES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-white text-sm font-black">{item}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 pt-4">
                  <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse shrink-0" />
                  <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">Unlimited Protection</span>
                </div>
              </div>

              <a
                href="https://apps.apple.com/app/cleanlabel"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full text-center py-4.5 rounded-2xl bg-emerald-500 text-[#0A0A0A] font-black text-xs uppercase tracking-widest overflow-hidden group/btn shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all active:scale-95"
              >
                <span className="relative z-10">Select Pro Plan</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
              </a>

              {/* Background Shapes */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:scale-110 transition-transform duration-1000" />
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={400} className="text-center mt-20">
          <p className="text-gray-500 text-[10px] font-black tracking-widest uppercase opacity-40">
            Secure payments via Apple App Store • Cancel anytime with one tap
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
