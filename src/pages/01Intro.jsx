import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet";

export function Intro() {
  return (
    <>
      <Helmet>
        <title>Introduction Lecture: Digital History</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/01-intro.json" />
    </>
  );
}
