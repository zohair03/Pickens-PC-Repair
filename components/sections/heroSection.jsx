"use client";
import React, { useState, useEffect } from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import SecondaryBtn from "../ui/buttons/secondaryBtn";
import HeroHeading from "../ui/texts/HeroHeading";
import HeroSubtitle from "../ui/texts/HeroSubtitle";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[93vh] max-[380px]:px-4 p-8 py-12 bg-[url('/images/rn-infotech-24.webp')] bg-cover bg-center">
      <div className="flex flex-col h-full justify-center">
        <div className="h-[93vh] absolute inset-0 bg-black/50" />
        <div className="h-full relative z-10 flex flex-col items-center justify-center gap-4 md:gap-6">
          
          <HeroHeading
            text="Your Trusted Partner for Next-Gen Tech & Networking"
            custom={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          />
          <HeroSubtitle
            text="From high-performance laptops and mobile parts to enterprise-grade
            server systems, RN Infotech delivers quality hardware and networking
            components right to your doorstep"
            custom={`${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          />

          <div
            className={`w-[90%] md:w-fit flex flex-col sm:flex-row gap-5 md:gap-5
              transition-all duration-700 ease-out
              ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "400ms" }}
          >
            <PrimaryBtn href="/" btnText="View Services" />
            <SecondaryBtn
              href="/"
              custom="border border-light-blue"
              btnText="Shop Now"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
