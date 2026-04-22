"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { blogPosts } from "@/lib/blog-data";

export default function BlogIndexClient() {
  const categories = useMemo(() => ["All", ...new Set(blogPosts.map((post) => post.category))], []);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const [featured, ...rest] = filteredPosts;

  return (
    <>
      <Header />
      <main id="main-content" className="bg-[#f3efe7] pt-28 text-[#171311]">
        <section className="mx-auto max-w-[1380px] px-6 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-18 lg:pt-18">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#907361]">
                Journal
              </p>
              <h1 className="mt-5 max-w-5xl text-[clamp(3rem,7vw,6.2rem)] leading-[0.95] tracking-[-0.055em] text-[#171311]">
                Financial operations guides, compliance thinking, and workflow strategy.
              </h1>
            </div>
            <p className="max-w-xl text-[1rem] leading-7 text-[#64584f]">
              Articles for teams improving financial workflow automation, compliance reviews, and operations design.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 border-t border-[#ded4cb] pt-8">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? "bg-[#1b1714] text-white"
                    : "bg-[#e8dfd5] text-[#5f5249] hover:bg-[#ded4ca]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {featured && (
          <section className="mx-auto max-w-[1380px] px-6 pb-14 sm:px-8 lg:px-12">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
                <div className="relative aspect-[1.55/1] overflow-hidden rounded-[2.1rem] bg-[#d8d0c4]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 text-[0.8rem] font-semibold uppercase tracking-[0.13em] text-[#d26d45]">
                    <span>{featured.category}</span>
                    <span className="text-[#98897e]">{featured.date}</span>
                  </div>
                  <h2 className="mt-5 text-[clamp(2.3rem,4vw,4.4rem)] leading-[0.98] tracking-[-0.05em] text-[#171311]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-[1.03rem] leading-8 text-[#5f544b]">{featured.excerpt}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-base font-medium text-[#1e1714] transition-transform duration-300 group-hover:translate-x-1">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        <section className="mx-auto max-w-[1380px] px-6 pb-20 sm:px-8 lg:px-12 lg:pb-24">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative aspect-[1.15/1] overflow-hidden rounded-[1.8rem] bg-[#ddd2c6]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="pt-6">
                    <div className="flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#d26d45]">
                      <span>{post.category}</span>
                      <span className="text-[#98897e]">{post.date}</span>
                    </div>
                    <h3 className="mt-4 text-[2rem] leading-[1.03] tracking-[-0.045em] text-[#171311]">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-[1rem] leading-7 text-[#5f544b]">{post.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-[0.98rem] font-medium text-[#1c1612]">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
