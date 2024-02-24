import { useRef, useState } from "react";
import { faq } from "../../constants/index.jsx";
import FaqCard from "../../components/FaqCard.jsx";
import Button from "../../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
const FAQ = () => {
  const loadMoreBtn = useRef();
  const showLessBtn = useRef();
  const [show, setShow] = useState(4);
  const showMore = () => {
    setShow(faq.length);
    loadMoreBtn.current.classList.add("hidden");
    showLessBtn.current.classList.remove("hidden");
  };
  const showLess = () => {
    setShow(4);
    loadMoreBtn.current.classList.remove("hidden");
    showLessBtn.current.classList.add("hidden");
  };

  return (
    <section className="py-[5rem]">
      <div className="container">
        <div className="max-md:text-center mb-5">
          <SectionHeading>
            <SectionHeading.Title>
              <span className="text-green-60">Frequently</span> Asked Questions
            </SectionHeading.Title>
            <SectionHeading.Desc>
              Still you have any questions? Contact our Team via
              support@yourbank.com
            </SectionHeading.Desc>
          </SectionHeading>
        </div>
        <div className="grid max-lg:grid-cols-1 gap-6 grid-cols-2">
          {faq.slice(0, show).map((item) => (
            <FaqCard key={item.id} {...item} />
          ))}
        </div>
        <div className="grid place-content-center mt-10">
          <div ref={loadMoreBtn}>
            <Button
              event={showMore}
              className="bg-grey-11 border-grey-15 border-[.5px]"
              text={`Load All FAQ’s`}
            />
          </div>
          <div ref={showLessBtn} className="hidden">
            <Button
              event={showLess}
              className="bg-grey-11 border-grey-15 border-[.5px]"
              text={`Show Less`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
