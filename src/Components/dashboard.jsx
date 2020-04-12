import React, { Component } from "react";

//import User from '../Classes/User';
import {Route, Link, Router,Switch} from 'react-router-dom';

import Details from './Details/details';
import Tables from './Tables/table';
import Charts from './Charts/Charts';
import NavBar from './NavBar/NavBar';

 class Dashboard extends Component {

   



      render() {
        return (
          <div>
            <NavBar></NavBar>
            <div>Main dashboard</div>
            </div>
        );
    }
}
export default Dashboard;

//היה ברנדר
//<div className="App">
//<div className="container" >
//  <Link to="/" >Charts</Link> | 
 // <Link to="./details" >Details</Link> |
 // <Link to="/table" >Table</Link>  <br /><br />
//</div>
//<div>
 // <Switch>
 //<Route exact path="/Charts" component={Charts} />
  //<Route path="/details" component={Details} />
 // <Route path="/table" component={Tables} />
 // </Switch>
//</div>
//  </div>