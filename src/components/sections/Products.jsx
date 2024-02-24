import ProductCard from "../ProductCard";
import Button from "../Button";
import { products } from "../../constants";
import SectionHeading from "../../common/components/SectionHeading";

const Products = () => {
  return (
    <section id="products" className="py-[5rem]">
      <div className="container">
        <div className="flex justify-between items-center mb-5 gap-y-5  max-md:flex-col">
          <div className="flex-1 max-md:text-center">
            <SectionHeading>
              <SectionHeading.Title>
                Our <span className="text-green-60 leading-3">Products</span>
              </SectionHeading.Title>
              <SectionHeading.Desc>
                Discover a range of comprehensive and customizable banking
                products at YourBank, designed to suit your unique financial
                needs and aspirations
              </SectionHeading.Desc>
            </SectionHeading>
          </div>
          <div className="flex gap-5 flex-1 justify-end">
            <Button text="For Individuals" isActive={true} />
            <Button text="For Businesses" isActive={false} />
          </div>
        </div>
        <div className="grid mt-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
