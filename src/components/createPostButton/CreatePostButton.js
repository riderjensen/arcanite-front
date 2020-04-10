import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Modal from '../modal/Modal';

import './CreatePostButton.css';

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

    render() {
        return (
            <div className="creatPostButton">
                {this.state.modal ? <Modal passFunction={this.hideModal} /> : null}
                <button className="floatingButton" onClick={this.showModal}><FontAwesomeIcon  icon={faEdit}></FontAwesomeIcon></button>
            </div>
        )
    }
}

export default NoAuthNavigation;