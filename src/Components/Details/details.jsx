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

//import { DonutChartContainer } from '../Charts/DonutChartContainer';
//import { BarChartContainer } from '../Charts/BarChartContainer';
//import { GridContainer } from '../Grid/GridContainer';

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
    
    //array by field
    sportSpaces:[],
    beautySpaces:[],
    artSpaces:[],
    
    //array of sport spaces prices (for check)
    sportAverage:[],
   
    //Average by field
   sportMemutza:null,
   artMemutza:null,
   beautyNemutza:null,

   //
   spacesMemutza:null,
   
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
  }
  }

  componentDidMount(){
    this.SpacesApiUrl =
    "http://proj.ruppin.ac.il/igroup17/prod/api/space";

    this.FetchGetSpaces();

    

  }
//fetch ובדיקה כמה חללים מכל סוג
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
          }, () => {
            let sArray = [];
            let aArray = [];
            let bArray = [];
            this.state.Spaces.map((space) => {
              if (space.field === "Sport") sArray.push(space);
              if (space.field === "Art") aArray.push(space);
              if (space.field === "Beauty") bArray.push(space);
            });
            this.setState({ sportSpaces: sArray, beautySpaces: bArray,artSpaces:aArray  })
          },
          )},
        error => { }
      );
  };
  //ספורט ממוצע, מינ ומקס
  hiSport=()=>{ 
    let sportAvg=[];
    
    this.state.Spaces.map((space)=>{
      if (space.field === "Sport") sportAvg.push(space.price);
      
    });  
    let sum = sportAvg.reduce((previous, current) => current += previous);
    let avg = sum / sportAvg.length;
    let max = Math.max.apply(null, sportAvg);
    let min = Math.min.apply(null, sportAvg);
    this.setState({sportAverage:sportAvg, sportMemutza:avg, sportMax:max,sportMin:min})
   console.log('hi'+ this.state.sportAverage +'avg='+this.state.sportMemutza)
  //אומנות ממוצע, מינ ומקס
  }
  hiArt=()=>{ 
    let artAvg=[];
    this.state.Spaces.map((space)=>{
      if (space.field === "Art") artAvg.push(space.price);
    });
    let sum = artAvg.reduce((previous, current) => current += previous);
    let avg = sum / artAvg.length;
    let max = Math.max.apply(null, artAvg);
    let min = Math.min.apply(null, artAvg);
    this.setState({artMemutza:avg, artMax:max, artMin:min})
    
   console.log('avg='+this.state.artMemutza+'max= '+ this.state.artMax+ 'min= '+this.state.artMin)
    
  }
  // יופי ממוצע, מינ ומקס
hibeauty=()=>{ 
  let beautyAvg=[];
  this.state.Spaces.map((space)=>{
    if (space.field === "Art") beautyAvg.push(space.price); 
  });
  let sum = beautyAvg.reduce((previous, current) => current += previous);
  let avg = sum / beautyAvg.length;
  let max = Math.max.apply(null, beautyAvg);
    let min = Math.min.apply(null, beautyAvg);
  this.setState({beautyNemutza:avg, beautyMax:max, beautyMin:min})
 console.log('avg='+this.state.beautyNemutza)
  
}
//דירוג ממוצע לכל תחום בנפרד
hirank=()=>{ 
  let beautyAvg=[];
  let artAvg=[];
  let sportAvg=[];
  
  
  this.state.Spaces.map((space)=>{
    if (space.field === "Sport") sportAvg.push(space.rank);
    if (space.field === "Art") artAvg.push(space.rank);
    if (space.field === "Beauty") beautyAvg.push(space.rank);


  });

  let sumB = beautyAvg.reduce((previous, current) => current += previous);
  let avgB = sumB / beautyAvg.length;
  let sumA = artAvg.reduce((previous, current) => current += previous);
  let avgA = sumA / artAvg.length;
  let sumS = sportAvg.reduce((previous, current) => current += previous);
  let avgS = sumS / artAvg.length;
 
 
  this.setState({beautyNemutza:avgB,sportMemutza:avgS,artMemutza:avgA})
 console.log('avg rank beauty='+this.state.beautyNemutza+ 'avg rank sport= '+this.state.sportMemutza+'avg rank art= '+this.state.artMemutza)

}
//דירוג ממוצע לכלל החללים
hiTotalrank=()=>{ 
  let spaceAvg=[]
  
  
  this.state.Spaces.map((space)=>{
    if (space.rank !== 0 || space.rank!==null) spaceAvg.push(space.rank); 
  });

  let sumSpace = spaceAvg.reduce((previous, current) => current += previous);
  let avgSpace = sumSpace / spaceAvg.length;

  this.setState({spacesMemutza:avgSpace})
 console.log('avg rank spaces='+this.state.spacesMemutza)

}
//מציאת החלל בעל הדירוג הגבוה ביותר לכל תחום
hiField=()=>{
let topSport="";
let topBeauty="";
let topArt="";
let help=null;
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



this.setState({topRankSport:topSport, topRankBeauty:topBeauty, topRankArt:topArt})
  console.log('sport= '+this.state.topRankSport+' beauty= '+this.state.topRankBeauty+ ' art= '+this.state.topRankArt)
}










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
              <h1>SPACES STATS</h1>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                 <Button primary={true} onClick={this.handleShare}>Share</Button>
                 <Button onClick={this.handlePDFExport}>Export to PDF</Button>
                 </div>
                 </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <h4>TOP RATED SPACE BY FIELD</h4>
              <h5>SPORT</h5><button onClick={this.hiField}>fieldush</button>
              <h5>ART</h5>
              <h5>BEAUTY</h5>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
               <h4>Fields</h4>
               <h5>SPORT</h5>
              <p>Number of spaces: {this.state.sportSpaces.length}</p>
              <h5>ART</h5>
              <p>Number of spaces: {this.state.artSpaces.length}</p>
              <h5>Beauty</h5>
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
                  <div>
                    <h4>AVERAGE TOTAL RANK</h4><button onClick={this.hiTotalrank}>total</button>
                    <span/>
                    <h5>Average rank in beauty field: </h5><button onClick={this.hirank}>rank</button>
                    <span/>
                    <h5>Average rank in sport field</h5>
                    <span/>
                    <h5>Average rank in art field</h5>
                    <span/>
                    <h4>AVERAGE EQUIPMENT RANK</h4>
                    <span/>
                    <h5>Average rank in beauty field</h5><button onClick={this.hibeauty}>hi</button>
                    <span/>
                    <h5>Average price in sport field:</h5><button onClick={this.hiSport}>hi</button>
                    <span/>
                    <h5>Average rank in art field</h5><button onClick={this.hiArt}>hi</button>
                    <span/>
                    

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <h4>Number of spaces in DB: {this.state.Spaces.length}</h4>
                <h4>Number of spaces added last week: </h4>
                <h4>Number of spaces added last month: </h4>
                
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

