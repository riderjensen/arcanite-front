import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from'./components/auth/Login';
import SignUp from './components/auth/SignUp';
import DashboardContainer from './containers/dashboard-container/DashboardContainer';

class myRouter extends Component {
    render() {
        return (
            <div>
                {/* <Switch> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/dashboard" component={DashboardContainer} />
                    <Route path="/dashboard/:id" component={DashboardContainer} />
                {/* </Switch> */}
            </div>
        )
    }
}

export default myRouter;