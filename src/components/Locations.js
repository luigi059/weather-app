import React, { useState, useEffect, useRef } from "react";
import "./Location.css";

function Location(props) {
  const [search, setSearch] = useState("");
  const isFirstRun = useRef(true);

  function handleClick(event) {
    event.preventDefault();
    const extractedValue = event.target.textContent;
    setSearch(extractedValue);
    console.log("teehee");
  }
  //useEffect won't run on first render
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    doSomething();
  }, [search]);
  function doSomething() {
    console.log("lol");
    props.onClick(search);
  }
  return (
    <div className="locations">
      <h2 className="sub-title">Other Locations</h2>
      <p className="locations-text" onClick={handleClick} value={props.search}>
        New York
      </p>
      <p className="locations-text" onClick={handleClick} value={props.search}>
        Dubai
      </p>
      <p className="locations-text" onClick={handleClick} value={props.search}>
        Hong Kong
      </p>
      <p className="locations-text" onClick={handleClick} value={props.search}>
        Los Angeles
      </p>
    </div>
  );
}

export default Location;
