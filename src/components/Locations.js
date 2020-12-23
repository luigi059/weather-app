import React,{useState,useEffect,useRef} from "react";
import "./Location.css";

function Location(props) {
    const [search,setSearch] = useState("");
    const isFirstRun =useRef(true);
    function handleClick(event) {
        event.preventDefault();
        const extractedValue = event.target.textContent;
        setSearch(extractedValue);
        console.log("teehee")
    }
    //useEffect won't run on first render
    useEffect(()=>{
        if (isFirstRun.current) {
            isFirstRun.current=false;
            return;
        }
        doSomething();
    },[search]);
    function doSomething() {
        console.log("lol")
        props.onClick(search);
    }
    return(
        <div className="locations">
            <button onClick={handleClick} value={props.search}>New York</button>
            <button onClick={handleClick} value={props.search}>Dubai</button>
            <button onClick={handleClick} value={props.search}>Hong Kong</button>
            <button onClick={handleClick} value={props.search}>Los Angeles</button>
        </div> 
    )
}

export default Location;