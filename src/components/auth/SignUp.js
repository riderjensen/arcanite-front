import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import NoAuthNavigation from '../navigation/NoAuthNavigation';

import './Auth.css';

class SignUp extends Component {
    render() {
        return (
            <div>
                <NoAuthNavigation />
                <div className="form-center">
                    <form>
                        <h1>Sign Up</h1>
                        <input placeholder="Email" type="email" />
                        <input placeholder="Username" type="text" />
                        <input placeholder="Password" type="password" />
                        <input placeholder="Confirm Password" type="password" />
                        <input value="Submit" type="submit" />
                        <p>
                            Already have an account? <NavLink to="/login">Login</NavLink>
                        </p>
                    </form>
                </div>
            </div>

        )
    }
}

export default SignUp;