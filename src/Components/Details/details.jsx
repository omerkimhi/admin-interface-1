import React, { Component } from "react";
import ReactDOM from 'react-dom';

import './details.css';
import 'bootstrap-4-grid/css/grid.min.css';

import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs'; 
import { Button } from '@progress/kendo-react-buttons';
import { savePDF } from '@progress/kendo-react-pdf';
import { Ripple } from '@progress/kendo-react-ripple';
import '@progress/kendo-theme-material/dist/all.css'; 

import { DonutChartContainer } from '../Charts/DonutChartContainer';
import { BarChartContainer } from '../Charts/BarChartContainer';
import { GridContainer } from '../Grid/GridContainer';

import Space from '../Classes/Space';

//import { Card, Container,Row,Col } from 'react-bootstrap';
//import NavBar from '../NavBar/NavBar.jsx'



 class Details extends Component {

  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
     this.state = {
    showDialog: false,
    isLoading:true,
    Spaces:[],
   counts:[],

  }
  }

  componentDidMount(){
    this.SpacesApiUrl =
    "http://proj.ruppin.ac.il/igroup17/prod/api/space";

    this.FetchGetSpaces();

// const fieldNum=[];

// this.state.Spaces.forEach(item=>{

//   fieldNum.push
//  })

//  const fieldTypes = this.state.Spaces
//  .map(dataItem => dataItem.field) // get all media types
//  .filter((fieldType, index, array) => array.indexOf(fieldType) === index), // filter out duplicates

// this.setState({counts : fieldTypes.map(fieldType => ({

//    type: fieldType,
//    count: this.state.Spaces.filter(item => item.field === fieldType).length
//  }))});
// console.log(this.state.counts)
  }

  FetchGetSpaces = () => {
    fetch(this.SpacesApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Spaces: result.map(
              item =>
                new Space(
                  item.Id,
                  item.Name,
                  item.Field,
                  item.Price,
                  item.City,
                  item.Street,
                  item.Number,
                  item.Capabillity,
                  item.Bank,
                  item.Branch,
                  item.Imageurl1,
                  item.Imageurl2,
                  item.Imageurl3,
                  item.Imageurl4,
                  item.Imageurl5,
                  item.AccountNumber,
                  item.UserEmail
                )
            )
          });
        },
        error => { }
      )
   
     

      
      
  };

  

  showData = () => {
    console.log(this.state.Spaces);
  }

  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog
    }, () => console.log(this.state))
  }
  
  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  }

  render() {
    return (
     
      <Ripple>
          <br/>
      <br/>
         <button onClick={this.showData}>check</button>
         <br/>
      <br/>
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>SPACES</h1>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                 <Button primary={true} onClick={this.handleShare}>Share</Button>
                 <Button onClick={this.handlePDFExport}>Export to PDF</Button>
                 </div>
                 </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <h4>Space List</h4>
              <ul>{
              this.state.Spaces.map(function(Spaces, i){
  
              return <li key={i}>{Spaces.name}</li>
})
  }</ul>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
               <h4>Fields</h4>
               {/* {this.state.Spaces.filter(Spaces => Spaces.price < 90).map(filteredSpace => (
    <li>
      {filteredSpace.price}
    </li>
  ))} */}
 


                </div>
                <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
                  <div className="percentage-container">
                    <span className="percentage-number">94</span>
                    <span className="percentage-sign">%</span>
                    <p>Percentage of income compared to last month</p>
                  </div>
                  <div className="percentage-container">
                    <span className="percentage-number">89</span>
                    <span className="percentage-sign">%</span>
                    <p>Percentage of income compared to last year</p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div>
                    <h4>AVERAGE TOTAL RANK</h4>
                    <span/>
                    <h5>Average rank in beauty field</h5>
                    <span/>
                    <h5>Average rank in sport field</h5>
                    <span/>
                    <h5>Average rank in art field</h5>
                    <span/>
                    <h4>AVERAGE EQUIPMENT RANK</h4>
                    <span/>
                    <h5>Average rank in beauty field</h5>
                    <span/>
                    <h5>Average rank in sport field</h5>
                    <span/>
                    <h5>Average rank in art field</h5>
                    <span/>
                    

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h4>Number of rents last week</h4>
                <h4>Number of rents last month</h4>
                <h4>Number of Future Orders</h4>
                </div>
              </div>
            </div>
          </div>
          {this.state.showDialog &&
  <Dialog title={"Share this report"} onClose={this.handleShare}>
    <p>Please enter the email address/es of the recipient/s.</p>
    <Input placeholder="example@progress.com" />
    <DialogActionsBar>
      <Button primary={true} onClick={this.handleShare}>Share</Button>
      <Button onClick={this.handleShare}>Cancel</Button>
    </DialogActionsBar>
  </Dialog>
}
        </div>
      </div>
      </Ripple>
    );
  }
}
export default Details;

