import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Routes from './Routes';

function App() {
  return (
    <Router>
      <Routes />
      <div className="App">
      </div>
    </Router>
  );
}

export default App;
