import { ShieldCheck, Zap, Lock, Flame, type LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Advanced AI Analysis",
    description:
      "Built on state-of-the-art AI for medical-grade ingredient analysis with zero database lag.",
  },
  {
    icon: ShieldCheck,
    title: "15+ Specialty Diets",
    description:
      "Keto, Vegan, SEED OIL FREE, Paleo, and more. Personalized protection for every lifestyle.",
  },
  {
    icon: Flame,
    title: "Deception Unmasked",
    description:
      "Identifies hidden sugars and toxins masked under scientific names like 'Maltodextrin'.",
  },
  {
    icon: Lock,
    title: "Encrypted SQLite History",
    description:
      "Every scan is stored securely on your device. Your grocery list stays private and offline.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "How does the scanner work without a barcode?",
    a: "CleanLabel uses Advanced AI Analysis to read the actual text printed on the label. This means it works on local products, artisan foods, and items without databases.",
  },
  {
    q: "What types of ingredients does it detect?",
    a: "It detects over 5,000 harmful additives including artificial dyes, carrageenan, seed oils, and hidden sugars. It also cross-references against your specific dietary profile.",
  },
  {
    q: "Can I set custom filters for allergies?",
    a: "Yes! Beyond our 15+ standard diets, you can type in custom 'Strict Filters' to exclude specific ingredients like 'Peanuts' or 'Palm Oil'—no matter what they're called.",
  },
  {
    q: "Is my scanning history private?",
    a: "Absolutely. Unlike most apps, we store your history locally on your device via encrypted SQLite storage. We don't track your shopping habits or sell your data.",
  },
  {
    q: "How much is CleanLabel Pro?",
    a: "CleanLabel is free to download and includes 3 free scans per week. Pro unlocks unlimited high-precision scans for $4.99/week or $29.99/year.",
  },
  {
    q: "Does it work outside the US?",
    a: "Yes. Because it reads the printed text directly, CleanLabel works on international labels and doesn't rely on region-locked barcode databases.",
  },
];
