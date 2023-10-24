import React from "react";
import ReactDOM from "react-dom/client";
import FoodList from "./components/AvailableFood/FoodList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Form from "./components/Form/Form.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "AboutUs/",
        element:<AboutUs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "AvailableFood/",
        element: <FoodList />,
        errorElement: <ErrorPage />,
      },
      {
        path: "Contact/",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "Cart/",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
      {
        path: "Register/",
        element: <Form />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
