import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from '../Details/details';
import Tables from '../Tables/table';
import Login from "../../Components/login";
import Charts from '../Charts/Charts';
import PieChart from '../Charts/Pie';
import { Col } from "react-bootstrap";
import AnimatedChart from '../Charts/test';





function navBar  () {
    
      return (
        //<Col md={{ span: 6, offset: 3 }}>
        <Router>
               <Navbar bg="dark" variant="dark">
               <Navbar.Brand >Spazio Admin</Navbar.Brand>
               <Nav className="mr-auto">
               <Nav.Link href="/details">Details</Nav.Link>
               <Nav.Link href="/Tables">Tables</Nav.Link>
               <Nav.Link href="/Charts">Charts</Nav.Link>
               <Nav.Link href="/Pie">Pie</Nav.Link>
               <Nav.Link className="justify-content-end" href="/">Sign Out</Nav.Link>
               </Nav>
               </Navbar>
                <Switch>
                <Route path="/details"><Details/></Route>
                 <Route path="/Tables"><Tables /></Route>
                 <Route path="/Charts"><PieChart/></Route>
                 <Route path="/Pie"><AnimatedChart/></Route>
                 <Route exact path="/"><Login/></Route>
                </Switch>
        
        
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          
        
      </Router>
     // </Col>
        );
    }


export default navBar;



