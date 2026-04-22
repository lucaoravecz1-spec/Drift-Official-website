"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Briefcase, Users, Phone, Shield, FileText, ChevronDown, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DriftMark from "@/components/brand/drift-mark";

const productItems = [
  {
    icon: Grid,
    title: "DANTE by Drift",
    description: "A finance-native research and drafting workspace for complex professional work.",
    href: "/products",
  },
  {
    icon: Briefcase,
    title: "Drift Assistant",
    description: "Household-scoped AI that answers client questions with grounded citations and live context.",
    href: "/products",
  },
  {
    icon: Shield,
    title: "Drift Ledger",
    description: "Append-only audit history for responses, approvals, and operator actions.",
    href: "/products",
  },
  {
    icon: Grid,
    title: "Drift Studio",
    description: "Build workflows, refine policies, and shape operator guardrails in one workspace.",
    href: "/products",
  },
  {
    icon: FileText,
    title: "Compliance Center",
    description: "Security posture, governance controls, and operational trust signals for regulated teams.",
    href: "/#compliance",
  },
];

const companyItems = [
  {
    icon: Users,
    title: "About Us",
    description: "How Drift is building more accountable AI operations software.",
    href: "/about",
  },
  {
    icon: Briefcase,
    title: "Careers",
    description: "Join the team shaping premium AI experiences for modern businesses.",
    href: "/careers",
  },
  {
    icon: Phone,
    title: "Contact",
    description: "Talk with sales, partnerships, or support.",
    href: "/contact",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isScrolled || isMenuOpen ? "border-b border-white/10 bg-black/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-4 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <div className="text-white">
                  <DriftMark className="h-9 w-9" />
                </div>
                <span className="text-2xl font-normal tracking-tight text-white">Drift</span>
              </Link>
            </div>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-12 lg:flex">
              <div
                className="relative"
                onMouseEnter={() => setShowProductsMenu(true)}
                onMouseLeave={() => setShowProductsMenu(false)}
              >
                <div className="group flex cursor-pointer items-center gap-1 py-2">
                  <Link href="/products" className="text-base font-medium text-white/80 transition-colors group-hover:text-white">
                    Products
                  </Link>
                  <ChevronDown className={`h-4 w-4 text-white/40 transition-transform duration-200 ${showProductsMenu ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {showProductsMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl"
                    >
                      <div className="p-2">
                        {productItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group block rounded-xl px-4 py-3.5 transition-colors hover:bg-white/8"
                          >
                            <p className="text-sm font-semibold text-white transition-colors group-hover:text-white">{item.title} →</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-white/45">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="group flex cursor-pointer items-center gap-1 py-2">
                <Link href="/solutions" className="text-base font-medium text-white/80 transition-colors group-hover:text-white">
                  Solutions
                </Link>
              </div>

              <div
                className="relative"
                onMouseEnter={() => setShowCompanyMenu(true)}
                onMouseLeave={() => setShowCompanyMenu(false)}
              >
                <div className="group flex cursor-pointer items-center gap-1 py-2">
                  <span className="text-base font-medium text-white/80 transition-colors group-hover:text-white">Company</span>
                  <ChevronDown className={`h-4 w-4 text-white/40 transition-transform duration-200 ${showCompanyMenu ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {showCompanyMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl"
                    >
                      <div className="p-2">
                        {companyItems.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="group block rounded-xl px-4 py-3.5 transition-colors hover:bg-white/8"
                          >
                            <p className="text-sm font-semibold text-white transition-colors group-hover:text-white">{item.title} →</p>
                            <p className="mt-0.5 text-xs leading-relaxed text-white/45">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <div className="hidden lg:flex items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-white/10 transition-colors hover:bg-white/90"
              >
                Request a Pilot
              </motion.a>
            </div>

            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 z-40 overflow-y-auto bg-black lg:hidden"
          >
            <div className="container p-8">
              <nav className="flex flex-col gap-8">
                <div>
                  <p className="mb-4 ml-1 text-[10px] font-bold uppercase tracking-widest text-white/30">Products</p>
                  <div className="flex flex-col gap-3">
                    {productItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-white">{item.title}</h4>
                          <p className="truncate text-[11px] text-white/40">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-4 ml-1 text-[10px] font-bold uppercase tracking-widest text-white/30">Company</p>
                  <div className="grid grid-cols-1 gap-3">
                    {companyItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={toggleMenu}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5">
                          <item.icon className="h-5 w-5 text-white/60" />
                        </div>
                        <h4 className="text-sm font-medium text-white">{item.title}</h4>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-4 ml-1 text-[10px] font-bold uppercase tracking-widest text-white/30">Solutions</p>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { title: "Wealth advisors", href: "/solutions/wealth-advisors" },
                      { title: "Financial services", href: "/solutions/financial-services" },
                      { title: "Operations", href: "/solutions/operations" },
                      { title: "Compliance", href: "/solutions/compliance" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={toggleMenu}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <motion.a
                    href="/contact"
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.95 }}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-base font-bold text-black shadow-lg shadow-white/10 transition-colors hover:bg-white/90"
                  >
                    Request a Pilot
                  </motion.a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
