import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import "@nkmwicz/reactpresentation/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <HelmetProvider>
        <BrowserRouter basename="/teaching/digital-history/lectures/">
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </RecoilRoot>
  </React.StrictMode>
);
