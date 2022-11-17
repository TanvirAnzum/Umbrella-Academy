import { createBrowserRouter } from "react-router-dom";
import Blog from "../pages/Blog.jsx";
import CoursesDetails from "../pages/CourseDetails.jsx";
import Courses from "../pages/Courses.jsx";
import Error from "../pages/Error.jsx";
import Faq from "../pages/Faq.jsx";
import HomePage from "../pages/HomePage.jsx";
import Login from "../pages/Login.jsx";
import PremiumAccess from "../pages/PremiumAccess.jsx";
import Registration from "../pages/Registration.jsx";
import Layout from "../ui/Layout";
import PrivateRoute from "./PrivateRoute.js";
import PublicRoute from "./PublicRoute.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courseDetails/:courseId",
        element: <CoursesDetails />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "premium/:courseId",
        element: (
          <PrivateRoute>
            <PremiumAccess />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/registration",
    element: (
      <PublicRoute>
        <Registration />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
