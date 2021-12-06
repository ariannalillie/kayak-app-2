import React from 'react';
import Logo from '../../media/Logo.svg';
import "./Header.css";

function Header() {
    return (
        <div className='header'>
            <img className='logo' src={Logo} alt='kayak logo'/>
        </div>
    )
}

export default Header;
