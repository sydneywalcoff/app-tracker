import React from 'react';

const NavBar = () => {
    const pageTitles = [
        { name: 'track new job.' },
        { name: 'job tracker.' },
        { name: 'stats.' }
    ];
    return (
        <nav className="flex flex-col w-48 h-full">
            <ul className='p-4'>
                {pageTitles.map(title => (
                    <li className='m-2'>{title.name}</li>
                ))}

            </ul>
        </nav>
    );
}

export default NavBar;