import {
  ShieldCheck,
  ScanSearch,
  GraduationCap,
  Sparkles,
  Target,
  ShieldAlert,
  Lock,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

// 6 core features — matches landing-page playbook grid structure
export const FEATURES: Feature[] = [
  {
    icon: ScanSearch,
    title: "AI Ingredient Detection",
    description:
      "260+ harmful compounds, seed oils, hidden MSG, and artificial dyes — flagged by name in 3 seconds.",
  },
  {
    icon: GraduationCap,
    title: "Ingredient Education",
    description:
      "Tap any flagged ingredient to learn why it's harmful and what it does to your body — in plain English.",
  },
  {
    icon: Sparkles,
    title: "Healthier Alternatives",
    description:
      "AI suggests real cleaner products for every toxic item you scan — so you know exactly what to buy instead.",
  },
  {
    icon: Target,
    title: "Personalized Scans",
    description:
      "Tailored to your diet — Vegan, Keto, Gluten-Free, Paleo, Whole30, and 10+ more profiles with custom filters.",
  },
  {
    icon: ShieldAlert,
    title: "Allergen Protection",
    description:
      "Flags top 9 allergens plus cross-contamination warnings for every scan — peace of mind for sensitive families.",
  },
  {
    icon: Lock,
    title: "100% Private",
    description:
      "No account required. No images stored. Everything runs on your device with encrypted local history.",
  },
];

// 10 FAQs — matches landing-page playbook objection-handling list
export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Is CleanLabel really free?",
    a: "Yes. You get 3 free AI scans every week with no credit card required. Upgrade to Pro for unlimited scans at $4.99/week or $29.99/year.",
  },
  {
    q: "What makes this different from Yuka or Fooducate?",
    a: "Unlike database-based scanners that need a barcode, CleanLabel uses AI to read any ingredient label — even products not in any database. It also explains WHY each ingredient is harmful and suggests cleaner alternatives.",
  },
  {
    q: "How accurate is the AI?",
    a: "Roughly 95% accurate for ingredient identification. For severe allergies or medical conditions, we recommend verifying critical ingredients on the physical label as a backup.",
  },
  {
    q: "Does it work on barcodes or just labels?",
    a: "It scans the physical ingredient label on any product — no barcode needed. This means it works on local products, imported foods, bakery items, and anything in any language.",
  },
  {
    q: "Is my data private?",
    a: "Yes. No account required. Scans happen on your device and images are never stored on our servers. Your scan history is encrypted locally.",
  },
  {
    q: "What diets does it support?",
    a: "Vegan, Vegetarian, Keto, Paleo, Gluten-Free, Dairy-Free, Whole30, Mediterranean, Low-Sugar, Halal, Kosher, Low-FODMAP, Carnivore, Seed-Oil-Free, plus custom ingredient filters.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Manage and cancel your subscription directly from your App Store settings. No lock-in, no email required.",
  },
  {
    q: "Does it work without internet?",
    a: "Internet is required for the AI analysis when you scan. Your scan history is stored locally so you can review past scans offline.",
  },
  {
    q: "What phones does it support?",
    a: "iPhone running iOS 15.1 or later. Android support is in development — sign up on the App Store page to get notified.",
  },
  {
    q: "What if I scan something that's not food?",
    a: "Our AI detects non-food images and politely tells you to try again. These failed scans don't count against your free scan limit.",
  },
];
