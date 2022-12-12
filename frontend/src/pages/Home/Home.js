import React, { Fragment } from "react";
import Hero from "../../components/Hero/Hero";
import Search from "../../components/SearchHome/Search";
import AddCompany from "../../components/AddCompany/AddCompany";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Search />
      <Slider category="software companies"/>
      <Slider category="AI companies" />
      <Slider category="Embedded systems companies" />
      <AddCompany />
    </Fragment>
  );
}
