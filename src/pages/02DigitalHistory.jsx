import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet";
export function DigitalHistory() {
  return (
    <>
      <Helmet>
        <title>What is Digital History</title>
        <meta
          name="description"
          content="A presentation introducing Digital History and the basic tools used for it."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/02-digital-history.json" />
    </>
  );
}
