import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentCard from '../../components/card/CommentCard';

import * as actions from '../../store/actions/index';

import './PostContainer.css';


class Post extends Component {

    state = {
        id: this.props.location.pathname.split('/')[2],
        comments: []
    }

    componentDidMount() {
        this.getOnePost(this.state.id)
    }

    getOnePost = id => {
        this.props.getOnePost(id);
    }

    render () {
        return (
            <div className="one-post">
                <div className="post-header">
                    <h1>{this.props.post.content}</h1>
                    <p>Posted By: {this.props.post.user}</p>
                    <p>Created At: {this.props.post.createdAt}</p>
                    <p>Edited: {this.props.post.edited}</p>
                    {console.log(this.props.post)}
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
    }
}

const mapDispatchToProps = dispatch => ({
    getOnePost: id => dispatch(actions.getOnePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);