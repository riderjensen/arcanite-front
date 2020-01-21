import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Routes from './Routes';

import * as actions from './store/actions/index';

function App() {
  return (
    <Router>
      <Routes />
      <div className="App">
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
	return {
		isAutheniticated: state.auth.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignIn: () => dispatch(actions.authCheckState())
	}
}

export default connect((mapStateToProps, mapDispatchToProps)(App));
