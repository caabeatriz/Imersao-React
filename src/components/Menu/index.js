import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';

function Menu (){
    return (
        <nav className="Menu">
            <a href="/">
                <img class="Logo" src={Logo} alt="CarolFlix logo" />   
            </a>
            <ButtonLink />
        </nav>
    );
}

export default Menu;