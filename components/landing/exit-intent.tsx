"use client";

import { useEffect, useState, type FormEvent } from "react";
import { X, Mail, Sparkles } from "lucide-react";

const SESSION_KEY = "cl_exit_intent_shown";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    // Mobile has no cursor — skip entirely.
    if (window.matchMedia("(pointer: coarse)").matches) return;
    // Only once per session.
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only fire when the cursor exits through the top of the viewport
      // (toward the tab bar / close button), not sides.
      if (e.clientY <= 0 && e.relatedTarget === null) {
        sessionStorage.setItem(SESSION_KEY, "1");
        setOpen(true);
      }
    };

    // Give the user ~8 seconds of reading time before arming the trap.
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit_intent" }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-3xl bg-[#0A0A0A] border border-emerald-500/20 p-8 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Ambient glow */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative">
          {status === "success" ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                You&apos;re in.
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Check your inbox — we&apos;ll send your free guide shortly.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="w-12 h-12 mb-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>

              <h3
                id="exit-intent-title"
                className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight leading-tight"
              >
                Before you go...
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Get our free guide:{" "}
                <span className="text-white font-semibold">
                  50 ingredients to avoid at the grocery store.
                </span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-emerald-500/40 outline-none rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 transition-colors"
                  disabled={status === "submitting"}
                />
                <button
                  type="submit"
                  disabled={status === "submitting" || !email}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-black py-3.5 rounded-xl transition-colors active:scale-[0.98]"
                >
                  {status === "submitting" ? "Sending..." : "Send it to me"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-red-400 text-center">
                    Something went wrong. Try again?
                  </p>
                )}
              </form>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 w-full text-center text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                No thanks, I&apos;ll keep eating toxins
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
