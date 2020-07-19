import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
//import * as moment from "moment";

class LineChart extends React.Component {
  state = {
    Orders: this.props.Orders,
    Spaces: this.props.Spaces,

    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Sport",
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
          data: []
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
          data: []
        },
        {
          label: "Art",
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
          data: []
        }
      ]
    }
  };

  componentDidMount() {
   // this.SetLineGraph()
  }

  /* SetLineGraph = () => {
    let fieldOrder = [];
    let Sarray = [];
    let Barray = [];
    let Aarray = [];
    //all space id of orders
    this.state.Orders.map((order) => { fieldOrder.push(order.spaceId) });
    //comparing with spaces to check which space id match to the field
    fieldOrder.forEach(element => {
      this.state.Spaces.map((space) => {
        if (element === space.spaceId) {

          switch (space.field) {
            case "Art": Aarray.push(space, 1); break;
            case "Beauty": Barray.push(space,2); break;
            case "Sport": Sarray.push(space,3); break;
            default: break;
          };
        }
      })
    }) 
    this.orderByMonth(Aarray)
    this.orderByMonth(Barray)
    this.orderByMonth(Sarray)
  };

orderByMonth=(array, num)=>{

  let monthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  switch(num){
    case 1:
    array.map((space) => {
      switch (moment(space.uploadtime).month()) {
        case 1: monthData[0] += 1; break;
        case 2: monthData[1] += 1; break;
        case 3: monthData[2] += 1; break;
        case 4: monthData[3] += 1; break;
        case 5: monthData[4] += 1; break;
        case 6: monthData[5] += 1; break;
        case 7: monthData[6] += 1; break;
        case 8: monthData[7] += 1; break;
        case 9: monthData[8] += 1; break;
        case 10: monthData[9] += 1; break;
        case 11: monthData[10] += 1; break;
        case 12: monthData[11] += 1; break;
      } 
    }

  );}
    
    
} */


  render() {

    return (
      <MDBContainer>
        <h3 className="mt-5">{this.props.header}</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer >
    );
  }
}

export default LineChart;