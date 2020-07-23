import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap-4-grid/css/grid.min.css";
import * as moment from "moment";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Grade: this.props.Grade,
      lineData: {

        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
    };
  }

  componentDidMount() {
    this.GraphLine()
  };

  GraphLine = () => {

    let capacity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let conversion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let equipment = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let facility = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let order = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let premium = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let price = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let rating = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.props.Grade.map((grade) => {

      switch (moment(grade.modifiedDate).month()) {

        case 0: capacity[0] = grade.capacity;
          conversion[0] = grade.conversion;
          equipment[0] = grade.equipment;
          facility[0] = grade.facility;
          order[0] = grade.order;
          premium[0] = grade.premium;
          price[0] = grade.price;
          rating[0] = grade.rating;
          break;

        case 1:
          capacity[1] = grade.capacity;
          conversion[1] = grade.conversion;
          equipment[1] = grade.equipment;
          facility[1] = grade.facility;
          order[1] = grade.order;
          premium[1] = grade.premium;
          price[1] = grade.price;
          rating[1] = grade.rating;
          break;

        case 2:
          capacity[2] = grade.capacity;
          conversion[2] = grade.conversion;
          equipment[2] = grade.equipment;
          facility[2] = grade.facility;
          order[2] = grade.order;
          premium[2] = grade.premium;
          price[2] = grade.price;
          rating[2] = grade.rating;
          ; break;

        case 3:
          capacity[3] = grade.capacity;
          conversion[3] = grade.conversion;
          equipment[3] = grade.equipment;
          facility[3] = grade.facility;
          order[3] = grade.order;
          premium[3] = grade.premium;
          price[3] = grade.price;
          rating[3] = grade.rating;
          break;

        case 4:
          capacity[4] = grade.capacity;
          conversion[4] = grade.conversion;
          equipment[4] = grade.equipment;
          facility[4] = grade.facility;
          order[4] = grade.order;
          premium[4] = grade.premium;
          price[4] = grade.price;
          rating[4] = grade.rating;
          break;

        case 5:
          capacity[5] = grade.capacity;
          conversion[5] = grade.conversion;
          equipment[5] = grade.equipment;
          facility[5] = grade.facility;
          order[5] = grade.order;
          premium[5] = grade.premium;
          price[5] = grade.price;
          rating[5] = grade.rating;
          break;

        case 6:
          capacity[6] = grade.capacity;
          conversion[6] = grade.conversion;
          equipment[6] = grade.equipment;
          facility[6] = grade.facility;
          order[6] = grade.order;
          premium[6] = grade.premium;
          price[6] = grade.price;
          rating[6] = grade.rating;
          break;

        case 7:
          capacity[7] = grade.capacity;
          conversion[7] = grade.conversion;
          equipment[7] = grade.equipment;
          facility[7] = grade.facility;
          order[7] = grade.order;
          premium[7] = grade.premium;
          price[7] = grade.price;
          rating[7] = grade.rating;
          break;

        case 8:
          capacity[8] = grade.capacity;
          conversion[8] = grade.conversion;
          equipment[8] = grade.equipment;
          facility[8] = grade.facility;
          order[8] = grade.order;
          premium[8] = grade.premium;
          price[8] = grade.price;
          rating[8] = grade.rating;
          break;

        case 9:
          capacity[9] = grade.capacity;
          conversion[9] = grade.conversion;
          equipment[9] = grade.equipment;
          facility[9] = grade.facility;
          order[9] = grade.order;
          premium[9] = grade.premium;
          price[9] = grade.price;
          rating[9] = grade.rating;
          break;

        case 10:
          capacity[10] = grade.capacity;
          conversion[10] = grade.conversion;
          equipment[10] = grade.equipment;
          facility[10] = grade.facility;
          order[10] = grade.order;
          premium[10] = grade.premium;
          price[10] = grade.price;
          rating[10] = grade.rating;
          break;

        case 11:
          capacity[11] = grade.capacity;
          conversion[11] = grade.conversion;
          equipment[11] = grade.equipment;
          facility[11] = grade.facility;
          order[11] = grade.order;
          premium[11] = grade.premium;
          price[11] = grade.price;
          rating[11] = grade.rating;
          break;
      }
    })
    let lineData1 = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
          data: price,
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
          data: capacity,
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
          data: facility,
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
          data: equipment,
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
          data: rating,
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
          data: premium,
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
          data: order,
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
          data: conversion,
        },
      ],
    };
    this.setState({ lineData: lineData1 })

  };

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
            <Line data={this.state.lineData}></Line>
          </div>
        </div>
      </div>
    );
  }
}


