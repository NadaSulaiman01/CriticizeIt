import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className={styles["logo-link"]}>
      <div className={styles["logo"]}>
        <span className={styles["criticize"]}>Criticize</span>
        <span className={styles["it"]}>It</span>
      </div>
    </Link>
  );
}
export default Logo;
