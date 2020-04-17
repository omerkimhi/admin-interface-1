import React, { Component } from 'react'
import {Pie, Doughnut} from 'react-chartjs-2';

//import classes
import User from "../Classes/User.jsx";
import Space from "../Classes/Space";
import Equipment from "../Classes/Equipment";
import Facility from "../Classes/Facility";
import Availabillity from "../Classes/Availabillity";
import FieldEq from "../Classes/FieldEq";




export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: [],
      Spaces: [],
      EquipmentList: [],
      Facilities: [],
      Availablities: [],
      FieldsEquipment: [],
    
	  sportSpaces:[],
	  beautySpaces:[],
	  artSpaces:[]
    };
  }

  componentDidMount() {
    this.UsersApiUrl =
      "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/User/";
    this.SpacesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Space/";
    this.EquipmentApiUrl =
      "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Equipment/";
    this.FacilitiesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Facilities/";
    this.AvailabilitiesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/Availability/";
    this.FieldEqApiUrl =
      "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/FieldEq/";

    this.FetchGetUsers();
    this.FetchGetSpaces();
    this.FetchGetEquipment();
    this.FetchGetFacilities();
    this.FetchGetAvailabilities();
    this.FetchGetFieldsEq();

  }

  FetchGetUsers = () => {
    fetch(this.UsersApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Users: result.map(
              item =>
                new User(
                  item.Id,
                  item.Email,
                  item.Password,
                  item.UserName,
                  item.PhoneNumber,
                  item.Photo
                )
            )
          });
        },
        error => { }
      );
  };
  FetchGetSpaces = () => {
    fetch(this.SpacesApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Spaces: result.map(
              item =>
                new Space(
                  item.Id,
                  item.Name,
                  item.Field,
                  item.Price,
                  item.City,
                  item.Street,
                  item.Number,
                  item.Capabillity,
                  item.Bank,
                  item.Branch,
                  item.Imageurl1,
                  item.Imageurl2,
                  item.Imageurl3,
                  item.Imageurl4,
                  item.Imageurl5,
                  item.AccountNumber,
                  item.UserEmail
                )
            )
          }, () => {
            let sArray = [];
            let aArray = [];
            let bArray = [];
            this.state.Spaces.map((space) => {
              if (space.field == "Sport") sArray.push(space);
              if (space.field == "Art") aArray.push(space);
              if (space.field == "Beauty") bArray.push(space);
            });
            this.setState({ sportSpaces: sArray, beautySpaces: bArray,artSpaces:aArray  })
          })
        },
        error => { }
      );
  };
  FetchGetEquipment = () => {
    fetch(this.EquipmentApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            EquipmentList: result.map(
              item => new Equipment(item.Id, item.Name, item.SpaceId)
            )
          });
        },
        error => { }
      );
  };
  FetchGetFacilities = () => {
    fetch(this.FacilitiesApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Facilities: result.map(
              item =>
                new Facility(
                  item.FacilityId,
                  item.Parking,
                  item.Toilet,
                  item.Kitchen,
                  item.Intercom,
                  item.Accessible,
                  item.AirCondition,
                  item.Wifi,
                  item.SpaceId
                )
            )
          });
        },
        error => { }
      );
  };
  FetchGetAvailabilities = () => {
    fetch(this.AvailabilitiesApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Availablities: result.map(
              item =>
                new Availabillity(
                  item.Id,
                  item.Sunday,
                  item.Monday,
                  item.Tuesday,
                  item.Wednesday,
                  item.Thursday,
                  item.Friday,
                  item.Saturday,
                  item.SpaceId
                )
            )
          });
        },
        error => { }
      );
  };
  FetchGetFieldsEq = () => {
    fetch(this.FieldEqApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            FieldsEquipment: result.map(
              item => new FieldEq(item.Id, item.Field, item.Name)
            )
          });
        },
        error => { }
      );
  };
  render() {
    const state = {
      labels: ['Art', 'Beauty', 'Sport'],
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F'
          ],
          data: [this.state.artSpaces.length, this.state.beautySpaces.length, this.state.sportSpaces.length]
        }
      ]
    }


    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}