const OverView = ({ children }) => {
  return (
    <section className=" min-h-screen flex items-center pt-[10rem] lg:pt-[10rem]">
      <div className="container">
        <div className="relative flex flex-col">{children}</div>
      </div>
    </section>
  );
};

export default OverView;
OverView.Heading = ({ children }) => (
  <h1 className="heading_2 max-lg:text-center ">{children}</h1>
);
OverView.Desc = ({ children }) => (
  <p className="paragraph lg:max-w-[600px] max-lg:text-center pt-5">
    {children}
  </p>
);
OverView.Img = ({ img }) => <img src={img} alt="img" className="ms-auto" />;
OverView.Content = ({ children }) => (
  <div className="rounded-lg  lg:rounded-br-[50px] max-lg:relative max-lg:bottom-[50px] lg:absolute lg:top-0 w-it left-0 py-12 px-4 lg:px-8  border-r- bg-grey-10">
    {children}
  </div>
);
