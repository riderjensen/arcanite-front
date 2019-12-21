import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './NoAuthNavigation.css';

class NoAuthNavigation extends Component {
    render() {
        return (
            <nav className="navbar">
                <label className="navbar-toggle" id="js-navbar-toggle" htmlFor="chkToggle">
                    <span>&#8213;</span>
                    <span>&#8213;</span>
                    <span>&#8213;</span>
                </label>
                <NavLink className="logo" to="/">Home</NavLink>
                <input type="checkbox" id="chkToggle"></input>
                <ul className="main-nav" id="js-menu">
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
}

export default NoAuthNavigation;