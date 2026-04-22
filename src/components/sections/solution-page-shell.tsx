import Link from "next/link";

type Section = {
  title: string;
  body: string;
};

type SolutionPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  keyword: string;
  benefits: string[];
  sections: Section[];
  ctaLabel: string;
};

export default function SolutionPageShell({
  eyebrow,
  title,
  description,
  keyword,
  benefits,
  sections,
  ctaLabel,
}: SolutionPageShellProps) {
  return (
    <main id="main-content" className="min-h-screen bg-[#0a0a0a] px-6 pb-20 pt-32 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-[-0.05em] md:text-[72px]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">{description}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
              {benefit}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <section key={section.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-[1.6rem] leading-tight text-white">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/58">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Why this matters</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/60">
            Teams searching for {keyword} usually need less manual work, more review visibility, and stronger workflow accountability. Drift is designed around those needs instead of forcing finance teams into a generic automation stack.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">
              {ctaLabel}
            </Link>
            <Link href="/products" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white">
              Explore the platform
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
