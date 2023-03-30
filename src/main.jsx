import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";
import "./@nkmwicz/reactpresentation/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter basename="/teaching/digital-history/lectures/">
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
