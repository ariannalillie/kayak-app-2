import React from "react";
import Flipcard from "../Flipcard";
import data from '../../data/airlines.json';
import './CardContainer.css';

const CardContainer = () => {
    const airlineCard = data.airlines.map((airline, index) => {
        return (
            <Flipcard
            key={index}
            name={airline.name}
            logo={airline.logoURL}
            alliance={airline.alliance}
            phone={airline.phone}
            website={airline.site}
            />
        )
    })

    return (
        <div className='cardContainer'>
            {airlineCard}
        </div>
    )
};

export default CardContainer;
