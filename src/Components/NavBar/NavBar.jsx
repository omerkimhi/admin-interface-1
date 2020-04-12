import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

function navBar  () {
    
      return (
         <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand >Spazio Admin</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="../Details/details">Details</Nav.Link>
      <Nav.Link href="../Tables/table">Tables</Nav.Link>
      <Nav.Link href="/charts">Charts</Nav.Link>
      <Nav.Link href="/ricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>  
</>
        );
    }


export default navBar;



