import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../containers/home-container/HomeContainer';
import PostContainer from '../containers/post-container/PostContainer';

import About from '../components/about/About';

function globalRoutes() {
    return (
        <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/post/:id" component={PostContainer} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    )
}

export default globalRoutes;