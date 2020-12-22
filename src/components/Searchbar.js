import React,{useState} from "react";
import "./Searchbar.css";

function Searchbar(props) {
    const [search,setSearch] = useState("");
    function onInputChange(event){
        setSearch(event.target.value);
    }
    function onFormSubmit(event) {
        event.preventDefault();   
        props.onFormSubmit(search)
    }
    return(
        <form onSubmit={onFormSubmit} className="search">
            <input type="text" value={props.search} onChange={onInputChange}/>
            <button type="submit">submit</button> 
        </form>
    )
}

export default Searchbar;