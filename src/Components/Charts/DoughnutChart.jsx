import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataDoughnut: {
        labels: [
          "TRX",
          "Treadmill",
          "Stationary Bicycle",
          "BenchCounter",
          "Dumbells",
          "Barbell",
        ],
        datasets: [
          {
            data: [],
            backgroundColor: [
              "#F7464A",
              "#46BFBD",
              "#FDB45C",
              "#949FB1",
              "#4D5360",
              "#FFA07A",
            ],
            hoverBackgroundColor: [
              "#FF5A5E",
              "#5AD3D1",
              "#FFC870",
              "#A8B3C5",
              "#616774",
              "#FFA07A",
            ],
          },
        ],
      
      },
      options:{
        legend: {
            display: false,
        },
        responsive: true,
    },
    };
  }
  componentDidMount = () => {

    var temp = this.state.dataDoughnut;
    this.setState({ ArtEqCounters: this.props.ArtEqCounters })

    switch (this.props.field) {
      case "art":
        
        temp.datasets[0].data = [...this.props.ArtEqCounters];
        temp.labels = ["Canvas", "Green Screen", "PottersWheel", "Guitar", "Drum", "Speaker"];


        break;
      case "beauty":
        
        temp.datasets[0].data = [...this.props.BeautyEqCounters];
        temp.labels = ["Dryers", "Nail Polish Racks", "Reception Area", "Laser Hair Removal", "Pedicure & Manicure", "Hair Coloring Kit"];

        break;
      case "sport":
        
        temp.datasets[0].data = [...this.props.SportEqCounters];
        temp.labels = ["TRX",
          "Treadmill",
          "Stationary Bicycle",
          "BenchCounter",
          "Dumbells",
          "Barbell",];

        break;
      default:
        console.log("No field");
    }
    this.setState({
      dataDoughnut: temp
    })

  };
  render() {
    return (
      <MDBContainer>
        <h4 className="mt-5" style={{ textAlign: "center" }}>{this.props.headLine}</h4>
        <Doughnut
          data={this.state.dataDoughnut}
          options={this.state.options}
        />
      </MDBContainer>
    );
  }
}

export default DoughnutChart;
