import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class NoAuthNavigation extends Component {

    constructor(props) {
        super(props);
    }

    logOutFunction = event => {
        event.preventDefault();
        this.props.logoutUser();
    }

    render() {
        return (
            <nav className="navbar">
                <label className="navbar-toggle" htmlFor="chkToggle">
                    <span>&#8213;</span>
                    <span>&#8213;</span>
                    <span>&#8213;</span>
                </label>
                <NavLink className="logo" to="/">Project <strong>Arcanite</strong></NavLink>
                <input type="checkbox" id="chkToggle"></input>
                <ul className="main-nav">
                    <li className="right-align">
                        <NavLink to="/dashboard">Profile</NavLink>
                    </li>
                    <li className="right-align">
                        <a onClick={this.logOutFunction}>Logout</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.reducer.currentUser
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NoAuthNavigation);