import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { blogPosts } from "@/lib/blog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.title} | Drift AI Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Drift AI Blog`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.title }],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    author: {
      "@type": "Person",
      name: post.author,
    },
    description: post.excerpt,
  };

  return (
    <>
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="bg-[#f3efe7] pt-28 text-[#171311]">
        <article className="mx-auto max-w-[1080px] px-6 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#7d6a5d] transition-colors hover:text-[#171311]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to journal
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[#d26d45]">
              <span>{post.category}</span>
              <span className="text-[#98897e]">{post.date}</span>
            </div>
            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.6rem)] leading-[0.94] tracking-[-0.055em] text-[#171311]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-[#5f544b]">{post.excerpt}</p>
          </header>

          <div className="relative mt-12 aspect-[1.65/1] overflow-hidden rounded-[2.2rem] bg-[#d6cdc1]">
            <Image src={post.image} alt={post.title} fill priority className="object-cover" sizes="100vw" />
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.22fr_0.78fr]">
            <aside className="border-t border-[#ddd2c7] pt-6 lg:border-r lg:border-t-0 lg:pr-8 lg:pt-0">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#907361]">Written by</p>
              <p className="mt-4 text-lg font-medium text-[#171311]">{post.author}</p>
              <p className="mt-2 text-sm text-[#7b6e64]">{post.date}</p>
            </aside>

            <div
              className="prose prose-lg max-w-none prose-headings:font-normal prose-headings:text-[#171311] prose-p:text-[#4f453e] prose-p:leading-8 prose-strong:text-[#171311] prose-li:text-[#4f453e] prose-li:marker:text-[#d26d45] prose-a:text-[#171311] prose-img:rounded-[1.6rem]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        <section className="mx-auto max-w-[1080px] px-6 pb-20 sm:px-8 lg:px-12">
          <div className="border-t border-[#ddd2c7] pt-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[2rem] tracking-[-0.04em] text-[#171311]">Related reading</h2>
              <Link href="/products" className="text-sm font-medium text-[#6b594d] underline underline-offset-4">
                Explore the platform
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((entry) => (
                <Link key={entry.slug} href={`/blog/${entry.slug}`} className="rounded-[1.6rem] bg-[#ece3d8] p-5 transition-transform duration-200 hover:-translate-y-1">
                  <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#907361]">{entry.category}</p>
                  <h3 className="mt-3 text-[1.4rem] leading-[1.05] tracking-[-0.04em] text-[#171311]">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f544b]">{entry.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
