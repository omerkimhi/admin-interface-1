import React, { Component } from 'react'

//Charts imports
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart'

export default class Charts extends Component {

  constructor(props) {
    super(props);
    this.chartReference = React.createRef();
    this.state = {
      Orders: this.props.Orders,
      Spaces: this.props.Spaces,
      OrderDays: [],
      pieC:null,   
    
    }
  }
  
 
  

  render() {

    return (
      <div className="app">
        <br />
        <div className="container">
          <br />
          <div className="row">
            <div className="col">  <DoughnutChart headLine={'HERE WILL BE A CHART'}/></div>
            <div className="col">  <DoughnutChart  headLine={'HERE WILL BE A CHART'}/></div>                
          </div>
          <br />
          <br />
          <div className="row">
          <div className="chart col">
         <BarChart Orders={this.props.Orders}/>
          </div>   
          <div className="chart col">
          <PieChart Spaces={this.props.Spaces} Orders={this.props.Orders}/>
          </div>
          </div>
          <div className="row">
            <LineChart  Orders={this.props.Orders} />
            <br/>
            <br/>
          </div>
          <br/>
            <br/>
        </div>
        <br/>
            <br/>
      </div>
    );
  }
}
