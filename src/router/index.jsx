import React from "react";
import { Route, Routes } from "react-router-dom";

export function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}
