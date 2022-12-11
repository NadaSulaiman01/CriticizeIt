import React, { Fragment } from "react";
import styles from "./AddCompany.module.css";

export default function AddCompany() {
  //   let calssNames = classnames("heading-secondary");
  return (
    <Fragment>
      <div className={styles.addCompanySection}>
        <div className={`${"section_ container_"} `}>
          <p className={`${"heading-secondary"} ${styles.headingPrimary}`}>
            Didn't find your company?
          </p>
          <p className={styles.addCompanyText}>
            If you didn't find your company, don't worry. you can simply add it.
          </p>
          <button className="main-btn">Add company</button>
        </div>
      </div>
    </Fragment>
  );
}
