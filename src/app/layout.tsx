import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.BETTER_AUTH_URL ||
  "https://driftsaas.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drift AI | AI Operations for Financial Teams",
    template: "%s | Drift AI",
  },
  description:
    "Drift AI helps financial teams handle prep, follow-through, and compliance review in one controlled workflow.",
  applicationName: "Drift AI",
  keywords: [
    "Drift AI",
    "AI for financial advisors",
    "finance workflow automation",
    "compliance review software",
    "advisor operations platform",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Drift AI",
    title: "Drift AI | AI Operations for Financial Teams",
    description:
      "AI operations for financial teams, with clearer workflows, faster reviews, and stronger controls.",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d-giga-ai/assets/images/x1ioW6hoCO0EWJfApnLyqDWxrs-1.png",
        width: 1200,
        height: 630,
        alt: "Drift AI homepage hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drift AI | AI Operations for Financial Teams",
    description:
      "AI operations for financial teams, with clearer workflows, faster reviews, and stronger controls.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0cdc52da-1c8b-467b-8c37-4a187c0cfb9d-giga-ai/assets/images/x1ioW6hoCO0EWJfApnLyqDWxrs-1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children


}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="0cdc52da-1c8b-467b-8c37-4a187c0cfb9d"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}' />

        {children}
        <Toaster />
        <VisualEditsMessenger />
      </body>
    </html>);

}
