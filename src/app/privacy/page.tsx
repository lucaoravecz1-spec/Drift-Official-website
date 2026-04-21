"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-label text-accent mb-4">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-display mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/60">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="text-2xl font-display text-white mb-4">1. Introduction</h2>
                <p className="!whitespace-pre-line">Drift AI, llc. ("Drift AI," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI voice assistant platform and related services.

                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect information in the following ways:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address, company name, and billing information when you create an account.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our platform, including call logs, conversation transcripts, and analytics.</li>
                  <li><strong>Voice Data:</strong> Audio recordings and transcripts of calls processed through our AI voice assistants.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and other technical identifiers.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our AI voice assistant services</li>
                  <li>Improve and personalize your experience</li>
                  <li>Process transactions and send related information</li>
                  <li>Send administrative information and updates</li>
                  <li>Respond to inquiries and provide customer support</li>
                  <li>Monitor and analyze usage patterns to improve our services</li>
                  <li>Train and improve our AI models (with appropriate safeguards)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">4. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Call recordings and transcripts are retained according to your account settings and applicable legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">5. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your information, including encryption at rest and in transit, access controls, and regular security audits. We are SOC 2 Type II certified and HIPAA compliant for applicable use cases.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">6. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </section>

                <section>
                  <h2 className="text-2xl font-display text-white mb-4">7. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us through our platform.
                  </p>
                </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>);

}