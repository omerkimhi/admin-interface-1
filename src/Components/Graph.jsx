import React, { Component } from "react";
import LineChart2 from "../Components/Charts/LineChart2";
import { HorizontalBar, Radar, Polar, Bubble, Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import RadarChart from "../Components/Charts/RadarChart";
import DoughnutChart from "../Components/Charts/DoughnutChart";


const bubbleData = {
  labels: ["January"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 0, y: 0, r: 1 },
        { x: 1, y: 19, r: 5 },
        { x: 2, y: 20, r: 5 },
        { x: 3, y: 18, r: 5 },
        { x: 4, y: 17, r: 5 },
        { x: 5, y: 16, r: 5 },
        { x: 6, y: 20, r: 5 },
        { x: 7, y: 20, r: 5 },
        { x: 8, y: 20, r: 5 },
        { x: 9, y: 20, r: 5 },
        { x: 10, y: 20, r: 5 },
        { x: 11, y: 20, r: 5 },
        { x: 12, y: 20, r: 5 },
      ],
    },
  ],
};
const data2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};



export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {

      pieData: {
        labels: ["Art", "Beauty", "Sport"],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },


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
      dataRadar: {
        labels: [],
        datasets: [
          {
            label: "Art",
            backgroundColor: "rgba(161, 222, 147,0.2)",
            borderColor: "rgba(161, 222, 147,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [],
          },
          {
            label: "Beauty",
            backgroundColor: "rgba(112, 161, 215,0.2)",
            borderColor: "rgba(112, 161, 215,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [],
          },
          {
            label: "Sport",
            backgroundColor: "rgba(244, 124, 124,0.2)",
            borderColor: "rgba(244, 124, 124,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [],
          },
        ],
      },
    };
  }

  componentDidMount = () => {

    this.getNumberOfSearchInEachField();

    var artValues = [];
    var artNames = [];
    var beautyValues = [];
    var beautyNames = [];
    var sportValues = [];
    var sportNames = [];

    this.props.ArtFiltersData.map((item) => {
      artNames.push(item.Name);
      artValues.push(item.Value.toFixed(2));
    });

    this.props.BeautyFiltersData.map((item) => {
      beautyNames.push(item.Name);
      beautyValues.push(item.Value.toFixed(2));
    });

    this.props.SportFiltersData.map((item) => {
      sportNames.push(item.Name);
      sportValues.push(item.Value.toFixed(2));
    });

    

    var temp = this.state.dataLine;
    temp.labels = [...artNames];
    temp.datasets[0].data = artValues;
    temp.datasets[1].data = beautyValues;
    temp.datasets[2].data = sportValues;
    var tempDataRadar = this.state.dataRadar;
    tempDataRadar.labels = [...artNames];
    tempDataRadar.datasets[0].data = artValues;
    tempDataRadar.datasets[1].data = beautyValues;
    tempDataRadar.datasets[2].data = sportValues;

   

    this.setState({
      dataLine: temp,
      dataRadar: tempDataRadar,
    });
  };

  getNumberOfSearchInEachField = () => {
    let sArray = [];
    let aArray = [];
    let bArray = [];
    this.props.Searches.map((search) => {
      if (search.Field === "Sport") sArray.push(search);
      if (search.Field === "Art") aArray.push(search);
      if (search.Field === "Beauty") bArray.push(search);
    });
    let pieData = {
      labels: ["Art", "Beauty", "Sport"],
      datasets: [
        {
          data: [aArray.length, bArray.length, sArray.length],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };

    this.setState({ pieData: pieData })
  };
  // componentDidMount=()=>{
  //     console.log("this.props.data",this.props.data);
  //    // console.log("this.state.dataLine",this.state.dataLine);
  //    //     console.log("this.state.dataLine",this.state.dataLine.datasets[0].data);
  //         var values=[];
  //         var names=[];
  //         this.props.data.map((item)=>{
  //          names.push(item.Name);
  //           values.push(item.Value);

  //       });
  // console.log("names",names);
  // console.log("values",values);
  // var temp = this.state.dataLine;
  // temp.labels = names;
  // temp.datasets[0].data = values;

  // this.setState({
  //  dataLine:temp
  // });

  //}


  render() {
    const polarData = {
      datasets: [
        {
          data: [this.props.ArtFilters.length, this.props.BeautyFilters.length, this.props.SportFilters.length],
          backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
          label: "My dataset", // for legend
        },
      ],
      labels: ["Art", "Beauty", "Sport"],
    };

    /* const pieData = {
      labels: ["Art", "Beauty", "Sport"],
      datasets: [
        {
          data: [82, 386, 45],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    }; */

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-5">Searches by Field</h3>
            <Pie data={this.state.pieData}></Pie>
          </div>
          <div className="col">
            <h3 className="mt-5">Filters by Field</h3>
            <Polar data={polarData}></Polar>
          </div>
        </div>
        <div className="row">
          <div className="col">

            <h3 className="mt-5"> Space facilities demands by Field in %</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <LineChart2
              ArtFiltersData={this.props.ArtFiltersData}
              BeautyFiltersData={this.props.BeautyFiltersData}
              SportFiltersData={this.props.SportFiltersData}
            />
          </div>
          <div className="col">
            <Radar data={this.state.dataRadar}></Radar>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {" "}

            <DoughnutChart
              field={"art"}
              ArtEqCounters={this.props.ArtEqCounters}
              headLine={"Trending equipments in art field"}
            />
          </div>
          <div className="col">
            {" "}
            <DoughnutChart
              field={"beauty"}
              BeautyEqCounters={this.props.BeautyEqCounters}
              headLine={"Trending equipments in beauty field"}
            />
          </div>
          <div className="col">
            {" "}
            <DoughnutChart
              field={"sport"}
              SportEqCounters={this.props.SportEqCounters}
              headLine={"Trending equipments in sport field"}
            />
          </div>
        </div>
        {/* <MDBContainer>
          <HorizontalBar data={data2} options={{ responsive: true }} />

          <Bubble data={bubbleData}></Bubble>
          <Pie data={pieData}></Pie>
        </MDBContainer> */}
      </div>
    );
  }
}
