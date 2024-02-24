import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./common/components/index";
import {
  Home,
  About,
  Careers,
  Login,
  SignUp,
  Security,
  NotFound,
} from "./routes/index.jsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/banking-company-website/" element={<Home />} />
        <Route path="/banking-company-website/careers" element={<Careers />} />
        <Route path="/banking-company-website/about" element={<About />} />
        <Route
          path="/banking-company-website/security"
          element={<Security />}
        />
        <Route path="/banking-company-website/login" element={<Login />} />
        <Route path="/banking-company-website/sign_up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
