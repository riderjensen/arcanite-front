import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import NoAuthNavigation from '../navigation/NoAuthNavigation';

import './Auth.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.passwordMatchCheck = this.passwordMatchCheck.bind(this);
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


    passwordMatchCheck(event) {
        //see if the two passwords match
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
        console.log(this.state)

        if (this.state.passwordMatch) {
            axios.post('http://localhost:8080/auth/signup', {
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
            }).then(resp => console.log(resp)).catch(err => console.log(`Err: ${err}`))
        } else {
            console.log('Password doesnt match')
        }
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
                        <input placeholder="Password" className={this.state.passwordMatch !== true && this.state.passwordMatch !== null ? 'error-border' : null} type="password" name="password" onChange={this.passwordMatchCheck} />
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