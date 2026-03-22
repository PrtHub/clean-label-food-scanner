import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://cleanlabelapp.sbs/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["CleanLabel"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Find related posts (same category, excluding current)
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug
  ).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "CleanLabel",
      url: "https://cleanlabelapp.sbs",
    },
    publisher: {
      "@type": "Organization",
      name: "CleanLabel",
      logo: {
        "@type": "ImageObject",
        url: "https://cleanlabelapp.sbs/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cleanlabelapp.sbs/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/blog" className="hover:text-gray-400 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-500 truncate max-w-[200px]">
            {post.title}
          </span>
        </nav>

        {/* Article header */}
        <article>
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-gray-600">·</span>
              <time className="text-xs text-gray-500" dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-gray-600">·</span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Article body */}
          <div
            className="
              prose prose-invert prose-gray max-w-none
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5
              prose-li:text-gray-300 prose-li:leading-relaxed
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:my-4 prose-ul:pl-6 prose-ul:list-disc
              prose-ol:my-4 prose-ol:pl-6 prose-ol:list-decimal
              prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Related posts */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-white mb-6">
              Keep Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    {r.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-2 mb-1.5 group-hover:text-emerald-400 transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {r.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Stop Guessing. Start Scanning.
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            CleanLabel reads every ingredient and flags hidden toxins
            instantly — so you don&apos;t have to memorize them.
          </p>
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-emerald-400 transition-colors"
          >
            Download Free
          </Link>
        </div>
      </main>
    </div>
  );
}
