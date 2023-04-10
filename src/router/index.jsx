import React from "react";
import { Route, Routes } from "react-router-dom";
import { Intro } from "../pages/01Intro";
import { DigitalHistory } from "../pages/02DigitalHistory";
import { InternetHistory } from "../pages/03InternetHistory";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/digital-history" element={<DigitalHistory />} />
      <Route path="/internet-history" element={<InternetHistory />} />
    </Routes>
  );
}
