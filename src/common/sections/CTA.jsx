import { Button } from "../../components";
import { dottesSvg } from "../../assets";
import SectionHeading from "../components/SectionHeading";
import { useNavigate } from "react-router-dom";
const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-[5rem]">
      <div className="container ">
        <div className="flex max-lg:flex-col gap-y-6 relative min-h-[300px] justify-between items-center p-8 bg-grey-11 rounded-lg">
          <img src={dottesSvg} className="absolute top-0 left-0" />
          <div className="lg:flex-[3] max-lg:text-center">
            <SectionHeading>
              <SectionHeading.Title>
                Start your financial journey with{" "}
                <span className="text-green-60">YourBank today!</span>
              </SectionHeading.Title>
              <SectionHeading.Desc>
                Ready to take control of your finances? Join YourBank now, and
                let us help you achieve your financial goals with our tailored
                solutions and exceptional customer service
              </SectionHeading.Desc>
            </SectionHeading>
          </div>
          <div className="lg:flex-1 flex justify-end">
            <Button
              text="Open Account"
              isActive={true}
              event={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                navigate("/banking-company-website/sign_up");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
