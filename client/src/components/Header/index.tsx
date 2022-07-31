import React from 'react';

import Logo from '../Logo';
import Button from '../Button';
import NavBar from '../NavBar';

import './style.css';

const Header = () => {
    return(
        <header className="flex p-4 justify-between">
            <Logo />
            <NavBar />
        </header>
    );
}

export default Header;