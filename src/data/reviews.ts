import type { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Tom Wheeler",
    rating: 5,
    text: "Best gym I've ever been to. The coaches actually know your name and care about your form. Worth every penny.",
    date: "2 weeks ago",
  },
  {
    id: "r2",
    name: "Aisha Begum",
    rating: 5,
    text: "The reformer classes with Sophie are incredible. I've tried pilates at three other studios and nothing comes close to the quality here.",
    date: "1 month ago",
  },
  {
    id: "r3",
    name: "Mark Stevens",
    rating: 5,
    text: "Joined for the free trial and signed up the same day. Clean, well-equipped, and the coaching is top-tier. No regrets.",
    date: "3 weeks ago",
  },
  {
    id: "r4",
    name: "Lucy Pemberton",
    rating: 5,
    text: "HIIT classes are tough but so rewarding. Jade pushes you just the right amount. Already seeing results after 6 weeks.",
    date: "1 month ago",
  },
  {
    id: "r5",
    name: "Raj Patel",
    rating: 4,
    text: "Great facilities and excellent coaching. Slightly pricier than average but you absolutely get what you pay for. Five stars for quality.",
    date: "2 months ago",
  },
  {
    id: "r6",
    name: "Emma Chen",
    rating: 5,
    text: "The community here is what sets FORGE apart. Everyone is so supportive, from staff to members. It doesn't feel intimidating at all.",
    date: "3 weeks ago",
  },
];

export const reviewSummary = {
  average: 4.9,
  total: 127,
};
