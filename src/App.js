import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import NoAuthNavigation from './components/navigation/NoAuthNavigation';

import Routes from './Routes';

function App() {
  return (
    <Router>
      <NoAuthNavigation />
      <Routes />
      <div className="App">
      </div>
    </Router>
  );
}

export default App;
