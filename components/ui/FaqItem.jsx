"use client";
import FaqItemContent from "./FaqItemContent";

const FaqItem = ({ faq, isOpen, onToggle, index, isVisible }) => (
  <div
    className={`border-b border-gray-300 py-4 md:py-5 cursor-pointer transition-all duration-700 ease-out transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
    onClick={onToggle}
  >
    <div className="flex justify-between items-start gap-4">
      <FaqItemContent faq={faq} isOpen={isOpen} />
      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center transition-transform duration-300">
        <span className="text-white text-xl font-light leading-none">
          {isOpen ? "−" : "+"}
        </span>
      </div>
    </div>
  </div>
);

export default FaqItem;