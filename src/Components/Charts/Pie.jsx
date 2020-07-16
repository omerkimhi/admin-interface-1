import React, { Component } from 'react';

//import classes
import Space from "../Classes/Space";

import CanvasJSReact from '../../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class Pie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
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
    this.SpacesApiUrl =
      "https://proj.ruppin.ac.il/igroup17/Mobile/project/api/Space/";
    this.FetchGetSpaces();
  }

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
              if (space.field === "Sport") sArray.push(space);
              if (space.field === "Art") aArray.push(space);
              if (space.field === "Beauty") bArray.push(space);
            });
            this.setState({ sportSpaces: sArray, beautySpaces: bArray,artSpaces:aArray  })
          })
        },
        error => { }
      );
  };
  
	render() {
    

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", 
			title:{
				text: "Percentage of each field"
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
		<div className="container">
			<h1>Orders</h1>
			<CanvasJSChart options = {options} /* onRef={ref => this.chart = ref} *//>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default Pie;                           