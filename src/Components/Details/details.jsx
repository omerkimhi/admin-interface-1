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

//import { Card, Container,Row,Col } from 'react-bootstrap';
//import NavBar from '../NavBar/NavBar.jsx'

 class Details extends Component {

  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
     this.state = {
    showDialog: false
  }
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
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>My Stats</h1>
                 </div>
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                 <Button primary={true} onClick={this.handleShare}>Share</Button>
                 <Button onClick={this.handlePDFExport}>Export to PDF</Button>
                 </div>
                 </div>
          <div className="row">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <h4>Panel Bar Container</h4>
            </div>
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
               hhttttpppp
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
                    <h3>My Rank</h3>
                    <span/>
                    <h4>Average Rank in my field</h4>
                    <span/>
                    <h3>My Equipment Rank</h3>
                    <span/>
                    <h4>Average  Equipment Rank in my field</h4>
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