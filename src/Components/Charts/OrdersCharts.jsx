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
          <Col  lg={4} md={4} sm={12} xs={12}   >
              <div>
              <PieChart height={'50vh'} width={'30vw'} Spaces={this.props.Spaces} Orders={this.props.Orders} />
            </div>
            </Col>

            <Col lg={6} md={6} sm={12}  xs={12} >
            <div>
              <BarChart height={'60vh'} width={'50vw'} Orders={this.props.Orders} />

              </div>
              </Col>
              <Col lg={2} xs={12}>
              </Col>          
          </Row> 
          <Row> 
          <Col lg={12} md={12} sm={12} xs={12}>
            <div style={centerGraph}>
              <LineChart height={'70vh'} width={'80vw'} header={"Space Orders"} ArtOrder={this.props.ArtOrder} BeautyOrder={this.props.BeautyOrder} SportOrder={this.props.SportOrder} />{" "}
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
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  minWidth: "90%",
  width:'100%'
}

const centerGraph={
  height: '100%',
width: '90%',
display: 'flex',
justifyContent: 'center',
alignItems: 'center'
}
