import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './NoAuthNavigation.css';

class NoAuthNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li class="right-align">
                        <Link to="/login">Login</Link>
                    </li>
                    <li class="sign-up">
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NoAuthNavigation;