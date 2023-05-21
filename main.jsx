import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./Styles/HomeStyles.css";
// import "./Styles/ContactForm.css";
// import "./Styles/Portfolio.css";
import "./src/Styles/index.css";
// import "./Styles/DashBoard.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
