import React from "react";
import ReactDOM from "react-dom/client";
import ToDo from "./components/ToDo";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToDo />
  </React.StrictMode>
);
