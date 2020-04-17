import React, { Component } from 'react'
import ZingChart from 'zingchart-react';



export default class Bar extends Component {


    constructor(props) {
        super(props);
        this.state = {
          config: {
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
         }
         
        }
        
     }
     render() {
        return (
            <div className="container">
                  <br/>
                <h1>Orders in the last 7 days</h1>
                
                <div className="row">
           <ZingChart  data={this.state.config}/>
           </div>
           </div>
       
           
        );
    }
}