import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faCheck, faPlus, faComment } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

import * as actions from '../../store/actions/index';

class CommentCard extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        editing: false,
        commentContent: this.props.content,
        votes: this.props.votes,
        username: this.props.username
    }

    toggleEditing = _ => {
        this.setState({
            editing: !this.state.editing
        })
    }

    handleChange(event) {
        // change the inputs in the state
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj);
    }

    editComment = event => {
        event.preventDefault();
        this.setState({
            editing: false
        });
        this.props.editComment({
            content: this.state.commentContent,
            id: this.props._id
        });
    }

    voteComment = event => {
        event.preventDefault();
        let newVotes = this.state.votes;
        newVotes++;
        this.setState({
            votes: newVotes
        })
        this.props.voteComment({
            id: this.props._id
        });
    }

    render() {
        let cardContent;

        return (
            <div className={`card comment ${this.props.edited ? "edited" : ""}`}>
                {cardContent}
                {this.state.editing   
                ? 
                <div className="edit">
                    <input name="commentContent" value={this.state.commentContent} onChange={this.handleChange} />
                    <FontAwesomeIcon className="icon editIcons" icon={faCheck} onClick={this.editComment} />
                    <FontAwesomeIcon className="icon editIcons" icon={faTimes} onClick={this.toggleEditing} />
                    <FontAwesomeIcon className="icon typeIcon" icon={faComment} />
                </div> 
                : this.props.user === this.props.loggedInUser && this.state.username 
                    ? 
                    <div>
                        <FontAwesomeIcon className="icon editIcon" onClick={this.toggleEditing} icon={faPencilAlt} />
                        <span className="votes">{this.state.votes} votes</span>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                        <FontAwesomeIcon className="icon typeIcon" icon={faComment} />
                    </div>

                    : this.state.username && this.props.user !== this.props.loggedInUser
                    ? 
                    <div>
                        <FontAwesomeIcon className="icon voteIcon" onClick={this.voteComment} icon={faPlus} />
                        <span className="votes">{this.state.votes} votes</span>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                        <FontAwesomeIcon className="icon typeIcon" icon={faComment} />
                    </div> 
                    : <div>
                        <span className="votes">{this.state.votes} votes</span>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                        <FontAwesomeIcon className="icon typeIcon" icon={faComment} />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.index.username
    }
}

const mapDispatchToProps = dispatch => ({
    editComment: id => dispatch(actions.editComment(id)),
    voteComment: id => dispatch(actions.voteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
