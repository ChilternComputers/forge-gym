export interface GymClass {
  id: string;
  name: string;
  category: "strength" | "hiit" | "reformer" | "boxing";
  description: string;
  shortDescription: string;
  duration: string;
  intensity: "Moderate" | "High" | "Intense";
  image: string;
  trainer: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  certifications: string[];
  bio: string;
  image: string;
  instagram?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  membership: string;
  image?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface TimetableSlot {
  id: string;
  className: string;
  category: GymClass["category"];
  trainer: string;
  time: string;
  duration: string;
  day: string;
}

export interface NavLink {
  label: string;
  href: string;
}
