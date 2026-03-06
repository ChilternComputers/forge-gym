import type { Metadata } from "next";

const title = "Gallery";
const description =
  "See inside FORGE GYM — browse photos of our gym floor, classes in action, world-class trainers, and premium facilities including the reformer studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/gallery/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
