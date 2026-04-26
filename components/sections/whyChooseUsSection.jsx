'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

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

const WhyCard = ({ card, index, isVisible }) => (
  <div
    className={`shadow-lg shadow-gray-300 transition-transform duration-600 hover:-translate-y-2 w-full xl:w-1/3 p-4 pb-6 bg-white rounded-2xl flex items-start gap-4 border border-gray-300 transition-all duration-700 ease-out transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="bg-primary rounded-xl p-3 flex-shrink-0 flex items-center justify-center">
      <Image
        src={card.icon}
        alt="Icon"
        width={30}
        height={30}
        className="icon-color md:w-[40px] md:h-[40px]"
      />
    </div>
    <div className="flex flex-col gap-3 items-start">
      <p className="max-[380px]:text-sm text-bodytext text-base w-95/100 md:text-lg lg:text-xl xl:text-lg 2xl:text-xl">
        {card.text}
      </p>
      <Link
        href={card.href}
        className="flex justify-center items-center text-primary font-bold font-sans text-base md:text-base"
      >
        {card.linkText}
        <Image
          src="/icons/right-icon.svg"
          alt="Arrow Icon"
          width={16}
          height={16}
          className="icon-primary"
        />
      </Link>
    </div>
  </div>
);

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
    <section ref={ref} className="bg-gradient-to-b from-[#d1d5db] to-[#f3b19c] px-8 py-14 lg:py-18 lg:px-16 2xl:px-50">
      <div className="h-full">
        <div className="flex gap-8 md:gap-10 flex-col items-center justify-center">

          {/* Header */}
          <div
            className={`flex flex-col gap-2 justify-center items-center transition-all duration-700 ease-out
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <p className="label font-semibold">Why Us</p>
            <h2 className="max-[380px]:text-2xl text-h2 md:text-3xl lg:text-4xl font-serif sm:text-3xl text-center max-[380px]:leading-12 leading-13 sm:leading-11 lg:leading-16">
              Why Tech Professionals Choose RN Infotech
            </h2>
          </div>

          {/* Cards */}
          <div className="w-full flex flex-col xl:flex-row gap-5 justify-between">
            {cards.map((card, index) => (
              <WhyCard key={card.id} card={card} index={index} isVisible={inView} />
            ))}
          </div>

          {/* Bottom Button */}
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