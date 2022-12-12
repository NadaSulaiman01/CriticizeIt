import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import Logo from "../Logo/Logo";
import IonIcon from "@reacticons/ionicons";

function Nav() {
  const [fixNav, setFixNav] = useState(false);

  const navRef = useRef();
  const toggleMenuBar = () => {
    navRef.current.classList.toggle(styles["navOpen"]);
  };

  const fixNavbarHandler = () => {
    if (window.scrollY > 330) {
      setFixNav(true);
    } else {
      setFixNav(false);
    }
  };

  window.addEventListener("scroll", fixNavbarHandler);

  return (
    <header
      ref={navRef}
      className={`${styles.header} ${fixNav ? styles.fixedNav : null} `}
    >
      <Logo />
      <nav className={styles["main-nav"]}>
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
          <li>
            <Link to="/login" className={styles["nav-cta-login"]}>
              Log in
            </Link>
          </li>
          <li>
            <Link to="/signup" className={styles["nav-cta-signup"]}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.menuBtn} onClick={toggleMenuBar}>
        <IonIcon name="menu-outline" className={styles.menuIcon}></IonIcon>
      </button>
      <button className={styles.closeBtn} onClick={toggleMenuBar}>
        <IonIcon name="close-outline" className={styles.closeIcon}></IonIcon>
      </button>
    </header>
  );
}

export default Nav;
