import Hero from "../components/sections/Hero";
import Products from "../components/sections/Products";
import Cases from "../components/sections/Cases";
import Features from "../components/sections/Features";
import { CTA, FAQ, Testimonials } from "../common/sections/index";
const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Cases />
      <Features />
      <FAQ />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
