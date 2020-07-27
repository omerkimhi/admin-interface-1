import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap-4-grid/css/grid.min.css";
import * as moment from "moment";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArtFilters: this.props.ArtFilters,
      Grade: this.props.Grade,
      capacity: this.props.Grade[0].capacity,
      conversion: this.props.Grade[0].conversion,
      equipment: this.props.Grade[0].equipment,
      facility: this.props.Grade[0].facility,
      order: this.props.Grade[0].order,
      premium: this.props.Grade[0].premium,
      price: this.props.Grade[0].price,
      rating: this.props.Grade[0].rating,

      lineData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Capacity",
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
            label: "Facility",
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
          {
            label: "Equipment",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 185, 210, .3)",
            borderColor: "rgb(9,18,138)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(9,18,138)",
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
          {
            label: "Rating",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(184, 185, 210, .3)",
            borderColor: "rgb(80,137,245)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgb(80,137,245)",
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

      lineDataPrice: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Price",
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
        ],
      },
    };
  }

  componentDidMount() {
    this.GraphLine();
  }

  GraphLine = () => {
    let mergedFilterArray = [
      ...this.props.ArtFilters,
      ...this.props.SportFilters,
      ...this.props.BeautyFilters,
    ];

    let RatingArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let RatingCountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let PriceArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let PriceCountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let CapacityArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let CapacityCountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let FacilitiesArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let FacilitiesCountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let EquipmentArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let EquipmentCountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    mergedFilterArray.map((item) => {
      //price
      let avgPrice = (item.MinPrice + item.MaxPrice) / 2;
      PriceArr[moment(item.Date).month()] += avgPrice;
      PriceCountArr[moment(item.Date).month()] += 1;
      //capacity
      let avgCapacity = (item.MinCapacity + item.MaxCapacity) / 2;
      CapacityArr[moment(item.Date).month()] += avgCapacity;
      CapacityCountArr[moment(item.Date).month()] += 1;
      //rating
      if (item.Rating != 0) {
        RatingArr[moment(item.Date).month()] += item.Rating;
        RatingCountArr[moment(item.Date).month()] += 1;
      }
      //facilities
      if (
        item.Toilet ||
        item.Parking ||
        item.Kitchen ||
        item.Intercom ||
        item.Accessible ||
        item.AirCondition ||
        item.WiFi
      ) {
        FacilitiesCountArr[moment(item.Date).month()] += 1;
        FacilitiesArr[moment(item.Date).month()] +=
          item.Toilet * 1 +
          item.Parking * 1 +
          item.Kitchen * 1 +
          item.Intercom * 1 +
          item.Accessible * 1 +
          item.AirCondition * 1 +
          item.WiFi * 1;
      }
      //equipment
      if (
        item.Canvas ||
        item.GreenScreen ||
        item.PottersWheel ||
        item.Guitar ||
        item.Drum ||
        item.Speaker ||
        item.Dryers ||
        item.NailPolishRacks ||
        item.ReceptionAreaSeatingandDecor ||
        item.LaserHairRemoval ||
        item.PedicureManicure ||
        item.HairColoringKit ||
        item.TRX ||
        item.Treadmill ||
        item.StationaryBicycle ||
        item.Bench ||
        item.Dumbells ||
        item.Barbell
      ) {
        EquipmentCountArr[moment(item.Date).month()] += 1;
        EquipmentArr[moment(item.Date).month()] +=
          (item.Canvas ? item.Canvas * 1 : 0) +
          (item.GreenScreen ? item.GreenScreen * 1 : 0) +
          (item.PottersWheel ? item.PottersWheel * 1 : 0) +
          (item.Guitar ? item.Guitar * 1 : 0) +
          (item.Drum ? item.Drum * 1 : 0) +
          (item.Speaker ? item.Speaker * 1 : 0) +
          (item.Dryers ? item.Dryers * 1 : 0) +
          (item.NailPolishRacks ? item.NailPolishRacks * 1 : 0) +
          (item.ReceptionAreaSeatingandDecor
            ? item.ReceptionAreaSeatingandDecor * 1
            : 0) +
          (item.LaserHairRemoval ? item.LaserHairRemoval * 1 : 0) +
          (item.PedicureManicure ? item.PedicureManicure * 1 : 0) +
          (item.HairColoringKit ? item.HairColoringKit * 1 : 0) +
          (item.TRX ? item.TRX * 1 : 0) +
          (item.Treadmill ? item.Treadmill * 1 : 0) +
          (item.StationaryBicycle ? item.StationaryBicycle * 1 : 0) +
          (item.Bench ? item.Bench * 1 : 0) +
          (item.Dumbells ? item.Dumbells * 1 : 0) +
          (item.Barbell ? item.Barbell * 1 : 0);
      }
    });

    RatingCountArr.map((item, index) => {
      item != 0
        ? (RatingArr[index] = Number(RatingArr[index] / item).toFixed(2))
        : (RatingArr[index] = Number(RatingArr[index]).toFixed(2));
    });
    PriceCountArr.map((item, index) => {
      item != 0
        ? (PriceArr[index] = Number(PriceArr[index] / item).toFixed(2))
        : (PriceArr[index] = Number(PriceArr[index]).toFixed(2));
    });
    CapacityCountArr.map((item, index) => {
      item != 0
        ? (CapacityArr[index] = Number(CapacityArr[index] / item).toFixed(2))
        : (CapacityArr[index] = Number(CapacityArr[index]).toFixed(2));
    });
    FacilitiesCountArr.map((item, index) => {
      item != 0
        ? (FacilitiesArr[index] = Number(FacilitiesArr[index] / item).toFixed(
            2
          ))
        : (FacilitiesArr[index] = Number(FacilitiesArr[index]).toFixed(2));
    });
    EquipmentCountArr.map((item, index) => {
      item != 0
        ? (EquipmentArr[index] = Number(EquipmentArr[index] / item).toFixed(2))
        : (EquipmentArr[index] = Number(EquipmentArr[index]).toFixed(2));
    });

    let lineData1 = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Capacity",
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
          data: CapacityArr,
        },
        {
          label: "Facility",
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
          data: FacilitiesArr,
        },
        {
          label: "Equipment",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(9,18,138)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(9,18,138)",
          pointBackgroundColor: "rgb(112, 161, 215)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(244, 124, 124)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: EquipmentArr,
        },
        {
          label: "Rating",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(80,137,245)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(80,137,245)",
          pointBackgroundColor: "rgb(112, 161, 215)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(244, 124, 124)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: RatingArr,
        },
      ],
    };

    let lineData1Price = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Price",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#0B8D29",
          borderColor: "#0B8D29",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#0B8D29",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#0B8D29",
          pointHoverBorderColor: "#0B8D29",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: PriceArr,
        },
      ],
    };

    this.setState({ lineData: lineData1, lineDataPrice: lineData1Price });
  };

  sendGrades = () => {
    var grade = {
      capacity: this.state.capacity,
      conversion: this.state.conversion,
      equipment: this.state.equipment,
      facility: this.state.facility,
      order: this.state.order,
      premium: this.state.premium,
      price: this.state.price,
      rating: this.state.rating,
    };

    var url = "http://proj.ruppin.ac.il/igroup17/proj/api/grade/";

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(grade),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
    }).then(
      (result) => {
        console.log("succees");
        alert("Grades has been updated");
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  changeValue = (e, name) => {
    this.setState(
      {
        [name]: e.target.value,
      },
      () => {
        console.log("target", this.state[name]);
      }
    );
  };

  render() {
    if (this.state.capacity.length === 0) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div className="app">
          <br />
          <Container>
            <div style={{ justifyContent: "center" }} className="row">
              <h1>Smart Sorting</h1>
            </div>
            <Row>
              <Col>
                <div>
                  <p>
                    Here you can control the sort of the Recommended spaces in
                    the search result feed, by changing the weights of each
                    parameter.
                  </p>
                  <div>
                    <p>
                      Price- +/- Points per 10 NIS/Hr above/below the average
                      pricing filter trend.{" "}
                    </p>
                    <p>
                      Capacity/Facility/Equipment/Rating- Points will be added
                      to the spaces which have more
                      Capacity/Facility/Equipment/Rating than the average filter
                      trend.
                    </p>
                    <p>
                      Orders- Points will be added to spaces according to the
                      ammount of orders.
                    </p>
                    <p>Premium- Premiums users get extra points.</p>
                    <p>
                      Conversion- Points will be added according to the ratio of
                      page vists to orders.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <th style={cellStyle}>
                        <label>
                          Price:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.price}
                            onChange={(e) => this.changeValue(e, "price")}
                            style={inputStyle}
                          />
                        </label>
                      </th>

                      <th style={cellStyle}>
                        <label>
                          Capacity:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.capacity}
                            onChange={(e) => this.changeValue(e, "capacity")}
                            style={inputStyle}
                          />
                        </label>
                      </th>

                      <th style={cellStyle}>
                        <label>
                          Facilities:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.facility}
                            onChange={(e) => this.changeValue(e, "facility")}
                            style={inputStyle}
                          />
                        </label>
                      </th>

                      <th style={cellStyle}>
                        <label>
                          Equipment:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.equipment}
                            onChange={(e) => this.changeValue(e, "equipment")}
                            style={inputStyle}
                          />
                        </label>
                      </th>
                    </tr>
                    {/* second row */}
                    <tr>
                      <th>
                        <label>
                          Rating:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.rating}
                            onChange={(e) => this.changeValue(e, "rating")}
                            style={inputStyle}
                          />
                        </label>
                      </th>

                      <th style={cellStyle}>
                        <label>
                          Orders:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.order}
                            onChange={(e) => this.changeValue(e, "order")}
                            style={inputStyle}
                          />
                        </label>
                      </th>

                      <th style={cellStyle}>
                        <label>
                          Premium:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.premium}
                            onChange={(e) => this.changeValue(e, "premium")}
                            style={inputStyle}
                          />
                        </label>
                      </th>

                      <th style={cellStyle}>
                        <label>
                          Conversion:{" "}
                          <input
                            type="number"
                            defaultValue={this.state.conversion}
                            onChange={(e) => this.changeValue(e, "conversion")}
                            style={inputStyle}
                          />
                        </label>
                      </th>
                    </tr>

                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>
                        <button onClick={this.sendGrades} style={submitStyle}>
                          Apply
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <br /> <br />
              </div>
            </Row>
            <div style={{ justifyContent: "center" }} className="row">
              <h3>Trends according to searches and filters made by the users</h3>
            </div>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <br />

                <Line data={this.state.lineData}></Line>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <br />
                <Line data={this.state.lineDataPrice}></Line>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}
const inputStyle = {
  width: "30%",
  backgroundColor: "#B2C7BB",
  fontWeight: "bold",
  fontSize: "11px",
  paddingLeft: "5px",
};
const submitStyle = {
  backgroundColor: "rgb(0,114,106)",
  color: "white",
  width: "65%",
};
const cellStyle = {
  padding: "4px",
};
