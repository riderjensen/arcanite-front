import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostCard from '../card/PostCard';
import CommentCard from '../card/CommentCard';
import Spinner from '../spinner/Spinner';

import * as actions from '../../store/actions/index';

import './Profile.css';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        filter: ''
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

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
                <div className="userInfo">
                    <h1>{this.props.username.toUpperCase()}</h1>
                    <button className="danger" onClick={this.logOutFunction}>Logout</button>
                </div>
                <div className="filter">
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="">All</option>
                        <option value="Posts">Posts</option>
                        <option value="Comments">Comments</option>
                    </select>
                </div>
                {this.props.userPosts.length > 0 ? this.props.userPosts.map(card => {
                    if (this.state.value) {
                        // use the filters
                        if (this.state.value === "Comments") {
                            if (card.type === "comment") {
                                return <CommentCard {...card} loggedInUser={this.props.username} key={card._id} />

                            } else {
                                return null;
                            }  
                        } else if(this.state.value === "Posts") {
                            if (card.type === "post") {
                                return <PostCard {...card} loggedInUser={this.props.username} key={card._id} />
                            } else {
                                return null;
                            } 
                        } else {
                            return null;
                        }
                    } else {
                        if (card.type === "post") {
                            return <PostCard {...card} loggedInUser={this.props.username} key={card._id} />
                        } else {
                            return <CommentCard {...card} loggedInUser={this.props.username} key={card._id} />
                        }  
                    }
                }) : <Spinner />}
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
