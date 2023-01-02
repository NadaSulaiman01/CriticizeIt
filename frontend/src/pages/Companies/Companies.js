import React, { Fragment, useState } from "react";
import styles from "./Companies.module.css";
import CardCompany from "../../components/CardCompany/CardCompany";
import SearchCompany from "../../components/SearchCompany/SearchCompany";
import FilterCompanies from "../../components/FilterCompanies/FilterCompanies";

export default function Companies() {
  // const [companies, setCompanies] = useState([]);

  return (
    <Fragment>
      <div className={styles.companiesContainer}>
        <div className={styles.companiesLayout}>
          <div className={`${styles.el1} ${styles.imageContainer}`}>
            <img
              className={styles.searchImage}
              src={require("../../imgs/companies/searching3.png")}
              alt="a man searching online"
            ></img>
          </div>
          <div className={`${styles.el2} ${styles.textBox}`}>
            <p className={styles.headingCompany}>Company searching made easy</p>
            <p>
              CriticiseIt helps you to search for companies in Egypt to know its
              pros and cons before you make your next move. Filter companies
              based on your needs.
            </p>
          </div>
          <div className={styles.el3}>
            <SearchCompany />
          </div>

          <div className={styles.el4}>
            <CardCompany />
          </div>
          <div className={`${styles.el5} ${styles.filterBox}`}>
            <FilterCompanies />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
