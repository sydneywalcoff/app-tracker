import { Link } from 'react-router-dom';

const NavBar = () => {
    const pageTitles = [
        { 
            name: 'track new job.',
            location: '/' 
        },
        { 
            name: 'job tracker.',
            location: '/applied'
        },
        {
            name: 'stats.',
            location: '/stats'
        }
    ];
    return (
        <nav className="min-w-[11%] min-h-screen">
            <ul className='p-4'>
                {pageTitles.map((title) => (
                    <li className='m-2 hover:text-xl' key={title.name}><Link to={title.location}>{title.name}</Link></li>
                ))}

            </ul>
        </nav>
    );
}

export default NavBar;