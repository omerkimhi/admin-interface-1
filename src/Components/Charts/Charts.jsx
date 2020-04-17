import React, { Component } from 'react'
import ZingChart from 'zingchart-react';

import Pie from './Pie';
import * as moment from 'moment';

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

     /*    setTimeout(() => {
            this.setState({
                Orders:this.props.Orders
          })
        }, 3000); */
        this.setState({Orders:this.props.Orders})
        console.log('check' ,this.state.Orders);
        this.OrderBarChart();
      }

      OrderBarChart=()=>{

        let Array=[];
        this.state.Orders.map((order) => { 
             Array.push(order.orderDate)
        })
        console.log('map' ,this.state.Array)
      }

    /*   getUpload = () => {

        var week = []
        var month = []
        this.state.Spaces.map((space) => {
          //times
          var now = this.state.curTime;
          var then = space.uploadtime;
          //notice different formats between now and then
          var ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(moment(then, "MM/DD/YYYY HH:mm:ss"));
          var d = moment.duration(ms);
          if (d.days() <= 7) week.push(space.name);
          if (d.months() <= 1) month.push(space.name);
    
        })
        this.setState({ SpaceInWeek: week, SpaceInMonth: month })
      } */


    render() {


console.log('Props ',this.state.Orders)

        
        if(this.state.Orders.length===0){
           return <h1>LOADING</h1>
          }
          else{
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
    }}
}
