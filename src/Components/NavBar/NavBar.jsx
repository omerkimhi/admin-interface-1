import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button, Row } from "react-bootstrap";
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
                General data
              </NavLink>

              <NavDropdown title={<span style={dropStyle}>Tables</span>}>
                <NavDropdown.Item
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                >
         <NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/SpaceTable"
                >
                Spaces
              </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  margintop="5"
                ><NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/UserTable"
                >
                Users
              </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<span style={dropStyle}>Analytics</span>}>
                <NavDropdown.Item
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                ><NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/Searches"
                >
                Searches
              </NavLink>
                  
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  margintop="5"
                ><NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/Spaces"
                >
                Spaces
              </NavLink>
                 
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={myStyle}
                  activestyle={{ fontWeight: "bold" }}
                  margintop="5"
                ><NavLink
                style={myStyle}
                activeStyle={{ fontWeight: "bold" }}
                to="/Orders"
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
  paddingTop: 8,
  hover: {
    fontWeight: "bold",
  },
};
const dropStyle = {
  color: "rgb(0, 114, 106)",
  padding: 0,
  hover: {
    fontWeight: "bold",
  },
  fontWeight: "bold",
};