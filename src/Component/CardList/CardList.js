import React from "react";
import Card from "../Card/Card";

const CardList = ({robots}) => {
    const CardComponent = robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return(
        <div className="cardlist">
            {CardComponent}
        </div>
    )
}

export default CardList