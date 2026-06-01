import WhyChooseUs from "@/components/sections/whyChooseUsSection";
import Services from "@/components/sections/servicesSection";
import Hero from "@/components/sections/heroSection";
import Reviews from "@/components/sections/reviewsSection";
import FinalCta from "@/components/sections/finalCtaSection";
import TextAndImage from "@/components/sections/textAndImageSection";
import AboutUs from "@/components/sections/aboutusSection";
import Marquee from "@/components/ui/marqueeText";
import Faqs from "@/components/sections/faqSection";
import { FaqsContent } from "@/cms/content/content";


export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <Reviews />
      <Faqs image={FaqsContent.image} faqs={FaqsContent.questions} />
      <FinalCta />
    </main>
  );
}
