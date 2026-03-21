import { type ReactNode } from "react";
import Image from "next/image";
import { Camera, ShieldAlert, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export function PhoneMockup({
  children,
  className,
  glowColor = "emerald",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: "emerald" | "red";
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Multi-layer glow */}
      <div
        className={cn(
          "absolute -inset-12 blur-[100px] rounded-full opacity-20",
          glowColor === "emerald" ? "bg-emerald-500" : "bg-red-500"
        )}
      />
      <div
        className={cn(
          "absolute -inset-6 blur-[60px] rounded-full opacity-15",
          glowColor === "emerald" ? "bg-teal-400" : "bg-red-400"
        )}
      />

      {/* Phone frame */}
      <div className="relative w-[280px] h-[570px] rounded-[3rem] bg-gradient-to-b from-[#2A2A2E] to-[#1A1A1E] p-[6px] shadow-2xl shadow-black/60">
        <div className="relative w-full h-full rounded-[2.5rem] bg-black overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[25px] bg-black rounded-full z-20 shadow-[0_0_0_2px_rgba(30,30,30,1)]" />

          {/* Screen */}
          <div className="relative w-full h-full overflow-hidden rounded-[2.4rem]">
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-white/20 rounded-full z-20" />
        </div>

        {/* Frame reflections */}
        <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  );
}

export function ScannerScreen() {
  return (
    <div className="relative w-full h-full bg-gray-900">
      <Image
        src="/label1.jpeg"
        alt="Food ingredient label being scanned by CleanLabel AI"
        fill
        className="object-cover opacity-50"
      />
      {/* LIVE */}
      <div className="absolute top-8 left-4 flex items-center gap-1.5 z-10">
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-white text-[10px] font-semibold tracking-wider">
          LIVE
        </span>
      </div>
      {/* Scans counter */}
      <div className="absolute top-8 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full z-10 border border-white/10">
        <span className="text-white text-[10px]">
          Scans <span className="text-emerald-400 font-bold">4</span>
        </span>
      </div>
      {/* SCANNING ACTIVE */}
      <div className="absolute top-[3.5rem] left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-emerald-400 text-[8px] font-medium tracking-[0.15em]">
          SCANNING ACTIVE
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      {/* Scan brackets */}
      <div className="absolute top-[4.5rem] bottom-[7rem] left-5 right-5 z-10">
        <div className="absolute -top-px -left-px w-7 h-7 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg" />
        <div className="absolute -top-px -right-px w-7 h-7 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg" />
        <div className="absolute -bottom-px -left-px w-7 h-7 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg" />
        <div className="absolute -bottom-px -right-px w-7 h-7 border-b-2 border-r-2 border-emerald-400 rounded-br-lg" />
        <div className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent animate-scan-line" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-emerald-500/20" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-500/20" />
      </div>
      {/* Label text */}
      <div className="absolute bottom-[5.5rem] left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
        <span className="text-gray-400/80 text-[7px] tracking-[0.12em] font-medium">
          POINT AT ANY INGREDIENTS LABEL
        </span>
      </div>
      {/* Gallery */}
      <div className="absolute bottom-[3.2rem] left-5 z-10">
        <div className="w-9 h-9 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
          <Camera className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      {/* Scan button */}
      <div className="absolute bottom-[2.5rem] left-1/2 -translate-x-1/2 z-10">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center animate-pulse-glow">
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600" />
        </div>
      </div>
      {/* TAP TO ANALYZE */}
      <div className="absolute bottom-[1.2rem] left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
        <span className="text-gray-500 text-[7px] tracking-[0.12em]">
          TAP TO ANALYZE
        </span>
      </div>
    </div>
  );
}

export function ResultsScreen() {
  const ingredients = [
    "Vegetable Oil",
    "Corn Oil",
    "Canola Oil",
    "Sunflower Oil",
    "Maltodextrin",
    "MSG",
    "Artificial Color",
    "Red 40",
    "Yellow 6",
    "Yellow 5",
  ];

  return (
    <div className="w-full h-full bg-[#0A0A0A] p-3 pt-10 overflow-hidden">
      <h4 className="text-white text-sm font-bold text-center mb-1.5">
        Cheetos Flamin&apos; Hot
      </h4>
      <div className="flex justify-center mb-3">
        <span className="text-emerald-400 text-[7px] font-semibold tracking-[0.1em] border border-emerald-500/40 rounded-full px-2.5 py-0.5 bg-emerald-500/10">
          AI AUTHENTICATED
        </span>
      </div>
      <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-3 mb-3">
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
            <ShieldAlert className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <div className="text-red-500 font-bold text-base leading-tight">
              TOXIC
            </div>
            <div className="text-gray-400 text-[9px]">
              10 harmful ingredient(s) found
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {ingredients.map((ing) => (
            <span
              key={ing}
              className="text-red-400 text-[7px] border border-red-500/30 rounded-full px-2 py-0.5 bg-red-500/5"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-3">
        <div className="flex items-start gap-2">
          <div className="mt-0.5 shrink-0">
            <Lightbulb className="w-3.5 h-3.5 text-yellow-400" />
          </div>
          <div>
            <div className="text-emerald-400 text-[7px] font-semibold tracking-wider mb-1">
              AI INSIGHT
            </div>
            <p className="text-gray-300 text-[7px] leading-[1.5]">
              This product contains multiple seed oils and artificial dyes which
              directly violate your dietary preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
