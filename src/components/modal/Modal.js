import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Modal.css'

import * as actions from '../../store/actions/index';


class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        content: ''
    }

    handleChange(event) {
        // change the inputs in the state
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj)
    }

    submitPost = event => {
        event.preventDefault();
        this.props.submitPost(this.state.content);
    }

    render() {
        return (
            <div className="overlay">
                <div onClick={this.props.passFunction} className="overlay"></div>
                <div onClick={this.preventIssue} className="modal">
                    <FontAwesomeIcon className="close" onClick={this.props.passFunction} icon={faTimes}></FontAwesomeIcon>
                    <h1>Create Post</h1>
                    <textarea type="text" name="content" onChange={this.handleChange} rows="3" />
                    <button onClick={this.submitPost}>Submit</button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        submitPost: content => {
            dispatch(actions.submitPost({content}))
        }
    }
}

export default connect(null, mapDispatchToProps)(Modal);