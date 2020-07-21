import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';

//CLASSES
import User from '../Classes/User';
import Space from '../Classes/Space';
import Order from '../Classes/Order';
import Grade from '../Classes/Grade';
//COMPONENTS
import Details from '../Components/Details/details';
import SpaceTable from '../Components/Tables/SpaceTable';
import UserTable from '../Components/Tables/UserTable';
import Login from "../Components/Login/login";
import Charts from '../Components/Charts/Charts';
import Orders from '../Components/Charts/OrdersCharts';

import Control from './Control.jsx'
import Footer from './Footer';
import Graph from './Graph';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //for log in
      isLogged: false,
      userLogged: "",
      //for fetch data
      Spaces: [],
      Orders: [],
      Users: [],
      Grade: [],
    };
  }
  componentDidMount() {
    if (localStorage.getItem('user')) {
      this.setState({
        isLogged: true,
        userLogged: localStorage.getItem('user'),
      })
    }
    this.SpacesApiUrl =
      "https://proj.ruppin.ac.il/igroup17/prod/api/space";
    this.OrdersApiUrl =
      "https://proj.ruppin.ac.il/igroup17/prod/api/order";
    this.UsersApiUrl =
      "https://proj.ruppin.ac.il/igroup17/prod/api/user";
    this.GradeApiUrl =
      "http://proj.ruppin.ac.il/igroup17/proj/api/grade/"

    this.FetchGetUsers();
    this.FetchGetSpaces();
    this.FetchGetOrders();
    //this.FetchGetEquipment();
    //this.FetchGetFacilities();
    //this.FetchGetAvailabilities();
    //this.FetchGetFieldsEq();
    this.FetchGetArtFilters();
    this.FetchGetArtFiltersData();
    this.FetchGetBeautyFilter();
    this.FetchGetBeautyFilterData();
    this.FetchGetSportFilters();
    this.FetchGetSportFiltersData();
    this.FetchGetFavourites();
    this.FetchGetSpaceVisits();
    this.FetchGetRatings();
    this.FetchGetSearches();
    this.FetchGetSpacesData();
    this.FetchGetGrade();


  }

  FetchGetArtFilters = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/ArtFilter", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            ArtFilters: [...result]

          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetArtFiltersData = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/ArtFilter/Data", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          var temp = [{ Name: "Counter", Value: result.Counter },
          { Name: "minCapacityAvg", Value: result.minCapacityAvg },
          { Name: "maxCapacityAvg", Value: result.maxCapacityAvg },
          { Name: "minPriceAvg", Value: result.minPriceAvg },
          { Name: "maxPriceAvg", Value: result.maxPriceAvg },
          { Name: "MaxDistanceAvg", Value: result.MaxDistanceAvg },
          { Name: "AvgStartTimeMinutes", Value: result.AvgStartTimeMinutes },
          { Name: "AvgEndTimeMinutes", Value: result.AvgEndTimeMinutes },
          { Name: "Toilet", Value: result.ToiletCounter / result.Counter * 100 },
          { Name: "Parking", Value: result.ParkingCounter / result.Counter * 100 },
          { Name: "Kitchen", Value: result.KitchenCounter / result.Counter * 100 },
          { Name: "Intercom", Value: result.IntercomCounter / result.Counter * 100 },
          { Name: "Accessible", Value: result.AccessibleCounter / result.Counter * 100 },
          { Name: "AirCondition", Value: result.AirConditionCounter / result.Counter * 100 },
          { Name: "WiFi", Value: result.WiFiCounter / result.Counter * 100 },
          { Name: "CanvasCounter", Value: result.CanvasCounter },
          { Name: "GreenScreenCounter", Value: result.GreenScreenCounter },
          { Name: "PottersWheelCounter", Value: result.PottersWheelCounter },
          { Name: "GuitarCounter", Value: result.GuitarCounter },
          { Name: "DrumCounter", Value: result.DrumCounter },
          { Name: "SpeakerCounter", Value: result.SpeakerCounter }];
          this.setState({
            ArtFiltersData: temp,
            ArtCounters: [temp[8], temp[9], temp[10], temp[11], temp[12], temp[13], temp[14]],
            ArtEqCounters: [temp[15].Value, temp[16].Value, temp[17].Value, temp[18].Value, temp[19].Value, temp[20].Value]

          },
          );
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetBeautyFilter = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/BeautyFilter", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            BeautyFilters: [...result],


          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetBeautyFilterData = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/BeautyFilter/Data", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          var temp = [{ Name: "Counter", Value: result.Counter },
          { Name: "minCapacityAvg", Value: result.minCapacityAvg },
          { Name: "maxCapacityAvg", Value: result.maxCapacityAvg },
          { Name: "minPriceAvg", Value: result.minPriceAvg },
          { Name: "maxPriceAvg", Value: result.maxPriceAvg },
          { Name: "MaxDistanceAvg", Value: result.MaxDistanceAvg },
          { Name: "AvgStartTimeMinutes", Value: result.AvgStartTimeMinutes },
          { Name: "AvgEndTimeMinutes", Value: result.AvgEndTimeMinutes },
          { Name: "Toilet", Value: result.ToiletCounter / result.Counter * 100 },
          { Name: "Parking", Value: result.ParkingCounter / result.Counter * 100 },
          { Name: "Kitchen", Value: result.KitchenCounter / result.Counter * 100 },
          { Name: "Intercom", Value: result.IntercomCounter / result.Counter * 100 },
          { Name: "Accessible", Value: result.AccessibleCounter / result.Counter * 100 },
          { Name: "AirCondition", Value: result.AirConditionCounter / result.Counter * 100 },
          { Name: "WiFi", Value: result.WiFiCounter / result.Counter * 100 },
          { Name: "DryersCounter", Value: result.DryersCounter },
          { Name: "NailPolishRacksCounter", Value: result.NailPolishRacksCounter },
          { Name: "ReceptionAreaSeatingandDecorCounter", Value: result.ReceptionAreaSeatingandDecorCounter },
          { Name: "LaserHairRemovalCounter", Value: result.LaserHairRemovalCounter },
          { Name: "PedicureManicureCounter", Value: result.PedicureManicureCounter },
          { Name: "HairColoringKitCounter", Value: result.HairColoringKitCounter }];
          this.setState({
            BeautyFiltersData: temp,
            BeautyCounters: [temp[8], temp[9], temp[10], temp[11], temp[12], temp[13], temp[14]],
            BeautyEqCounters: [temp[15].Value, temp[16].Value, temp[17].Value, temp[18].Value, temp[19].Value, temp[20].Value]


          },
          );
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetSportFilters = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/SportFilter", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            SportFilters: [...result]

          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetSportFiltersData = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/SportFilter/Data", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          var temp = [{ Name: "Counter", Value: result.Counter },
          { Name: "minCapacityAvg", Value: result.minCapacityAvg },
          { Name: "maxCapacityAvg", Value: result.maxCapacityAvg },
          { Name: "minPriceAvg", Value: result.minPriceAvg },
          { Name: "maxPriceAvg", Value: result.maxPriceAvg },
          { Name: "MaxDistanceAvg", Value: result.MaxDistanceAvg },
          { Name: "AvgStartTimeMinutes", Value: result.AvgStartTimeMinutes },
          { Name: "AvgEndTimeMinutes", Value: result.AvgEndTimeMinutes },
          { Name: "Toilet", Value: result.ToiletCounter / result.Counter * 100 },
          { Name: "Parking", Value: result.ParkingCounter / result.Counter * 100 },
          { Name: "Kitchen", Value: result.KitchenCounter / result.Counter * 100 },
          { Name: "Intercom", Value: result.IntercomCounter / result.Counter * 100 },
          { Name: "Accessible", Value: result.AccessibleCounter / result.Counter * 100 },
          { Name: "AirCondition", Value: result.AirConditionCounter / result.Counter * 100 },
          { Name: "WiFi", Value: result.WiFiCounter / result.Counter * 100 },
          { Name: "TRXCounter", Value: result.TRXCounter },
          { Name: "TreadmillCounter", Value: result.TreadmillCounter },
          { Name: "StationaryBicycleCounter", Value: result.StationaryBicycleCounter },
          { Name: "BenchCounter", Value: result.BenchCounter },
          { Name: "DumbellsCounter", Value: result.DumbellsCounter },
          { Name: "BarbellCounter", Value: result.BarbellCounter }];
          this.setState({
            SportFiltersData: temp,
            SportCounters: [temp[8], temp[9], temp[10], temp[11], temp[12], temp[13], temp[14]],
            SportEqCounters: [temp[15].Value, temp[16].Value, temp[17].Value, temp[18].Value, temp[19].Value, temp[20].Value]//eq = equipment


          }
          );
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetSpaceVisits = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/SpaceVisit", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            SpaceVisits: [...result]

          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetSearches = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/Search", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Searches: [...result]


          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetRatings = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/Rating", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            SpaceVisits: [...result]

          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetFavourites = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/Favourite", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Favourites: [...result]

          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };
  FetchGetSpacesData = () => {
    fetch("https://proj.ruppin.ac.il/igroup17/proj/api/SpaceData/AllSpaces", {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            SpacesData: [...result]

          });
        },
        error => {
          console.log('Fetch Error :', error);
        }
      );
  };

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
                  item.Photo,
                  item.SpaceOwner,
                  item.Visits,
                  item.Rank,
                  item.RegistrationDate,



                )
            )
          },

          )
        },
        error => { }
      );
  };
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
  FetchGetGrade = () => {
    fetch(this.GradeApiUrl, {
      method: "GET"
    })
      .then(res => {
        return res.json();
      })
      .then(
        result => {
          this.setState({
            Grade: result.map(
              item =>
                new Grade(
                  item.Capacity,
                  item.Conversion,
                  item.Equipment,
                  item.Facility,
                  item.GradeId,
                  item.ModifiedDate,
                  item.Order,
                  item.Premium,
                  item.Price,
                  item.Rating
                )
            )
          });
        },
        error => { }
      );
  };

  checkLogged = (isLog, user) => {

    this.setState({
      isLogged: isLog,
      userLogged: user,

    })

  }

  render() {

    /*     <Router>
        <Switch>
          <Route path="/details" exact><Details Spaces={this.state.Spaces} Users={this.state.Users}/></Route>
          <Route path="/SpaceTable" exact><SpaceTable Spaces={this.state.Spaces} /></Route>
          <Route path="/UserTable" exact strict><UserTable Users={this.state.Users} /></Route>
          <Route path="/Charts" exact><Charts Orders={this.state.Orders} Spaces={this.state.Spaces}/></Route>
          <Route exact path="/"><Login /></Route>
        </Switch>
      </Router> */
    //login
    /* if (!this.state.isLogged) {
      return (
        <Router><Login isLogged={this.state.isLogged} checkLogged={this.checkLogged} /></Router>
      );
    }  */
    if (this.state.Spaces.length === 0 || this.state.Orders.length === 0 || this.state.Users.length === 0) {
      return <h1>LOADING</h1>
    }
    else {
      if (!this.state.isLogged) {
        return (
          <Router>



            <Switch>

              <Route exact path="/"><Login checkLogged={this.checkLogged} /></Route>

            </Switch>
          </Router>
        )
      }
      else return (

        <Router>
          <div> <NavBar isLogged={this.state.isLogged} userLogged={this.state.userLogged} checkLogged={this.checkLogged}></NavBar></div>


          <Switch>
            <Route exact path="/"><Details Spaces={this.state.Spaces} Users={this.state.Users} /></Route>
            <Route path="/SpaceTable"><SpaceTable Spaces={this.state.Spaces} /></Route>
            <Route path="/UserTable"><UserTable Users={this.state.Users} /></Route>
            <Route path="/Charts"><Charts Orders={this.state.Orders} Spaces={this.state.Spaces} /></Route>
            <Route path="/Orders"><Orders Orders={this.state.Orders} Spaces={this.state.Spaces} /></Route>
            <Route path="/Control"><Control Grade={this.state.Grade} /></Route>

            <Route path="/Graph"><Graph Searches={this.state.Searches} ArtFiltersData={this.state.ArtCounters} BeautyFiltersData={this.state.BeautyCounters} SportFiltersData={this.state.SportCounters}
              ArtFilters={this.state.ArtFilters} BeautyFilters={this.state.BeautyFilters} SportFilters={this.state.SportFilters} ArtEqCounters={this.state.ArtEqCounters} BeautyEqCounters={this.state.BeautyEqCounters} SportEqCounters={this.state.SportEqCounters}></Graph></Route>
          </Switch>
          <Footer></Footer>
        </Router>

      );
    }


  }
}

export default Dashboard;
