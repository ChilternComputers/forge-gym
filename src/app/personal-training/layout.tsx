import type { Metadata } from "next";

const title = "Personal Training";
const description =
  "One-to-one personal training at FORGE GYM London. Bespoke programmes from certified coaches with progress tracking to help you reach your fitness goals faster.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/personal-training/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function PersonalTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
