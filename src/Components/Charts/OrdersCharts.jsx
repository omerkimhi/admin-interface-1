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
            <Col md={6} sm={12}>
              
              <BarChart height={'100vh'} width={'100vh'} Orders={this.props.Orders} />
            
            </Col>
            <Col md={6} sm={12}>
              <div>
              <PieChart  height={'100vh'} width={'80vh'} Spaces={this.props.Spaces} Orders={this.props.Orders} />
              </div>
            </Col>
          </Row>
          <Row>
          <div style={{ paddingLeft:30}}>
                  <LineChart  height={'100%'} width={'100%'} header={"Space Orders"} ArtOrder={this.props.ArtOrder} BeautyOrder={this.props.BeautyOrder} SportOrder={this.props.SportOrder} />{" "}
                </div> 
          </Row>
        </Container>
        <br />
        <br />
      </div>
    );
  }
}
const containerStyle={
  display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            minWidth: "90%",
}