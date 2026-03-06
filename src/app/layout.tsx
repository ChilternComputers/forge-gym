import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ServiceWorkerRegistration } from "@/components/ui/ServiceWorkerRegistration";
import { InstallPrompt } from "@/components/ui/InstallPrompt";
import { organizationSchema } from "@/lib/schemas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://forgegym.co.uk"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "FORGE GYM | Built to Push. Built to Last.",
    template: "%s | FORGE GYM",
  },
  description:
    "Premium gym and fitness studio offering strength training, HIIT, reformer pilates, and boxing. World-class trainers, elite facilities. Start your free trial.",
  keywords: [
    "gym",
    "fitness studio",
    "personal training",
    "HIIT",
    "strength training",
    "reformer pilates",
    "boxing",
    "premium gym",
  ],
  icons: {
    icon: "/favicon.svg",
    apple: "/icons/icon-192x192.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "FORGE GYM | Built to Push. Built to Last.",
    description:
      "Premium gym and fitness studio. Strength, HIIT, Reformer, Boxing. Start your free trial.",
    type: "website",
    locale: "en_GB",
    siteName: "FORGE GYM",
    images: [
      {
        url: "https://forgegym.co.uk/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FORGE GYM — Built to Push. Built to Last.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORGE GYM | Built to Push. Built to Last.",
    description:
      "Premium gym and fitness studio. Start your free trial today.",
    images: ["https://forgegym.co.uk/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preload" as="image" href="/gym-hero-poster.webp" type="image/webp" />
      </head>
      <body>
        <SmoothScroll>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-gold focus:text-brand-black focus:font-mono focus:text-sm focus:uppercase focus:tracking-[0.1em] focus:rounded-lg focus:outline-none"
            style={{ padding: '0.75rem 1.5rem', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ChatWidget />
          <CookieConsent />
          <InstallPrompt />
          <ServiceWorkerRegistration />
        </SmoothScroll>
      </body>
    </html>
  );
}
