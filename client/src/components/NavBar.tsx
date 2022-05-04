import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const NavBar = () => {
    const loggedIn = Auth.loggedIn();
    const pageTitles = [
        { 
            name: 'track new job.',
            location: '/tracker' 
        },
        { 
            name: 'job tracker.',
            location: '/applied'
        },
        // {
        //     name: 'stats.',
        //     location: '/stats'
        // }
    ];

    const logout = () => {
        Auth.logout();
    }
    return (
        <nav className="min-w-[11%] min-h-screen">
            <ul className='p-4'>
                {loggedIn ? (
                    <li className='m-2 hover:text-xl font-bold' onClick={logout}>log out.</li>
                ) : (
                    <li className='m-2 hover:text-xl font-bold'><Link to="/login">login.</Link></li>
                )}
                {pageTitles.map((title) => (
                    <li className='m-2 hover:text-xl' key={title.name}><Link to={title.location}>{title.name}</Link></li>
                ))}
                
            </ul>
        </nav>
    );
}

export default NavBar;