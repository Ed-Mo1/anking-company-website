const TestimonialsCard = ({ name, desc, icon }) => {
  return (
    <div className="flex lg:min-h-[400px] justify-around h-full flex-col items-center text-center">
      <div className=" w-full relative before:absolute before:top-1/2 before:left-0 before:translate-y-[-50%] before:bg-grey-15 before:w-full before:h-[1px]  before:z-[-1]">
        <img
          src={icon}
          alt="icon"
          className="mx-auto p-6 bg-[#1E1E1E] rounded-full"
        />
      </div>
      <p className="paragraph mb-6 ">{desc}</p>
      <h3 className="pt-10 text-green-60">{name}</h3>
    </div>
  );
};

export default TestimonialsCard;
