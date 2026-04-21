import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  HelpCircle,
  Smartphone,
  CreditCard,
  Camera,
  ShieldCheck,
  RefreshCw,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with CleanLabel. Find answers to common questions, troubleshoot issues, or contact our support team.",
  alternates: {
    canonical: "https://cleanlabelapp.sbs/support",
  },
};

const FAQ = [
  {
    icon: Camera,
    q: "The scanner isn't recognizing my label",
    a: "Make sure the  label is well-lit and fully visible in the camera frame. Avoid glare and hold your phone steady. The scanner works best on flat, printed ingredient lists — handwritten or heavily stylized text may not scan properly.",
  },
  {
    icon: RefreshCw,
    q: "When do my free scans reset?",
    a: "You get 1 free AI scan per week, which resets weekly on Monday. Upgrading to Pro gives you unlimited scans.",
  },
  {
    icon: CreditCard,
    q: "How do I cancel my subscription?",
    a: 'Subscriptions are managed through Apple. Go to Settings → Apple ID → Subscriptions → CleanLabel → Cancel. You\'ll retain access until the end of your billing period.',
  },
  {
    icon: CreditCard,
    q: "How do I request a refund?",
    a: "Since payments are processed by Apple, refund requests must go through Apple. Open the App Store → tap your profile → Purchase History → find CleanLabel → Report a Problem.",
  },
  {
    icon: Smartphone,
    q: "The app is crashing or freezing",
    a: "First, make sure you're on the latest version of CleanLabel from the App Store. Try force-quitting the app and reopening it. If the issue persists, restart your device. Contact us if it continues.",
  },
  {
    icon: ShieldCheck,
    q: "Is my data private?",
    a: "Yes. All scan history and dietary preferences are stored locally on your device using encrypted SQLite. Scan images are processed in real-time and never stored on our servers. No account is required.",
  },
  {
    icon: Zap,
    q: "Why is the analysis taking long?",
    a: "Analysis speed depends on your internet connection since the AI processing happens via a cloud service. On a normal connection, results should appear within 2-5 seconds. Try switching between Wi-Fi and cellular if you experience delays.",
  },
  {
    icon: HelpCircle,
    q: "What devices are supported?",
    a: "CleanLabel requires iOS 16.0 or later. It works on all iPhones that support iOS 16, including iPhone 8 and newer. An Android version is not currently available.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/icon.png"
              alt="CleanLabel"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-bold text-white tracking-tight">
              Clean<span className="text-emerald-400">Label</span>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <MessageCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            How Can We Help?
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Find answers to common questions or reach out to our support team
            directly.
          </p>
        </div>

        {/* Contact card */}
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-8 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
              <Mail className="w-7 h-7 text-emerald-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white mb-1">
                Contact Support
              </h2>
              <p className="text-gray-400 text-sm mb-3">
                Can&apos;t find your answer below? Email us and we&apos;ll get
                back to you within 24 hours.
              </p>
              <a
                href="mailto:pritamfinds@gmail.com"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                pritamfinds@gmail.com
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mb-16">
          {FAQ.map(({ icon: Icon, q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
            >
              <summary className="flex items-center gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-open:bg-emerald-500/10 group-open:border-emerald-500/20 transition-colors">
                  <Icon className="w-4 h-4 text-gray-400 group-open:text-emerald-400 transition-colors" />
                </div>
                <span className="flex-1 text-white font-semibold text-sm sm:text-base">
                  {q}
                </span>
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-open:rotate-45 transition-transform">
                  <span className="text-gray-500 text-lg leading-none">+</span>
                </div>
              </summary>
              <div className="px-6 pb-5 pl-[4.25rem]">
                <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Troubleshooting tips */}
        <h2 className="text-2xl font-bold text-white mb-8">
          Quick Troubleshooting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            {
              title: "Update the App",
              desc: "Always run the latest version from the App Store for bug fixes and improvements.",
            },
            {
              title: "Check Camera Permissions",
              desc: "Go to Settings → CleanLabel and make sure Camera access is enabled.",
            },
            {
              title: "Restart the App",
              desc: "Force-quit CleanLabel and reopen it to clear any temporary glitches.",
            },
            {
              title: "Check Your Connection",
              desc: "AI analysis requires an internet connection. Switch between Wi-Fi and cellular if needed.",
            },
          ].map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
            >
              <h3 className="text-sm font-semibold text-white mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
          <h3 className="text-sm font-semibold text-white mb-4">
            Helpful Links
          </h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
            >
              Terms of Service
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
            >
              Blog
            </Link>
            <Link
              href="/#faq"
              className="text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-white/10 hover:decoration-white/30"
            >
              General FAQ
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-gray-600 text-sm italic">
            CleanLabel — We&apos;re here to help.
          </p>
        </div>
      </main>
    </div>
  );
}
