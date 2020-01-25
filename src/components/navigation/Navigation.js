import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

import * as actions from '../../store/actions/index';

class NoAuthNavigation extends Component {

    logOutFunction = event => {
        event.preventDefault();
        this.props.userLogout();
    }

    AuthRoutes() {
        return (
            <ul className="main-nav">
                <li className="right-align">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="right-align">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        )
    }

    UnAuthRoutes() {
        return (
            <ul className="main-nav">
                <li className="right-align">
                    <NavLink to="/dashboard">Profile</NavLink>
                </li>
                <li className="right-align">
                    <button onClick={this.logOutFunction}>Logout</button>
                </li>
            </ul>
        )
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
                {this.props.username ? this.UnAuthRoutes() : this.AuthRoutes()}
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.index.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(actions.userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoAuthNavigation);