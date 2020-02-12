import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Chat.css'

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

    keyPressed(event) {
        if (event.key === "Enter") {
            const date = new Date();
            this.props.submitChat({
                message: this.state.content,
                username: this.props.username,
                timestamp: date.now()
            });
            this.setState({
                content: ''
            })
        }
      }

    render() {
        return (
            <div className="chat">
                <div className="comments">
                    {this.props.chat.map(msg => (
                        <div key={msg.timestamp}>
                            <span className="comment-info">{msg.timestamp} {msg.username}</span>
                            <p className="comment">{msg.message}</p>
                        </div>
                    ))}
                </div>
                {this.props.username ? <input type="text" name="content" onKeyPress={this.keyPressed} onChange={this.handleChange} /> : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.index.username,
        chat: state.index.chat
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitPost: content => {
            dispatch(actions.submitChat({content}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);