import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { userLogin } from '../../store/actions/index'; 
import { connect } from 'react-redux';

import './Auth.css';

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    state = {
        username: '',
        password: ''
    }


    handleChange(event) {
        // change the inputs in the state
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj)
    }

    login(event) {
        event.preventDefault();
        this.props.userLogin(this.state)
    }
    

    render() {
        return (
            <div>
                <div className="form-center">
                    <form onSubmit={this.login}>
                        <h1>Login</h1>
                        <input placeholder="Username" type="text" name="username" onChange={this.handleChange} />
                        <input placeholder="Password" type="password" name="password" onChange={this.handleChange} />
                        <input value="Submit" type="submit" />
                        <p>
                            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLogin: userInfo => dispatch(userLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);