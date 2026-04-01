import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Showcase } from "@/components/landing/showcase";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { FAQ_ITEMS } from "@/lib/landing-data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "CleanLabel",
        url: "https://cleanlabelapp.sbs",
        description:
          "AI-powered food scanner that detects hidden toxins in ingredient labels.",
        publisher: { "@type": "Organization", name: "CleanLabel" },
      },
      {
        "@type": "MobileApplication",
        name: "CleanLabel",
        operatingSystem: "iOS",
        applicationCategory: "HealthApplication",
        description:
          "AI-powered food scanner that detects hidden toxins, seed oils, artificial dyes, and dietary violations in ingredient labels.",
        url: "https://cleanlabelapp.sbs",
        image: "https://cleanlabelapp.sbs/icon.png",
        screenshot: [
          "https://cleanlabelapp.sbs/ss/01.png",
          "https://cleanlabelapp.sbs/ss/02.png",
          "https://cleanlabelapp.sbs/ss/03.png",
          "https://cleanlabelapp.sbs/ss/04.png",
        ],
        author: {
          "@type": "Organization",
          name: "CleanLabel",
          url: "https://cleanlabelapp.sbs",
        },
        offers: [
          {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free tier — 1 AI scan per day",
          },
          {
            "@type": "Offer",
            price: "29.99",
            priceCurrency: "USD",
            description: "Pro — Unlimited scans, billed annually",
          },
        ],
        featureList:
          "AI ingredient scanning, toxin detection, seed oil detection, artificial dye detection, 15+ dietary profiles, encrypted local history, no barcode required",
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
