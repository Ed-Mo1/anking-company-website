import SectionHeading from "../../common/components/SectionHeading";
import { releases } from "../../constants";
import RealeaseCard from "../RealeaseCard";
const Releases = () => {
  return (
    <section className="py-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-12">
          <SectionHeading>
            <SectionHeading.Title>
              <span className="text-green-60">Press Releases</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              Stay updated with the latest happenings and exciting developments
              at YourBank through our press releases.
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-8">
          {releases.map((el) => (
            <RealeaseCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Releases;
