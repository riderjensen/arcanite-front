import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NoAuthNavigation from '../navigation/NoAuthNavigation';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <NoAuthNavigation />
                <div className="form-center">
                    <form>
                        <input placeholder="Username" type="text" />
                        <input placeholder="Password" type="password" />
                        <input value="Submit" type="submit" />
                        <NavLink to="/signup">Sign Up</NavLink>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;