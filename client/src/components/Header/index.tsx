import React, { useState } from 'react';

import Logo from '../Logo';
import NavBar from '../NavBar';
import ClosedNavMenu from './assets/icons8-menu-50.png';
import OpenNavMenu from './assets/icons8-close-60.png';

import './assets/style.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navMenuClickHandler = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return(
        <header className="flex p-4 justify-between">
            <Logo />
            <img src={ isMobileMenuOpen ? OpenNavMenu : ClosedNavMenu } className='mobileNavMenu' onClick={navMenuClickHandler} alt=''/>
            <NavBar isMobileMenuOpen={isMobileMenuOpen}/>
        </header>
    );
}

export default Header;