import { OverView, FAQ } from "../common/sections";
import { security } from "../assets/index";
import Protect from "../components/sections/Protect";
const Security = () => (
  <>
    <OverView>
      <OverView.Img img={security} />
      <OverView.Content>
        <OverView.Heading>
          Your Security is Our <br />
          <span className="text-green-60">Top Priority</span>
        </OverView.Heading>
        <OverView.Desc>
          At YourBank, we understand the importance of keeping your financial
          information secure. We employ robust security measures and advanced
          technologies to protect your personal and financial data. Rest assured
          that when you bank with us, your security is our utmost priority.
        </OverView.Desc>
      </OverView.Content>
    </OverView>
    <Protect />
    <FAQ />
  </>
);

export default Security;
