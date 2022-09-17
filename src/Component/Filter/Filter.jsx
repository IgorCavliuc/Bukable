import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <select name="search" >
        <option value="filterSearch">Filter Search</option>
        <option value="filter">Filter</option>
        <option value="Search">Search</option>
      </select>
    </div>
  );
}

export default Filter;
