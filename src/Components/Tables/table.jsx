import React, { Component } from "react";

import NavBar from '../NavBar/NavBar.jsx'

import { Table, Container,Card } from 'react-bootstrap';

 class Tables extends Component {

      render() {
        return (
            <div>
          
           <br/>
           <br/>
           <br/>
           <Container>
                       <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
                       </Card>
           </Container>
           <br/>
           <br/>
<Container>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
        </Container>
        </div>
           
            
        );
    }
}
export default Tables;