import React, { Component } from "react";
import ChartComp from "./ChartComp";
//Charts imports
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";

export default class OrderCharts extends Component {
  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      Orders: this.props.Orders,
      Spaces: this.props.Spaces,
      OrderDays: [],
      pieC: null,
      //ChartArray: ["line", "bar", "line", "bar"], Segal
      ChartArray: [ "",  "bar",  "",  "bar"],
    };
  }

  render() {
    console.log(this.state.Spaces);

    return (
      <div className="app" style={{}}>
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            minWidth: "90%",
          }}
        >
          <div className="row">
            <BarChart Orders={this.props.Orders} />
          </div>
          <div className="row">
              <PieChart Spaces={this.props.Spaces} Orders={this.props.Orders} />
          </div>
          <div className="row">
        <div className="col">

            <h3 className="mt-5"> Space Orders</h3>

              <LineChart Orders={this.props.Orders} />{" "}
            <br />
            <br />
          </div>
          </div>
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
    );
  }
}
