import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';

function myUnAuthRouter() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
    )
}

export default myUnAuthRouter;