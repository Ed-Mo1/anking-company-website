import vector from "../assets/Vector.svg";
const FeaturesCard = ({ title, desc }) => {
  return (
    <div className="py-5 px-8 bg-grey-11 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="heading_3">{title}</h3>
        <img src={vector} alt="vector" />
      </div>
      <p className="paragraph mt-6">{desc}</p>
    </div>
  );
};

export default FeaturesCard;
