import {useState} from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from './../../assets/pyramid.png'

export const Navbar=()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [menuOpen, setMenuOpen] = useState(false)
    return (    
        <nav className='flex justify-between items-center bg-indigo-600  px-10 h-16  text-white sticky top-0 z-20'>
            <Link to='/Home' className='title size-10 m-4 font-bold'> </Link>
            <div className='menu' onClick={()=> {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className= {menuOpen ? "open" : ""}>
                <li className='list-none'>
                    
                    <NavLink to="/Home">Home</NavLink>
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