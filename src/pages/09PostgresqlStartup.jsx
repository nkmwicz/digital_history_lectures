import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet";

export function PostgresqlStartup() {
  return (
    <>
      <Helmet>
        <title>PostgreSQL Startup</title>
        <meta
          name="description"
          content="A presentation on getting started with PostgreSQL for the Digital History course at Queens University of Charlotte."
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/digital-history/08-datasets-databases.json" />
    </>
  );
}