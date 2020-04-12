import React, { Component } from 'react'

import NavBar from '../NavBar/NavBar.jsx';
import Bar from './Bar'
import PieChart from './Pie';



export default class Charts extends Component {


    constructor(props) {
        super(props);
       
        
     }

    

    render() {
        return (
            <div>
            
           <br/>
           <br/>
       <Bar/>
       <br/>
           <br/>
           <PieChart/>
           </div>

        );
    }
}
