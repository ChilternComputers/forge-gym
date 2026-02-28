import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trial | FORGE GYM",
  description:
    "Try FORGE GYM for free. No commitment, no card details. Book your first session and experience premium fitness training.",
};

export default function FreeTrialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Free trial page has its own minimal layout (no Ticker, Navbar, Footer)
  // The main layout wraps it, but the page itself provides a back link instead of full nav
  return <>{children}</>;
}
