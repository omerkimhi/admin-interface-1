import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Form, Col, Row, Button } from "react-bootstrap";
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

        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
          }, {
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
          }, {
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
      }
    };
  }

  componentDidMount() {
    this.GraphLine();
  };

  GraphLine = () => {

    let mergedFilterArray = [...this.props.ArtFilters, ...this.props.SportFilters, ... this.props.BeautyFilters];

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
      let avgPrice = (item.MinPrice + item.MaxPrice) / 2
      PriceArr[moment(item.Date).month()] += avgPrice
      PriceCountArr[moment(item.Date).month()] += 1
      //capacity
      let avgCapacity = (item.MinCapacity + item.MaxCapacity) / 2
      CapacityArr[moment(item.Date).month()] += avgCapacity
      CapacityCountArr[moment(item.Date).month()] += 1
      //rating
      if (item.Rating != 0) {
        RatingArr[moment(item.Date).month()] += item.Rating
        RatingCountArr[moment(item.Date).month()] += 1
      }
      //facilities
      if (item.Toilet || item.Parking || item.Kitchen || item.Intercom
        || item.Accessible || item.AirCondition || item.WiFi) {
        FacilitiesCountArr[moment(item.Date).month()] += 1;
        FacilitiesArr[moment(item.Date).month()] += item.Toilet * 1 + item.Parking * 1 + item.Kitchen * 1
          + item.Intercom * 1 + item.Accessible * 1 + item.AirCondition * 1 + item.WiFi * 1;
      }
      //equipment
      if (item.Canvas || item.GreenScreen || item.PottersWheel || item.Guitar || item.Drum || item.Speaker ||
        item.Dryers || item.NailPolishRacks || item.ReceptionAreaSeatingandDecor || item.LaserHairRemoval || item.PedicureManicure || item.HairColoringKit ||
        item.TRX || item.Treadmill || item.StationaryBicycle || item.Bench || item.Dumbells || item.Barbell) {
        EquipmentCountArr[moment(item.Date).month()] += 1;
        EquipmentArr[moment(item.Date).month()] += (item.Canvas ? item.Canvas * 1 : 0) + (item.GreenScreen ? item.GreenScreen * 1 : 0)
          + (item.PottersWheel ? item.PottersWheel * 1 : 0) + (item.Guitar ? item.Guitar * 1 : 0) + (item.Drum ? item.Drum * 1 : 0)
          + (item.Speaker ? item.Speaker * 1 : 0) + (item.Dryers ? item.Dryers * 1 : 0) + (item.NailPolishRacks ? item.NailPolishRacks * 1 : 0)
          + (item.ReceptionAreaSeatingandDecor ? item.ReceptionAreaSeatingandDecor * 1 : 0) + (item.LaserHairRemoval ? item.LaserHairRemoval * 1 : 0)
          + (item.PedicureManicure ? item.PedicureManicure * 1 : 0) + (item.HairColoringKit ? item.HairColoringKit * 1 : 0) +
          (item.TRX ? item.TRX * 1 : 0) + (item.Treadmill ? item.Treadmill * 1 : 0) + (item.StationaryBicycle ? item.StationaryBicycle * 1 : 0) +
          (item.Bench ? item.Bench * 1 : 0) + (item.Dumbells ? item.Dumbells * 1 : 0) + (item.Barbell ? item.Barbell * 1 : 0);
      }
    });

    RatingCountArr.map((item, index) => {
      item != 0 ? RatingArr[index] = (RatingArr[index] / item) : RatingArr[index] = RatingArr[index]
    })
    PriceCountArr.map((item, index) => {
      item != 0 ? PriceArr[index] = (PriceArr[index] / item) : PriceArr[index] = PriceArr[index]
    })
    CapacityCountArr.map((item, index) => {
      item != 0 ? CapacityArr[index] = (CapacityArr[index] / item) : CapacityArr[index] = CapacityArr[index]
    })
    FacilitiesCountArr.map((item, index) => {
      item != 0 ? FacilitiesArr[index] = (FacilitiesArr[index] / item) : FacilitiesArr[index] = FacilitiesArr[index]
    })
    EquipmentCountArr.map((item, index) => {
      item != 0 ? EquipmentArr[index] = (EquipmentArr[index] / item) : EquipmentArr[index] = EquipmentArr[index]
    })

    let lineData1 = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
          data: PriceArr,
        },
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
        }, {
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
        }, {
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
    this.setState({ lineData: lineData1 })
  };

  sendGrades = () => {

    var grade = { capacity: this.state.capacity, conversion: this.state.conversion, equipment: this.state.equipment, facility: this.state.facility, order: this.state.order, premium: this.state.premium, price: this.state.price, rating: this.state.rating };

    var url = "http://proj.ruppin.ac.il/igroup17/proj/api/grade/";

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(grade),
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
      }),
    })
      .then(
        (result) => {
          console.log("succees");
        },
        (error) => {
          console.log("error", error);
        }
      );
  }

  changeValue = (e, name) => {
    this.setState({
      [name]: e.target.value
    }, () => { console.log("target", this.state[name]) })
  }

  render() {
    return (
      <div className="app">
        <br />
        <div className="container">
          <div style={{ justifyContent: "center" }} className="row">
            <h1>Smart Sorting</h1>
          </div>
          <div className="row" style={{marginLeft:6}}>
          <p>Here you can control the sort of the Recommended spaces in the search result feed,  
            by changing the weights of each parameter. </p>
          </div>
          <Form>
            <br />
            
            <Form.Group as={Row} controlId="Price">
              <Form.Label column sm={2}>
                Price
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  onChange={(e) => this.changeValue(e, "price")}
                  style={inputStyle}
                  type="number"
                  defaultValue={this.state.price}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Capacity">
              <Form.Label column sm={2}>
                Capacity
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={inputStyle}
                  type="number"
                  defaultValue={this.state.capacity}
                  onChange={(e) => this.changeValue(e, "capacity")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Facilities">
              <Form.Label column sm={2}>
                Facility
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={inputStyle}
                  type="number"
                  defaultValue={this.state.facility}
                  onChange={(e) => this.changeValue(e, "facility")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Equipments">
              <Form.Label column sm={2}>
                Equipment
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={inputStyle}
                  type="number"
                  defaultValue={this.state.equipment}
                  onChange={(e) => this.changeValue(e, "equipment")}
                />
              </Col>
            </Form.Group>            
            <Form.Group as={Row} controlId="rating">
              <Form.Label column sm={2}>
                Rating
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={inputStyle}
                  type="number"
                  defaultValue={this.state.rating}
                  onChange={(e) => this.changeValue(e, "rating")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="order">
              <Form.Label column sm={2}>
                Orders
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={inputStyle}
                  type="number"
                  defaultValue={this.state.order}
                  onChange={(e) => this.changeValue(e, "order")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="premium">
              <Form.Label column sm={2}>
                Premium
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={inputStyle}
                  type="number"
                  defaultValue={this.state.premium}
                  onChange={(e) => this.changeValue(e, "premium")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="conversion">
              <Form.Label column sm={2}>
                Conversion
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  style={inputStyle }
                  type="number"
                  defaultValue={this.state.conversion}
                  onChange={(e) => this.changeValue(e, "conversion")}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button onSubmit={this.sendGrades()} type="submit">Apply</Button>
              </Col>
            </Form.Group>
            <br />
          </Form>
          <div>
            <h3>Distrubution of grade</h3>
            <Line data={this.state.lineData}></Line>
          </div>
        </div>
      </div>
    );
  }
}
const inputStyle={ 
  width: "10%" ,
 backgroundColor:'#B2C7BB',
 fontWeight:'bold',
 
 }
