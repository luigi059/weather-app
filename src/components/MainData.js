import React from "react";
import "./MainData.css";

function MainData(props) {
    return(
        <div className="main-data">
            <h1>{props.temp}&#8451;</h1>
            <h1>{props.weather}</h1>
            <h1>{props.city}</h1>
        </div> 
    )
}

export default MainData;