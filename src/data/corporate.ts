import type { CorporatePackage } from "@/types";

export const corporatePackages: CorporatePackage[] = [
  {
    id: "team",
    name: "TEAM",
    teamSize: "5–15 employees",
    description:
      "Ideal for small teams looking to boost energy, reduce stress, and build camaraderie through fitness.",
    features: [
      "Discounted memberships for all team members",
      "2 × dedicated group sessions per month",
      "Initial team fitness assessment",
      "Quarterly progress reports",
      "Flexible scheduling around work hours",
      "Branded welcome packs",
    ],
    highlighted: false,
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    teamSize: "15+ employees",
    description:
      "A comprehensive wellness programme designed to reduce absenteeism, improve productivity, and support employee wellbeing at scale.",
    features: [
      "Discounted memberships for all team members",
      "4 × dedicated group sessions per month",
      "Individual fitness assessments for all staff",
      "Monthly progress reports + management dashboard",
      "On-site wellness workshops (nutrition, recovery, stress)",
      "Dedicated account manager",
      "Priority class booking for all members",
      "Annual company wellness day at FORGE",
    ],
    highlighted: true,
  },
];
