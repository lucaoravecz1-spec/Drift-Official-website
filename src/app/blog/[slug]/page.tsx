"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen items-center justify-center bg-[#f3efe7] px-6 text-[#171311]">
          <div className="text-center">
            <h1 className="text-5xl tracking-[-0.05em] text-[#171311]">Post not found</h1>
            <Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-base font-medium text-[#6b594d]">
              <ArrowLeft className="h-4 w-4" />
              Back to journal
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-[#f3efe7] pt-28 text-[#171311]">
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
            <aside className="border-t border-[#ddd2c7] pt-6 lg:border-t-0 lg:border-r lg:pr-8 lg:pt-0">
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
      </main>
      <Footer />
    </>
  );
}
