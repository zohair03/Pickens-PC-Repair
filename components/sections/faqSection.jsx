"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import { useInView } from "react-intersection-observer";
import H2 from "../ui/texts/H2";
import Label from "../ui/texts/Label";
import FaqItem from "../ui/FaqItem";


const Faqs = ({ image = "/images/rn-infotech-55.webp", faqs = [], label = "? FAQs", title = "Frequently Asked Questions" }) => {
  const [openId, setOpenId] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (!isMounted) {
    return (
      <section className="max-[380px]:px-5 p-8 lg:py-12 lg:px-16 2xl:px-50">
        <div className="flex flex-col gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-72 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
            <div className="hidden lg:block w-full lg:w-1/2 h-[480px] bg-gray-200 rounded-2xl animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative overflow-hidden max-[380px]:px-5 p-8 lg:py-12 lg:px-16 2xl:px-50"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fdf8f5 30%, #faf3ee 50%, #fdf8f5 70%, #ffffff 100%)',
      }}
    >
      {/* Decorative blob */}
      <div className="absolute top-[25%] left-[5%] w-[220px] h-[220px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(247, 109, 54, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-8 md:gap-12 items-center">

        <div
          className={`flex flex-col gap-2 text-center items-center transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <Label label={label} />
          <H2 text={title} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">

          <div className="w-full lg:w-1/2 flex flex-col gap-1">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                index={index}
                isVisible={inView}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>

          <div
            className={`hidden lg:block w-full lg:w-1/2 transition-all duration-700 ease-out delay-500
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
              }}
            >
              <Image
                src={image}
                alt="FAQ Image"
                fill
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

        <div
          className={`flex justify-center w-full sm:w-auto transition-all duration-700 ease-out delay-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <PrimaryBtn custom={"py-1"} href="/" btnText="Still Have Questions? Contact Us" />
        </div>

      </div>
    </section>
  );
};

export default Faqs;