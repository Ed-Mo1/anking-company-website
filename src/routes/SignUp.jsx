import { Testimonials } from "../common/sections";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import { facebook, google, apple } from "../assets/index";
import Icon from "../components/Icon";
import Input from "../components/Input";
const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="flex py-[10rem] flex-col justify-center items-center min-h-[100vh]">
          <div>
            <h3 className="heading_1 text-center text-green-60">Sign Up</h3>
            <p className="paragraph text-center mt-5">
              Join our community today! Create an account to unlock exclusive
              features and personalized experiences.
            </p>
          </div>
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid max-md:grid-cols-1 grid-cols-2 gap-5 my-10">
                <fieldset>
                  <Input placeholder="Enter First Name" type="text" />
                </fieldset>
                <fieldset>
                  <Input placeholder="Enter Last Name" type="text" />
                </fieldset>
                <fieldset>
                  <Input placeholder="Enter your Email" type="email" />
                </fieldset>
                <fieldset>
                  <Input placeholder="Enter your Password" type="password" />
                </fieldset>
              </div>
              <a href="#" className="underline text-center mt-6 block">
                Forgot Password?
              </a>
              <div className="mt-10 flex flex-col items-center gap-5">
                <Button
                  text="Sign Up"
                  isActive={true}
                  className={"w-full max-w-[400px] mx-auto block"}
                />
                <Button
                  text="Login"
                  isActive={false}
                  event={() => navigate("/banking-company-website/login")}
                  className={"w-full  max-w-[400px] bg-grey-20 mx-auto block"}
                />
              </div>
              <div>
                <h6 className="text-center mt-10">Or Continue with</h6>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <a href="#">
                    {" "}
                    <Icon icon={facebook} />
                  </a>
                  <a href="#">
                    {" "}
                    <Icon icon={google} />
                  </a>
                  <a href="#">
                    {" "}
                    <Icon icon={apple} />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="pb-[5rem]">
        <Testimonials />
      </div>
    </>
  );
};

export default SignUp;
