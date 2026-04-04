import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how CleanLabel protects your privacy. All scan history and dietary preferences stay on your device. No account required, no tracking.",
  alternates: {
    canonical: "https://cleanlabelapp.sbs/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/icon.png" alt="CleanLabel" width={32} height={32} className="w-8 h-8 rounded-lg" />
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
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-12">
          Last updated: March 22, 2026
        </p>

        <div className="space-y-12 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-gray-200 [&_h3]:mb-3 [&_h3]:mt-6 [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:leading-relaxed">
          {/* 1 */}
          <section>
            <h2>1. Overview</h2>
            <p>
              CleanLabel (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              what information we collect, how we use it, and your rights
              regarding your personal data when you use the CleanLabel app
              (&quot;App&quot;).
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2>2. Information We Collect</h2>

            <h3>2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong className="text-white">Dietary Preferences:</strong> The
                dietary filters you enable (e.g., Vegan, Keto, Seed Oil Free,
                custom filters). Stored locally on your device.
              </li>
              <li>
                <strong className="text-white">Custom Filters:</strong> Any
                custom dietary restrictions you add are stored locally on your
                device only.
              </li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong className="text-white">Scan Images:</strong> When you
                scan a label, the image is temporarily sent to our AI processing
                gateway (OpenRouter accessing Google Gemini AI) for analysis and
                is <strong className="text-white">not stored</strong> on our
                servers after the response is returned.
              </li>
              <li>
                <strong className="text-white">Scan History:</strong> Past scan
                results (product name, ingredients, status) are stored{" "}
                <strong className="text-white">locally on your device</strong>{" "}
                using SQLite. We do not have access to your scan history.
              </li>
              <li>
                <strong className="text-white">App Notifications:</strong> If
                enabled, we use local and push notifications to alert you of
                weekly scan resets.
              </li>
              <li>
                <strong className="text-white">App Usage:</strong> Basic,
                anonymized usage data may be collected via Apple&apos;s built-in
                analytics to help us improve the App.
              </li>
            </ul>

            <h3>2.3 Subscription Information</h3>
            <p>
              Subscription purchases are processed entirely by Apple via the App
              Store. We do not have access to your payment information, credit
              card details, or billing address.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2>3. How We Use Your Information</h2>
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="text-left text-white font-semibold px-5 py-3">
                      Data
                    </th>
                    <th className="text-left text-white font-semibold px-5 py-3">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {[
                    ["Dietary preferences", "Personalise AI analysis results"],
                    [
                      "Scan images",
                      "Real-time AI ingredient analysis (not stored)",
                    ],
                    ["Scan history", "Display past results within the App"],
                    ["Push Tokens", "Send reset notifications (if enabled)"],
                    [
                      "Anonymous usage data",
                      "Improve App performance and features",
                    ],
                  ].map(([data, purpose]) => (
                    <tr key={data}>
                      <td className="px-5 py-3 text-gray-300 font-medium">
                        {data}
                      </td>
                      <td className="px-5 py-3">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2>4. Data Storage &amp; Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">On-device only:</strong> Your
                scan history and dietary preferences are stored locally on your
                device and are not transmitted to our servers.
              </li>
              <li>
                <strong className="text-white">Scan images:</strong> Images are
                sent securely over HTTPS to the AI analysis service and are not
                retained after processing.
              </li>
              <li>
                <strong className="text-white">No account required:</strong>{" "}
                CleanLabel does not require you to create an account, so we do
                not collect your name, email address, or any personally
                identifiable information.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2>5. Third-Party Services</h2>
            <p>CleanLabel uses the following third-party services:</p>
            <div className="overflow-x-auto rounded-xl border border-white/[0.06]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                    <th className="text-left text-white font-semibold px-5 py-3">
                      Service
                    </th>
                    <th className="text-left text-white font-semibold px-5 py-3">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {[
                    ["OpenRouter / Gemini AI", "AI ingredient analysis"],
                    ["RevenueCat", "Subscription & entitlements"],
                    ["Apple App Store", "Subscription billing"],
                    ["Expo / React Native", "App framework"],
                  ].map(([service, purpose]) => (
                    <tr key={service}>
                      <td className="px-5 py-3 text-gray-300 font-medium">
                        {service}
                      </td>
                      <td className="px-5 py-3">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              We are not responsible for the privacy practices of these
              third-party services.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2>6. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Scan history:</strong> Retained
                locally on your device until you manually clear it in Settings,
                or until you uninstall the App.
              </li>
              <li>
                <strong className="text-white">Dietary preferences:</strong>{" "}
                Retained locally until you change or clear them.
              </li>
              <li>
                <strong className="text-white">Scan images:</strong> Not
                retained — processed in real-time and discarded.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2>7. Children&apos;s Privacy</h2>
            <p>
              The App is not directed at children under the age of 13. We do not
              knowingly collect personal information from children. If you
              believe a child has provided us with personal information, please
              contact us and we will delete it.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2>8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access the personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Opt out of analytics data collection</li>
            </ul>
            <p>
              Since most data is stored locally on your device, you have direct
              control over it via the Settings screen in the App. You can revoke
              notification permissions at any time through iOS System Settings.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify users of significant changes through the App. Continued use
              of the App after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2>10. Contact</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:{" "}
              <strong className="text-white">pritamfinds@gmail.com</strong>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-gray-600 text-sm italic">
            CleanLabel — Your data stays yours.
          </p>
        </div>
      </main>
    </div>
  );
}
