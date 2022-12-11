import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";

function Nav() {
  const [fixNav, setFixNav] = useState(false);

  const fixNavbarHandler = () => {
    if (window.scrollY > 350) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  };
  window.addEventListener("scroll", fixNavbarHandler);
  return (
    <header className={`${styles.header} ${fixNav ? styles.fixedNav : null}`}>
      <Logo />
      <nav>
        <ul className={styles["main-nav-list"]}>
          <li>
            <NavLink to="/home" className={styles["main-nav-link"]}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/companies" className={styles["main-nav-link"]}>
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink to="/Salaries" className={styles["main-nav-link"]}>
              Salaries
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-company" className={styles["main-nav-link"]}>
              Add my Company
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles["nav-cta-container"]}>
        <Link to="/login" className={styles["nav-cta-login"]}>
          Log in
        </Link>
        <Link to="/signup" className={styles["nav-cta-signup"]}>
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Nav;
