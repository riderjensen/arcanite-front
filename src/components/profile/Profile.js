import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../card/PostCard';
import CommentCard from '../card/CommentCard';

import * as actions from '../../store/actions/index';

import './Profile.css';


class Profile extends Component {

    logOutFunction = event => {
        event.preventDefault();
        this.props.userLogout();
    }

    componentDidMount() {
        this.props.getUserPostsAndComments()
    }

    render() {
        return (
            <div className="profile">
                <h1>Profile</h1>
                <button onClick={this.logOutFunction}>Logout</button>
                {this.props.userPosts.length > 0 ? this.props.userPosts.map(card => {
                    if (card.type === "post") {
                        return <PostCard {...card} loggedInUser={this.props.username} key={card._id} />
                    } else {
                        return <CommentCard {...card} loggedInUser={this.props.username} key={card._id} />
                    }                       
                }) : null}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userPosts: state.index.userPosts,
        username: state.index.username
    }
}

const mapDispatchToProps = dispatch => ({
    getUserPostsAndComments: () => dispatch(actions.getUserPostsAndComments()),
    userLogout: () => dispatch(actions.userLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
