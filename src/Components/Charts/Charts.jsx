import React, { Component } from 'react'

//Charts imports
import { Pie } from 'react-chartjs-2';
import ZingChart from 'zingchart-react';
//import CanvasJSReact from '../../assets/canvasjs.react';
//var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Charts extends Component {

  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      Orders: this.props.Orders,
      Spaces: this.props.Spaces,
      pieC: {},
      OrderDays: [],


      /*   options: {//start of Pie chart
          animationEnabled: true,
          exportEnabled: true,
          theme: "light1",
          title: {
            text: "Order Percentage of each field"
          },
          data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: -90,
            dataPoints: [
              { y: 6, label: "Art" },
              { y: 5, label: "Beauty" },
              { y: 4, label: "Sport" }
            ]
          }]
        }, */

    }

  }
  componentDidMount() {


    //console.log('check', this.state.Orders);

    this.OrderBarChart();
    this.OrderPieChart();

  }
  //bar chart. how many orders in every day in the week
  OrderBarChart = () => {
    let weekday = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    let daysArray = [];
    let help = [];
    this.state.Orders.map((order) => {
      daysArray.push(order.orderDate)
      console.log('im in   ', order.orderDate)
    })
    console.log('daysArray: ', daysArray)
    daysArray.forEach(element => {
      var d = new Date(element);
      var n = weekday[d.getDay()]
      help.push(n)
    });
    let b = {
      'sunday': 0,
      'monday': 0,
      'tuesday': 0,
      'wednesday': 0,
      'thursday': 0,
      'friday': 0,
      'saturday': 0
    };
    help.forEach(el => {
     // b[el] = (b[el] || 0) + 1;
     b[el]=b[el]+1
    }); console.log("new b: ",b)
    console.log('end  ', Object.keys(b))
    console.log('end  ', b)
    console.log('what day  ', help)
    let temp = {
      0:1,
      1:2,
      2:3,
      3:4,
      4:5,
      5:6,
      6:7
    }
    this.setState({
      config: {
        text: 'Order',
        type: 'bar',
        series: [{
          values: Object.values(b)
        }],
        scaleX: {
          // set scale label
          label: {
            text: 'Days',
            labels: Object.values(temp)
          },
          // convert text on scale indices

        },
        scaleY: {
          // scale label with unicode character
          label: {
            text: 'Orders'
          },

        },
      }
    });
  }
  //pie chart. how many orders for each of the fields
  OrderPieChart = () => {
    let fieldOrder = [];
    let help = [];
    //all space id of orders
    this.state.Orders.map((order) => { fieldOrder.push(order.spaceId) });
    //comparing with spaces to check which space id match to the field
    fieldOrder.forEach(element => {
      this.state.Spaces.map((space) => { if (element === space.spaceId) { help.push(space.field) } })
    })
    //how many spaces in each field 
    let b = {};
    help.forEach(el => {
      b[el] = (b[el] || 0) + 1;
    })

    //console.log('gooooood  ;',b);
    this.setState({
      pieC: {
        labels: ['Art', 'Beauty', 'Sport'],
        datasets: [
          {
            label: "",
            backgroundColor: [
              '#20baaf',
              '#52ded4',
              '#1e6b66',
              '#00736b',
              '#13423f'
            ],
            data: Object.values(b)
          }
        ]
      }
    });
  }

  render() {

    return (
      <div className="app">
        <br />
        <div className="container">
          <br />
          <br />
          <h1>Number of orders per day</h1>
          <br />
          <ZingChart data={this.state.config} />
          <br />
          <br />
          {/* <CanvasJSChart options={this.state.options} /> */}
          <br />
          <br />
          <Pie ref={this.chartReference}
            data={this.state.pieC}
            options={{
              title: {
                display: true,
                text: "",
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
      </div>
    );
  }
}
