import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import Login from'./components/auth/Login';
import SignUp from './components/auth/SignUp';
import DashboardContainer from './containers/dashboard-container/DashboardContainer';

class myRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/about" component={About} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/dashboard" component={DashboardContainer} />
            </div>
        )
    }
}

export default myRouter;