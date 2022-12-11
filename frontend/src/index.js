import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Components
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Companies from "./pages/Companies/Companies";
import Salaries from "./pages/Salaries/Salaries";
import AddCompany from "./pages/AddCompany/AddCompany";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Forget from "./pages/Forget/Forget";
import Reset from "./pages/Reset/Reset";

// Routing
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "home", element: <Home /> },
      { path: "companies", element: <Companies /> },
      { path: "salaries", element: <Salaries /> },
      { path: "add-company", element: <AddCompany /> },
      { path: "forget", element: <Forget /> },
      { path: "reset", element: <Reset /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
