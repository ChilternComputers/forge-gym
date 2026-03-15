import type { Transformation } from "@/types";

export const transformations: Transformation[] = [
  {
    id: "james-hartley",
    name: "James Hartley",
    age: 34,
    membership: "FORGE UNLIMITED",
    duration: "8 months",
    quote:
      "I walked in barely able to do a press-up. Eight months later I deadlifted 180kg. FORGE changed everything.",
    story:
      "James joined FORGE after years of desk-bound inactivity left him overweight and struggling with lower back pain. Starting with fundamentals under Coach Marcus, he progressed from bodyweight basics to a structured strength programme. The combination of expert coaching, nutritional guidance, and a community that refused to let him quit delivered results he never thought possible.",
    stats: [
      { label: "Body Fat", before: "32%", after: "18%" },
      { label: "Deadlift", before: "40kg", after: "180kg" },
      { label: "5K Run", before: "38 min", after: "24 min" },
    ],
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=60&fm=webp",
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    age: 28,
    membership: "FORGE UNLIMITED",
    duration: "6 months",
    quote:
      "HIIT with Jade and reformer with Sophie — the perfect combination. I feel stronger, more flexible, and more confident than ever.",
    story:
      "Priya was stuck in a workout rut at a commercial gym — endless treadmill sessions with no visible progress. She joined FORGE for the variety and stayed for the coaching. Alternating between Jade's HIIT classes and Sophie's reformer sessions, she transformed not just her physique but her entire relationship with training.",
    stats: [
      { label: "Body Fat", before: "28%", after: "20%" },
      { label: "Plank Hold", before: "30 sec", after: "3 min" },
      { label: "Classes/Week", before: "1", after: "5" },
    ],
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=60&fm=webp",
  },
  {
    id: "danny-oconnor",
    name: "Danny O'Connor",
    age: 41,
    membership: "FORGE ELITE",
    duration: "12 months",
    quote:
      "At 41, I'm in the best shape of my life. The personal training at FORGE is on another level.",
    story:
      "Danny signed up for FORGE ELITE after his doctor warned him about his blood pressure and cholesterol. With twice-weekly PT sessions and a tailored nutrition plan, he completely turned his health around. His doctor couldn't believe the results at his 12-month check-up. Now Danny's training for his first half-marathon.",
    stats: [
      { label: "Weight", before: "104kg", after: "82kg" },
      { label: "Blood Pressure", before: "155/95", after: "120/78" },
      { label: "Resting HR", before: "88 bpm", after: "62 bpm" },
    ],
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=60&fm=webp",
  },
  {
    id: "sarah-kimura",
    name: "Sarah Kimura",
    age: 25,
    membership: "FORGE UNLIMITED",
    duration: "10 months",
    quote:
      "Boxing with Kai gave me confidence I never knew I had. FORGE isn't just a gym — it's a second home.",
    story:
      "Sarah joined FORGE to learn boxing after a difficult period that left her feeling anxious and disconnected. Kai's classes gave her an outlet, a community, and a sense of empowerment. What started as stress relief became a passion — she now trains four times a week and has even competed in her first white-collar bout.",
    stats: [
      { label: "Punch Power", before: "Beginner", after: "Regional Level" },
      { label: "Training/Week", before: "0", after: "4 sessions" },
      { label: "Confidence", before: "Low", after: "Through the Roof" },
    ],
    image:
      "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=60&fm=webp",
  },
];
