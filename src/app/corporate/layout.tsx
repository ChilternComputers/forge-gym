import type { Metadata } from "next";

const title = "Corporate Wellness";
const description =
  "FORGE GYM corporate wellness packages for London businesses. Boost productivity, reduce absenteeism, and strengthen teams with group fitness programmes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/corporate/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
