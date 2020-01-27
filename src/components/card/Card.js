import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

import './Card.css';

import * as actions from '../../store/actions/index';

class Card extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        editing: false,
        postContent: this.props.content,
        votes: this.props.votes
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

    editPost = event => {
        event.preventDefault();
        this.setState({
            editing: false
        });
        this.props.editPost({
            content: this.state.postContent,
            id: this.props._id
        });
    }

    votePost = event => {
        event.preventDefault();
        let newVotes = this.state.votes;
        newVotes++;
        this.setState({
            votes: newVotes
        })
        this.props.votePost({
            id: this.props._id
        });
    }

    render() {
        return (
        <div className="card staff">
            {!this.state.editing ? 
                this.props.user === this.props.loggedInUser ? 
                    <div>
                        <FontAwesomeIcon className="icon editIcon" onClick={this.toggleEditing} icon={faPencilAlt} />
                        <h5 className="card-title">{this.state.postContent} - <span className="title">{this.state.votes} votes</span></h5>
                        <p className="view-link">
                            <NavLink  to={'/post/'+this.props._id}>View</NavLink>
                        </p>
                    </div>
                        :
                    <div>
                        <FontAwesomeIcon className="icon voteIcon" onClick={this.votePost} icon={faPlus} />
                        <h5 className="card-title">{this.state.postContent} - <span className="title">{this.state.votes} votes</span></h5>
                        <p className="view-link">
                            <NavLink  to={'/post/'+this.props._id}>View</NavLink>
                        </p>
                    </div>
                    : 
                    <div>
                        <input name="postContent" value={this.state.postContent} onChange={this.handleChange} />
                            <FontAwesomeIcon className="icon editIcons" icon={faCheck} onClick={this.editPost} />
                            <FontAwesomeIcon className="icon editIcons" icon={faTimes} onClick={this.toggleEditing} />
                    </div> 
                }
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    editPost: editObj => dispatch(actions.editPost(editObj)),
    votePost: id => dispatch(actions.votePost(id))
})

export default connect(null, mapDispatchToProps)(Card);
