import type { Metadata } from "next";

const title = "Classes";
const description =
  "Explore FORGE GYM classes — strength training, HIIT, reformer pilates, and boxing. Expert-led group sessions for all fitness levels at our London studio.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/classes/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function ClassesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
