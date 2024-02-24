import React from "react";

const ValueCard = ({ title, desc }) => {
  return (
    <div className="relative py-5 px-8 before:h-full before:w-[2px] before:bg-green-60 before:absolute before:left-0 before:top-0">
      <h2 className="heading_2 text-grey-30 pb-5">{title}</h2>
      <p className="paragraph">{desc}</p>
    </div>
  );
};

export default ValueCard;
