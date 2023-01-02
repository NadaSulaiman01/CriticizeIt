import React, { Fragment } from "react";
import styles from "./FilterCompanies.module.css";
import { BsFilterRight } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";

export default function FilterCompanies() {
  return (
    <Fragment>
      <div className={styles.filterContainer}>
        <div className={styles.filterFlex}>
          <p className={styles.filterTitle}>Filter</p>
          <BsFilterRight />
        </div>

        <Dropdown className={styles.dropdownMenu}>
          <Dropdown.Toggle
            className={styles.dropdownButton}
            id="dropdown-basic1"
          >
            Rating
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className={styles.dropdownItem}>1</Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>2</Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>3</Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>4</Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>5</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className={styles.dropdownMenu}>
          <Dropdown.Toggle
            className={styles.dropdownButton}
            id="dropdown-basic2"
          >
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className={styles.dropdownItem}>
              Accounting & Tax
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>
              Restaurants & Cafes
            </Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>
              Internet & Web Services
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className={styles.dropdownMenu}>
          <Dropdown.Toggle
            className={styles.dropdownButton}
            id="dropdown-basic3"
          >
            City
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className={styles.dropdownItem}>Cairo</Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>Alex</Dropdown.Item>
            <Dropdown.Item className={styles.dropdownItem}>Giza</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Fragment>
  );
}
