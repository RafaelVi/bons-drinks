import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.style.css';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutUs">About Us</NavLink>
                <NavLink to="/ourTeam">Our Team</NavLink>
                <NavLink to="/drinks">Drinks</NavLink>
            </nav>

            
        </header>
    )
}

export default Header
