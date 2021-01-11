import React from "react";
import ReactDOM from "react-dom";
import { TodoProvider } from "./todoContext";
import App from "./components/App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
