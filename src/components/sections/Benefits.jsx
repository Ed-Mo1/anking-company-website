import SectionHeading from "../../common/components/SectionHeading";
import { benefits } from "../../constants";
import BenefitCard from "../BenefitCard";
const Benefits = () => {
  return (
    <section className="pt-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-12">
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
        <div className="grid max-md:grid-cols-1 gap-5 grid-cols-2">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
