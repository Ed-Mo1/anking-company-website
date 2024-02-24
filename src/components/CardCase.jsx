import React from "react";
import Icon from "./Icon";

const CardCase = ({ icon, title }) => {
  return (
    <div className=" p-5 text-center rounded-lg bg-grey-10">
     <div className="grid place-content-center">
     <Icon icon={icon} />
     </div>
      <h5 className="pt-5 ">{title}</h5>
    </div>
  );
};

export default CardCase;
