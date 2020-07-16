import React from "react";
import { Radar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class RadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      },
    };
  }
  render() {
   
    return (
      <MDBContainer>
        <h3 className="mt-5"> Facilities demands by field in %</h3>
        <Radar data={this.state.data} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default RadarChart;
