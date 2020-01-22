import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardContainer from '../containers/profile-container/ProfileContainer';

function myAuthRouter() {
    return (
        <Switch>
            <Route exact path="/dashboard" component={DashboardContainer} />
        </Switch>
    )
}

export default myAuthRouter;