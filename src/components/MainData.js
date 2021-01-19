import React from "react";
import "./MainData.css";

function MainData(props) {
  return (
    <div className="main-data">
      <h2 className="main-text">{props.temp}&#8451;</h2>
      <h2 className="main-text">{props.weather}</h2>
      <h2 className="main-text">{props.city}</h2>
    </div>
  );
}

export default MainData;
