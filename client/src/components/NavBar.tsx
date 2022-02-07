import React from 'react';

const NavBar = () => {
    return(
        <nav className="flex flex-col w-48 h-full">
            <ul className='p-4'>
                <li className='m-2'>track new job.</li>
                <li className='m-2'> job tracker.</li>
                <li className='m-2'> stats.</li>
            </ul>
        </nav>
    );
}

export default NavBar;