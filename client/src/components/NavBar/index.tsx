import { Link } from 'react-router-dom';

import Button from '../Button';

import Auth from '../../utils/auth';

import './assets/style.css';

interface navBarIProps {
    isMobileMenuOpen: boolean;
}

const NavBar = ({isMobileMenuOpen}: navBarIProps) => {
    const loggedIn = Auth.loggedIn();
    const pageTitles = [
        { 
            name: 'Track.',
            location: '/tracker' 
        },
        { 
            name: 'Applied.',
            location: '/applied'
        },
        // {
        //     name: 'stats.',
        //     location: '/stats'
        // }
    ];

    const logout = () => {
        Auth.logout();
        window.location.assign('/login')
    }
    return (
        <nav className={`absolute right-0 ${isMobileMenuOpen ? 'block' :'hidden'} md:block md:relative`}>
            <ul className='flex flex-col md:flex-row md:items-center'>
                {pageTitles.map((title) => (
                    <li className='m-2' key={title.name}><Link to={title.location}>{title.name}</Link></li>
                ))}
                
                {loggedIn ? (
                    <Button type="button" text="Log out" classes='ml-0 mt-4 md:mt-0 md:ml-3' onClick={logout}/>
                ) : (
                    <Button type="button" text="Login" classes='ml-0 mt-4 md:mt-0 md:ml-3' onClick={() => window.location.assign('/login')} />
                )}
            </ul>
        </nav>
    );
}

export default NavBar;