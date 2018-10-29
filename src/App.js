import React, { Component } from 'react';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
