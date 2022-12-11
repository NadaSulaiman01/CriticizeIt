import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import Search from "../../components/SearchHome/Search";
import AddCompany from "../../components/AddCompany/AddCompany";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Search />
      <AddCompany />
    </Fragment>
  );
}
