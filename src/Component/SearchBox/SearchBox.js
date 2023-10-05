import React from "react";
import './SearchBox.css'

const SearchBox = ({searchfield, SearchChange}) => {
    return(
        <div className="pa2">
            <input 
                className="pa3 bg-transparent hover-effect"
                type="search" 
                placeholder="Search Robots"
                onChange={SearchChange}/>
        </div>
    )
}

export default SearchBox;