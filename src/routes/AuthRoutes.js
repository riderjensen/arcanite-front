import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Profile from '../components/profile/Profile';
import HomeContainer from '../containers/home-container/HomeContainer';
import About from '../components/about/About';


function myAuthRouter() {
    return (
        <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={HomeContainer} />
            <Redirect to="/" />
        </Switch>
    )
}

export default myAuthRouter;