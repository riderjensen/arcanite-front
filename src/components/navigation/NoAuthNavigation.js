import React from 'react';
import { NavLink } from 'react-router-dom'
import './NoAuthNavigation.css';

function NoAuthNavigation() {
    return (
        <nav className="navbar">
            <label className="navbar-toggle" htmlFor="chkToggle">
                <span>&#8213;</span>
                <span>&#8213;</span>
                <span>&#8213;</span>
            </label>
            <NavLink className="logo" to="/">Home</NavLink>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="main-nav">
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li className="right-align sign-up">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NoAuthNavigation;