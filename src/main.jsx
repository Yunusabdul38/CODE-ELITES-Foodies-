import React from "react";
import ReactDOM from "react-dom/client";
import CartAuthentication from "./context/CartAuthContext.jsx";
import ModalAuthContext from "./context/ModalAuthContext.jsx";
import App from "./App.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartAuthentication>
      <ModalAuthContext>
       <App/>
      </ModalAuthContext>
    </CartAuthentication>
  </React.StrictMode>
);