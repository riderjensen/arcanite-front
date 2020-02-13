import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostCard from '../../components/card/PostCard';
import CommentCard from '../../components/card/CommentCard';
import Spinner from '../../components/spinner/Spinner';

import * as actions from '../../store/actions/index';

import './HomeContainer.css';


class Home extends Component {

    componentDidMount() {
        if (this.props.posts.length < 1) {
            this.props.getPosts()
        }
    }

    render() {
        return (
            <div className="main-header">
                <div className="post-area">
                    {this.props.posts.length > 0 ? this.props.posts.map(post => (
                        <PostCard {...post} loggedInUser={this.props.username} key={post._id} />
                    )) : <div>
                            <p className="load-warning">Please be patient while our backend wakes up.</p>
                            <Spinner />
                        </div>}
                </div>
                <div className="comment-area">
                    {this.props.selectedPost ? this.props.selectedPost.comments ? this.props.selectedPost.comments.length > 0 ? this.props.selectedPost.comments.map(comment => {
                        return <CommentCard {...comment} loggedInUser={this.props.username} key={comment._id} />
                    }) : null: null : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.index.posts,
        username: state.index.username,
        selectedPost: state.index.selectedPost
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(actions.getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);