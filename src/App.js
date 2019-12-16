import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import Navigation from './components/navigation/Navigation';

import Routes from './Routes';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes />
      <div className="App">
      </div>
    </Router>
  );
}

export default App;
