import { aboutImg } from "../assets";
import { OverView } from "../common/sections";
import Releases from "../components/sections/Releases";
import MissionVision from "../components/sections/MissionVision";
const About = () => (
  <>
    <OverView>
      <OverView.Img img={aboutImg} />
      <OverView.Content>
        <span className="text-[20px] max-lg:text-center block">Welcome to YourBank</span>
        <OverView.Heading>
          Where Banking Meets{" "}
          <span className="text-green-60">
            <br />
            Excellence!
          </span>
        </OverView.Heading>
        <OverView.Desc>
          Join our team and embark on a rewarding journey in the banking
          industry. At YourBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, customer service, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </OverView.Desc>
      </OverView.Content>
    </OverView>
    <MissionVision/>
    <Releases/>
  </>
);

export default About;
