import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Form, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap-4-grid/css/grid.min.css';
import LineChart from '../Components/Charts/LineChart.jsx'

export default class Control extends Component {
   

    render() {
        return (
            <div className="app">
                  <br />
                <div className="container">
                  
                    <Form>
                    <br/>
                        <Form.Group as={Row} controlId="Price">
                            <Form.Label column sm={2}>
                                Price
    </Form.Label>
                            <Col sm={10}>
                                <Form.Control style={{width: "10%"}} type="number" defaultValue={46} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="Rank">
                            <Form.Label column sm={2}>
                               Rank
    </Form.Label>
                            <Col sm={10}>
                                <Form.Control style={{width: "10%"}}  type="number" defaultValue={46} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="Capacity">
                            <Form.Label column sm={2}>
                                Capacity
    </Form.Label>
                            <Col sm={10}>
                                <Form.Control style={{width: "10%"}}  type="number" defaultValue={46} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="Facilities">
                            <Form.Label column sm={2}>
                              Facilities
    </Form.Label>
                            <Col sm={10}>
                                <Form.Control style={{width: "10%"}}  type="number" defaultValue={46}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="Equipments">
                            <Form.Label column sm={2}>
                                Equipments
    </Form.Label>
                            <Col sm={10}>
                                <Form.Control style={{width: "10%"}}  type="number" defaultValue={46} />
                            </Col>
                        </Form.Group>
                    
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Apply</Button>
                            </Col>
                        </Form.Group>
                        <br/>
                    </Form>
                    <LineChart header={"Grades History by field"}></LineChart>
                </div>
            </div>
        )
    }
}

const styles = {
    
};
