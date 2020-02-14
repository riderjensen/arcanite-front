import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar } from 'react-circular-progressbar';

import './Card.css';
import 'react-circular-progressbar/dist/styles.css';

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

    startEditing = _ => {
        this.setState({
            editing: true
        })
    }

    endEditing = _ => {
        this.setState({
            editing: false,
            commentContent: this.props.content
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
                        {this.state.commentContent.length <= 250 ? <FontAwesomeIcon className="icon editIcons" icon={faCheck} onClick={this.editComment} /> : <FontAwesomeIcon className="icon editIcons disabled" icon={faCheck} />}
                        <CircularProgressbar className={this.state.commentContent.length > 250 ? 'svgerror' : null} value={this.state.commentContent.length} maxValue={250} minValue={0} strokeWidth={25} />
                        <FontAwesomeIcon className="icon editIcons" icon={faTimes} onClick={this.endEditing} />
                    </div>
                    <textarea name="commentContent" value={this.state.commentContent} onChange={this.handleChange} />
                </div> : this.state.deleting ?
                    <div className="content edit">
                        <p>Are you sure you want to delete this comment?</p>
                        <button className="danger" onClick={this.deleteComment}>Confirm</button>
                        <button onClick={this.toggleDeleting}>Cancel</button>
                    </div>
                : this.props.user === this.props.loggedInUser && this.state.username 
                    ? 
                    <div className="content">
                        <div className="utilButtons">
                            <span className="votes">{this.state.votes}</span>
                        </div>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                        <div className="postInfo">
                            {this.props.edited ? "Edited - " : null}<span onClick={this.startEditing}>Edit</span> <span onClick={this.toggleDeleting}>Delete</span>
                        </div>
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
                        <div className="postInfo">
                            {this.props.edited ? "Edited" : null}
                        </div>
                    </div> 
                    : <div className="content">
                        <div className="utilButtons">
                            <span className="votes">{this.state.votes}</span>
                        </div>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                        <div className="postInfo">
                            {this.props.edited ? "Edited" : null}
                        </div>
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
