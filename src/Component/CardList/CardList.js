import React from "react";
import Card from "../Card/Card";

const CardList = ({filteredRobots}) => {

    if (!filteredRobots) {
        return <div>Loading...</div>;
      }else if(filteredRobots.length === 0){
        return <div className="pa4 jsutify-center align-center f3">
            This person doesn't exit on this globe
                <p className="f1">Register Now</p>
            </div>
      }
    
    const CardComponent = filteredRobots.map((user) => {
        return <Card key={user.id} id={user.id} name={user.name} link={user.linkedin || user.twitter} />
    })
    return(
        <div className="cardlist justify-center">
            {CardComponent}
        </div>
    )
}

export default CardList