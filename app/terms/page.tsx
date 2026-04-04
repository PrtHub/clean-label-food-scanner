import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for CleanLabel, the AI-powered food scanner app for iOS. Free tier, premium plans, and usage guidelines.",
  alternates: {
    canonical: "https://cleanlabelapp.sbs/terms",
  },
};

export default function TermsPage() {
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

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Last updated: March 22, 2026
        </p>

        <div className="space-y-12 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4 [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:leading-relaxed">
          {/* 1 */}
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the CleanLabel app
              (&quot;App&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree, please do not use the
              App.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2>2. Description of Service</h2>
            <p>
              CleanLabel is an AI-powered ingredient analysis tool that helps
              users understand the contents of food product labels. The App uses
              artificial intelligence to scan and analyze ingredient labels and
              flag potentially harmful substances based on your dietary
              preferences.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2>3. Subscription &amp; Billing</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
                <h3 className="text-base font-semibold text-white mb-3">
                  Free Tier
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>3 free AI scans per week</li>
                  <li>Free scans reset every Monday</li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
                <h3 className="text-base font-semibold text-white mb-3">
                  Premium
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong className="text-white">Annual:</strong> $29.99/year
                  </li>
                  <li>
                    <strong className="text-white">Weekly:</strong> $4.99/week
                  </li>
                  <li>
                    <strong className="text-white">Monthly:</strong> $6.99/month
                  </li>
                </ul>
              </div>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                Payment is charged to your Apple ID account at confirmation of
                purchase.
              </li>
              <li>
                Subscriptions automatically renew unless auto-renew is turned
                off at least 24 hours before the end of the current period.
              </li>
              <li>
                You can manage and cancel your subscription at any time in your
                App Store account settings.
              </li>
              <li>
                No refunds are provided for unused portions of a subscription
                period.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2>4. Disclaimer of Medical Advice</h2>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-5 mb-4">
              <p className="text-amber-200/90 font-semibold mb-0">
                CleanLabel does not provide medical, nutritional, or dietary
                advice.
              </p>
            </div>
            <p>
              The AI analysis provided is for informational purposes only and
              should not be used as a substitute for professional medical or
              nutritional guidance. Always consult a qualified healthcare
              professional before making significant changes to your diet,
              especially if you have a medical condition or food allergy.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2>5. Accuracy of Analysis</h2>
            <p>
              The AI-generated analysis is based on the information visible in
              the scanned label image. We do not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>100% accuracy of ingredient identification</li>
              <li>Detection of all harmful substances</li>
              <li>Up-to-date information on regulatory classifications</li>
            </ul>
            <p className="mt-4">
              Ingredient safety standards vary by country and regulatory body.
              Results are based on general health guidelines and user-defined
              dietary preferences.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2>6. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App for personal, non-commercial purposes only.</li>
              <li>
                Not attempt to reverse-engineer, modify, or redistribute the
                App.
              </li>
              <li>
                Not use the App in any way that violates applicable laws or
                regulations.
              </li>
              <li>
                Provide accurate information when setting up your dietary
                profile.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the App — including
              but not limited to text, graphics, logos, and software — are the
              exclusive property of CleanLabel and are protected by applicable
              intellectual property laws.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, CleanLabel shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the App, including reliance on
              AI-generated analysis.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Continued
              use of the App after changes constitutes acceptance of the revised
              Terms. We will notify users of significant changes via the App.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2>10. Contact</h2>
            <p>
              For questions regarding these Terms, contact us at:{" "}
              <strong className="text-white">pritamfinds@gmail.com</strong>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-gray-600 text-sm italic">
            CleanLabel — Eat with confidence.
          </p>
        </div>
      </main>
    </div>
  );
}
