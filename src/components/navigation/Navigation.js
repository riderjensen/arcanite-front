import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;