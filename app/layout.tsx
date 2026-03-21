import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CleanLabel — AI Food Scanner | Detect Hidden Toxins in Your Food",
  description:
    "Point your camera at any ingredient label and instantly detect hidden toxins, seed oils, artificial dyes, and dietary violations. AI-powered food scanner for iOS. Download free.",
  keywords: [
    "food scanner app",
    "ingredient scanner",
    "toxin detector",
    "food label scanner",
    "AI food analysis",
    "seed oil free",
    "clean eating app",
    "food additive checker",
    "dietary restriction app",
    "food safety app",
    "ingredient checker",
    "nutrition scanner",
    "artificial dye detector",
    "clean label",
    "food transparency",
  ],
  authors: [{ name: "CleanLabel" }],
  creator: "CleanLabel",
  publisher: "CleanLabel",
  metadataBase: new URL("https://cleanlabelapp.sbs"),
  openGraph: {
    title: "CleanLabel — AI Food Scanner | Detect Hidden Toxins in Your Food",
    description:
      "Point your camera at any ingredient label and instantly detect hidden toxins, seed oils, and dietary violations with AI-powered analysis.",
    url: "https://cleanlabelapp.sbs",
    siteName: "CleanLabel",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CleanLabel - AI Food Scanner that detects hidden toxins in your food",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanLabel — AI Food Scanner",
    description:
      "Detect hidden toxins in your food with AI-powered ingredient label scanning. Free for iOS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://cleanlabelapp.sbs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
