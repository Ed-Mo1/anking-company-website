import React from "react";
import Icon from "./Icon";
const ProductCard = ({ title, desc, icon }) => {
  return (
    <div className="flex flex-col items-center first:pl-0 lg:pl-5 text-center gap-5 md:last:col-span-2 lg:last:col-span-1">
      <Icon icon={icon} />
      <h4 className="text-2xl">{title}</h4>
      <p className="paragraph">{desc}</p>
    </div>
  );
};

export default ProductCard;
