import React, { Component } from "react";
import ChartComp from "./ChartComp";
//Charts imports
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import * as moment from "moment";

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
      ChartArray: ["", "bar", "", "bar"],


    };
  }

  componentDidMount() {
    this.getOrderMonth();
  }
  getOrderMonth = () => {

    let monthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let tempSpace = {};
    let ArtOrders = [];
    let BeautyOrders = [];
    let SportOrders = [];
    //all space id of orders
    this.state.Orders.map((order) => {

      tempSpace = this.state.Spaces.filter(space => space.Id === order.spaceId)

      switch (tempSpace.field) {
        case "art":
          ArtOrders.push(order);
          break;
        case "beauty":
          BeautyOrders.push(order);

          break;
        case "sport":
          SportOrders.push(order);


          break;
        default:
          console.log("No field");
      }

    });

    this.state.Orders.map((order) => {
      switch (moment(order.ReservationDate).month()) {
        case 1: monthData[0] += 1; break;
        case 2: monthData[1] += 1; break;
        case 3: monthData[2] += 1; break;
        case 4: monthData[3] += 1; break;
        case 5: monthData[4] += 1; break;
        case 6: monthData[5] += 1; break;
        case 7: monthData[6] += 1; break;
        case 8: monthData[7] += 1; break;
        case 9: monthData[8] += 1; break;
        case 10: monthData[9] += 1; break;
        case 11: monthData[10] += 1; break;
        case 12: monthData[11] += 1; break;
      }

      this.setState({})

    });
  }

  render() {
   
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
