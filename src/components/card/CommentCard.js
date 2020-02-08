import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faCheck, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

import * as actions from '../../store/actions/index';

class CommentCard extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        editing: false,
        deleting: false,
        commentContent: this.props.content,
        votes: this.props.votes,
        username: this.props.username
    }

    toggleEditing = _ => {
        this.setState({
            editing: !this.state.editing
        })
    }

    toggleDeleting = _ => {
        this.setState({
            deleting: !this.state.deleting
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

    unVoteComment = event => {
        event.preventDefault();
        let newVotes = this.state.votes;
        newVotes--;
        this.setState({
            votes: newVotes
        })
        this.props.voteComment({
            id: this.props._id
        });
    }

    deleteComment = event => {
        event.preventDefault();
        this.setState({
            deleting: false
        });
        this.props.deleteComment({
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
                <div className="content edit">
                    <div className="utilButtons">
                        <FontAwesomeIcon className="icon editIcons" icon={faCheck} onClick={this.editComment} />
                        <FontAwesomeIcon className="icon editIcons" icon={faTimes} onClick={this.toggleEditing} />
                    </div>
                    <textarea name="commentContent" value={this.state.commentContent} onChange={this.handleChange} />
                </div> : this.state.deleting ?
                    <div className="edit">
                        <button className="danger" onClick={this.deleteComment}>Confirm</button>
                        <button onClick={this.toggleDeleting}>Cancel</button>
                    </div>
                : this.props.user === this.props.loggedInUser && this.state.username 
                    ? 
                    <div className="content">
                        <div className="utilButtons">
                            <FontAwesomeIcon className="icon editIcon" onClick={this.toggleEditing} icon={faPencilAlt} />
                            <span className="votes">{this.state.votes}</span>
                            <FontAwesomeIcon className="icon deleteIcon" icon={faTimes} onClick={this.toggleDeleting} />
                        </div>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                    </div>

                    : this.state.username && this.props.user !== this.props.loggedInUser
                    ? 
                    <div className="content">
                        <div className="utilButtons">
                            <FontAwesomeIcon className="icon voteIcon" onClick={this.voteComment} icon={faChevronUp} />
                            <span className="votes">{this.state.votes}</span>
                            <FontAwesomeIcon className="icon" onClick={this.unVote} icon={faChevronDown} />
                        </div>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                    </div> 
                    : <div className="content">
                        <div className="utilButtons">
                            <span className="votes">{this.state.votes}</span>
                        </div>
                        <h5 className="card-title">{this.state.commentContent}</h5>
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
    voteComment: id => dispatch(actions.voteComment(id)),
    deleteComment: id => dispatch(actions.deleteComment(id)),
    unVoteComment: id => dispatch(actions.unVoteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
