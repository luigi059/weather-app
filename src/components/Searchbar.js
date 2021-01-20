import React, { useState, useEffect } from "react";
import "./Searchbar.css";
import img from "../images/search.png";

function Searchbar(props) {
  const [search, setSearch] = useState("");
  function onInputChange(event) {
    setSearch(event.target.value);
  }
  function onFormSubmit(event) {
    event.preventDefault();
    console.log(search);
    props.onFormSubmit(search);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search City..."
          value={search}
          onChange={onInputChange}
        />
        <button className="submit" type="submit">
          <img src={img} alt="search" className="search-img"></img>
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
