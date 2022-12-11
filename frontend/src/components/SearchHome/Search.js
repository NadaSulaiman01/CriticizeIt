import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Search.module.css";
import companies from "../../Data.json";
import SearchIcon from "../../svg/SearchIcon";
import CloseIcon from "../../svg/CloseIcon";

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: searchWord,
        },
      });
      setResult(respond.data.query.search);
    };

    if (!result.length) {
      if (searchWord) {
        search();
      }
      console.log("from if");
    } else {
      const debounceSearch = setTimeout(() => {
        if (searchWord) {
          search();
        }
        console.log("from else");
      }, 1500);

      // Clean up
      return () => {
        clearTimeout(debounceSearch);
      };
    }
  }, [searchWord, result.length]);

  const filterHandler = (event) => {
    const wordEntered = event.target.value;
    setSearchWord(wordEntered);
    const filteredCompanies = companies.companies.filter((company) => {
      return company.name
        .toLocaleLowerCase()
        .includes(wordEntered.toLocaleLowerCase());
    });
    if (wordEntered === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredCompanies);
    }
  };

  const clearInputHandler = () => {
    setFilteredData([]);
    setSearchWord("");
  };

  return (
    <div className={styles.searchSection}>
      <p className="heading-secondary sm-margin">Company searching made easy</p>
      <div className={styles.searchContainer}>
        <SearchIcon styling={styles.searchIcon} />
        <input
          type="text"
          name="company"
          className={styles.input}
          placeholder="Search for a company"
          value={searchWord}
          onChange={filterHandler}
        />
        {searchWord.length !== 0 && (
          <div className={styles.closeIconContainer}>
            <CloseIcon
              clearInput={clearInputHandler}
              styling={styles.closeIcon}
            />
          </div>
        )}
        {/* <button className="main-btn">Search</button> */}
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.dataResults}>
          {filteredData.slice(0, 15).map((company) => {
            return (
              <a
                href="#"
                target="_blank"
                className={styles.companyLink}
                key={company.id}
              >
                <div>{company.name}</div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
