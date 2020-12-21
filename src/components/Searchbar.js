import React,{useState} from "react";
import "./Searchbar.css";

function Searchbar() {
    const [search,setSearch] = useState("");
    function onInputChange(event){
        setSearch();
    }
    function onFormSubmit(event) {
        setSearch();
        event.preventDefault();
    }
    return(
        <form onSubmit={onFormSubmit} className="search">
            <input type="text" value={search} onChange={onInputChange}/>
            <button type="submit">submit</button> 
        </form>
    )
}

export default Searchbar;