// JSON-LD Structured Data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "GymOrFitnessCenter",
  name: "FORGE GYM",
  description:
    "Premium gym and fitness studio offering strength training, HIIT, reformer pilates, and boxing.",
  url: "https://forgegym.co.uk",
  telephone: "+442012345678",
  email: "hello@forgegym.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Forge Street",
    addressLocality: "London",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:30",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "££",
  image: "https://forgegym.co.uk/images/og-image.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
  sameAs: [
    "https://instagram.com/forgegym",
    "https://facebook.com/forgegym",
    "https://youtube.com/forgegym",
  ],
};

export function createArticleSchema(article: {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "FORGE GYM",
      url: "https://forgegym.co.uk",
    },
    image: article.image,
    mainEntityOfPage: article.url.endsWith("/") ? article.url : `${article.url}/`,
  };
}

export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "FORGE GYM — Built to Push. Built to Last.",
  description:
    "Premium gym and fitness studio offering strength training, HIIT, reformer pilates, and boxing.",
  thumbnailUrl:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=45&fm=webp",
  uploadDate: "2025-01-01",
  contentUrl: "https://assets.mixkit.co/videos/52094/52094-720.mp4",
  embedUrl: "https://assets.mixkit.co/videos/52094/52094-720.mp4",
  duration: "PT30S",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a joining fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We don't believe in hidden costs. The price you see is the price you pay — nothing more.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All memberships are rolling monthly with no minimum contract. Cancel with 30 days' notice, no questions asked.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in the free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your free trial gives you full access to the gym floor and one group class of your choice. A coach will meet you for a brief orientation and help you get started.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade or downgrade my plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. You can change your membership tier at any time. Changes take effect from your next billing date.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer corporate or group rates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer tailored corporate wellness packages for teams of 5+. Contact us for a bespoke quote.",
      },
    },
  ],
};
