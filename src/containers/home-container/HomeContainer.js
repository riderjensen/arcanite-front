import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../components/card/Card';

import NoAuthNavigation from '../../components/navigation/NoAuthNavigation';

import './HomeContainer.css';


class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        // check the state for posts first then call if there are none
        axios.get('http://localhost:8080/a').then(resp => {
            this.setState({ posts: resp.data });
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <NoAuthNavigation />
                <div className="main-header">
                    {this.state.posts.map(post => (
                        <Card {...post} key={post._id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Home;