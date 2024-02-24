import { useState } from "react";
import { featuresLinks, featuresContent } from "../../constants/index";
import Button from "../Button";
import FeaturesCard from "../FeaturesCard";
import SectionHeading from "../../common/components/SectionHeading";
const Features = () => {
  const [index, setIndex] = useState(0);
  return (
    <section className="py-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-5">
          <SectionHeading>
            <SectionHeading.Title>
              Our <span className="text-green-60">Features</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              Experience a host of powerful features at YourBank, including
              seamless online banking, secure transactions, and personalized
              financial insights, all designed to enhance your banking
              experience
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="flex max-lg:flex-col gap-5 justify-between items-start">
          <div className="py-4 px-8 flex max-lg:flex-row flex-col justify-between gap-5 flex-nowrap overflow-x-auto max-lg:w-full max-lg:whitespace-nowrap lg:flex-1 rounded-lg bg-grey-11">
            {featuresLinks.map(({ id, title }, i) => (
              <Button
                key={id}
                text={title}
                isActive={false}
                event={() => setIndex(i)}
                className={` ${index === i ? "bg-grey-10" : "bg-grey-15"}`}
              />
            ))}
          </div>
          <div className="lg:flex-[5] h-full grid max-md:grid-cols-1 grid-cols-2 gap-6 grid-rows-2-2">
            {featuresContent.map(({ id, title, desc }) => (
              <FeaturesCard key={id} title={title} desc={desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
