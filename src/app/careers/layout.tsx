import type { Metadata } from "next";

const title = "Careers";
const description =
  "Join the FORGE GYM team. We're looking for passionate personal trainers, group fitness coaches, and fitness professionals to deliver world-class sessions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/careers/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
