"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, LockKeyhole, Radar, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const providers = [
  "Salesforce",
  "HubSpot",
  "Zendesk",
  "Intercom",
  "Shopify",
  "Stripe",
  "Twilio",
  "Slack",
  "Gmail",
  "Microsoft 365",
  "Zoom",
  "Calendly",
  "Snowflake",
  "Segment",
];

const featureEntries = [
  {
    title: "Purpose-built workflows",
    body: "Create guided flows for support, sales, onboarding, and post-call operations without turning every update into a custom build.",
  },
  {
    title: "Operator-friendly controls",
    body: "Refine logic, policy, and escalation paths from one place so teams can improve the system without creating chaos.",
  },
  {
    title: "Measured outcomes",
    body: "Tie every workflow back to conversion, resolution, containment, and review quality so the platform earns trust over time.",
  },
  {
    title: "Knowledge that stays current",
    body: "Route new docs, policies, and product updates into the system quickly so the experience keeps pace with the business.",
  },
  {
    title: "Fewer brittle edge cases",
    body: "Spot recurring failure points early and harden the workflow before they spread into support debt.",
  },
  {
    title: "Designed for handoffs",
    body: "When a human needs to step in, they get context, not a blank slate. That keeps service quality high even under load.",
  },
];

const capabilityPillars = [
  {
    title: "Connect your systems of record",
    body: "Bring CRM, telephony, support, billing, and internal knowledge into one operating layer instead of splitting the experience by tool.",
  },
  {
    title: "Run customer-facing workflows",
    body: "Support voice, web, and internal operations with the same logic, the same routing model, and the same review rules.",
  },
  {
    title: "Observe, review, and refine",
    body: "Keep actions visible, capture review states, and continuously sharpen the workflow as teams learn what actually works.",
  },
  {
    title: "Govern it like enterprise software",
    body: "Treat permissions, approvals, and audit history like first-class product features instead of adding them at the end.",
  },
];

const implementationSteps = [
  {
    step: "01",
    title: "Map the operating surface",
    body: "Define where automation belongs, where humans step in, and which systems need to stay in the loop from day one.",
    phase: "Discovery",
    systems: ["CRM context", "handoff rules", "operator checkpoints"],
    outputs: [
      { label: "coverage map", value: "priority flows identified" },
      { label: "risk view", value: "failure paths called out" },
    ],
    review: "Buyer sees where automation stops and humans take over.",
  },
  {
    step: "02",
    title: "Connect the knowledge layer",
    body: "Bring together policy documents, product material, and internal source systems so the experience stays grounded.",
    phase: "Grounding",
    systems: ["policies", "product docs", "source systems"],
    outputs: [
      { label: "source graph", value: "documents and systems linked" },
      { label: "freshness", value: "updates can move in quickly" },
    ],
    review: "Answers stay tied to live context instead of drifting into generic AI behavior.",
  },
  {
    step: "03",
    title: "Launch with review paths",
    body: "Start with clear approval and escalation rules so the first version already behaves like an accountable product.",
    phase: "Governance",
    systems: ["approvals", "escalations", "audit history"],
    outputs: [
      { label: "approval state", value: "sensitive actions routed" },
      { label: "change log", value: "operational edits remain visible" },
    ],
    review: "This is where the product starts to feel enterprise-ready instead of experimental.",
  },
  {
    step: "04",
    title: "Refine from real usage",
    body: "Use operator feedback, review logs, and repeat friction points to make the workflow sharper over time.",
    phase: "Optimization",
    systems: ["review notes", "repeat issues", "quality loops"],
    outputs: [
      { label: "learning loop", value: "operator feedback compounds" },
      { label: "workflow quality", value: "edge cases get hardened" },
    ],
    review: "The site signals a living system that improves after launch, not a one-time setup.",
  },
];

const trustModules = [
  {
    title: "Review states and approvals",
    body: "Keep policy changes visible, route sensitive actions for approval, and make operational ownership explicit.",
  },
  {
    title: "Structured audit history",
    body: "Capture workflow changes, operator interventions, and system decisions in a format teams can revisit later.",
  },
  {
    title: "Enterprise trust posture",
    body: "Security, governance, and operational readiness belong on the front page because buyers look for them immediately.",
  },
];

const ethosSignals = [
  { label: "Identity", value: "SSO + scoped roles", tone: "text-[#f1b3ac]" },
  { label: "Review", value: "Approval checkpoints", tone: "text-[#9dc5ff]" },
  { label: "Knowledge", value: "Source-grounded answers", tone: "text-[#d6c294]" },
  { label: "Operations", value: "Human handoff preserved", tone: "text-[#c7a7e8]" },
];

const ethosNodes = [
  {
    title: "Trust center",
    body: "Permissions, ownership, and escalation rules stay visible so automation behaves like accountable software.",
    className: "left-[6%] top-[10%] w-[15rem]",
    animation: { y: [0, -10, 0] },
    duration: 5.8,
  },
  {
    title: "Operator loop",
    body: "Feedback, review notes, and edge-case handling turn real usage into product refinement instead of support residue.",
    className: "right-[6%] top-[14%] w-[15.5rem]",
    animation: { y: [0, 12, 0] },
    duration: 6.5,
  },
  {
    title: "Knowledge graph",
    body: "Policies, product docs, source systems, and workflow states all participate in the same operating model.",
    className: "left-[12%] bottom-[11%] w-[16rem]",
    animation: { y: [0, -8, 0] },
    duration: 5.2,
  },
  {
    title: "Control plane",
    body: "Routing, approvals, observability, and review history give teams a stable layer to manage change.",
    className: "right-[11%] bottom-[15%] w-[14.5rem]",
    animation: { y: [0, 9, 0] },
    duration: 6.1,
  },
];

const glass =
  "border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.018))] shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl";

export default function HomeStory() {
  return (
    <>
      <section id="product-story" className="px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1380px] gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fade}
            className={`flex flex-col justify-between rounded-[2rem] p-8 ${glass}`}
          >
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f0b1ac]">Platform overview</p>
              <h2 className="mt-5 max-w-md text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.03] tracking-[-0.045em] text-white">
                Leave space for the real product while making the business feel credible now.
              </h2>
              <p className="mt-5 max-w-md text-[1rem] leading-7 text-white/56">
                The structure stays general on purpose. It gives the front page more confidence now, while still leaving a premium stage ready for your actual product story later.
              </p>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-white/12 bg-black/24 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/34">Credibility layer</p>
                  <p className="mt-2 text-sm leading-6 text-white/56">Reserved for your real demo, product workflow, or architecture story.</p>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/48 sm:block">
                  glass surface
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fade}
            custom={0.08}
            className="grid gap-6"
          >
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {capabilityPillars.map((pillar, index) => (
                <div key={pillar.title} className={`rounded-[1.6rem] p-5 ${glass}`}>
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[#efb2ab]">0{index + 1}</p>
                  <h3 className="mt-4 text-[1.2rem] font-semibold leading-tight text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/48">{pillar.body}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className={`overflow-hidden rounded-[1.9rem] p-6 ${glass}`}>
                <div className="flex items-center gap-2 text-white/52">
                  <Workflow className="h-4 w-4 text-[#f1b3ac]" />
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">System architecture</span>
                </div>
                <h3 className="mt-4 text-[1.7rem] leading-tight text-white">Borrow the complexity of great enterprise sites without the clutter.</h3>
                <div className="relative mt-6 min-h-[22rem] rounded-[1.5rem] border border-white/10 bg-[#100f0f]/78 p-5 backdrop-blur-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,180,173,0.08),transparent_24%),radial-gradient(circle_at_18%_78%,rgba(157,197,255,0.08),transparent_20%),radial-gradient(circle_at_82%_72%,rgba(215,194,148,0.07),transparent_24%)]" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-white/55 backdrop-blur-xl">
                      <span className="h-2 w-2 rounded-full bg-[#f1b3ac] animate-pulse" />
                      orchestration layer
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {["Voice", "Web", "Operator Console"].map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.08 * index }}
                          className="rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-4 text-center text-sm text-white/62 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                      <div className="rounded-[1.2rem] border border-white/10 bg-black/24 p-4 backdrop-blur-xl">
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/34">Policy + routing</p>
                        <p className="mt-2 text-sm text-white/58">Approvals, escalation logic, channel behavior, and review rules.</p>
                      </div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl"
                      >
                        <Radar className="h-5 w-5 text-[#f1b3ac]" />
                      </motion.div>
                      <div className="rounded-[1.2rem] border border-white/10 bg-black/24 p-4 backdrop-blur-xl">
                        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/34">Knowledge + systems</p>
                        <p className="mt-2 text-sm text-white/58">CRM, support, docs, billing, identity, and internal operating context.</p>
                      </div>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {["Audit history", "Observability", "Permissions"].map((item) => (
                        <motion.div
                          key={item}
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                          className="rounded-[1rem] border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white/52 backdrop-blur-xl"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`rounded-[1.9rem] p-6 ${glass}`}>
                <div className="flex items-center gap-2 text-white/52">
                  <Sparkles className="h-4 w-4 text-[#f1b3ac]" />
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em]">General capabilities</span>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {featureEntries.map((entry) => (
                    <div key={entry.title} className="rounded-[1.3rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl">
                      <h4 className="text-base font-semibold text-white">{entry.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-white/48">{entry.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/6 bg-white/[0.02] py-5">
        <div className="mb-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/36">
          Integrates with leading platforms
        </div>
        <div className="flex min-w-max animate-[marquee_28s_linear_infinite] gap-4 whitespace-nowrap px-4 [@media(prefers-reduced-motion:reduce)]:animate-none">
          {[...providers, ...providers].map((provider, index) => (
            <div
              key={`${provider}-${index}`}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-black/22 px-4 py-2.5 text-sm text-white/60 backdrop-blur-xl"
            >
              <Building2 className="h-4 w-4 text-white/35" />
              {provider}
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1380px] gap-8 lg:grid-cols-[0.76fr_1.24fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fade}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/38">Why teams trust it</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.2rem,4.9vw,4.7rem)] leading-[1.02] tracking-[-0.05em] text-white">
              More evidence on the page, less imagination required from the buyer.
            </h2>
            <p className="mt-5 max-w-lg text-[1rem] leading-7 text-white/54">
              This is where the front page earns credibility: integrations, rollout proof, operating language, and trust framing that answers buyer questions before a sales call.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fade}
            custom={0.08}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {[
              { title: "Deployment coverage", body: "Voice, web, internal ops, and handoff workflows can share one operating model instead of fragmenting by team." },
              { title: "Review velocity", body: "Faster policy updates and clearer change logs reduce the drag that usually slows down production AI systems." },
              { title: "Knowledge freshness", body: "New docs, product updates, and routing changes can move into the live system quickly without a brittle rebuild." },
              { title: "Escalation quality", body: "Human handoff stays useful because the transcript, workflow state, and reason codes move together." },
              { title: "Support economics", body: "The larger win is better operator focus on harder work, with less thrash across the stack." },
              { title: "Brand consistency", body: "Voice, copy, policy, and outcomes can all be governed from the same system instead of drifting over time." },
            ].map((item) => (
              <div key={item.title} className={`rounded-[1.6rem] p-5 ${glass}`}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/48">{item.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1380px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fade}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/38">How strong product sites create ethos</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.15rem,4.8vw,4.4rem)] leading-[1.02] tracking-[-0.05em] text-white">
              Show the operating model, not just a list of features.
            </h2>
            <p className="mt-5 max-w-lg text-[1rem] leading-7 text-white/54">
              The best-designed enterprise sites use progressive system storytelling: how the product is evaluated, what gets connected, how control works, and how teams improve it over time.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/56 backdrop-blur-xl">
              <LockKeyhole className="h-4 w-4 text-[#f1b3ac]" />
              built for buying confidence
            </div>
          </motion.div>

          <div className="grid gap-5">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-[1.9rem] p-6 ${glass}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(241,179,172,0.08),transparent_22%),radial-gradient(circle_at_12%_82%,rgba(157,197,255,0.08),transparent_24%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="text-[2rem] tracking-[-0.05em] text-[#efb2ab]">{step.step}</div>
                      <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-white/40 backdrop-blur-xl">
                        {step.phase}
                      </div>
                    </div>
                    <h3 className="mt-5 text-[1.5rem] leading-tight text-white">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-white/52">{step.body}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.systems.map((system, systemIndex) => (
                        <motion.span
                          key={system}
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 4.2 + systemIndex * 0.5, repeat: Infinity, ease: "easeInOut" }}
                          className="rounded-full border border-white/10 bg-black/22 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/46 backdrop-blur-xl"
                        >
                          {system}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_80%_72%,rgba(241,179,172,0.08),transparent_24%)]" />
                    <motion.div
                      aria-hidden="true"
                      animate={{ x: ["-18%", "108%"], opacity: [0, 0.18, 0] }}
                      transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.55 }}
                      className="absolute top-6 h-[120%] w-20 -rotate-12 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.18),transparent)] blur-xl"
                    />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/32">Operating output</p>
                          <p className="mt-2 text-sm leading-6 text-white/56">{step.review}</p>
                        </div>
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#f1b3ac] shadow-[0_0_24px_rgba(241,179,172,0.55)]" />
                      </div>

                      <div className="mt-5 grid gap-3">
                        {step.outputs.map((output, outputIndex) => (
                          <div key={output.label} className="rounded-[1rem] border border-white/10 bg-black/26 px-3 py-3 backdrop-blur-xl">
                            <div className="flex items-center justify-between gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-white/34">
                              <span>{output.label}</span>
                              <span>{`0${outputIndex + 1}`}</span>
                            </div>
                            <p className="mt-2 text-sm text-white/62">{output.value}</p>
                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/6">
                              <motion.div
                                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(241,179,172,0.9),rgba(215,194,148,0.62),rgba(157,197,255,0.7))]"
                                initial={{ width: "30%" }}
                                whileInView={{ width: outputIndex === 0 ? "82%" : "68%" }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 1.1, delay: 0.1 * outputIndex, ease: [0.22, 1, 0.36, 1] }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="compliance" className="px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className={`mx-auto grid w-full max-w-[1380px] gap-6 rounded-[2.3rem] p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8 ${glass}`}>
          <div className="rounded-[1.9rem] border border-white/10 bg-black/22 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#f1b3ac]" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f1b3ac]">Compliance</p>
            </div>
            <h2 className="mt-5 max-w-md text-[clamp(2rem,4.2vw,4rem)] leading-[1.03] tracking-[-0.04em] text-white">
              Stronger trust signals, expressed more clearly.
            </h2>
            <p className="mt-5 max-w-md text-[1rem] leading-7 text-white/56">
              The visual system stays upgraded, but this section stays practical. It talks directly about reviews, records, and operating accountability so buyers understand the product is built for serious teams.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm text-white/46">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-3 py-4 backdrop-blur-xl">SOC 2</div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-3 py-4 backdrop-blur-xl">SSO</div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-3 py-4 backdrop-blur-xl">Audit logs</div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {trustModules.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[1.7rem] border border-white/10 bg-black/22 p-6 backdrop-blur-xl"
              >
                <h3 className="text-[1.35rem] leading-tight text-white">{item.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-7 text-white/56">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className={`mx-auto grid w-full max-w-[1380px] gap-8 overflow-hidden rounded-[2.4rem] p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8 ${glass}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f0b1ac]">Ethos layer</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2.2rem,4.7vw,4.6rem)] leading-[1.02] tracking-[-0.05em] text-white">
              Replace passive content blocks with a living product atmosphere.
            </h2>
            <p className="mt-5 max-w-lg text-[1rem] leading-7 text-white/54">
              Instead of another image gallery, this closing section behaves more like a premium product site: floating trust markers, persistent motion, and a denser sense of operational maturity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/58">
              {["identity + access", "review workflows", "auditability", "knowledge routing", "operator oversight"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {ethosSignals.map((signal) => (
                <div key={signal.label} className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4 backdrop-blur-xl">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/32">{signal.label}</p>
                  <p className={`mt-3 text-sm font-medium ${signal.tone}`}>{signal.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-[34rem] overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#100f0f]/78 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(157,197,255,0.14),transparent_18%),radial-gradient(circle_at_82%_16%,rgba(241,179,172,0.14),transparent_22%),radial-gradient(circle_at_50%_84%,rgba(215,194,148,0.1),transparent_24%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(0,0,0,0.18))]" />

            <div className="absolute inset-x-6 top-6 rounded-[1.5rem] border border-white/10 bg-black/24 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/30">Operational fabric</p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/58">
                    High-trust systems feel connected. Identity, policy, knowledge, and handoff logic work as one surface instead of separate product islands.
                  </p>
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/48 md:block">
                  always-on visibility
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 top-[28%] bottom-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[11.5rem] w-[11.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
              />
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(241,179,172,0.18),rgba(255,255,255,0.03))] shadow-[0_0_100px_rgba(241,179,172,0.08)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/12 bg-black/36 text-white/70">
                  Drift
                </div>
              </motion.div>

              {ethosNodes.map((node) => (
                <motion.div
                  key={node.title}
                  animate={node.animation}
                  transition={{ duration: node.duration, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute rounded-[1.35rem] border border-white/10 bg-black/30 p-4 backdrop-blur-xl ${node.className}`}
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/32">{node.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/58">{node.body}</p>
                </motion.div>
              ))}

              <div className="absolute left-1/2 top-1/2 h-px w-[56%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <div className="absolute left-1/2 top-1/2 h-[56%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent" />

              <div className="absolute inset-x-6 bottom-6 grid gap-3 md:grid-cols-3">
                {[
                  { label: "Access posture", value: "Scoped permissions remain attached to each workflow surface." },
                  { label: "Review cadence", value: "Operators can see what changed, why it changed, and who approved it." },
                  { label: "Knowledge health", value: "New documents and internal updates can refresh the system without a rebuild." },
                ].map((item, itemIndex) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: itemIndex * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[1.2rem] border border-white/10 bg-black/28 p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/32">{item.label}</p>
                      <motion.span
                        animate={{ opacity: [0.35, 1, 0.35] }}
                        transition={{ duration: 3.8 + itemIndex * 0.45, repeat: Infinity, ease: "easeInOut" }}
                        className="h-2 w-2 rounded-full bg-white/70"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/58">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
