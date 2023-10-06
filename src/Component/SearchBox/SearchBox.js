import React from "react";
import './SearchBox.css'

const SearchBox = ({SearchChange}) => {
    return(
        <div className="pa2">
            <input 
                className="pa3 bg-transparent hover-effect"
                type="search" 
                placeholder="Search frnz"
                onChange={SearchChange}/>
        </div>
    )
}

export default SearchBox;