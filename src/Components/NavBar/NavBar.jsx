import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

const myStyle = {
  marginRight: '2vh',
  color: 'white',
  hover: {
      fontWeight: 'bold'
  }

}

class NavBar extends Component {
  render() {
    return ( 
        <div>
          <br/>
               <Navbar bg="dark" variant="dark" expand="lg">
               <Navbar.Brand > <img style={{height:50 }}  src="https://i.imgur.com/LzYGyMb.png" alt="logoimage"></img> Spazio Admin</Navbar.Brand>
               <Nav className="mr-auto">
               <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/details">Details</NavLink>
               <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/SpaceTable">Spaces</NavLink>
               <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/UserTable">Users</NavLink>
               <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} to="/Charts">Orders</NavLink>
               <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} className="justify-content-end" to="/Graph">Graph</NavLink>
               <NavLink style={myStyle} activeStyle={{fontWeight:'bold'}} className="justify-content-end" to="/">Sign Out</NavLink>
               </Nav>
               </Navbar>  
               </div>    
    );}
      
}
export default NavBar;

