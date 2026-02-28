import type { Metadata } from "next";
import { Inter, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Ticker } from "@/components/layout/Ticker";
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
  title: {
    default: "FORGE GYM | Built to Push. Built to Last.",
    template: "%s | FORGE GYM",
  },
  description:
    "Premium gym and fitness studio offering strength training, HIIT, reformer pilates, and boxing. World-class trainers, elite facilities. Start your free trial today.",
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
  openGraph: {
    title: "FORGE GYM | Built to Push. Built to Last.",
    description:
      "Premium gym and fitness studio. Strength, HIIT, Reformer, Boxing. Start your free trial.",
    type: "website",
    locale: "en_GB",
    siteName: "FORGE GYM",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORGE GYM | Built to Push. Built to Last.",
    description:
      "Premium gym and fitness studio. Start your free trial today.",
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Ticker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
