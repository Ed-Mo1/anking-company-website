import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  About,
  Careers,
  Login,
  SignUp,
  Security,
  NotFound,
} from "./routes/index.jsx";

import Layout from "./common/components/Layout.jsx";
const router = createBrowserRouter([
  {
    path: "/banking-company-website/",
    element: <Layout />,
    children: [
      {
        path: "/banking-company-website/",
        element: <Home />,
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/banking-company-website/careers",
        element: <Careers />,
      },
      {
        path: "/banking-company-website/about",
        element: <About />,
      },
      {
        path: "/banking-company-website/security",
        element: <Security />,
      },
      {
        path: "/banking-company-website/login",
        element: <Login />,
      },
      {
        path: "/banking-company-website/sign_up",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
