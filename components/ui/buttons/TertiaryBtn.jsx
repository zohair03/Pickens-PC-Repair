import React from "react";
import Link from "next/link";

const TertiaryBtn = ({ href, btnText, custom }) => {
  return (
    <Link
      href={href ? href : "/"}
      className={`btn-press cursor-pointer font-serif font-extralight text-[12px] border border-white text-white rounded-full bg-transparent hover:bg-white/30 hover:backdrop-blur-lg px-8 flex items-center justify-center transition-all ease-in-out duration-300 w-full md:w-fit min-h-[50px] ${custom}`}
    >
      {btnText}
    </Link>
  );
};

export default TertiaryBtn;
