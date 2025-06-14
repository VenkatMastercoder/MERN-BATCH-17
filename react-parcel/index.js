import React from "react";
import ReactDOM from "react-dom/client";

const headingElement = React.createElement("h1",null,"Hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);