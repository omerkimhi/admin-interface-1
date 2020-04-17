import React, { Component } from 'react'

//import NavBar from '../NavBar/NavBar.jsx';
import Bar from './Bar'
import Pie from './Pie';



export default class Charts extends Component {


    
    

    render() {
        return (
            <div>
            
          <br/> 
       <Bar/>
       <br/> 
       <br/> 
       <Pie></Pie>
           </div>

        );
    }
}
