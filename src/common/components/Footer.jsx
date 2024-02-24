import { logo } from "../../assets";
import { navlinks } from "../../constants";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-grey-15 pt-[5rem] pb-2">
      <div className="container">
        <div className="pb-10 border-b-[.1px] border-b-grey-70">
          <img src={logo} alt="logo" className="mx-auto" />
          <ul className="flex gap-5 flex-wrap items-center justify-center mt-8">
            {navlinks.map(({ id, title, path }) => (
              <NavLink
                key={id}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to={path}
                className="hover:text-opacity-[50%]  transition-colors"
              >
                {title}
              </NavLink>
            ))}
          </ul>
        </div>
        <ul className="py-10 flex-wrap  border-b-[.1px] border-b-grey-70 flex justify-center gap-5 items-center">
          <li className="flex items-center gap-2 ">
            <MdEmail className="text-green-60 text-2xl" />© 2022 YourBank
          </li>
          <li className="flex items-center gap-2 ">
            <FaPhone className="text-green-60 text-xl" />
            +91 91813 23 2309
          </li>
          <li className="flex items-center gap-2 ">
            <FaLocationDot className="text-green-60 text-2xl" />
            Location
          </li>
        </ul>
        <div className="flex  max-md:flex-col justify-between mt-6 items-center relative bg-grey-11 max-md:py-10 max-md:rounded-lg py-4 px-6 rounded-full">
          <div className="flex gap-2 m items-center max-md:absolute max-md:top-[-10%] max-md:left-1/2 max-md:-translate-x-1/2">
            <div className="bg-green-60 p-2 rounded-full">
              <FaFacebook className=" text-grey-10 text-xl" />
            </div>
            <div className="bg-green-60 p-2 rounded-full">
              <FaSquareXTwitter className=" text-grey-10 text-xl" />
            </div>
            <div className="bg-green-60 p-2 rounded-full">
              <FaLinkedin className=" text-grey-10 text-xl" />
            </div>
          </div>
          <p className="paragraph text-center">YourBank All Rights Reserved</p>
          <div className="flex gap-2">
            <Link
              to="/"
              className="hover:text-opacity-[50%] text-center text-grey-70  transition-colors pe-5 border-r-[.1px] border-r-grey-70 pr-2"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-opacity-[50%] text-center text-grey-70  transition-colors"
              to="/"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
