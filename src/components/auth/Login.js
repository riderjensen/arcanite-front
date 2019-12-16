import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    render() {
        return (
            <form>
                <input placeholder="Username" type="text" />
                <input placeholder="Password" type="password" />
                <input value="Submit" type="submit" />
            </form>
        )
    }
}

export default Login;