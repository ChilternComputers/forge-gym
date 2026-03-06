import type { Metadata } from "next";

const title = "Blog";
const description =
  "Training tips, nutrition advice, recovery strategies, and fitness insights from the FORGE GYM coaching team. Stay informed, stay strong, and keep progressing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
