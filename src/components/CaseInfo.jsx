const CaseInfo = ({title, percentage}) => {
  return (
    <div>
      <h2 className="heading_2 text-green-60">{percentage}</h2>
      <p className="paragraph ">{title}</p>
    </div>
  );
};

export default CaseInfo;
