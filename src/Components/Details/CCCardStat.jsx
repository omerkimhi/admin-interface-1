import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class CCCardStat extends Component {

  render() {

    return (

      <Card style={{ width: '18rem' }}>
  <Card.Header><h2>{this.props.header}</h2></Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{this.props.sport}<h4>{this.props.dataSport}</h4></ListGroup.Item>
    <ListGroup.Item>{this.props.art}<h4>{this.props.dataArt}</h4></ListGroup.Item>
    <ListGroup.Item>{this.props.beauty}<h4>{this.props.dataBeauty}</h4></ListGroup.Item>
  </ListGroup>
</Card>

    );
  }
}
export default CCCardStat;