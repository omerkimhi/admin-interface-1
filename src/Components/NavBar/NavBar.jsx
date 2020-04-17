import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from '../Details/details';
//import Tables from '../Tables/table';
import Login from "../../Components/Login/login";
import Charts from '../Charts/Charts';
import Space from '../Classes/Space'
//import { Col } from "react-bootstrap";



import SpaceTable from '../Tables/SpaceTable'
import UserTable from '../Tables/UserTable'




class NavBar extends Component {

 constructor(props){
  super(props);
this.state={
  Spaces:[],
}; 
  
} 
   componentDidMount() {
    this.SpacesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/space";

    this.FetchGetSpaces();
    


  } 

   FetchGetSpaces = () => {
    fetch(this.SpacesApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Spaces: result.map(
              item =>
                new Space(
                  item.Id,
                  item.Name,
                  item.Field,
                  item.Price,
                  item.City,
                  item.Street,
                  item.Number,
                  item.Capabillity,
                  item.Bank,
                  item.Branch,
                  item.Imageurl1,
                  item.Imageurl2,
                  item.Imageurl3,
                  item.Imageurl4,
                  item.Imageurl5,
                  item.AccountNumber,
                  item.UserEmail,
                  item.Description,
                  item.TermsOfUse,
                  item.Rank,
                  item.Uploadtime
                )
            )
          },() => {
            console.log(this.state.Spaces)
          },
          )
        },
        error => { }
        
      );
  }; 

  render() {
if(this.state.Spaces.length===0){
  return <h1>LOADING</h1>
}
else{
  

    return (
      <div>
         {/* <Col md={{ span: 6, offset: 3 }}> */}
        <Router>
               <Navbar bg="dark" variant="dark">
               <Navbar.Brand >Spazio Admin</Navbar.Brand>
               <Nav className="mr-auto">
               <Nav.Link href="/details">Details</Nav.Link>
               <Nav.Link href="/SpaceTable">Spaces</Nav.Link>
               <Nav.Link href="/UserTable">Users</Nav.Link>
               <Nav.Link href="/Charts">Charts</Nav.Link>
               <Nav.Link className="justify-content-end" href="/">Sign Out</Nav.Link>
               </Nav>
               </Navbar>
                <Switch>
                <Route path="/details"><Details Spaces={this.state.Spaces}/></Route>   
                 <Route path="/SpaceTable"><SpaceTable /></Route>
                 <Route path="/UserTable"><UserTable /></Route>
                 <Route path="/Charts"><Charts/></Route>
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
      
     {/* </Col> */}
      </div>
    );}
  }
}

export default NavBar;

