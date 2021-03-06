import React, { Component } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Container, Row, Col } from "react-bootstrap";

export default class OrderCharts extends Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      Orders: this.props.Orders,
      Spaces: this.props.Spaces,
      ArtOrder: this.props.ArtOrder,
      BeautyOrder: this.props.BeautyOrder,
      SportOrder: this.props.SportOrder,
      OrderDays: [],
      pieC: null,
    };
  }
  render() {
    return (
      <div className="app">
        <Container style={containerStyle}>
          <Row>
            <Col lg={4} md={4} sm={10} xs={10}>
              <div>
                <PieChart
                  height={"50vh"}
                  width={"30vw"}
                  Spaces={this.props.Spaces}
                  Orders={this.props.Orders}
                  header={"Orders per Field"}
                  description={"Data based on the past two weeks"}
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={10} xs={10}>
              <div style={{ position: "relative" }}>
                <BarChart
                  height={"50vh"}
                  width={"46vw"}
                  Orders={this.props.Orders}
                  header={"Orders per Day"}
                  description={"Data based on the past two weeks"}
                />
              </div>
            </Col>
            <Col lg={2} xs={12}></Col>
          </Row>
          <Row>
            <Col lg={10} md={10} sm={10} xs={10}>
              <div style={{ position: "relative" }}>
                <LineChart
                  height={"70vh"}
                  width={"74vw"}
                  header={"Orders per Month"}
                  ArtOrder={this.props.ArtOrder}
                  BeautyOrder={this.props.BeautyOrder}
                  SportOrder={this.props.SportOrder}
                />{" "}
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </div>
    );
  }
}
const containerStyle = {
  justifyContent: "center",
  minWidth: "90%",
  width: "100%",
};
const centerGraph = {
  height: "100%",
  width: "90%",
  display: "flex",
};
