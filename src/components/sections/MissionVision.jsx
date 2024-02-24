import SectionHeading from "../../common/components/SectionHeading";
import { mission, vision } from "../../assets";
const MissionVision = () => {
  return (
    <section className="pt-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-12">
          <SectionHeading>
            <SectionHeading.Title>
              <span className="text-green-60">Mission & Vision</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              We envision being a leading force in the industry, driven by
              innovation, integrity, and inclusivity, creating a brighter
              financial future for individuals and businesses while maintaining
              a strong commitment to customer satisfaction and community
              development
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="flex max-lg:flex-col mb-8  gap-8 justify-between items-center">
          <div className="p-10 pb-0 relative rounded-t-3xl flex-1 bg-grey-15 max-lg:before:left-1/2 max-lg:before:translate-x-[-50%] max-lg:before:bottom-0 max-lg:before:h-[2px] max-lg:before:w-1/2 before:absolute lg:before:top-1/2 lg:before:translate-y-[-50%] lg:before:w-[2px] lg:before:right-0 lg:before:h-1/2 before:bg-green-60">
            <img src={mission} alt="img" className="mx-auto" />
          </div>
          <div className="flex-1 max-lg:text-center">
            <h3 className="text-[38px] font-medium">Mission</h3>
            <p className="paragraph">
              At YourBank, our mission is to empower our customers to achieve
              financial success. We are dedicated to delivering innovative
              banking solutions that cater to their unique needs. Through
              personalized services, expert guidance, and cutting-edge
              technology, we aim to build strong, lasting relationships with our
              customers. Our mission is to be their trusted partner, helping
              them navigate their financial journey and realize their dreams.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse max-lg:flex-col mb-8  gap-8 justify-between items-center">
          <div className="p-10 pb-0 relative rounded-t-3xl flex-1 bg-grey-15 max-lg:before:left-1/2 max-lg:before:translate-x-[-50%] max-lg:before:bottom-0 max-lg:before:h-[2px] max-lg:before:w-1/2 before:absolute lg:before:top-1/2 lg:before:translate-y-[-50%] lg:before:w-[2px] lg:before:right-0 lg:before:h-1/2 before:bg-green-60">
            <img src={vision} alt="img" className="mx-auto"/>
          </div>
          <div className="flex-1 max-lg:text-center">
            <h3 className="text-[38px] font-medium">Vision</h3>
            <p className="paragraph">
              Our vision at YourBank is to redefine banking by creating a
              seamless and personalized experience for our customers. We
              envision a future where banking is accessible, transparent, and
              tailored to individual preferences. Through continuous innovation
              and collaboration, we strive to be at the forefront of the
              industry, setting new standards for customer-centric banking. Our
              vision is to be the preferred financial institution, known for our
              unwavering commitment to excellence, trust, and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
