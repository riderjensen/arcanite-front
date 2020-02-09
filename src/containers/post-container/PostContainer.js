import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentCard from '../../components/card/CommentCard';

import * as actions from '../../store/actions/index';

import './PostContainer.css';


class Post extends Component {

    state = {
        id: this.props.location.pathname.split('/')[2],
        commentContent: ''
    }

    componentDidMount() {
        this.getOnePost(this.state.id)
    }

    getOnePost = id => {
        this.props.getOnePost(id);
    }

    handleChange = event => {
        // change the inputs in the state
        const myStateObj = {};
        myStateObj[event.target.name] = event.target.value;
        this.setState(myStateObj);
    }

    addComment = event => {
        event.preventDefault();
        this.setState({
            commentContent: ''
        });
        const commentID = new Date()
        const newComment = {
            votes: 0,
            edited: false,
            type: "comment",
            _id: commentID.getTime(),
            content: this.state.commentContent,
            user: this.props.username,
        }
        const newArray = [newComment, ...this.props.post.comments]
        this.props.post.comments = newArray;
        this.props.addComment({
            id: this.state.id,
            content: this.state.commentContent
        });
    }

    render () {
        const date = new Date(this.props.post.createdAt)

        return (
            <div className="one-post">
                <div className="post-header">
                    <h1>{this.props.post.content}<span className="edited">{this.props.post.edited ? '*' : null}</span></h1>
                    <p className="author">Posted By: {this.props.post.user} on {date.toDateString()}</p>
                    {this.props.username ? 
                        <div className="commentInput">
                            <textarea type="text" name="commentContent" value={this.state.commentContent} onChange={this.handleChange} />
                            <button onClick={this.addComment}>Comment</button>
                        </div> : null}
                </div>
                <div className="post-comments">
                {this.props.post ? this.props.post.comments ? this.props.post.comments.length > 0 ? this.props.post.comments.map(comment => {
                        return <CommentCard {...comment} loggedInUser={this.props.username} key={comment._id} />
                    }) : null: null : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        post: state.index.selectedPost,
        username: state.index.username
    }
}

const mapDispatchToProps = dispatch => ({
    getOnePost: id => dispatch(actions.getOnePost(id)),
    addComment: commentObj => dispatch(actions.addComment(commentObj)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);