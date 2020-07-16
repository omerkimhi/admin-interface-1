import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";



class NavBar extends Component {
  render() {
    return (
      <div>
        <br />
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>
            {" "}
            <img
              style={{ height: 50 }}
              src="https://i.imgur.com/LzYGyMb.png"
              alt="logoimage"
            ></img>{" "}
            Spazio Admin
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavLink
              style={myStyle}
              activeStyle={{ fontWeight: "bold" }}
              to="/details"
            >
              General data
            </NavLink>
            <NavDropdown title="Tables" id="basic-nav-dropdown" style={{padding:0}}>
              <NavDropdown.Item
                
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  href="/SpaceTable"
                >
                  Spaces
               
              </NavDropdown.Item>
              <NavDropdown.Item
                
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  href="/UserTable"
                  margintop='5'
                >
                  Users
                
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Analytics" id="basic-nav-dropdown" style={{padding:0}}>
              <NavDropdown.Item
                
                
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  href="/Graph"
                >
                  Searches
                
              </NavDropdown.Item>
              <NavDropdown.Item
                
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  href="/Charts"
                  margintop='5'
>
                  Spaces
               
              </NavDropdown.Item>
              <NavDropdown.Item
                
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  href="/Orders"
                  margintop='5'
                >
                  Orders
              
              </NavDropdown.Item>
            </NavDropdown>
           
            <NavLink
              style={myStyle}
              activeStyle={{ fontWeight: "bold" }}
              to="/Control"
            >
              Control
            </NavLink>
            
            <NavLink
              style={myStyle}
              activeStyle={{ fontWeight: "bold" }}
              className="justify-content-end"
              to="/"
            >
              Sign Out
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;

const myStyle = {
  marginRight: "2vh",
  color: "rgb(0, 114, 106)",
  fontWeight: "bold",
  paddingTop:8,
  hover: {
    fontWeight: "bold",
  },
};