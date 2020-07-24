import React from "react";
import { Pie } from "react-chartjs-2";


class PieChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Orders: this.props.Orders,
      Spaces: this.props.Spaces,
      pieC:  {
        dataPie: {
          labels: ["Sport", "Beauty", "Art"],
          datasets: [{
            data: null,
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
          }]
        }
      },
    }
  }

  componentDidMount() {
    this.OrderPieChart();
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
    this.setState({
      pieC: {
        dataPie: {
          labels: ["Sport", "Beauty", "Art"],
          datasets: [{
            data: Object.values(b),
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
          }]
        }
      }

    });
  }

  render() {

    return (
      <div>     
        <h3  style={textStyle} className="mt-5">Orders Amount by Field</h3>
        <div style={{height: this.props.height, width: this.props.width, position:'relative'}} >
        <Pie data={this.state.pieC.dataPie}  options={{ responsive: true,  maintainAspectRatio: false }} />
        </div>
        </div>
    );
  }

}

export default PieChart;

const textStyle={
  textAlign:'center'
}