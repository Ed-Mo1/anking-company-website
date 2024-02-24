import React from "react";

const SectionHeading = ({ children }) => {
  return <>{children}</>;
};

export default SectionHeading;

SectionHeading.Title = ({ children }) => (
  <h1 className="heading_1 mb-3">{children}</h1>
);

SectionHeading.Desc = ({ children }) => (
  <p className="paragraph md:max-w-[90%] lg:max-w-[80%]">{children}</p>
);
