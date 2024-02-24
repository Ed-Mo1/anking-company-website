import React from "react";

const Input = ({ placeholder, type }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      autoComplete="on"
      className="rounded-full py-3 px-4 border-[1px] focus:outline-none border-grey-35 w-full max-w-[300px] bg-grey-10 "
    />
  );
};

export default Input;
