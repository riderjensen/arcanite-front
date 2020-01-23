import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import PostContainer from '../containers/post-container/PostContainer';
import HomeContainer from '../containers/home-container/HomeContainer';
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
import About from '../components/about/About';


function myUnAuthRouter() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/about" component={About} />
            <Route path="/post/:id" component={PostContainer} />
            <Route exact path="/" component={HomeContainer} />
            <Redirect to="/" />
        </Switch>
    )
}

export default myUnAuthRouter;