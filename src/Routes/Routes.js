import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/Errorpage/ErrorPage.jsx";

import CategoryCard from "../components/categotrycard/CategoryCard";
import Coursescard from "../components/coursesCard/Coursescard";
import Home from "../components/Home/Home";
import Login from "../components/Login-signup/Login";
import Signup from "../components/Login-signup/Signup";
import SingleCard from "../components/SingleCard/SingleCard";
import Main from "../layout/Main";

import Buy from "../components/Buy/Buy";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import { productsAndCartData } from "../utils/getCart&ProductsData";
import Faq from "../components/FAQ/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: productsAndCartData,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/",
        element: <Courses></Courses>,
        children: [
          { path: "/courses", element: <CategoryCard></CategoryCard> },
          {
            path: "/courses/:id",
            loader: ({ params }) =>
              fetch(`https://circle-it-server.vercel.app/courses/${params.id}`),
            element: <Coursescard></Coursescard>,
          },
          {
            path: "/course/:id",
            loader: ({ params }) =>
              fetch(`https://circle-it-server.vercel.app/course/${params.id}`),
            element: <SingleCard></SingleCard>,
          },
        ],
      },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/faq", element: <Faq></Faq> },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Buy></Buy>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
