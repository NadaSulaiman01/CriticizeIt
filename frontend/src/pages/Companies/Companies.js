import React, { Fragment } from "react";
import styles from "./Companies.module.css";
import CardCompany from "../../components/CardCompany/CardCompany";

export default function Companies() {
  return (
    <Fragment>
      <div className={styles.companiesContainer}>
        <div className={styles.companiesLayout}>
          <div className={`${styles.imageContainer} ${styles.el1}`}>
            <img
              className={styles.searchImage}
              src={require("../../imgs/companies/search.png")}
              alt="search"
            ></img>
          </div>
          <div className={`${styles.el2} ${styles.textBox}`}>
            <p className="heading-tertiary">Company searching made easy</p>
            <p>
              CriticiseIt helps you in your job search in Egypt. You can search
              for a company and know its pros and cons before you make your next
              move. Filter companies based on your needs.
            </p>
          </div>
          <div className={styles.el3}></div>

          <div className={styles.el4}>
            <CardCompany />
          </div>
          <div className={styles.el5}></div>
        </div>
      </div>
    </Fragment>
  );
}
