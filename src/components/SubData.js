import React from "react";
import "./SubData.css";

function SubData(props) {
  return (
    <div className="sub-data">
      <h2 className="sub-title">Weather Details</h2>
      <div className="sub-data-container">
        <p className="sub-text">Temp Min</p>
        <p className="sub-text">{props.tempMin}&#8451;</p>
      </div>
      <div className="sub-data-container">
        <p className="sub-text">Temp Max</p>
        <p className="sub-text">{props.tempMax}&#8451;</p>
      </div>
      <div className="sub-data-container">
        <p className="sub-text">Wind</p>
        <p className="sub-text">{props.wind} km/hr</p>
      </div>
      <div className="sub-data-container">
        <p className="sub-text">Humidity</p>
        <p className="sub-text">{props.humidity} %</p>
      </div>
    </div>
  );
}

export default SubData;
