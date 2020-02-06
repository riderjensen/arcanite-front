import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

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
                <div className="edit">
                    <input name="commentContent" value={this.state.commentContent} onChange={this.handleChange} />
                    <FontAwesomeIcon className="icon editIcons" icon={faCheck} onClick={this.editComment} />
                    <FontAwesomeIcon className="icon editIcons" icon={faTimes} onClick={this.toggleEditing} />
                </div> : this.state.deleting ?
                    <div className="edit">
                        <button className="danger" onClick={this.deleteComment}>Confirm</button>
                        <button onClick={this.toggleDeleting}>Cancel</button>
                    </div>
                : this.props.user === this.props.loggedInUser && this.state.username 
                    ? 
                    <div>
                        <FontAwesomeIcon className="icon editIcon" onClick={this.toggleEditing} icon={faPencilAlt} />
                        <FontAwesomeIcon className="icon deleteIcon" icon={faTimes} onClick={this.toggleDeleting} />
                        <span className="votes">{this.state.votes} votes</span>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                    </div>

                    : this.state.username && this.props.user !== this.props.loggedInUser
                    ? 
                    <div>
                        <FontAwesomeIcon className="icon voteIcon" onClick={this.voteComment} icon={faPlus} />
                        <span className="votes">{this.state.votes} votes</span>
                        <h5 className="card-title">{this.state.commentContent}</h5>
                    </div> 
                    : <div>
                        <span className="votes">{this.state.votes} votes</span>
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
    deleteComment: id => dispatch(actions.deleteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);
