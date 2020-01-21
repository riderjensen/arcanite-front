import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Routes from './Routes';

import * as actions from './store/actions/index';

class App extends Component {
  render (){
    return (
      <div>
        <Routes />
        <div className="App">
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return true
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignIn: () => dispatch(actions.authCheckState())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
