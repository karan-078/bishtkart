import React, { Children } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import {
  Home,
  Cart,
  CategoryProduct,
  Search,
  SinglProduct,
  ChekoutPage,
} from "./page/index";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="source">
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/product/:id",
        element: <SinglProduct />,
      },

      {
        path: "/category/:category",
        element: <CategoryProduct />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path:"/search/:searchTerm",
        element:<Search />
      },

      {
        path:"/chekoutpage",
        element:<ChekoutPage />
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

