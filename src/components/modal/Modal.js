import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar } from 'react-circular-progressbar';

import Spinner from '../spinner/Spinner';

import './Modal.css'
import 'react-circular-progressbar/dist/styles.css';

import * as actions from '../../store/actions/index';


class Modal extends Component {
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        content: '',
        submitting: false
    }

    handleChange(event) {
        // change the inputs in the state
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj)
    }

    submitPost = event => {
        event.preventDefault();
        this.setState({
            submitting: true
        })
        this.props.submitPost(this.state.content);
    }

    render() {
        return (
            <div className="overlay">
                <div onClick={this.props.passFunction} className="overlay"></div>
                <div onClick={this.preventIssue} className="modal">
                    <CircularProgressbar className={this.state.content.length > 250 ? 'svgerror' : null} value={this.state.content.length} maxValue={250} minValue={0} strokeWidth={25} />
                    <FontAwesomeIcon className="close" onClick={this.props.passFunction} icon={faTimes}></FontAwesomeIcon>
                    <h1>Create Post</h1>
                    <textarea type="text" name="content" onChange={this.handleChange} rows="3" />
                    {this.state.submitting ? <div style={{width: '100%'}}><Spinner /></div>: <button disabled={this.state.content.length > 250 ? true : false} onClick={this.submitPost}>Submit</button>}
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