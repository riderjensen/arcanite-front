import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UnAuthRoutes from './routes/UnAuthRoutes';
import AuthRoutes from './routes/AuthRoutes';

import './App.css';

import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
		this.props.onTryAutoSignIn();
  }
  
  render (){
    let routes = (
        <UnAuthRoutes />

		)
		if (this.props.isAutheniticated) {
			routes = (
        <AuthRoutes />

      )
		}


    return (
      <div>
        {routes}
        <div className="App">
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
	  isAutheniticated: state.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignIn: () => dispatch(actions.authCheckState())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
