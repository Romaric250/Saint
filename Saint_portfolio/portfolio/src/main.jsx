import React from "react";
import ReactDom from "react-dom";

import "./main.css";
import "./animate";
import "./animating.css";
import App from "./App";
function main() {
  return (
    <div>
      <h1>helo</h1>
    </div>
  );
}

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
