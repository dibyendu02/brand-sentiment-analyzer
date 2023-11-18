// BrandSearch.js
import React, { useState } from "react";
import "./brandSearch.css";
import { CiSearch } from "react-icons/ci";

const BrandSearch = () => {
  const [brandName, setBrandName] = useState("");
  return (
    <div className="container">
      <div>
        <h1>Search History</h1>
      </div>
      <div className="input-container">
        {/* <input
              value={brandName}
              onChange={(e) => {
              setBrandName(e.target.value);
              }}
              placeholder="Enter Your Brand Name"
              className="brand-input"
              /> */}
        <select
          value={brandName}
          onChange={(e) => {
            setBrandName(e.target.value);
          }}
          className="brand-input"
        >
          <option>Google</option>
          <option>Facebook</option>
          <option>Facebook</option>
          <option>Facebook</option>
        </select>
        <button type="submit" className="search-button">
          {" "}
          <CiSearch />{" "}
        </button>
      </div>
    </div>
  );
};

export default BrandSearch;
