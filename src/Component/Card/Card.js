import React from "react";

const Card = (props) => {
    const {role, name, link, id} = props;
    return (
        <div className="card tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5">

            <h3>{role}</h3>
            
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>

            <div>
                <h2>{name}</h2>

                <a href={link} target="blank">{
                       link.startsWith('https://www.linkedin.com/in/') ? <p>Connect LinkedIn</p> : link.startsWith('https://x.com/') ? <p>Connect Twitter</p> : null
                }</a>
                
            </div>

        </div>
    )
}
export default Card;
