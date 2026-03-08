import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { topFaqs } from "@/lib/faq-data";
import { homePageData } from "@/lib/home-data";
import { topMetadata } from "@/lib/metadata";

export const metadata = topMetadata;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServiceCards />
      <StatsCounter />
      <WhyChooseUs />
      <TestimonialSlider />
      <FAQAccordion title={homePageData.faqHeading} items={topFaqs} />
      <CTASection heading={homePageData.ctaHeading} subheading={homePageData.ctaSubheading} />
    </>
  );
}
