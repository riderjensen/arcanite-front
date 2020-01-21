import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { userSignUp } from '../../store/actions/index'; 
import { connect } from 'react-redux';

import NoAuthNavigation from '../navigation/NoAuthNavigation';

import './Auth.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.passwordComplexityCheck = this.passwordComplexityCheck.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    state = {
        email: '',
        username: '',
        password: '',
        passwordMatch: null
    }

    handleChange(event) {
        // change the inputs in the state
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj)
    }


    passwordComplexityCheck(event) {
        //check to make sure its complex
        this.handleChange(event)
        const paswd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        const passMatch = new RegExp(paswd).test(this.state.password);
        if(passMatch) {
            // change css to green
            this.setState({
                passwordMatch: true
            })
        } else {
            // change css to red
            this.setState({
                passwordMatch: false
            })
        }
    }

    signUp(event) {
        event.preventDefault();
        this.props.userSignUp(this.state)

    }

    render() {
        return (
            <div>
                <NoAuthNavigation />
                <div className="form-center">
                    <form onSubmit={this.signUp}>
                        <h1>Sign Up</h1>
                        <input placeholder="Email" type="email" name="email" onChange={this.handleChange} />
                        <input placeholder="Username" type="text" name="username" onChange={this.handleChange} />
                        <input placeholder="Password" className={this.state.passwordMatch !== true && this.state.passwordMatch !== null ? 'error-border' : null} type="password" name="password" onChange={this.passwordComplexityCheck} />
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

const mapDispatchToProps = dispatch => ({
    userSignUp: userInfo => dispatch(userSignUp(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUp);