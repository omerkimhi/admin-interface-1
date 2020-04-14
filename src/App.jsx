import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Login from "./Components/login";
// import Dashboard from "./Components/dashboard";
// import Details from "./Components/Details/details";
// import Tables from "./Components/Tables/table";
// import Charts from './Components/Charts/Charts';
 import NavBar from './Components/NavBar/NavBar';
//import AppData from './Components/data/appData';

//import Average from "./Components/Details/Average";

function App() {
  return (
     //<Dashboard></Dashboard>
       //<Tables></Tables>
       //<Charts> </Charts>
       
      // <Average/> 
  <div>
  <NavBar></NavBar> 
    
</div>
 // <Router>
    
  // <div className="App">
   //  <nav className="navbar navbar-expand-lg navbar-light fixed-top"/>
    // <div className="auth-wrapper">
    //    <div className="auth-inner">
      //    <Switch>
      //   <Route exact path='/' component={Login} />
           
         
       //   <Route path="/table" component={Tables} />
       //   <Route path="/Charts" component={Charts} />
       //   <Route path="/details" component={Details} />
     //   </Switch>
    //  </div>
   // </div>
  // </div>
//   </Router>
  );
}

export default App;
//<Route path="/dashboard" component={Dashboard} />