import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UnAuthRoutes from './routes/UnAuthRoutes';
import AuthRoutes from './routes/AuthRoutes';

import Navigation from './components/navigation/Navigation';

import './App.css';

import * as actions from './store/actions/index';

class App extends Component {
  state = {
    username: null
  }

  componentDidMount() {
    this.props.onTryAutoSignIn();
    this.setState({
      username: this.props.username
    })
  }
  
  render (){
    let routes = (
      <AuthRoutes />
    )
    
		if (this.state.username) {
			routes = (
        <UnAuthRoutes />
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
