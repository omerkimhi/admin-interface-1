import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';

//CLASSES
import User from './Classes/User';
import Space from './Classes/Space';
import Order from './Classes/Order';
//COMPONENTS
import Details from '../Components/Details/details';
import SpaceTable from '../Components/Tables/SpaceTable';
import UserTable from '../Components/Tables/UserTable';
import Login from "../Components/Login/login";
import Charts from '../Components/Charts/Charts';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Spaces: [],
      Orders: [],
      Users: [],
    };

  }
  componentDidMount() {
    this.SpacesApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/space";
    this.OrdersApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/order";
    this.UsersApiUrl =
      "http://proj.ruppin.ac.il/igroup17/prod/api/user";


    this.FetchGetUsers();
    this.FetchGetSpaces();
    this.FetchGetOrders();

  }

  //sets usres in Users
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
          },

          )
        },
        error => { }
      );
  };

  //SPACES
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
          },
          )
        },
        error => { }

      );
  };

  //ORDERS
  FetchGetOrders = () => {
    fetch(this.OrdersApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Orders: result.map(
              item => 
              new Order(
                item.OrderId,
                item.SpaceId,
                item.UserId,
                item.ReservationDate,
                item.StartHour,
                item.EndHour,
                item.Price,
                item.OrderDate
                )
            )
          });
        },
        error => { }
      );
  };

  render() {

    if (this.state.Spaces.length === 0 || this.state.Orders.length === 0|| this.state.Users.length === 0) {
      return <h1>LOADING</h1>
    }
    else {
      return (

        <Router>
          <div> <NavBar></NavBar></div>


          <Switch>
            <Route path="/details"><Details Spaces={this.state.Spaces} /></Route>
            <Route path="/SpaceTable"><SpaceTable Spaces={this.state.Spaces} /></Route>
            <Route path="/UserTable"><UserTable Users={this.state.Users} /></Route>
            <Route path="/Charts"><Charts Orders={this.state.Orders} Spaces={this.state.Spaces}/></Route>
            <Route exact path="/"><Login /></Route>
          </Switch>
        </Router>
      );
    }
  }
}
export default Dashboard;
