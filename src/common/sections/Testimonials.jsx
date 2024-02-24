import { Navigation, A11y } from "swiper/modules";
import TestimonailsCard from "../../components/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonails } from "../../constants/index";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import SectionHeading from "../components/SectionHeading";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "../../components";

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center mb-5 gap-y-5  max-md:flex-col">
          <div className="flex-1 max-md:text-center">
            <SectionHeading>
              <SectionHeading.Title>
                Our{" "}
                <span className="text-green-60 leading-3">Testimonials</span>
              </SectionHeading.Title>
              <SectionHeading.Desc>
                Discover how YourBank has transformed lives with innovative
                digital solutions and personalized customer service. See why our
                clients trust us for a secure and prosperous financial journey
              </SectionHeading.Desc>
            </SectionHeading>
          </div>
          <div className="flex gap-5 flex-1 justify-end">
            <Button text="For Individuals" isActive={true} />
            <Button text="For Businesses" isActive={false} />
          </div>
        </div>
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
          }}
          className="px-12"
        >
          {testimonails.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonailsCard {...item} />
            </SwiperSlide>
          ))}
          <button className="swiper-prev-btn">
            <GrFormPreviousLink />
          </button>
          <button className="swiper-next-btn">
            <GrFormNextLink />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
