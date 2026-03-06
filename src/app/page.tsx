import { Hero } from "@/components/sections/Hero";
import { ClassCategories } from "@/components/sections/ClassCategories";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { VideoSection } from "@/components/sections/VideoSection";
import { MembershipPreview } from "@/components/sections/MembershipPreview";
import { TrainerSpotlight } from "@/components/sections/TrainerSpotlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { ReviewsShowcase } from "@/components/sections/ReviewsShowcase";
import { GalleryPreview } from "@/components/sections/GalleryPreview";

import { NewsletterSignup } from "@/components/ui/NewsletterSignup";
import { AppBanner } from "@/components/sections/AppBanner";
import { CTABanner } from "@/components/sections/CTABanner";
import { videoSchema } from "@/lib/schemas";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <Hero />
      <ClassCategories />
      <SplitFeature />
      <VideoSection />
      <MembershipPreview />
      <TrainerSpotlight />
      <Testimonials />
      <ReviewsShowcase />
      <GalleryPreview />
      <NewsletterSignup variant="section" />
      <AppBanner />
      <CTABanner />
    </>
  );
}
