import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog — Food Safety, Toxins & Ingredient Science",
  description:
    "Expert articles on food safety, hidden toxins, seed oils, artificial additives, and how to read ingredient labels. Stay informed with CleanLabel.",
  alternates: {
    canonical: "https://cleanlabelapp.sbs/blog",
  },
  openGraph: {
    title: "CleanLabel Blog — Food Safety, Toxins & Ingredient Science",
    description:
      "Expert articles on hidden toxins, seed oils, artificial additives, and how to read ingredient labels.",
    url: "https://cleanlabelapp.sbs/blog",
    siteName: "CleanLabel",
    type: "website",
    images: [
      {
        url: "https://cleanlabelapp.sbs/og-image.png",
        width: 1200,
        height: 630,
        alt: "CleanLabel Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanLabel Blog — Food Safety & Ingredient Science",
    description:
      "Expert articles on hidden toxins, seed oils, and artificial additives.",
    images: ["https://cleanlabelapp.sbs/og-image.png"],
  },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
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
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
        {/* Page heading */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Research-backed articles on food safety, ingredient science, and
            eating cleaner.
          </p>
        </div>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-16 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-emerald-500/30 transition-colors"
        >
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                {featured.category}
              </span>
              <span className="text-gray-600">·</span>
              <span className="text-xs text-gray-500">{featured.date}</span>
              <span className="text-gray-600">·</span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                {featured.readTime}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
              {featured.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-emerald-400 font-semibold">
              Read article
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="text-gray-600">·</span>
                <span className="flex items-center gap-1 text-[10px] text-gray-500">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {post.description}
              </p>
              <div className="mt-4 text-xs text-gray-600">{post.date}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
