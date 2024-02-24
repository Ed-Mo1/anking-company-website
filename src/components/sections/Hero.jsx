import Button from "../Button";
import { arrowsPng, correct, dottesSvg, heroImg } from "../../assets";
import SectionHeading from "../../common/components/SectionHeading";

const Hero = () => {
  return (
    <section id="hero" className="pt-[10rem] lg:pt-[6rem] ">
      <img
        src={dottesSvg}
        alt="img"
        className="absolute top-0 left-[-10px] z-[-1]"
      />
      <div className="container gap-y-5 flex max-lg:flex-col flex-row justify-between items-center min-h-screen">
        <div className="flex-1 flex flex-col gap-5 max-lg:items-center max-lg:text-center items-start ">
          <div className="flex max-sm:text-[12px] items-center gap-1 rounded-full bg-grey-15 w-fit py-2 px-4">
            <img src={correct} alt="icon" />
            No LLC Required, No Credit Check.
          </div>
          <SectionHeading>
            <SectionHeading.Title>
              Welcome to YourBank Empowering Your{" "}
              <span className="text-green-60">Financial Journey</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              At YourBank, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers' needs.
            </SectionHeading.Desc>
          </SectionHeading>
          <Button text="Open Account" isActive={true} />
        </div>
        <div className="flex-1 relative">
          <img
            src={heroImg}
            alt="hero__img"
            className="w-[500px] object-contain ms-auto"
          />
          <img
            src={arrowsPng}
            alt="arrows"
            className="absolute top-0 right-0 z-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
