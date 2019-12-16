import React, { Component } from 'react';

import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <form>
                <input placeholder="Email" type="email" />
                <input placeholder="Username" type="text" />
                <input placeholder="Password" type="password" />
                <input placeholder="Confirm Password" type="password" />
                <input value="Submit" type="submit" />
            </form>
        )
    }
}

export default SignUp;