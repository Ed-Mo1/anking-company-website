import { bag } from "../assets";
import Button from "./Button";
const JobCard = ({ title, details, about, requirements }) => {
  return (
    <div className="py-4 px-8 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold max-lg:text-[24px] max-md:text-[20px]  text-[30px] mb-3">
          {title}
        </h3>
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
      </div>
      <div className="mt-8">
        <h2 className="font-semibold max-lg:text-[20px] max-md:text-base text-[24px] mb-4">
          About This Job
        </h2>
        <p className="paragraph">{about}</p>
      </div>
      <div>
        <h2 className="font-semibold max-lg:text-[20px] max-md:text-base text-[24px] my-6 ">
          Requirements & Qualifications
        </h2>
        <ul className="mt-8">
          {requirements.map((el) => (
            <li
              key={el}
              className="flex max-md:text-[1rem] text-base items-center gap-5 text-grey-70"
            >
              <img src={bag} />
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 font-medium">
        <Button text="Apply Now" isActive={true} />
      </div>
    </div>
  );
};

export default JobCard;
