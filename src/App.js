import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//
import 'bootstrap/dist/css/bootstrap.min.css';

//
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/login";
import Dashboard from "./Components/dashboard";
import Details from "./Components/Details/details"
import Tables from "./Components/Tables/table"
import Charts from './Components/Charts/Charts'




function App() {
  return (

    //<Tables></Tables>
    //<Details></Details>
<Charts> </Charts>




 // <Router>
  //  <div className="App">
  //    <nav className="navbar navbar-expand-lg navbar-light fixed-top"/>
   //   <div className="auth-wrapper">
   //     <div className="auth-inner">
    //      <Switch>
    //        <Route exact path='/' component={Login} />
           
    //        <Route path="/dashboard" component={Dashboard} />
    //      </Switch>
  //      </div>
  //    </div>
  //  </div>
 // </Router>
  );
}

export default App;
