import React, { Component } from "react";
import User from '../Classes/User';


export default class Login extends Component {

    componentDidMount() {
        this.UsersApiUrl =
          "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/User/";
        
        this.FetchGetUsers();
        
    
      }
    
      FetchGetUsers = () => {
        fetch(this.UsersApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                Users: result.map(
                  item =>
                    new User(
                      item.Id,
                      item.Email,
                      item.Password,
                      item.UserName,
                      item.PhoneNumber,
                      item.Photo
                    )
                )
              });
            },
            error => { }
          );
      };

      checkUser = () => {
        let tempArr = this.state.Users;
        console.log(this.state.Users);
        console.log(this.state.Email);
        console.log(this.state.Password);
    
        let userExsists = false;
    
        for (var i = 0; i < this.state.Users.length; i++) {
    
          if (this.state.Email === this.state.Users[i].email) {
            console.log(this.state.Email);
            console.log(this.state.Users[i].name);
            userExsists = true;
            if (this.state.Password === this.state.Users[i].password) {
              console.log("You Are logged in");
              alert("You Are logged in");
            }
            else {
              console.log("The password is incorrect")
              alert("The password is incorrect");
            }
          }
        }
        if (userExsists === false)
          console.log("Invalid user")
      }
    

add=()=>{


    fetch('http://reqres.in/api/users')
    .then(res=>console.log(res))
      
    //getUserData = (data) => {
     //   this.setState({
      //      userName: data
     //   }, () => { console.log(this.state.userName) })

  //  }

  //  componentDidMount() {
   //     this.apiUrl = "http://proj.ruppin.ac.il/igroup17/Mobile/project/api/spazioUser/";

  //  }




}

    render() {
        return (
            <form>
                <h2>Admin Interface</h2>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={this.checkUser} className="btn btn-primary btn-block" >Login</button>
                
            </form>
        );
    }
}