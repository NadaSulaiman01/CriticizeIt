import React, { Fragment } from "react";
import styles from "./CardCompany.module.css";
import { AiFillStar } from "react-icons/ai";

export default function CardCompany() {
  return (
    <Fragment>
      <div className={styles.CardContainer}>
        <div className={styles.headerBox}>
          <img
            className={styles.companyImg}
            src="https://media.glassdoor.com/sql/2763/deloitte-squareLogo-1661962263825.png"
            alt="company"
          ></img>
          <div className={styles.nameAndRatingBox}>
            <p className={styles.companyName}>Deloitte</p>
            <div className={styles.ratingBox}>
              <span>3.5</span>
              <AiFillStar />
            </div>
          </div>
          <div className={styles.industryBox}>
            <p className={styles.industry}>industry</p>
            <p className={styles.industryText}>Accounting & Tax</p>
          </div>
        </div>

        <div className={styles.discriptionBox}>
          <p className={styles.description}>Description</p>
          <p className={styles.descriptionText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            quisquam nostrum harum, rerum quidem vitae dolores aliquam earum
            amet, reiciendis perspiciatis ratione atque. Repudiandae ea enim,
            eos cupiditate laborum exercitationem!
          </p>
        </div>
      </div>

      <div className={styles.CardContainer}>
        <div className={styles.headerBox}>
          <img
            className={styles.companyImg}
            src="https://media.glassdoor.com/sql/432/mcdonald-s-squareLogo-1659466290854.png"
            alt="company"
          ></img>
          <div className={styles.nameAndRatingBox}>
            <p className={styles.companyName}>McDonald's</p>
            <div className={styles.ratingBox}>
              <span>3.5</span>
              <AiFillStar />
            </div>
          </div>
          <div className={styles.industryBox}>
            <p className={styles.industry}>industry</p>
            <p className={styles.industryText}>Restaurants & Cafes</p>
          </div>
        </div>

        <div className={styles.discriptionBox}>
          <p className={styles.description}>Description</p>
          <p className={styles.descriptionText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            quisquam nostrum harum, rerum quidem vitae dolores aliquam earum
            amet, reiciendis perspiciatis ratione atque. Repudiandae ea enim,
            eos cupiditate laborum exercitationem!
          </p>
        </div>
      </div>

      <div className={styles.CardContainer}>
        <div className={styles.headerBox}>
          <img
            className={styles.companyImg}
            src="https://media.glassdoor.com/sql/6036/amazon-squarelogo-1552847650117.png"
            alt="company"
          ></img>
          <div className={styles.nameAndRatingBox}>
            <p className={styles.companyName}>Amazon</p>
            <div className={styles.ratingBox}>
              <span>3.8</span>
              <AiFillStar />
            </div>
          </div>
          <div className={styles.industryBox}>
            <p className={styles.industry}>industry</p>
            <p className={styles.industryText}>Internet & Web Services</p>
          </div>
        </div>

        <div className={styles.discriptionBox}>
          <p className={styles.description}>Description</p>
          <p className={styles.descriptionText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
            quisquam nostrum harum, rerum quidem vitae dolores aliquam earum
            amet, reiciendis perspiciatis ratione atque. Repudiandae ea enim,
            eos cupiditate laborum exercitationem!
          </p>
        </div>
      </div>
    </Fragment>
  );
}
