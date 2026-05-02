'use client';
import Link from "next/link";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./servicesSection.module.css";
import Label from "../ui/texts/Label";
import H2 from "../ui/texts/H2";
import H2Subtitle from "../ui/texts/H2Subtitle";
import ServiceCards from "../ui/cards/ServiceCards";

const services = [
  {
    id: "01",
    title: "Server Systems & Networking",
    description:
      "We are specialists in server deployment and high-quality networking components to keep your business connected.",
    image: "/images/rn-infotech-30.webp",
    btnText: "Server Systems & Networking",
    href: "/",
  },
  {
    id: "02",
    title: "Computer & Desktop Parts",
    description:
      "Authorized dealers for all desktop models and internal components. Whether it's a RAM upgrade or a custom build, we've got you covered.",
    image: "/images/rn-infotech-37.webp",
    btnText: "Computer & Desktop Parts",
    href: "/",
  },
  {
    id: "03",
    title: "Mobile Parts & Accessories",
    description:
      "A comprehensive range of genuine parts for all major mobile brands.",
    image: "/images/rn-infotech-57.webp",
    btnText: "Mobile Parts & Accessories",
    href: "/",
  },
];

const Services = () => {
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
      <section className="py-8 px-6 sm:px-8 lg:py-12 lg:px-16 2xl:px-35 min-h-[600px]">
        <div className="flex flex-col items-center gap-4 mb-8 md:mb-10">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-96 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-[420px] bg-gray-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="py-8 px-6 sm:px-8 lg:py-12 lg:px-16 2xl:px-35"
      style={{ boxShadow: "inset 0 60px 50px -10px #facdbe" }}
    >
      <div className={`flex flex-col items-center gap-4 mb-8 md:mb-10 transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="flex flex-col gap-2">
          <Label label="What We Do" />
          <H2 text="Expert Solutions for Home & Enterprise" />
        </div>
        <H2Subtitle text="Reliable laptop & computer solutions — all under one roof." />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCards
            key={service.id}
            service={service}
            index={index}
            isVisible={inView}
          />
        ))}
      </div>

      <div className={`w-full flex justify-center mt-8 transition-all duration-700 ease-out delay-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <PrimaryBtn href="/" btnText="View All Services" />
      </div>
    </section>
  );
};

export default Services;