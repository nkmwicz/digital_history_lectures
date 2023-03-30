import React from "react";
import { Route, Routes } from "react-router-dom";
import { Intro } from "../pages/Intro";

export function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}
