import React, { Component } from 'react';
import { userLogout } from '../../store/actions/index';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class NoAuthNavigation extends Component {

    logOutFunction = event => {
        event.preventDefault();
        this.props.userLogout();
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
                        <button onClick={this.logOutFunction}>Logout</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout())
})

export default connect(null, mapDispatchToProps)(NoAuthNavigation);