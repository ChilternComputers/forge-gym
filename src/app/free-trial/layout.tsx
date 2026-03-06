import type { Metadata } from "next";

const title = "Free Trial";
const description =
  "Book your free trial at FORGE GYM. Enjoy full gym floor access and one expert-led group class — no card details, no joining fee, and no commitment required.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/free-trial/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
