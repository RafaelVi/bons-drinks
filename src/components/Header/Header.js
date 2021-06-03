import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.style.css';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/aboutUs">About Us</NavLink>
                <NavLink to="/ourTeam">Our Team</NavLink>
                <NavLink to="/" className="Logo">Bons Drinks</NavLink>
                <NavLink to="/drinks/pop">Drinks</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                
            </nav>

            
        </header>
    )
}

export default Header
