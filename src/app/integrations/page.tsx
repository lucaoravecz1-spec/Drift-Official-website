"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";
import { Plug, Calendar, Database, MessageCircle, CreditCard, Building, ArrowRight, CheckCircle } from "lucide-react";

const integrationCategories = [
  {
    title: "CRM & Sales",
    icon: Database,
    integrations: ["Salesforce", "HubSpot", "Pipedrive", "Zoho CRM", "Monday.com"]
  },
  {
    title: "Scheduling",
    icon: Calendar,
    integrations: ["Calendly", "Cal.com", "Acuity", "Square Appointments", "Google Calendar"]
  },
  {
    title: "Communication",
    icon: MessageCircle,
    integrations: ["Slack", "Microsoft Teams", "Twilio", "RingCentral", "Zoom"]
  },
  {
    title: "Support",
    icon: Building,
    integrations: ["Zendesk", "Freshdesk", "Intercom", "Help Scout", "ServiceNow"]
  },
  {
    title: "Payment",
    icon: CreditCard,
    integrations: ["Stripe", "Square", "PayPal", "Shopify", "QuickBooks"]
  },
  {
    title: "Custom",
    icon: Plug,
    integrations: ["REST API", "Webhooks", "GraphQL", "Zapier", "Make"]
  }
];

const benefits = [
  "Connect in minutes with no coding required",
  "Two-way data sync keeps everything updated",
  "Secure OAuth 2.0 authentication",
  "Real-time event triggers and actions",
  "Custom field mapping for your workflow"
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-label text-accent mb-4">INTEGRATIONS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              Connect Your<br />Entire Stack
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Drift AI integrates seamlessly with 200+ tools you already use. Sync data, trigger actions, and automate workflows across your entire tech stack.
            </p>
          </div>

          <div className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationCategories.map((category) => (
                <div
                  key={category.title}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.integrations.map((integration) => (
                      <li key={integration} className="text-white/60 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {integration}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-label text-accent mb-4">WHY INTEGRATE</p>
                <h2 className="text-3xl md:text-4xl font-display mb-6">Seamless Data Flow</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
                <h3 className="text-xl font-medium text-white mb-4">API & Webhooks</h3>
                <p className="text-white/60 mb-4">
                  Build custom integrations with our comprehensive REST API. Receive real-time webhooks for call events, transcripts, and analytics.
                </p>
                <code className="block p-4 rounded-lg bg-black/50 text-sm text-accent/80 font-mono overflow-x-auto">
                  POST /api/v1/calls/webhook
                </code>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
              <h2 className="text-2xl md:text-3xl font-display mb-4">Need a Custom Integration?</h2>
              <p className="text-white/60 mb-6">
                Our team can help you connect Drift AI with any system in your stack.
              </p>
              <a
                href="https://calendly.com/lucaoravecz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                Talk to Us <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
