import React from "react";

const Button = ({ text, event, isActive, className }) => {
  return (
    <button
      onClick={event}
      className={`${
        isActive ? "bg-green-60 text-grey-11" : "bg-none text-white"
      } btn ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
