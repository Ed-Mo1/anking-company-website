import React from "react";
import Icon from "./Icon";
const ProductCard = ({ title, desc, icon }) => {
  return (
    <div className="flex flex-col items-center text-center lg:even:pl-5 lg:last:pl-5 border-grey-15 lg:last:border-l-[0.5px] gap-5 lg:even:border-l-[0.3px]   md:last:col-span-2 lg:last:col-span-1">
      <Icon icon={icon} />
      <h4 className="text-2xl">{title}</h4>
      <p className="paragraph">{desc}</p>
    </div>
  );
};

export default ProductCard;
