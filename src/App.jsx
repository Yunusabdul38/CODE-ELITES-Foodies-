import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodFullDetail from "./Pages/FoodList/FoodFullDetail";
import FoodList from "./Pages/FoodList/FoodList.jsx";
import Contact from "./Pages/contact/Contact.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Form from "./components/Form/Form.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "AboutUs",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "AvailableFood",
    element: <FoodList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
    children:[{
      path:"cart/:id",
      element:<FoodFullDetail/>
    }]
  },
  {
    path: "Register",
    element: <Form />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={route} />;
}
export default App;
