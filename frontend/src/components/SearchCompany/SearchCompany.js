import React, { Fragment } from "react";
import styles from "./SearchCompany.module.css";
import { AiOutlineSearch } from "react-icons/ai";

function SearchCompany() {
  return (
    <Fragment>
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <AiOutlineSearch className={styles.searchIcon} />
          <input
            className={styles.inputCompany}
            placeholder="Search for a company"
          ></input>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchCompany;
