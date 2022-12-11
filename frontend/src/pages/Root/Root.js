import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}
