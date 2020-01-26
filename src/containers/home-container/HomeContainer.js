import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../components/card/Card';

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
            <div>
                <div className="main-header">
                    {this.props.posts.map(post => (
                        <Card {...post} key={post._id} />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.index.posts
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(actions.getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);