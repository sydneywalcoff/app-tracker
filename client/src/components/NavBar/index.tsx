import { Link } from 'react-router-dom';

import Button from '../Button';

import Auth from '../../utils/auth';

const NavBar = () => {
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
        <nav>
            <ul className='flex items-center'>
                {pageTitles.map((title) => (
                    <li className='m-2' key={title.name}><Link to={title.location}>{title.name}</Link></li>
                ))}
                
                {loggedIn ? (
                    <Button text="Log out" classes='ml-3' onClick={logout}/>
                ) : (
                    <Button text="Login" classes='ml-3' onClick={() => window.location.assign('/login')} />
                )}
            </ul>
        </nav>
    );
}

export default NavBar;