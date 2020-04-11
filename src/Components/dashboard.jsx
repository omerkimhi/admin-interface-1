import React, { Component } from "react";

//import User from '../Classes/User';
import {Route, Link} from 'react-router-dom';

import Details from './Details/details';
import Tables from './Tables/table';

 class Dashboard extends Component {

   



      render() {
        return (

        
          <div className="App">
        <div className="container" >
          <Link to="/" >Home</Link> | 
          <Link to="./details" >Details</Link> |
          <Link to="/table" >Table</Link>  <br /><br />
        </div>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/details" component={Details} />
          <Route path="/table" component={Tables} />
       </div>
          </div>
        );
    }
}
export default Dashboard;