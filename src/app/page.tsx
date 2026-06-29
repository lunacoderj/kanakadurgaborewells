import dynamic from "next/dynamic";
import { HeroSkeleton, FeaturesSkeleton, GenericGridSkeleton, SplitSkeleton } from "@/components/common/Skeletons";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection").then(m => m.HeroSection), { loading: () => <HeroSkeleton /> });
const TrustFeaturesSection = dynamic(() => import("@/components/sections/TrustFeaturesSection").then(m => m.TrustFeaturesSection), { loading: () => <FeaturesSkeleton /> });
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection").then(m => m.ServicesSection), { loading: () => <GenericGridSkeleton /> });
const WhyChooseUsSection = dynamic(() => import("@/components/sections/WhyChooseUsSection").then(m => m.WhyChooseUsSection), { loading: () => <SplitSkeleton /> });
const OurWorksSection = dynamic(() => import("@/components/sections/OurWorksSection").then(m => m.OurWorksSection), { loading: () => <GenericGridSkeleton /> });
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then(m => m.ProjectsSection), { loading: () => <GenericGridSkeleton /> });
const EquipmentsSection = dynamic(() => import("@/components/sections/EquipmentsSection").then(m => m.EquipmentsSection), { loading: () => <GenericGridSkeleton /> });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(m => m.TestimonialsSection), { loading: () => <GenericGridSkeleton /> });
const ServiceAreasSection = dynamic(() => import("@/components/sections/ServiceAreasSection").then(m => m.ServiceAreasSection), { loading: () => <SplitSkeleton /> });
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then(m => m.FaqSection), { loading: () => <SplitSkeleton /> });
const CtaSection = dynamic(() => import("@/components/sections/CtaSection").then(m => m.CtaSection), { loading: () => <SplitSkeleton /> });
const BorewellShowcaseSection = dynamic(() => import("@/components/sections/BorewellShowcaseSection").then(m => m.BorewellShowcaseSection), { loading: () => <GenericGridSkeleton /> });

export default function Home() {
  return (
    <>
      <div id="home"><HeroSection /></div>
      <TrustFeaturesSection />
      <div id="services"><ServicesSection /></div>
      <div id="about-us"><WhyChooseUsSection /></div>
      <BorewellShowcaseSection />
      <OurWorksSection />
      <div id="projects"><ProjectsSection /></div>
      <div id="equipments"><EquipmentsSection /></div>
      <div id="reviews"><TestimonialsSection /></div>
      <ServiceAreasSection />
      <FaqSection />
      <div id="contact"><CtaSection /></div>
    </>
  );
}
