import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './NoAuthNavigation.css';

class NoAuthNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                    <li className="right-align">
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li className="sign-up">
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NoAuthNavigation;