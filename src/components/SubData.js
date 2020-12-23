import React from "react";
import "./SubData.css";

function SubData(props) {
    return(
        <div className="sub-data">
            <p>{props.tempMin}&#8451;</p>
            <p>{props.tempMax}&#8451;</p>
            <p>{props.wind} km/hr</p>
            <p>{props.humidity} %</p>
        </div> 
    )
}

export default SubData;