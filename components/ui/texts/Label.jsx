import React from "react";

const Label = ({ label, custom }) => {
  return (
    <p className={`label font-semibold text-center text-sm md:text-lg ${custom}`}>
      {label}
    </p>
  );
};

export default Label;
