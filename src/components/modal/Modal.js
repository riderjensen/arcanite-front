import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <span className="close" onClick={this.props.passFunction}>X</span>
                    <h1>Create Post</h1>
                    <input type="text" name="content" onChange={this.handleChange} />
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