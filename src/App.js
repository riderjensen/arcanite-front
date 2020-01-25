import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UnAuthRoutes from './routes/UnAuthRoutes';
import AuthRoutes from './routes/AuthRoutes';

import Navigation from './components/navigation/Navigation';

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
    
		if (this.props.username) {
			routes = (
        <AuthRoutes />
      )
		}


    return (
      <div>
        <Navigation />
        {routes}
        <div className="App">
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
	  username: state.index.username
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignIn: () => dispatch(actions.authCheckState())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
