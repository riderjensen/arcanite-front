import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProfileContainer from '../containers/profile-container/ProfileContainer';
import PostContainer from '../containers/post-container/PostContainer';
import HomeContainer from '../containers/home-container/HomeContainer';
import About from '../components/about/About';


function myAuthRouter() {
    return (
        <Switch>
            <Route exact path="/dashboard" component={ProfileContainer} />
            <Route exact path="/about" component={About} />
            <Route path="/post/:id" component={PostContainer} />
            <Route exact path="/" component={HomeContainer} />
            <Redirect to="/" />
        </Switch>
    )
}

export default myAuthRouter;