import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search">
      <label>
        <input
          type="text"
          placeholder="Search by name, skill, location, school"
          className="search__input"
        />
      </label>
    </div>
  );
}

export default Search;
