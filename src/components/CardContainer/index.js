import React from "react";
import Flipcard from "../Flipcard";
import data from '../../data/airlines.json';

const CardContainer = () => {
    const airlineCard = data.airlines.map(airline => {
        return (
            <Flipcard name={airline.name}/>
        )
    })

    return (
        <div>
            {airlineCard}
        </div>
    )
};

export default CardContainer;
