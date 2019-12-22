import React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidenav">
            <div className="nav">
                <div className="description">
                    <NavLink to="/about">About</NavLink>
                </div>
            </div>
            <div className="nav">
                <div className="description">
                    <NavLink to="/users">Users</NavLink>
                </div>
            </div>
            <div className="nav">
                <div className="description">
                    <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;