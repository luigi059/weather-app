import React, { useState } from "react";
import "./SearchBar.css";

function Searchbar(props) {
  const [search, setSearch] = useState("");
  function onInputChange(event) {
    setSearch(event.target.value);
  }
  function onFormSubmit(event) {
    event.preventDefault();
    console.log("wow");
    props.onFormSubmit(search);
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div className="search">
        <input
          className="input"
          type="text"
          placeholder="Search City..."
          value={props.search}
          onChange={onInputChange}
        />
      </div>
      <hr></hr>
    </form>
  );
}

export default Searchbar;
