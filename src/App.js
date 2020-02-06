import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UnAuthRoutes from './routes/UnAuthRoutes';
import AuthRoutes from './routes/AuthRoutes';

import Navigation from './components/navigation/Navigation';
import Error from './components/error/Error';

import './App.css';

import * as actions from './store/actions/index';

class App extends Component {
  state = {
    username: null
  }

  componentDidMount () {
    this.props.onTryAutoSignIn();
    this.setState({
      username: this.props.username
    })
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
        <div className="App">
          {routes}
          {this.props.error ? <Error msg={this.props.error} clearError={this.props.clearError} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    username: state.index.username,
    error: state.index.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
    onTryAutoSignIn: () => dispatch(actions.authCheckState()),
    clearError: () => dispatch(actions.clearError())
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
