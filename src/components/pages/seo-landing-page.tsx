import Link from "next/link";
import Script from "next/script";
import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import type { SeoLandingPage } from "@/lib/seo-landing-pages";

export default function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    url: `https://driftsaas.online/${page.slug}`,
  };

  return (
    <>
      <Script
        id={`${page.slug}-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-[#0a0a0a] pt-28 text-white">
        <section className="container mx-auto max-w-screen-xl px-6 pb-16 pt-12 sm:px-8 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#f1b3ac]">Advisor workflow guide</p>
            <h1 className="mt-5 font-display text-[clamp(2.7rem,6vw,5rem)] leading-[1.02] tracking-[-0.04em] text-white">
              {page.hero}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]">
                Book a demo
              </Link>
              <Link href="/products" className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]">
                Explore the platform
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-screen-xl px-6 pb-20 sm:px-8 lg:px-16 lg:pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <aside className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/34">What teams get</p>
              <div className="mt-5 space-y-3">
                {page.bullets.map((item) => (
                  <div key={item} className="rounded-[1.1rem] border border-white/8 bg-black/20 px-4 py-3 text-sm leading-6 text-white/68">
                    {item}
                  </div>
                ))}
              </div>
            </aside>

            <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <div className="space-y-6">
                {page.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-[1rem] leading-8 text-white/62">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="container mx-auto max-w-screen-xl px-6 pb-20 sm:px-8 lg:px-16 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/34">FAQ</p>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl leading-[1.04] tracking-tight text-white md:text-[56px]">
                Questions firms usually ask before they buy
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/52">
                See the <Link href="/products" className="text-white underline decoration-white/30 underline-offset-4">product overview</Link>, read the{" "}
                <Link href="/blog" className="text-white underline decoration-white/30 underline-offset-4">journal</Link>, or talk to our team if you want to map the workflow to your firm.
              </p>
            </div>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <div key={item.question} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/56">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
