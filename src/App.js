import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./Components/login";

function App() {
  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top"/>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
