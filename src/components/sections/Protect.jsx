import SectionHeading from "../../common/components/SectionHeading";
import { protect } from "../../constants";
import ProtectCard from "../ProtectCard";
const Protect = () => {
  return (
    <section className="pt-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-5">
          <SectionHeading>
            <SectionHeading.Title>
              How We <span className="text-green-60">Protect You</span>
            </SectionHeading.Title>
            <SectionHeading.Desc>
              At YourBank, we prioritize the security and confidentiality of
              your financial information. Our state-of-the-art encryption
              technology and stringent data protection measures ensure your
              assets and transactions are safeguarded at all times
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="grid max-md:grid-cols-1 gap-5 grid-cols-2">
          {protect.map((item) => (
            <ProtectCard key={item.id} {...item}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protect;
