import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

export const Navbar=()=>{
    const [menuOpen, setMenuOpen] = useState(false)
    return (    
        <nav className='flex justify-between items-center bg-[#030637] px-6  text-white sticky top-0 z-20'>
            <Link to='/' className='title size-6 m-4 font-bold'>Pyramid</Link>
            <div className='menu' onClick={()=> {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li className='list-none'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Project">Project</NavLink>
                </li>
                <li>
                    <NavLink to="/Services">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/Teams">Teams</NavLink>
                </li>
                <li>
                    <NavLink to="/About">About</NavLink>
                </li>
            </ul>
        </nav>
        
    )
}

export default Navbar;