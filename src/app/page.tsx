import { Hero } from "@/components/sections/Hero";
import { ClassCategories } from "@/components/sections/ClassCategories";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { VideoSection } from "@/components/sections/VideoSection";
import { MembershipPreview } from "@/components/sections/MembershipPreview";
import { TrainerSpotlight } from "@/components/sections/TrainerSpotlight";
import { Testimonials } from "@/components/sections/Testimonials";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ClassCategories />
      <SplitFeature />
      <VideoSection />
      <MembershipPreview />
      <TrainerSpotlight />
      <Testimonials />
      <GalleryPreview />
      <CTABanner />
    </>
  );
}
