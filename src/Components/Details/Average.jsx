import React, { Component } from 'react';

import Space from '../Classes/Space';

class Average extends Component {

constructor(props){
    super(props);
this.state={
    Spaces:[],
}

}

    componentDidMount(){
        this.SpacesApiUrl =
        "http://proj.ruppin.ac.il/igroup17/prod/api/space";

        this.FetchGetSpaces();  
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
              })
            },
            error => { }
          );
      };
    
      showData = () => {
        console.log(this.state.Spaces);
      }

    render() {
        return (
            <div>
              <button onClick={this.showData}>check</button> 

             
            </div>
        );
    }
}

export default Average;