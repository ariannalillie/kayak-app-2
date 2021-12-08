import React, { useState } from 'react';
import './Flipcard.css';

const Flipcard = ({ logo, name, alliance, phone, website }) => {
    const [flipped, setFlipped] = useState(false);

    let cardText;
    if (flipped === false) {
        cardText = <div>
              <img src={`https://www.kayak.com/${logo}`} alt='airline logo'/>
            <h1 className='airline_info name'>{name}</h1>
        </div>
    } else {
        cardText = <div>
            <h1 className='airline_info name'>{name}</h1>
            <h2 className='airline_info'>{
                alliance === 'OW' ? 'Oneworld'
                    : alliance === 'ST' ? 'Sky Team'
                        : alliance === 'SA' ? 'Star Alliance'
                            : ''
            }</h2>
            <h2 className='airline_info'>{phone}</h2>
            <a className='airline_info site' href={website}>{website}</a>
        </div>
    }


    return (
        <div className='flipcard' onClick={() => setFlipped(!flipped)}>
            <div>{cardText}</div>
        </div>
    )
};

export default Flipcard;
