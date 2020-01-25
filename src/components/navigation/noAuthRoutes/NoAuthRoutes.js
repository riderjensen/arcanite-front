import React from 'react';
import { NavLink } from 'react-router-dom';


function AuthRoutes() {
    return (
        <ul className="main-nav">
            <li className="right-align">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="right-align">
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
    )
}

export default AuthRoutes;