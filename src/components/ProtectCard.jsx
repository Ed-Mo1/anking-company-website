import React from "react";
import Icon from "./Icon";
const ProtectCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-grey-15 p-5 rounded">
      <div className="flex gap-5 items-center">
        <Icon icon={icon} />
        <h4 className="max-lg:text-[20px] max-md:text-[18px] text-2xl">
          {title}
        </h4>
      </div>
      <p className="paragraph mt-4">{desc}</p>
    </div>
  );
};

export default ProtectCard;
