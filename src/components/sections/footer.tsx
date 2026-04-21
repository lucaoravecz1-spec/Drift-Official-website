import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/" },
      { label: "Compliance", href: "/#compliance" },
      { label: "Journal", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#141111]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f0b0a9]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#9bc0ff]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 text-center text-[18vw] leading-none tracking-[-0.08em] text-white/[0.035]">
          Drift
        </div>
      </div>

      <div className="relative mx-auto max-w-[1380px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 border-b border-white/8 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d/visual-edit-uploads/1763856934092-r02d06kx0p.png"
                alt="Drift logo"
                width={38}
                height={38}
                className="brightness-0 invert"
              />
              <span className="text-2xl font-semibold tracking-[-0.04em] text-white">Drift AI</span>
            </div>
            <h2 className="mt-8 max-w-xl text-[clamp(2.2rem,4.4vw,4rem)] leading-[1.04] tracking-[-0.045em] text-white">
              A cleaner front page now. Your real product story next.
            </h2>
            <p className="mt-5 max-w-xl text-[1rem] leading-7 text-white/52">
              The homepage now carries the mood, motion, compliance framing, and editorial structure you wanted. When you're ready, we can swap the placeholder product stage for your real platform.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              Request a walkthrough
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/40">Compliant</p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/58">
                <span className="rounded-full border border-white/10 px-3 py-2">SOC 2</span>
                <span className="rounded-full border border-white/10 px-3 py-2">SSO</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Audit logs</span>
              </div>
            </div>

            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/38">{column.title}</h3>
                <div className="mt-5 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[0.98rem] text-white/64 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Drift AI, LLC.</p>
          <p>Designed for a stronger product story, calmer motion, and clearer trust signals.</p>
        </div>
      </div>
    </footer>
  );
}
