const marqueeItems = [
  "Expert Laptop Repair & Services in Mumbai — Fast, Reliable & Affordable!",
  "Business Hours: Mon–Sat 10:00 AM – 9:00 PM | Sunday: By Appointment Only",
  "Quality Second-Hand Laptops Available — Tested, Trusted & Budget Friendly!",
  "Home Service Available — We Come to You! Standard Visiting Charges Apply.",
  "Visit Us at Tara Temple Lane, Grant Road, Mumbai — Serving Mumbai Since 1990!",
];

const Marquee = () => {
  return (
    <div className=" font-bitcount w-full overflow-hidden bg-gray-800 py-4 md:py-4 border-y border-dotted border-blue-300 group">
      <div
        className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {/* First set */}
        {marqueeItems.map((item, i) => (
          <span
            key={`a-${i}`}
            className="text-shadow-[0_0_10px] text-shadow-blue-500  text-2xl md:text-2xl font-normal text-blue-200 mx-6 md:mx-10"
          >
            {item}
          </span>
        ))}

        {/* Duplicate set for seamless loop */}
        {marqueeItems.map((item, i) => (
          <span
            key={`b-${i}`}
            className="text-shadow-[0_0_10px] text-shadow-blue-500  text-2xl md:text-2xl font-normal text-blue-200 mx-6 md:mx-10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;