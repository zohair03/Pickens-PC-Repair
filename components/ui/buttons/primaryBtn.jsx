import Link from "next/link";
import React from "react";

// Theme colors — change here to retheme
const theme = {
  bg:          "liquid-glass-strong-light",
  bgHover:     "liquid-glass-strong-light",
  bgDisabled:  "disabled:bg-gray-400",
  text:        "text-white",
  textHover:   "hover:text-white",
};

const sharedClasses = `
  cursor-pointer font-serif font-extralight text-[12px]
  rounded-full px-8 transition-all ease-in-out duration-300
  min-w-[90%] md:min-w-[220px] min-h-[50px]
  flex items-center justify-center
  relative overflow-hidden
  btn-primary btn-press liquid-glass-btn
`;

const PrimaryBtn = ({ btnText, onClick, href, custom, type, disabled }) => {
  const colorClasses = `
    ${theme.bg} ${theme.bgHover} ${theme.text} ${theme.textHover}
    ${disabled ? theme.bgDisabled : ""}
  `;

  if (type === "submit" || type === "button") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${sharedClasses} ${colorClasses} ${custom} disabled:cursor-not-allowed`}
      >
        <div className="shimmer" />
        <span className="relative z-10">{btnText}</span>
      </button>
    );
  }

  return (
    <Link
      href={href || "/"}
      className={`${sharedClasses} ${colorClasses} ${custom}`}
    >
      <div className="shimmer" />
      <span className="relative z-10">{btnText}</span>
    </Link>
  );
};

export default PrimaryBtn;