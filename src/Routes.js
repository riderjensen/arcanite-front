import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/home/Home';
import Login from'./components/auth/Login';
import SignUp from './components/auth/SignUp';

class myRouter extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
            </div>
        )
    }
}

export default myRouter;