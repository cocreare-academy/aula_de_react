import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import './App.css';

import Home from './pages/home/home'
import Feed from './pages/feed/feed'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/feed" component={Feed} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
