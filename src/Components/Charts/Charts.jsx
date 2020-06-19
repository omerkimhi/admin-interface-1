import React, { Component } from 'react'
import ChartComp from './ChartComp'
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
      ChartArray:['line','bar','line','bar']
    
    }
  }
  
 
  

  render() {
console.log(this.state.Spaces)

    return (
      <div className="app" style={{}}>
        
        <div className="container" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',minWidth:'90%'}}>
{this.state.ChartArray.map((item,index)=>{
  return <div key={index} style={{width:'45%',paddingTop:'5vh'}}> <ChartComp key ={index*(1)} Spaces={this.state.Spaces} height={'40vh'} number={index} type={item}></ChartComp></div>
})}
         
          {/* <div className="row">
          <div className="chart col">
         <BarChart Orders={this.props.Orders}/>
          </div>   
          <div className="chart col">
          <PieChart Spaces={this.props.Spaces} Orders={this.props.Orders}/>
          </div>
          </div>
          <div className="row">
             <div className="col">  <DoughnutChart headLine={'Trending equipments in sport field'}/></div>
            <div className="col">  <DoughnutChart  headLine={'Trending equipments in art field'}/></div>                 
          </div>
          <div className="row">
             <LineChart  Orders={this.props.Orders} /> 
            <br/>
            <br/>
          </div>
          <br/>
            <br/> */}
        </div>
        <br/>
            <br/>
      </div>
    );
  }
}
