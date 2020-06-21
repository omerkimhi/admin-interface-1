import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLine: {
        labels: [],
        datasets: [
          {
            label: "Art",
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
            data: [],
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
            data: [],
          },
          {
            label: "Sport",
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
            data: [],
          },
        ],
      },
    };
  }

  componentDidMount = () => {
    console.log("this.props.ArtFiltersData", this.props.ArtFiltersData);
    console.log("this.props.BeautyFiltersData", this.props.BeautyFiltersData);
    console.log("this.props.SportFiltersData", this.props.SportFiltersData);

    // console.log("this.state.dataLine",this.state.dataLine);
    //     console.log("this.state.dataLine",this.state.dataLine.datasets[0].data);
    var artValues = [];
    var artNames = [];
    var beautyValues = [];
    var beautyNames = [];
    var sportValues = [];
    var sportNames = [];
    this.props.ArtFiltersData.map((item) => {
      artNames.push(item.Name);
      artValues.push(item.Value);
    });
    this.props.BeautyFiltersData.map((item) => {
      beautyNames.push(item.Name);
      beautyValues.push(item.Value);
    });
    this.props.SportFiltersData.map((item) => {
      sportNames.push(item.Name);
      sportValues.push(item.Value);
    });

    console.log("beautyNames", beautyNames);
    console.log("sportValues", sportValues);
    var temp = this.state.dataLine;
    temp.labels = [...artNames];
    temp.datasets[0].data = artValues;
    temp.datasets[1].data = beautyValues;
    temp.datasets[2].data = sportValues;

    console.log("temp", temp);

    this.setState({
      dataLine: temp,
    });
  };

  render() {
    var d = new Date("05/06/2020");
    var d2 = new Date(2020, 5, 3);
    console.log("date", d);
    console.log("date2", d2.getMonth());

    return (
      <MDBContainer>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
        
      </MDBContainer>
    );
  }
}

export default LineChart;
