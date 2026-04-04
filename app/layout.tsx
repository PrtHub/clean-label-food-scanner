import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: {
    default: "CleanLabel | AI Food Scanner | Detect Hidden Toxins in Your Food",
    template: "%s | CleanLabel",
  },
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
    "healthy food app",
    "ingredient label reader",
    "food toxin scanner",
  ],
  applicationName: "CleanLabel",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanLabel — AI Food Scanner",
    description:
      "Detect hidden toxins in your food with AI-powered ingredient label scanning. Free for iOS.",
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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
  category: "health",
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-VECGDQ83N7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VECGDQ83N7');
        `}
      </Script>
    </html>
  );
}
