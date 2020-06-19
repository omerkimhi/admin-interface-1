import React, { Component } from 'react';
import LineChart2 from '../Components/Charts/LineChart2';



export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
}
// componentDidMount=()=>{
//     console.log("this.props.data",this.props.data);
//    // console.log("this.state.dataLine",this.state.dataLine);
//    //     console.log("this.state.dataLine",this.state.dataLine.datasets[0].data);
//         var values=[];
//         var names=[];
//         this.props.data.map((item)=>{
//          names.push(item.Name);
//           values.push(item.Value);

//       });
// console.log("names",names);
// console.log("values",values);
// var temp = this.state.dataLine;
// temp.labels = names;
// temp.datasets[0].data = values;

// this.setState({
//  dataLine:temp
// });




   
 //}
     
  render() {
    return (
        <div className="container">
         <LineChart2 ArtFiltersData={this.props.ArtFiltersData} BeautyFiltersData={this.props.BeautyFiltersData} SportFiltersData={this.props.SportFiltersData} /> 
        </div>
      )
    };
}