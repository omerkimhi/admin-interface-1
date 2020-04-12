import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Router } from 'react-router-dom';

import Details from '../Details/details';
import Tables from '../Tables/table';


function navBar  () {
    
      return (
       
         <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>Spazio Admin</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link action={()=>{return <Details></Details>}} >Details</Nav.Link>
      <Nav.Link action={()=>{return <Tables></Tables>}}>Tables</Nav.Link>
      <Nav.Link href='../Charts'>Charts</Nav.Link>
     
    </Nav>
  </Navbar>  
</>

        );
    }


export default navBar;



