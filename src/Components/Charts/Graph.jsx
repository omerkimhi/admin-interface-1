import React, { Component } from "react";
import LineChart2 from "./LineChart2";
import { Radar, Polar, Pie } from "react-chartjs-2";
import DoughnutChart from "./DoughnutChart";
import { Container, Row, Col } from "react-bootstrap";

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polarData: {
        datasets: [
          {
            data: [this.props.ArtFilters.length, this.props.BeautyFilters.length, this.props.SportFilters.length],
            backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
            label: "My dataset", 
          },
        ],
        labels: ["Art", "Beauty", "Sport"],
      },
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
    this.RadarLineCharts();
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

  RadarLineCharts = () => {

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

  render() {
    return (
      <Container>
        <Row>
          <Col md={6} sm={12} >
            <h3 className="mt-5" style={{ textAlign: "center" }}>Searches by Field</h3>
            <Pie data={this.state.pieData}></Pie>
          </Col>
          <Col md={6} sm={12}>
            <h3 className="mt-5" style={{ textAlign: "center" }}>Filters by Field</h3>
            <Polar data={this.state.polarData}></Polar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="mt-5" style={{ textAlign: "center" }}> Space facilities demands by Field in %</h3>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <LineChart2
              ArtFiltersData={this.props.ArtFiltersData}
              BeautyFiltersData={this.props.BeautyFiltersData}
              SportFiltersData={this.props.SportFiltersData}
            />
          </Col>
          <Col md={6} sm={12}>
            <Radar data={this.state.dataRadar}></Radar>
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12} > 
            {" "}
            <DoughnutChart
              field={"art"}
              ArtEqCounters={this.props.ArtEqCounters}
              headLine={"Trending equipments in art field"}

            />
          </Col>
          <Col md={4} sm={12}>
            {" "}
            <DoughnutChart
              field={"beauty"}
              BeautyEqCounters={this.props.BeautyEqCounters}
              headLine={"Trending equipments in beauty field"}

            />
          </Col>
          <Col md={4} sm={12}>
            {" "}
            <DoughnutChart
              field={"sport"}
              SportEqCounters={this.props.SportEqCounters}
              headLine={"Trending equipments in sport field"}

            />
          </Col>
        </Row>
      </Container>
    );
  }
}
