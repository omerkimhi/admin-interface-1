import React, { Component } from 'react';
//import classes
import User from "../Classes/User.jsx";
import Space from "../Classes/Space";
import Equipment from "../Classes/Equipment";
import Facility from "../Classes/Facility";
import Availabillity from "../Classes/Availabillity";
import FieldEq from "../Classes/FieldEq";

import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class AnimatedChart extends Component {

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
  showData = () => {
    console.log(this.state.Users);
    console.log(this.state.Spaces);
    console.log(this.state.EquipmentList);
    console.log(this.state.Facilities);
    console.log(this.state.Availablities);
    console.log(this.state.FieldsEquipment);
  }

	
	render() {
    console.log(this.state.Spaces);

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark2", // "light1", "dark1", "dark2"
			title:{
				text: "Spaces Fields"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: (this.state.artSpaces.length/this.state.Spaces.length)*100, label: "Art" },
					{ y: (this.state.beautySpaces.length/this.state.Spaces.length)*100, label: "Beauty" },
					{ y: (this.state.sportSpaces.length/this.state.Spaces.length)*100, label: "Sport" }
				]
			}]
		}
		
		return (
		<div>
			<h1>React Chart with Animation</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default AnimatedChart;                           