"use client";
import React, { useState, useEffect } from "react";
import PrimaryBtn from "../ui/buttons/primaryBtn";
import { useInView } from "react-intersection-observer";
import Label from "../ui/texts/Label";
import H2 from "../ui/texts/H2";
import H2Subtitle from "../ui/texts/H2Subtitle";
import ReviewCard from "../ui/cards/ReviewCard";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma, Grant Road",
    review:
      '"RN Infotech fixed my laptop within 2 days! The staff was very helpful and explained everything clearly. Highly recommend them for any laptop repair in Mumbai."',
  },
  {
    id: 2,
    name: "Priya Desai, Dadar",
    review:
      '"I bought a second-hand laptop from here and it works perfectly. Great condition, fair price, and very honest dealings. Will definitely come back!"',
  },
  {
    id: 3,
    name: "Amit Patil, Bandra",
    review:
      '"Their home service is a lifesaver! The technician came on time, was very professional, and repaired my laptop right at my doorstep. Excellent experience."',
  },
  {
    id: 4,
    name: "Sneha Joshi, Worli",
    review:
      '"Been coming to RN Infotech for years. They are reliable, affordable, and never compromise on quality. Best laptop repair shop in Grant Road!"',
  },
  {
    id: 5,
    name: "Vikram Mehta, Andheri",
    review:
      '"Got my laptop screen replaced here. The work was neat, quick, and very reasonably priced. The staff was courteous and kept me updated throughout."',
  },
  {
    id: 6,
    name: "Pooja Nair, Chembur",
    review:
      '"Trustworthy and professional service. I was worried about giving my laptop for repair but RN Infotech made the whole process smooth and stress-free."',
  },
];

const Reviews = () => {
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
      <section className="p-8 lg:py-12 lg:px-16 2xl:px-35">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse" />
            <div className="h-6 w-96 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[220px] bg-gray-200 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="p-8 lg:py-12 lg:px-16 2xl:px-35"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Header */}
        <div
          className={`flex flex-col items-center text-center gap-4 transition-all duration-700 ease-out
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="flex flex-col gap-2">
            <Label label="Testimonials" />
            <H2 text="What Our Customers Say" />
          </div>
          <H2Subtitle text="Trusted by thousands of happy customers across Mumbai." />
        </div>

        {/* Review Cards */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-stretch">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.id}
              review={review}
              index={index}
              isVisible={inView}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-700 ease-out delay-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <PrimaryBtn href="/" btnText="View Services" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;