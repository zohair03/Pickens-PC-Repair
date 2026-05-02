"use client";
import WhyCardContent from "./WhyCardContent";

const WhyCard = ({ card, index, isVisible }) => (
  <div
    className={`shadow-lg shadow-gray-300 transition-transform duration-600 hover:-translate-y-2 w-full xl:w-1/3 p-4 pb-6 bg-white rounded-2xl flex items-start gap-4 border border-gray-300 transition-all duration-700 ease-out transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <WhyCardContent card={card} />
  </div>
);

export default WhyCard;