"use client";

import Header from "@/components/navigation/header";
import Footer from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-label text-accent mb-4">LEGAL</p>
            <h1 className="text-4xl md:text-5xl font-display mb-6">
              Terms of Service
            </h1>
            <p className="text-white/60">
              Last updated: January 1, 2025
            </p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="text-2xl font-display text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Drift AI's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">2. Description of Service</h2>
                <p>
                  Drift AI provides AI-powered voice assistant technology for businesses, including but not limited to automated call handling, appointment scheduling, customer support, and related analytics and management tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">3. Account Registration</h2>
                <p className="mb-4">
                  To use our services, you must create an account and provide accurate, complete information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your contact information remains current</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">4. Acceptable Use</h2>
                <p className="mb-4">You agree not to use our services to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful, fraudulent, or deceptive content</li>
                  <li>Interfere with or disrupt our services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use our services for illegal telemarketing or spam</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">5. Payment Terms</h2>
                <p>
                  You agree to pay all fees associated with your use of our services according to the pricing plan you select. All fees are non-refundable unless otherwise specified. We reserve the right to modify our pricing with 30 days' notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">6. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our services are owned by Drift AI and are protected by intellectual property laws. You retain ownership of your data and content but grant us a license to use it as necessary to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Drift AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">8. Termination</h2>
                <p>
                  We may terminate or suspend your account at any time for violations of these terms. You may cancel your account at any time through your account settings or by contacting support.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display text-white mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify you of material changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </section>

                <section>
                  <h2 className="text-2xl font-display text-white mb-4">10. Contact Information</h2>
                  <p>
                    For questions about these Terms of Service, please contact us through our platform.
                  </p>
                </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
