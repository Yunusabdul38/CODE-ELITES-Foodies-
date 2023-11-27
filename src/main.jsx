import React from "react";
import ReactDOM from "react-dom/client";
import CartAuthentication from "./Authentication/CartAuthContext.jsx";
import ModalAuthContext from "./Authentication/ModalAuthContext.jsx";
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