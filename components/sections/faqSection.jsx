"use client";
import { useState } from "react";
import Image from "next/image";
import PrimaryBtn from "../ui/buttons/primaryBtn";

const FaqItem = ({faq, isOpen, onToggle }) => (
  <div
    className="border-b border-gray-300 py-4 md:py-5 cursor-pointer"
    onClick={onToggle}
  >
    <div className="flex justify-between items-center gap-4">
      <p className="font-extralight font-serif max-[380px]:text-sm max-[380px]:leading-8 text-lg leading-10 md:text-xl md:leading-12  text-gray-800">
        {faq.question}
      </p>
      {/* + / - button */}
      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300">
        <span className="text-white text-xl font-light leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </div>
    </div>

    {/* Answer - smooth animation */}
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="mt-3 font-sans max-[380px]:text-sm text-base md:text-lg text-gray-800 max-[380px]:leading-5 leading-relaxed pr-8">
        {faq.answer}
      </p>
    </div>
  </div>
);

const Faqs = ({image='/images/rn-infotech-55.webp', faqs=[],label="? FAQs", title="Frequently Asked Questions"}) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 max-[380px]:px-5 p-8 lg:py-12 lg:px-16 2xl:px-50">
      <div className="flex flex-col gap-8 md:gap-12 items-center">

        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center">
          <p className="label font-semibold">{label}</p>
          <h2 className="italic max-[380px]:text-2xl text-h2 md:text-3xl lg:text-4xl  font-serif sm:text-3xl text-center max-[380px]:leading-11 leading-14">
            {title}
          </h2>
        </div>

        {/* Content - stacked on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">

          {/* FAQ List */}
          <div className="w-full lg:w-1/2">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>

          {/* Image - hidden on mobile, visible on lg+ */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <div className="relative w-full h-[480px] rounded-2xl overflow-hidden">
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

        {/* Bottom Button */}
        <div className="flex justify-center w-full sm:w-auto">
          <PrimaryBtn custom={'py-1'} href="/" btnText="Still Have Questions? Contact Us" />
        </div>

      </div>
    </section>
  );
};

export default Faqs;