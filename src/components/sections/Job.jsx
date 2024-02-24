import SectionHeading from "../../common/components/SectionHeading";
import { jobs } from "../../constants";
import JobCard from "../JobCard";
const Job = () => {
  return (
    <section className="pt-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-12">
          <SectionHeading>
            <SectionHeading.Title>
              <span className="text-green-60">Job Openings</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              Explore exciting job openings at YourBank, where we value talent,
              innovation, and a passion for customer service. Join our team and
              be part of shaping a brighter future in the banking industry
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="grid max-lg:grid-cols-1 gap-5 grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Job;
