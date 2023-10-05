import React from "react";
import './PopUp.css'

const PopUp = (props) => {
    return(props.trigger)?(
        <div className="popup">
            <div className="popup-inner mt3">
                {props.children}
            </div>
        </div>
    ): "";
}

export default PopUp;