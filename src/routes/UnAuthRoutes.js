import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../containers/home/HomeContainer';

import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';

function myUnAuthRouter() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect to="/" />
        </Switch>
    )
}

export default myUnAuthRouter;