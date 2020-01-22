import React from 'react';
import { NavLink } from 'react-router-dom'
import './Navigation.css';

function NoAuthNavigation() {
    return (
        <nav className="navbar">
            <label className="navbar-toggle" htmlFor="chkToggle">
                <span>&#8213;</span>
                <span>&#8213;</span>
                <span>&#8213;</span>
            </label>
            <NavLink className="logo" to="/">Project <strong>Arcanite</strong></NavLink>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="main-nav">
                <li className="right-align">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NoAuthNavigation;