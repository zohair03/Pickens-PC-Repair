import React from "react";
import Link from "next/link";

const TertiaryBtn = ({ href, btnText, custom }) => {
  return (
    <Link
      href={href ? href : "/"}
      className={`btn-press cursor-pointer font-serif font-extralight text-[12px] border border-white/20 text-white rounded-full bg-white/5 backdrop-blur-xl hover:bg-white/15 hover:border-white/30 px-8 flex items-center justify-center transition-all ease-in-out duration-300 w-full md:w-fit min-h-[50px] liquid-glass-btn ${custom}`}
    >
      {btnText}
    </Link>
  );
};

export default TertiaryBtn;
