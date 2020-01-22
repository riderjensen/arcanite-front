import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../containers/home-container/HomeContainer';
import PostContainer from '../containers/post-container/PostContainer';
import About from '../components/about/About';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';

function myUnAuthRouter() {
    return (
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/:id" component={PostContainer} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    )
}

export default myUnAuthRouter;