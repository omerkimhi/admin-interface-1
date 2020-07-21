import React, { Component } from "react";
import ChartComp from "./ChartComp";
import { Container, Row, Col } from "react-bootstrap";

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      Orders: this.props.Orders,
      Spaces: this.props.Spaces,
      OrderDays: [],
      pieC: null,
      //ChartArray: ["line", "bar", "line", "bar"], Segal
      ChartArray: ["bar", "bar"],
    };
  }

  render() {
    return (
      <div className="app">
       < Container>
         <Row style={{ justifyContent: "center" }} > <h1>Spaces Analytics</h1></Row>
          <Row style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            minWidth: "90%"
          }}>
            {this.state.ChartArray.map((item, index) => {

              return (
                <div key={index} style={{ width: "45%", paddingTop: "5vh" }}>
                  <ChartComp
                    key={index * 1}
                    Spaces={this.state.Spaces}
                    Orders={this.state.Orders}
                    height={"40vh"}
                    number={index}
                    type={item}>
                  </ChartComp>
                </div>
              );
            })}
          </Row>
          </Container>
        <br />
        <br />
      </div>
    );
  }
}
