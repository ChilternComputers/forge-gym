import type { Metadata } from "next";
import { faqSchema } from "@/lib/schemas";

const title = "Membership & Pricing";
const description =
  "FORGE GYM membership plans — Starter, Pro, and Elite tiers with no joining fees or contracts. Compare pricing and find the plan for your fitness goals.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/membership/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
