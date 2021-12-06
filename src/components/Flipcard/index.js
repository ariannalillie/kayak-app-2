import React, { useState } from 'react';
import './Flipcard.css';

const Flipcard = ({ name, phone, website }) => {
    const [flipped, setFlipped] = useState(false);

    let cardText;
    if (flipped === false) {
        cardText = <div>
            <h1>{name}</h1>
            </div>
    } else {
        cardText = <div>
            <h1>{name}</h1>
            <h2>{phone}</h2>
            <h2>{website}</h2>
        </div>
    }


    return (
        <div className='flipcard' onClick={() => setFlipped(!flipped)}>
            <div>{cardText}</div>
        </div>
    )
};

export default Flipcard;
