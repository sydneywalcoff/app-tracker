import React from 'react';
import Logo from './Logo';

const Header = () => {
    return(
        <header className="flex p-4 md:p-9">
            <Logo />
        </header>
    );
}

export default Header;