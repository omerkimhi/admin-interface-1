import React, { Component } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { Container, Row, Col } from "react-bootstrap";
import { VerticalAlignment } from "igniteui-react-core";

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
        <Container
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            minWidth: "90%",
          }}
        >
          <Row>
            <Col>
              <BarChart Orders={this.props.Orders} />
            </Col>
            <Col>

              <PieChart Spaces={this.props.Spaces} Orders={this.props.Orders} />
            </Col>

            <Row>
                <h3 className="mt-5" style={{marginLeft:400}}> Space Orders</h3>
                <div style={{ paddingLeft:'30px'}}>
                  <LineChart ArtOrder={this.props.ArtOrder} BeautyOrder={this.props.BeautyOrder} SportOrder={this.props.SportOrder} />{" "}
                </div>
              
            </Row>
            <br />
            <br />
          </Row>
        </Container>
        <br />
        <br />
      </div>
    );
  }
}

const textStyle = {
  textAlign: 'center',
  
}