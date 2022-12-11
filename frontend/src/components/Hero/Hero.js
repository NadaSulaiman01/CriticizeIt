import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles["back-hero"]}>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-text-box"]}>
          <p className="heading-primary">
            No worry anymore about choosing your future job
          </p>
          <div className={styles["hero-description"]}>
            <p>
              Companies aren't always completely transparent with their
              prospective employees during the recruiting process.
            </p>
            <p>Don't worry. That's where our website comes in handy.</p>
          </div>
        </div>
        <div className={styles["hero-img-box"]}>
          <img
            className={styles["hero-img"]}
            src={require("../../imgs/home/searching-2.png")}
            alt="One searching for a job."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
