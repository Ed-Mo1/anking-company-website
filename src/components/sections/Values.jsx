import ValueCard from "../ValueCard";
import { values } from "../../constants/index";
import SectionHeading from "../../common/components/SectionHeading";
const Values = () => {
  return (
    <section className="pt-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-12">
          <SectionHeading>
            <SectionHeading.Title>
              Our <span className="text-green-60">Values</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              At YourBank, our values form the foundation of our organization
              and guide our actions. We believe in upholding the highest
              standards of integrity, delivering exceptional service, and
              embracing innovation. These values define our culture and shape
              the way we work together to achieve our goals.
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="grid max-md:grid-cols-1 gap-8 grid-cols-2">
          {values.map(({ id, title, desc }) => (
            <ValueCard key={id} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
