import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.style.css';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/aboutUs" className="nav-item">Sobre Nós</NavLink>
                <NavLink to="/ourTeam" className="nav-item">Nosso Time</NavLink>
                <NavLink to="/bons-drinks/" className="Logo">Bons Drinks</NavLink>
                <NavLink to="/drinks/pop" className="nav-item">Drinks</NavLink>
                <NavLink to="/contact" className="nav-item">Contato</NavLink>
                
            </nav>

            
        </header>
    )
}

export default Header
