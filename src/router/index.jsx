import React from "react";
import { Route, Routes } from "react-router-dom";
import { Intro } from "../pages/Intro";
import { DigitalHistory } from "../pages/DigitalHistory";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/digital-history" element={<DigitalHistory />} />
    </Routes>
  );
}
