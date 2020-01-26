import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Modal.css'

import * as actions from '../../store/actions/index';


class Modal extends Component {

    render() {
        return (
            <div className="overlay">
                <div onClick={this.props.passFunction} className="overlay"></div>
                <div onClick={this.preventIssue} className="modal">
                    <h1>Create Post</h1>
                    <input type="text" />
                    <button>Submit</button>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);