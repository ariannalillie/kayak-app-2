import React from 'react';
import './Flipcard.css';

const Flipcard = ({logo, name}) => {
    return (
        <div className='flipcard'>
            <img href={logo}/>
            <h1>{name}</h1>
        </div>
    )
};

export default Flipcard;
