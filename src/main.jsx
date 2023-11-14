import React from "react";
import ReactDOM from "react-dom/client";
import FoodList from "./components/AvailableFood/FoodList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Form from "./components/Form/Form.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import CartAuthentication from "./Authentication/CartAuthContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ModalAuthContext from "./Authentication/ModalAuthContext.jsx";
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
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "AboutUs/",
        element: <AboutUs />,
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
    <CartAuthentication>
      <ModalAuthContext>
        <RouterProvider router={route} />
      </ModalAuthContext>
    </CartAuthentication>
  </React.StrictMode>
);
// const message = "It specifies the “flex shrink factor” which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there isn’t enough space on the row element When omitted, it is set to 1 and the flex shrink factor is multiplied by the flex basis when distributing negative space."
// const arrayofWords = message.split(" ")
// let details;
// arrayofWords.length >15?details=arrayofWords.splice(0,15).join(" "):details=arrayofWords.join(" ")
// console.log(details)
