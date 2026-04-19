import Image from "next/image";
import WhyChooseUs from "@/components/sections/whyChooseUsSection";
import Services from "@/components/sections/servicesSection";
import Hero from "@/components/sections/heroSection";
import Reviews from "@/components/sections/reviewsSection";
import FinalCta from "@/components/sections/finalCtaSection";
import TextAndImage from "@/components/sections/textAndImageSection";
import AboutUs from "@/components/sections/aboutusSection";
import Marquee from "@/components/ui/marqueeText";
import Faqs from "@/components/sections/faqSection";

const faqs = [
  {
    id: 1,
    question: "How long will it take to repair my laptop?",
    answer:
      "It generally takes 2 to 3 business days to repair a laptop. However, the exact time may vary depending on the issue. We recommend discussing the service time before dropping off your device.",
  },
  {
    id: 2,
    question: "Is it safe to give my laptop to RN Infotech for repairs?",
    answer:
      "Absolutely! RN Infotech is a certified and trusted service centre in Mumbai. Your laptop is handled with the utmost care and professionalism — you can leave it with us without any worries.",
  },
  {
    id: 3,
    question: "How can I find RN Infotech?",
    answer:
      "We are located at Tara Temple Lane, Leamington Road, Grant Road, Mumbai. We are easily accessible by all modes of transport.",
  },
  {
    id: 4,
    question: "Do I need to bring my AC adapter along?",
    answer:
      "Yes, it is recommended to bring your AC adapter. This helps our technician check the voltage and current, allowing for a more accurate diagnosis of the issue.",
  },
  {
    id: 5,
    question: "Do you charge extra for home service?",
    answer:
      "No, we do not charge additionally for home service. You only need to pay the standard visiting charges. Our technician will come to your doorstep at your convenience.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <Reviews />
      <Faqs faqs={faqs}/>
      <FinalCta />
    </main>
  );
}
