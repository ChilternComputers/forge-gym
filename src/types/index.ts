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

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Training Tips" | "Nutrition" | "Recovery" | "Mindset";
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
}

export interface Transformation {
  id: string;
  name: string;
  age: number;
  membership: string;
  duration: string;
  quote: string;
  story: string;
  stats: { label: string; before: string; after: string }[];
  image: string;
}

export interface PTPackage {
  id: string;
  name: string;
  price: number;
  sessions: number;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface InstaPost {
  id: string;
  image: string;
  alt: string;
  likes: number;
  caption: string;
}

export interface CorporatePackage {
  id: string;
  name: string;
  teamSize: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface Position {
  id: string;
  title: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
}

export interface Booking {
  slotId: string;
  bookedAt: string;
}
