const Icon = ({ icon }) => {
  return (
    <div className="p-3 md:p-5 bg-green-60 w-fit rounded-full bg-opacity-[5%]">
      <div className="p-3 md:p-5 bg-green-60 rounded-full bg-opacity-[10%]">
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default Icon;
