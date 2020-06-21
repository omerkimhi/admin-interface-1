import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class PieChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Orders: this.props.Orders,
      Spaces: this.props.Spaces,
      pieC: {},
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
      <MDBContainer>
        <h3 className="mt-5">Orders Amount by Field</h3>
        <Pie data={this.state.pieC.dataPie} options={{ responsive: true }} />
      </MDBContainer>
    );
  }

}

export default PieChart;