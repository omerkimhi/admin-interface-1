import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const myStyle = {
  marginRight: "2vh",
  color: "rgb(0, 114, 106)",
  fontWeight: "bold",
  paddingTop:8,
  hover: {
    fontWeight: "bold",
  },
};

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
              <NavDropdown.Item>
                <NavLink
                  style={myStyle}
                  activeStyle={{ fontWeight: "bold" }}
                  to="/SpaceTable"
                >
                  Spaces
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  style={myStyle}
                  activeStyle={{ fontWeight: "bold" }}
                  to="/UserTable"
                  marginTop='5'
                >
                  Users
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Analytics" id="basic-nav-dropdown" style={{padding:0}}>
              <NavDropdown.Item>
                <NavLink
                
                  style={myStyle}
                  activeStyle={{ fontWeight: "bold" }}
                  to="/Graph"
                >
                  Searches
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  style={myStyle}
                  activeStyle={{ fontWeight: "bold" }}
                  to="/Charts"
                  marginTop='5'
                >
                  Spaces
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  style={myStyle}
                  activeStyle={{ fontWeight: "bold" }}
                  to="/Orders"
                  marginTop='5'
                >
                  Orders
                </NavLink>
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
