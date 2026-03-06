import type { Position } from "@/types";

export const positions: Position[] = [
  {
    id: "pt-coach",
    title: "Personal Trainer",
    type: "Full-time / Part-time",
    department: "Coaching",
    description:
      "We're looking for an experienced personal trainer to join our coaching team. You'll work 1-to-1 with members, deliver group sessions, and contribute to programming.",
    requirements: [
      "Level 3 Personal Training qualification (minimum)",
      "2+ years coaching experience",
      "Excellent communication and interpersonal skills",
      "Current first aid certification",
      "Passion for evidence-based training",
    ],
  },
  {
    id: "group-instructor",
    title: "Group Class Instructor",
    type: "Part-time",
    department: "Coaching",
    description:
      "Energetic, skilled instructors needed for HIIT and functional training classes. Must be able to motivate, correct form on the fly, and deliver an exceptional group experience.",
    requirements: [
      "Level 2+ Group Exercise qualification",
      "Experience leading HIIT or circuit-style classes",
      "High energy and strong group management skills",
      "Ability to modify exercises for all fitness levels",
      "Availability for morning and evening slots",
    ],
  },
  {
    id: "front-of-house",
    title: "Front of House",
    type: "Full-time",
    department: "Operations",
    description:
      "The first face our members see. You'll manage reception, handle membership enquiries, keep the facility running smoothly, and ensure every visitor has a premium experience.",
    requirements: [
      "Customer service experience (gym or hospitality preferred)",
      "Friendly, professional, and proactive attitude",
      "Strong organisational skills",
      "Basic IT competency (booking systems, email)",
      "Genuine interest in health and fitness",
    ],
  },
  {
    id: "marketing-coordinator",
    title: "Marketing Coordinator",
    type: "Part-time",
    department: "Marketing",
    description:
      "Help us grow the FORGE brand. You'll manage social media, create content, coordinate campaigns, and support local partnerships. Photography and video skills are a big plus.",
    requirements: [
      "Experience in social media management",
      "Content creation skills (photo, video, copy)",
      "Understanding of digital marketing fundamentals",
      "Creative mindset with attention to brand consistency",
      "Bonus: photography or videography experience",
    ],
  },
];
