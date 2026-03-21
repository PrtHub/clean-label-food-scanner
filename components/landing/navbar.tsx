"use client";

import { useState, useEffect } from "react";
import { Shield, X, Menu, Apple } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex justify-center pt-4 sm:pt-6 pointer-events-none px-4">
      <div className={`
        relative max-w-7xl w-full mx-auto px-6 h-16 flex items-center justify-between pointer-events-auto
        rounded-3xl border transition-all duration-500
        ${scrolled 
          ? "bg-[#0A0A0A]/80 backdrop-blur-2xl border-white/10 shadow-2xl py-2" 
          : "bg-transparent border-transparent py-4"}
      `}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black text-white tracking-tighter">
            Clean<span className="text-emerald-400">Label</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {["Features", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex relative group/btn">
          <div className="absolute -top-3 -right-2 bg-emerald-500 text-[#0A0A0A] text-[8px] font-black px-2 py-0.5 rounded-full tracking-widest uppercase shadow-xl z-20 pointer-events-none">
            Coming Soon
          </div>
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 bg-white text-black text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-2xl group-hover:bg-emerald-400 group-hover:text-black transition-all shadow-xl shadow-white/5 active:scale-95"
          >
            <Apple className="w-4 h-4 fill-current" />
            <span>Download</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu */}
        {open && (
          <div className="absolute top-[calc(100%+12px)] left-0 right-0 md:hidden bg-[#0F0F0F]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {["Features", "Pricing", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="block text-lg font-bold text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-3 bg-white text-black font-black py-4 rounded-2xl uppercase tracking-widest text-sm"
            >
              <Apple className="w-5 h-5 fill-current" />
              Download Free
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
