import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Modal from '../modal/Modal';

import './Navigation.css';

class NoAuthNavigation extends Component {

    state = {
        modal: false
    }

    showModal = _ => {
        this.setState({
            modal: true
        })
    }

    hideModal = _ => {
        this.setState({
            modal: false
        })
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
                    <NavLink to="/profile" className="profileNav">
                        <img className="borderRadius" src={`https://api.adorable.io/avatars/30/${this.props.username}`} alt="avatar generated on username" />
                        {this.props.username.toUpperCase()}
                    </NavLink>
                </li>
                <li className="right-align">
                    <button onClick={this.showModal}><FontAwesomeIcon  icon={faEdit}></FontAwesomeIcon></button>
                </li>
            </ul>
        )
    }

    render() {
        return (
            <nav className="navbar">
                <NavLink className="logo" to="/">Project <strong>Arcanite</strong></NavLink>
                {this.props.username ? this.UnAuthRoutes() : this.AuthRoutes()}
                {this.state.modal ? <Modal passFunction={this.hideModal} /> : null}
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.index.username
    }
}

export default connect(mapStateToProps, null)(NoAuthNavigation);