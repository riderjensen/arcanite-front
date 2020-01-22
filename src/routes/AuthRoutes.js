import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../containers/home-container/HomeContainer';
import DashboardContainer from '../containers/profile-container/ProfileContainer';

function myAuthRouter() {
    return (
        <Switch>
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route path="/dashboard/:id" component={DashboardContainer} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
        </Switch>
    )
}

export default myAuthRouter;