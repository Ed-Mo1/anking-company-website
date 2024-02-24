import { CTA, FAQ, OverView } from "../common/sections/index";
import Benefits from "../components/sections/Benefits";
import Job from "../components/sections/Job";
import { careers } from "../assets/index";
import Values from "../components/sections/Values";
const Careers = () => {
  return (
    <>
      <OverView>
        <OverView.Img img={careers} />
        <OverView.Content>
          <OverView.Heading>
            Welcome to <span className="text-green-60">YourBank</span>
            <br />
            Careers!
          </OverView.Heading>
          <OverView.Desc>
            Join our team and embark on a rewarding journey in the banking
            industry. At YourBank, we are committed to fostering a culture of
            excellence and providing opportunities for professional growth. With
            a focus on innovation, customer service, and integrity, we strive to
            make a positive impact in the lives of our customers and
            communities. Join us today and be a part of our mission to shape the
            future of banking.
          </OverView.Desc>
        </OverView.Content>
      </OverView>
      <Values />
      <Benefits />
      <Job />
      <FAQ />
      <CTA />
    </>
  );
};

export default Careers;
