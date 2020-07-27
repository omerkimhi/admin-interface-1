import React, { Component } from "react";
import { Navbar, Nav, Button, Row } from "react-bootstrap";
import { BrowserRouter as Switch, Route, NavLink } from "react-router-dom";
import "./../../App.css";


const url="/igroup17/prod/Admin";

class NavBar extends Component {

  render() {
    if (!this.props.isLogged) {
      return (
        <NavLink
          style={myStyle}
          activeStyle={{ fontWeight: "bold" }}
          className="justify-content-end"
          to="/"
        >
          Sign In
        </NavLink>
      );
    } else
      return (
        <div>
          <br />
          <Navbar bg="red" variant="dark" expand="lg" className="nav">
            
            <Navbar.Brand className="nav">
              {" "}
              <img
                style={{ height: 50 }}
                src="https://i.imgur.com/LzYGyMb.png"
                alt="logoimage"
              ></img>{" "}
              Spazio Admin - {String(this.props.userLogged).toUpperCase()}
            </Navbar.Brand>

            <Nav className="mr-auto">

              <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/"
              >
             Stats
              </NavLink>
     
         <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/SpaceTable"
                >
                Spaces Table
              </NavLink>
               
               <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/UserTable"
                >
                Users Table
              </NavLink>
              
              <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/Searches"
                >
                Searches
              </NavLink>
                  
                <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/Spaces"
                >
                Spaces
              </NavLink>
                 
                <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/Orders"
                >
                Orders
              </NavLink>
                 
              <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/Control"
                >
                Control
              </NavLink>
            </Nav>
            <Row style={{ Right: 0, marginRight: 15, alignItems: "center" }}>
              <div style={{ marginLeft: 10 }}>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    this.props.checkLogged(false, "");
                  }}
                >
                  sign out
                </Button>
              </div>
            </Row>
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
  paddingTop:0,
  hover: {
    fontWeight: "bold",
  },
};


