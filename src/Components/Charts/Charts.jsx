import React, { Component } from 'react'

import NavBar from '../NavBar/NavBar.jsx';
import Bar from './Bar'
import Pie from './Pie';



export default class Charts extends Component {


    constructor(props) {
        super(props);
       
        
     }

    

    render() {
        return (
            <div>
            <NavBar/>
           <br/>
           <br/>
       <Bar/>
       <br/>
           <br/>
           <Pie/>
           </div>

        );
    }
}
