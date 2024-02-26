import { logo } from "../../assets/index";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navlinks } from "../../constants";
import { Button } from "../../components/index";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full absolute top-8 z-20">
      <div className="container">
        <div className="flex justify-between items-center relative bg-grey-11 py-4 px-6 rounded-full">
          <div>
            <Link to="/banking-company-website/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="flex gap-5  max-lg:hidden">
            {navlinks.map(({ id, title, path }) => (
              <NavLink
                end={true}
                key={id}
                to={path}
                className={({ isActive }) =>
                  `py-3 px-5 rounded-full hover:bg-grey-15 hover:bg-opacity-50 transition ${
                    isActive && "bg-grey-15"
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </ul>
          <div className="flex gap-5 items-center  max-lg:hidden">
            <Button
              text="Sign Up"
              isActive={false}
              event={() => navigate("/banking-company-website/sign_up")}
            />
            <Button
              text="Login"
              isActive={true}
              event={() => navigate("/banking-company-website/login")}
            />
          </div>
          <div
            className="py-2 px-4 bg-green-60 rounded-full hover:bg-green-65 transition cursor-pointer max-lg:block hidden"
            onClick={() => setOpen(!open)}
          >
            <HiMenuAlt3 className="text-3xl text-grey-20" />
          </div>
          <div
            className={`w-full max-w-[250px] absolute right-5 top-[105%] bg-grey-11 p-5 rounded-lg flex flex-col gap-5  lg:hidden ${
              open ? "block open_nav" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-5">
              {navlinks.map(({ id, title, path }) => (
                <NavLink
                  onClick={() => setOpen(false)}
                  end={true}
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `py-3 px-5 rounded-lg hover:bg-grey-15 hover:bg-opacity-50 transition ${
                      isActive && "bg-grey-15"
                    }`
                  }
                >
                  {title}
                </NavLink>
              ))}
            </ul>
            <div className="flex gap-5 flex-col items-center">
              <Button
                text="Sign Up"
                isActive={false}
                className="w-full rounded-lg"
                event={() => {
                  setOpen(false);
                  navigate("/banking-company-website/sign_up");
                }}
              />
              <Button
                text="Login"
                isActive={true}
                className="w-full rounded-lg"
                event={() => {
                  setOpen(false);
                  navigate("/banking-company-website/login");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
