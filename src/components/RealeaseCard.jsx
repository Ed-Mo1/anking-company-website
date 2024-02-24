import React from "react";

const RealeaseCard = ({ img, title, about, details }) => {
  return (
    <div className="bg-grey-11 p-5 rounded-lg">
      <div>
        <img src={img} alt="img" className="w-full" />
      </div>

      <div className="mt-5">
        <h3 className=" max-lg:text-[24px] max-md:text-[20px]  text-[30px] mb-3">{title}</h3>
        <ul className="flex gap-5 items-center flex-wrap">
          {Object.keys(details).map((el) => (
            <li
              key={details[el]}
              className="bg-grey-10 rounded-full py-2 px-4 max-lg:text-[1rem] max-md:text-sm text-base border-[.5px] border-grey-15"
            >
              {el}:{details[el]}
            </li>
          ))}
        </ul>
        <p className="paragraph pt-5">{about}</p>
      </div>
    </div>
  );
};

export default RealeaseCard;
