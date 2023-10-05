import React from "react";

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className="card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h3>Robofriends</h3>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    )
}
export default Card;