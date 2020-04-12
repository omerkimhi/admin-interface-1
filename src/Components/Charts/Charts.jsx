import React, { Component } from 'react'

import NavBar from '../NavBar/NavBar.jsx';
import Bar from './Bar'
import Pie from './Pie';

export default class Charts extends Component {


    constructor(props) {
        super(props);
        this.state = {
         Pchart: new Pie(),
        }
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
           <Pie Pchart={this.state.Pchart}></Pie>
           </div>

        );
    }
}
