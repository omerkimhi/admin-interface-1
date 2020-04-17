import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return ( 
        
               <Navbar bg="dark" variant="dark">
               <Navbar.Brand >Spazio Admin</Navbar.Brand>
               <Nav className="mr-auto">
               <Nav.Link href="/details">Details</Nav.Link>
               <Nav.Link href="/SpaceTable">Spaces</Nav.Link>
               <Nav.Link href="/UserTable">Users</Nav.Link>
               <Nav.Link href="/Charts">Orders</Nav.Link>
               <Nav.Link className="justify-content-end" href="/">Sign Out</Nav.Link>
               </Nav>
               </Navbar>      
    );}
      
}
export default NavBar;

