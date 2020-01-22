import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../containers/home-container/HomeContainer';
import DashboardContainer from '../containers/profile-container/ProfileContainer';
import PostContainer from '../containers/post-container/PostContainer';

function myAuthRouter() {
    return (
        <Switch>
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route path="/:id" component={PostContainer} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    )
}

export default myAuthRouter;