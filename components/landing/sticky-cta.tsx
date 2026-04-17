"use client";

import { useEffect, useState } from "react";
import { Apple } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/cleanlabel-ai-food-scanner/id6760940713?pt=126900305&ct=landing_sticky_cta&mt=8";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past the hero (roughly 600px)
      setVisible(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 inset-x-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Gradient fade above the bar */}
      <div className="absolute bottom-full inset-x-0 h-6 bg-linear-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      <div className="bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full bg-white text-black font-bold py-3.5 rounded-2xl active:scale-[0.98] transition-transform shadow-[0_0_40px_rgba(255,255,255,0.15)]"
        >
          <Apple className="w-5 h-5 fill-current" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] uppercase tracking-wider opacity-60 mb-0.5">
              Download on the
            </span>
            <span className="text-sm font-black">App Store · Free</span>
          </div>
        </a>
      </div>
    </div>
  );
}
