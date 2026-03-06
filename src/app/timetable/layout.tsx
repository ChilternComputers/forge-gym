import type { Metadata } from "next";

const title = "Timetable";
const description =
  "View the FORGE GYM weekly class timetable. Find strength, HIIT, reformer pilates, and boxing session times that fit your schedule — book your spot today.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/timetable/" },
  openGraph: { title, description, images: [{ url: "https://forgegym.co.uk/images/og-image.png", width: 1200, height: 630, alt: "FORGE GYM — Built to Push. Built to Last." }] },
  twitter: { title, description, card: "summary_large_image", images: ["https://forgegym.co.uk/images/og-image.png"] },
};

export default function TimetableLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
