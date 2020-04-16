import React, { Component } from "react";
import ReactDOM from 'react-dom';
//import axios from 'axios';
import './details.css';
import 'bootstrap-4-grid/css/grid.min.css';

import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs'; 
import { Button } from '@progress/kendo-react-buttons';
import { savePDF } from '@progress/kendo-react-pdf';
import { Ripple } from '@progress/kendo-react-ripple';
import '@progress/kendo-theme-material/dist/all.css'; 

//import { Form,Col } from 'react-bootstrap';

//import { DonutChartContainer } from '../Charts/DonutChartContainer';
//import { BarChartContainer } from '../Charts/BarChartContainer';
//import { GridContainer } from '../Grid/GridContainer';

import Space from '../Classes/Space';
//import { Card, Container,Row,Col } from 'react-bootstrap';
//import NavBar from '../NavBar/NavBar.jsx'

import * as moment from 'moment';

 class Details extends Component {

  constructor(props) {
    super(props);
   
    this.appContainer = React.createRef();
    
    this.state = {
    showDialog: false,
    isLoading:true,
    
    Spaces:[],
    
    //array by field
    sportSpaces:[],
    beautySpaces:[],
    artSpaces:[],
   
    //Average prices by field
   sportPrice:null,
   artPrice:null,
   beautyPrice:null,
   spacesPrice:null,
   
   //Prices By field MIN/MAX
    artMax:null,
    artMin:null,
    beautyMax:null,
beautyMin:null,
sportMax:null,
sportMin:null,

//top rated spaces
topRankSport:null,
topRankArt:null,
topRankBeauty:null,
topRankSpace:null,
avgRankSport:null,
avgRankArt:null,
avgRankBeauty:null,
avgRankSpace:null,

//date
curTime : new Date().toLocaleString(),
SpaceInWeek:[],
SpaceInMonth:[],
  }
  }

  componentDidMount(){
    this.SpacesApiUrl =
    "http://proj.ruppin.ac.il/igroup17/prod/api/space";

    this.FetchGetSpaces();

   

  }
 



//fetch 
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
                  item.UserEmail,
                  item.Description,
                  item.TermsOfUse,
                  item.Rank,
                  item.Uploadtime
                )
            )
          }, () => {  this.getPrices();
            this.getRank();
            this.getHighRank();
            this.getNumberOfEachField();
            this.getUpload();
          },
          )},
        error => { }
      );
  };
  //gets number of spaces in each field
  getNumberOfEachField=()=>{
    let sArray = [];
    let aArray = [];
    let bArray = [];
    this.state.Spaces.map((space) => {
      if (space.field === "Sport") sArray.push(space);
      if (space.field === "Art") aArray.push(space);
      if (space.field === "Beauty") bArray.push(space);
    });
    this.setState({ sportSpaces: sArray, beautySpaces: bArray,artSpaces:aArray  })
   
  }
//Prices: Avg, Min, Max
  getPrices=()=>{ 
    //init
    let spaceAvg=[];
    let sportAvg=[];
    let artAvg=[];
    let beautyAvg=[];
    //total avg
    this.state.Spaces.map((space)=>{
       spaceAvg.push(space.price);    
    }); 
    let sumSpace = spaceAvg.reduce((previous, current) => current += previous);
    let avgSpace = Number(sumSpace / spaceAvg.length).toFixed(2);
    //sport avg min max
    this.state.Spaces.map((space)=>{
      if (space.field === "Sport") sportAvg.push(space.price);
      
    });  
    let sumSport = sportAvg.reduce((previous, current) => current += previous);
    let avgSport = Number(sumSport / sportAvg.length).toFixed(2);
    let maxSport = Number(Math.max.apply(null, sportAvg)).toFixed(2);
    let minSport = Number(Math.min.apply(null, sportAvg)).toFixed(2);
//art avg min max
    this.state.Spaces.map((space)=>{
      if (space.field === "Art") artAvg.push(space.price);
    });
    let sumArt = artAvg.reduce((previous, current) => current += previous);
    let avgArt = Number(sumArt / artAvg.length).toFixed(2);
    let maxArt = Number(Math.max.apply(null, artAvg)).toFixed(2);
    let minArt = Number(Math.min.apply(null, artAvg)).toFixed(2);
    //beauty avg min max
    this.state.Spaces.map((space)=>{
      if (space.field === "Art") beautyAvg.push(space.price); 
    });
    let sumBeauty = beautyAvg.reduce((previous, current) => current += previous);
    let avgBeauty = Number(sumBeauty / beautyAvg.length).toFixed(2);
    let maxBeauty = Number(Math.max.apply(null, beautyAvg)).toFixed(2);
      let minBeauty = Number(Math.min.apply(null, beautyAvg)).toFixed(2);

//finish
    this.setState({ sportPrice:avgSport, sportMax:maxSport,sportMin:minSport, spacesPrice:avgSpace, artPrice:avgArt,
       artMax:maxArt, artMin:minArt, beautyPrice:avgBeauty, beautyMax:maxBeauty, beautyMin:minBeauty})
   
    }
//Rank 
getRank=()=>{ 
  //init
  let spaceAvg=[]
  let beautyAvg=[];
  let artAvg=[];
  let sportAvg=[];
  
  //Average Rank per field
  this.state.Spaces.map((space)=>{
    if (space.field === "Sport") sportAvg.push(space.rank);
    if (space.field === "Art") artAvg.push(space.rank);
    if (space.field === "Beauty") beautyAvg.push(space.rank);
  });
  let sumB = beautyAvg.reduce((previous, current) => current += previous);
  let avgB = Number(sumB / beautyAvg.length).toFixed(2);
  let sumA = artAvg.reduce((previous, current) => current += previous);
  let avgA = Number(sumA / artAvg.length).toFixed(2);
  let sumS = sportAvg.reduce((previous, current) => current += previous);
  let avgS = Number(sumS / artAvg.length).toFixed(2);

  //Average space rank
  this.state.Spaces.map((space)=>{
    if (space.rank !== 0 || space.rank!==null) spaceAvg.push(space.rank); 
  });
  let sumSpace = spaceAvg.reduce((previous, current) => current += previous);
  let avgSpace = Number(sumSpace / spaceAvg.length).toFixed(2);
 //finish
  this.setState({avgRankBeauty:avgB,avgRankSport:avgS,avgRankArt:avgA, avgRankSpace:avgSpace})
}

// top ranked space for every field
getHighRank=()=>{
  //init
let topSport="";
let topBeauty="";
let topArt="";
let help=null;

//get top rank
  this.state.sportSpaces.map((space)=>{
       help=space.rank
       if(help=== Math.max(...this.state.sportSpaces.map(s => s.rank)))
          {topSport= space.name; }                   
  })
  this.state.beautySpaces.map((space)=>{
    help=space.rank
    if(help=== Math.max(...this.state.beautySpaces.map(s => s.rank)))
       {topBeauty= space.name; }                   
})
this.state.artSpaces.map((space)=>{
  help=space.rank
  if(help=== Math.max(...this.state.artSpaces.map(s => s.rank)))
     {topArt= space.name; }                   
})
//finish
this.setState({topRankSport:topSport, topRankBeauty:topBeauty, topRankArt:topArt})
}
 

//how many spaces uploaded last week and month
getUpload=()=>{

var week=[]
var month=[]
    this.state.Spaces.map((space)=>{
      //times
      var now  = this.state.curTime;
      var then = space.uploadtime;
      //notice different formats between now and then
      var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"MM/DD/YYYY HH:mm:ss"));
      var d = moment.duration(ms);
        console.log(d.days())
      if ( d.days() <= 7) week.push(space.name);
      if ( d.months() <= 1) month.push(space.name);
       
     })
this.setState({SpaceInWeek:week, SpaceInMonth:month})
}


//shows data from DB
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
      <button onClick={this.showData}>show data</button>

      <button onClick={this.getHighRank}>TOP RANKED SPACE</button>       
         <br/>
      <br/>
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>SPACES STATS</h1>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                 <Button primary={true} onClick={this.handleShare}>Share</Button>
                 <Button onClick={this.handlePDFExport}>Export to PDF</Button>
                 </div>
                 </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <br/>
             <h5>AVERAGE TOTAL RANK: </h5><h4>  {this.state.avgRankSpace}</h4> 
             <br/>
             <h5>AVERAGE RANK SPORT:  </h5><h4> {this.state.avgRankSpace}</h4> 
             <br/>
             <h5>AVERAGE RANK ART:  </h5><h4> {this.state.avgRankArt}</h4> 
             <br/>
             <h5>AVERAGE RANK BEAUTY: </h5><h4> {this.state.avgRankBeauty}</h4> 
             <br/>
              <h4>TOP RATED SPACE BY FIELD</h4>
              <br/>
              <h5>SPORT: </h5> <br/><h4> {this.state.topRankSport}</h4>
              <br/>
              <h5>ART: </h5> <br/><h4> {this.state.topRankArt}</h4>
              <br/>
              <h5>BEAUTY: </h5> <br/><h4> {this.state.topRankBeauty}</h4>
              <br/>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
               <h4>Fields</h4>
               <br/>
               <h5>SPORT</h5>
               <br/>
              <p>Number of spaces: {this.state.sportSpaces.length}</p>
              <h5>ART</h5>
              <br/>
              <p>Number of spaces: {this.state.artSpaces.length}</p>
              <h5>Beauty</h5>
              <br/>
              <p>Number of spaces: {this.state.beautySpaces.length}</p>
 


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
                  <div><br/>
    <h5>AVERAGE TOTAL PRICE: </h5><h4>  {this.state.spacesPrice} ₪</h4> 
                    <br/>
                    <h5>Average price in beauty field:  </h5>   <h4>  {this.state.beautyPrice} ₪</h4>
                    <br/>
                    <h5>Max price in beauty field: </h5> <h4>  {this.state.beautyMax} ₪</h4>
                    <br/>
                    <h5>Min price in beauty field: </h5><h4>  {this.state.beautyMin} ₪</h4>
                    <br/>
                    <h5>Average price in sport field: </h5><h4>  {this.state.sportPrice} ₪</h4>
                    <br/>
                    <h5>Max price in sport field: </h5><h4>  {this.state.sportMax} ₪</h4>
                    <br/>
                    <h5>Min price in sport field: </h5><h4>  {this.state.sportMin} ₪</h4>
                    <br/>
                    <h5>Average price in art field: </h5><h4>  {this.state.artPrice} ₪</h4>
                    <br/>
                    <h5>Max price in art field: </h5><h4>  {this.state.artMax} ₪</h4>
                    <br/>
                    <h5>Min price in art field: </h5><h4>  {this.state.artMin} ₪</h4>
                    <br/>                
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h5>Number of spaces in DB: </h5><h4>  {this.state.Spaces.length}</h4>
                <h5>Number of spaces added in last 7 days: </h5><h4>{this.state.SpaceInWeek.length}</h4>
                <h5>Number of spaces added in last 30 days: </h5><h4>{this.state.SpaceInMonth.length}</h4>
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


      <br/>
      <br/>
      <br/>
     

      
     
      </Ripple>
     
    );
  }
}
export default Details;

