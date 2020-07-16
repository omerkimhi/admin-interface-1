import React, { Component } from "react";
import PropTypes from "prop-types";

import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap-4-grid/css/grid.min.css";
import LineChart from "../Components/Charts/LineChart.jsx";

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  //"Price","Capacity","Facility","Equipment","Rating","Premium","Order","Conversion"
  datasets: [
    {
      label: "Price",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(161, 222, 147,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(161, 222, 147,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(161, 222, 147,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
    {
      label: "Capacity",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(225, 204,230, .3)",
      borderColor: "rgb(112, 161, 215)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(112, 161, 215)",
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(112, 161, 215)",
      pointHoverBorderColor: "rgba(220, 220, 220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
    {
      label: "Facility",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(184, 185, 210, .3)",
      borderColor: "rgb(244, 124, 124)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(244, 124, 124)",
      pointBackgroundColor: "rgb(112, 161, 215)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(244, 124, 124)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    }, {
      label: "Equipment",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(184, 185, 210, .3)",
      borderColor: "rgb(9,18,138)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(9,18,138)",
      pointBackgroundColor: "rgb(112, 161, 215)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(244, 124, 124)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    }, {
      label: "Rating",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(184, 185, 210, .3)",
      borderColor: "rgb(80,137,245)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(80,137,245)",
      pointBackgroundColor: "rgb(112, 161, 215)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(244, 124, 124)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    }, {
      label: "Premium",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(184, 185, 210, .3)",
      borderColor: "rgb(45,194,189)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(45,194,189)",
      pointBackgroundColor: "rgb(112, 161, 215)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(244, 124, 124)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    }, {
      label: "Order",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(184, 185, 210, .3)",
      borderColor: "rgb(122, 130, 171)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(122, 130, 171)",
      pointBackgroundColor: "rgb(112, 161, 215)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(244, 124, 124)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    }, {
      label: "Conversion",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(184, 185, 210, .3)",
      borderColor: "rgb(0,188,138)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgb(0,188,138)",
      pointBackgroundColor: "rgb(112, 161, 215)",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(244, 124, 124)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
}

export default class Control extends Component {
  render() {
    return (
      <div className="app">
        <br />
        <div className="container">
          <div style={{ justifyContent: "center" }} className="row">
            <h1>Smart Sorting</h1>
          </div>

          <Form>
            <br />
            <Form.Group as={Row} controlId="Price">
              <Form.Label column sm={2}>
                Price
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>


            <Form.Group as={Row} controlId="Capacity">
              <Form.Label column sm={2}>
                Capacity
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Facilities">
              <Form.Label column sm={2}>
                Facility
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Equipments">
              <Form.Label column sm={2}>
                Equipment
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Equipments">
              <Form.Label column sm={2}>
                Rating
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Equipments">
              <Form.Label column sm={2}>
                Orders
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Equipments">
              <Form.Label column sm={2}>
                Premium
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Equipments">
              <Form.Label column sm={2}>
                Conversion
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={{ width: "10%" }}
                  type="number"
                  defaultValue={5}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Apply</Button>
              </Col>
            </Form.Group>
            <br />
          </Form>
          <div>
            <h3>Distrubution of grade</h3>
          <Line data={lineData}></Line>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {};
