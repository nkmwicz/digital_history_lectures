import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet";

export function InternetHistory() {
  return (
    <>
      <Helmet>
        <title>History of the Internet and Digital History</title>
        <meta
          name="description"
          content="A presentation for on the history of the internet and the field of digital history"
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/03-internet.json" />
    </>
  );
}
