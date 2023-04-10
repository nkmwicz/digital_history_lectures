import React from "react";
import "./App.css";
import { Arrow } from "./components/Arrow";
import { Router } from "./router";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Arrow />
      <Router />
    </>
  );
}

export default App;
