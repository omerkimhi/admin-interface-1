import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import * as moment from "moment";

class LineChart extends React.Component {
  state = {
    Orders: this.props.Orders,
    Spaces: this.props.Spaces,
  };

  componentDidMount() {
    this.SetLineGraph()
  }

  SetLineGraph = () => {

    let ArtData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let BeautyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let SportData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.props.ArtOrder.map((order) => {
      ArtData[moment(order.reservationDate).month()] = ArtData[moment(order.reservationDate).month()] + 1;
    })
    this.props.SportOrder.map((order) => {
      SportData[moment(order.reservationDate).month()] = SportData[moment(order.reservationDate).month()] + 1;
    })
    this.props.BeautyOrder.map((order) => {
      BeautyData[moment(order.reservationDate).month()] = BeautyData[moment(order.reservationDate).month()] + 1;
    })

    this.setState({
      dataLine: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "Sport",
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
            data: SportData
          },
          {
            label: "Beauty",
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
            data: BeautyData
          },
          {
            label: "Art",
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
            data: ArtData
          }
        ]
      }
    })
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">{this.props.header}</h3>
        <Line data={this.state.dataLine} width={1000} height={300} options={{ responsive: true }} />
      </MDBContainer >
    );
  }
}
export default LineChart;