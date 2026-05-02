'use client';
import React, { useState, useEffect } from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import { useInView } from "react-intersection-observer";
import H2 from "../ui/texts/H2";
import Label from "../ui/texts/Label";
import WhyCard from "../ui/cards/WhyCard";

const cards = [
  {
    id: 1,
    icon: "/icons/workspace_premiu.svg",
    text: "Diverse Inventory: From the smallest mobile chip to massive server racks, we house everything under one roof.",
    linkText: "About Us",
    href: "/",
  },
  {
    id: 2,
    icon: "/icons/shield_with_heart.svg",
    text: "Quality Assured: We only deal in genuine parts and components from trusted global brands.",
    linkText: "Testimonials",
    href: "/",
  },
  {
    id: 3,
    icon: "/icons/sentiment_very_satisfied.svg",
    text: "Outstanding Support: Our background in retail services ensures you get help when you need it most.",
    linkText: "Contact Now",
    href: "/",
  },
];

const WhyChooseUs = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="px-8 py-14 lg:py-18 lg:px-16 2xl:px-50">
        <div className="flex gap-8 md:gap-10 flex-col items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-72 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-5 justify-between">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full xl:w-1/3 h-[160px] bg-gray-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="px-8 py-14 lg:py-18 lg:px-16 2xl:px-50">
      <div className="h-full">
        <div className="flex gap-8 md:gap-10 flex-col items-center justify-center">

          {/* Header */}
          <div
            className={`flex flex-col gap-4 justify-center items-center mb-3 transition-all duration-700 ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <Label label="Why Us" />
            <H2 text="Why Tech Professionals Choose RN Infotech" />
          </div>

          <div className="w-full flex flex-col xl:flex-row gap-5 justify-between">
            {cards.map((card, index) => (
              <WhyCard key={card.id} card={card} index={index} isVisible={inView} />
            ))}
          </div>

          <div
            className={`flex flex-col justify-center items-center mt-2 lg:mt-4 w-full md:w-fit transition-all duration-700 ease-out delay-700
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <PrimaryBtn custom={"w-[80%]"} href="/" btnText="Schedule a Repair" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;