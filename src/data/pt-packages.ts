import type { PTPackage } from "@/types";

export const ptPackages: PTPackage[] = [
  {
    id: "ignite",
    name: "IGNITE PT",
    price: 199,
    sessions: 4,
    description:
      "Perfect for getting started with personal training or supplementing your group classes.",
    features: [
      "4 × 60-minute PT sessions",
      "Initial fitness assessment",
      "Personalised programme",
      "Form & technique coaching",
      "Monthly progress review",
    ],
    highlighted: false,
  },
  {
    id: "forge-pt",
    name: "FORGE PT",
    price: 349,
    sessions: 8,
    description:
      "Our most popular package. Twice-weekly coaching for serious, consistent progress.",
    features: [
      "8 × 60-minute PT sessions",
      "Comprehensive body composition analysis",
      "Personalised programme + nutrition guide",
      "Priority booking for all classes",
      "Bi-weekly progress reviews",
      "Direct coach messaging",
    ],
    highlighted: true,
  },
  {
    id: "elite-pt",
    name: "ELITE PT",
    price: 499,
    sessions: 12,
    description:
      "Three sessions per week for those who want maximum results and full accountability.",
    features: [
      "12 × 60-minute PT sessions",
      "Full body composition & movement screening",
      "Bespoke programme + meal plan",
      "Unlimited class access",
      "Weekly progress reviews",
      "24/7 coach messaging",
      "Recovery session included",
    ],
    highlighted: false,
  },
];
