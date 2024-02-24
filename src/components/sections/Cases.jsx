import Button from "../Button";
import {
  individualsCases,
  businessInfo,
  individualInfo,
} from "../../constants";
import CardCase from "../CardCase";
import CaseInfo from "../CaseInfo";
import SectionHeading from "../../common/components/SectionHeading";

const Cases = () => {
  return (
    <section id="use-cases" className="py-[5rem]">
      <div className="container">
        <div className="mb-5 max-md:text-center">
          <SectionHeading>
            <SectionHeading.Title>
              <span className="text-green-60">Use Cases</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              At YourBank, we cater to the diverse needs of individuals and
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="flex  max-lg:flex-col justify-between items-center gap-10">
          <div className="flex-1 max-lg:w-full grid max-sm:grid-cols-1 grid-cols-2 gap-6 bg-grey-11 rounded-lg place-content-center p-10">
            {individualsCases.map(({ id, icon, title }) => (
              <CardCase key={id} icon={icon} title={title} />
            ))}
          </div>
          <div className="flex-1 h-full max-lg:text-center ">
            <div>
              <h3 className="text-3xl mb-5">For Individuals</h3>
              <p className="paragraph">
                For individuals, our mortgage services pave the way to
                homeownership, and our flexible personal loans provide vital
                support during various life milestones. We also prioritize
                retirement planning, ensuring a financially secure future for
                our customers
              </p>
            </div>
            <div className="grid max-lg:grid-cols-1 grid-cols-3 my-5 gap-12">
              {individualInfo.map(({ id, title, percentage }) => (
                <CaseInfo key={id} title={title} percentage={percentage} />
              ))}
            </div>
            <div className="mt-12">
              <Button
                text="Learn More"
                isActive={false}
                className={"bg-grey-11"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse mt-12 max-lg:flex-col justify-between items-center gap-10">
          <div className="flex-1 max-lg:w-full grid max-sm:grid-cols-1 grid-cols-2 gap-6 bg-grey-11 rounded-lg place-content-center p-10">
            {individualsCases.map(({ id, icon, title }) => (
              <CardCase key={id} icon={icon} title={title} />
            ))}
          </div>
          <div className="flex-1 h-full max-lg:text-center ">
            <div>
              <h3 className="text-3xl mb-5">For Business</h3>
              <p className="paragraph">
                For businesses, we empower growth with working capital solutions
                that optimize cash flow, and our tailored financing options fuel
                business expansion. Whatever your financial aspirations,
                YourBank is committed to providing the right tools and support
                to achieve them
              </p>
            </div>
            <div className="grid max-lg:grid-cols-1 grid-cols-3 my-5 gap-12">
              {businessInfo.map(({ id, title, percentage }) => (
                <CaseInfo key={id} title={title} percentage={percentage} />
              ))}
            </div>
            <div className="mt-12">
              <Button
                text="Learn More"
                isActive={false}
                className={"bg-grey-11"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
