import React, { SetStateAction, Dispatch } from 'react';

interface navBarProps {
    pageTitles: { name: string }[],
    setCurrentTitle: Dispatch<SetStateAction<{ name: string }>>
}

const NavBar = ({ pageTitles, setCurrentTitle }: navBarProps) => {
    
    return (
        <nav className="flex flex-col w-48 h-full">
            <ul className='p-4'>
                {pageTitles.map((title) => (
                    <li className='m-2 hover:text-xl' key ={title.name}><span onClick = {() => setCurrentTitle(title)}>{title.name}</span></li>
                ))}

            </ul>
        </nav>
    );
}

export default NavBar;