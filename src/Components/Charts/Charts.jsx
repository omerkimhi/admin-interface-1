import React, { Component } from 'react'
import ZingChart from 'zingchart-react';

//import NavBar from '../NavBar/NavBar.jsx';

import Pie from './Pie';




export default class Charts extends Component {

    constructor(props){
        super(props);
        this.state = {
            Orders: this.props.Orders,
            config: {//start of Bar chart
                text:'Order',
             type: 'bar',
             series: [{
               values: []
           }],
           scaleX: {
              // set scale label
              label: {
                text: 'Days'
              },
              // convert text on scale indices
              labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            },
            scaleY: {
              // scale label with unicode character
              label: {
                text: 'Orders'
              }
            },
           }//end of Bar chart
           
          }

    }


    componentDidMount() {
       
      this.OrderBarChart();
      }

      OrderBarChart=()=>{


      }




    render() {

        console.log("props:  ",this.props.Orders)

        return (
            <div className="app">
                <br/>
            <div className="container">
            <br/>
            
               <br/>
                <h1>Orders in the last 7 days</h1>
          <br/> 
          <ZingChart  data={this.state.config}/>
       <br/> 
       <br/> 
       <Pie></Pie>
           </div>
           
           </div>

        );
    }
}
