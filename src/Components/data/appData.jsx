import React, { Component } from 'react';

import User from '../Classes/User';
import Availabillity from '../Classes/Availabillity';
import Equipment from '../Classes/Equipment';
import Facility from '../Classes/Facility';
import FieldEq from '../Classes/FieldEq';
import Space from '../Classes/Space';

class appData extends Component {
  
  constructor(props){
      super(props);
  }

    componentDidMount() {
        this.UsersApiUrl =
          "http://proj.ruppin.ac.il/igroup17/prod/api/User/";
        this.SpacesApiUrl =
          "http://proj.ruppin.ac.il/igroup17/prod/api/space";
        this.EquipmentApiUrl =
          "http://proj.ruppin.ac.il/igroup17/prod/api/Equipment/";
        this.FacilitiesApiUrl =
          "http://proj.ruppin.ac.il/igroup17/prod/api/Facilities/";
        this.AvailabilitiesApiUrl =
          "http://proj.ruppin.ac.il/igroup17/prod/api/Availability/";
        this.FieldEqApiUrl =
          "http://proj.ruppin.ac.il/igroup17/prod/api/FieldEq/";
    
        this.FetchGetUsers();
        this.FetchGetSpaces();
        this.FetchGetEquipment();
        this.FetchGetFacilities();
        this.FetchGetAvailabilities();
        this.FetchGetFieldsEq();
    
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
          );
      };
      FetchGetEquipment = () => {
        fetch(this.EquipmentApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                EquipmentList: result.map(
                  item => new Equipment(item.Id, item.Name, item.SpaceId)
                )
              });
            },
            error => { }
          );
      };
      FetchGetFacilities = () => {
        fetch(this.FacilitiesApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                Facilities: result.map(
                  item =>
                    new Facility(
                      item.FacilityId,
                      item.Parking,
                      item.Toilet,
                      item.Kitchen,
                      item.Intercom,
                      item.Accessible,
                      item.AirCondition,
                      item.Wifi,
                      item.SpaceId
                    )
                )
              });
            },
            error => { }
          );
      };
      FetchGetAvailabilities = () => {
        fetch(this.AvailabilitiesApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                Availablities: result.map(
                  item =>
                    new Availabillity(
                      item.Id,
                      item.Sunday,
                      item.Monday,
                      item.Tuesday,
                      item.Wednesday,
                      item.Thursday,
                      item.Friday,
                      item.Saturday,
                      item.SpaceId
                    )
                )
              });
            },
            error => { }
          );
      };
      FetchGetFieldsEq = () => {
        fetch(this.FieldEqApiUrl, {
          method: "GET"
        })
          .then(res => {
            return res.json();
          })
          .then(
            result => {
              this.setState({
                FieldsEquipment: result.map(
                  item => new FieldEq(item.Id, item.Field, item.Name)
                )
              });
            },
            error => { }
          );
      };
      showData = () => {
        console.log(this.state.Users);
        console.log(this.state.Spaces);
        console.log(this.state.EquipmentList);
        console.log(this.state.Facilities);
        console.log(this.state.Availablities);
        console.log(this.state.FieldsEquipment);
      }
  
      
    render() {
    
        return (
            
                <button onClick={this.showData}>check</button>
               
            
        );
    }
}

export default appData;











export const donutChartData = [
    { 'foodType': 'Beverages', 'percentSold': 16.5 },
    { 'foodType': 'Condiments', 'percentSold': 24 },
    { 'foodType': 'Produce', 'percentSold': 13 },
    { 'foodType': 'Meat/Poultry', 'percentSold': 16.5 },
    { 'foodType': 'Seafood', 'percentSold': 20 },
    { 'foodType': 'Other', 'percentSold': 10 }
  ];

  export const barChartQ4Months =['October', 'November', 'December'];
export const barChartMonthlyPercentages = [
  { name: 'Beverages', data: [14, 16, 19.5] },
  { name: 'Condiments', data: [24, 23.5, 24.5] },
  { name: 'Produce', data: [12.5, 12.5, 14] },
  { name: 'Meat/Poultry', data: [16, 18, 17] },
  { name: 'Seafood', data: [21.5, 20, 17] },
  { name: 'Other', data: [7, 12, 11] },
];

export const gridData = [
  {
      "ProductID": 1,
      "ProductName": "Chai",
      "SupplierID": 1,
      "CategoryID": 1,
      "QuantityPerUnit": "10 boxes x 20 bags",
      "UnitPrice": 18,
      "UnitsInStock": 39,
      "UnitsOnOrder": 0,
      "ReorderLevel": 10,
      "Discontinued": false,
      "Category": {
          "CategoryID": 1,
          "CategoryName": "Beverages",
          "Description": "Soft drinks, coffees, teas, beers, and ales"
      },
      "FirstOrderedOn": new Date(1996, 8, 20)
  },
  {
      "ProductID": 2,
      "ProductName": "Chang",
      "SupplierID": 1,
      "CategoryID": 1,
      "QuantityPerUnit": "24 - 12 oz bottles",
      "UnitPrice": 19,
      "UnitsInStock": 17,
      "UnitsOnOrder": 40,
      "ReorderLevel": 25,
      "Discontinued": false,
      "Category": {
          "CategoryID": 1,
          "CategoryName": "Beverages",
          "Description": "Soft drinks, coffees, teas, beers, and ales"
      },
      "FirstOrderedOn": new Date(1996, 7, 12)
  },
  {
      "ProductID": 3,
      "ProductName": "Aniseed Syrup",
      "SupplierID": 1,
      "CategoryID": 2,
      "QuantityPerUnit": "12 - 550 ml bottles",
      "UnitPrice": 10,
      "UnitsInStock": 13,
      "UnitsOnOrder": 70,
      "ReorderLevel": 25,
      "Discontinued": false,
      "Category": {
          "CategoryID": 2,
          "CategoryName": "Condiments",
          "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "FirstOrderedOn": new Date(1996, 8, 26)
  },
  {
      "ProductID": 4,
      "ProductName": "Chef Anton's Cajun Seasoning",
      "SupplierID": 2,
      "CategoryID": 2,
      "QuantityPerUnit": "48 - 6 oz jars",
      "UnitPrice": 22,
      "UnitsInStock": 53,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": false,
      "Category": {
          "CategoryID": 2,
          "CategoryName": "Condiments",
          "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "FirstOrderedOn": new Date(1996, 9, 19)
  },
  {
      "ProductID": 5,
      "ProductName": "Chef Anton's Gumbo Mix",
      "SupplierID": 2,
      "CategoryID": 2,
      "QuantityPerUnit": "36 boxes",
      "UnitPrice": 21.35,
      "UnitsInStock": 0,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": true,
      "Category": {
          "CategoryID": 2,
          "CategoryName": "Condiments",
          "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "FirstOrderedOn": new Date(1996, 7, 17)
  },
  {
      "ProductID": 6,
      "ProductName": "Grandma's Boysenberry Spread",
      "SupplierID": 3,
      "CategoryID": 2,
      "QuantityPerUnit": "12 - 8 oz jars",
      "UnitPrice": 25,
      "UnitsInStock": 120,
      "UnitsOnOrder": 0,
      "ReorderLevel": 25,
      "Discontinued": false,
      "Category": {
          "CategoryID": 2,
          "CategoryName": "Condiments",
          "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "FirstOrderedOn": new Date(1996, 9, 19)
  },
  {
      "ProductID": 7,
      "ProductName": "Uncle Bob's Organic Dried Pears",
      "SupplierID": 3,
      "CategoryID": 7,
      "QuantityPerUnit": "12 - 1 lb pkgs.",
      "UnitPrice": 30,
      "UnitsInStock": 15,
      "UnitsOnOrder": 0,
      "ReorderLevel": 10,
      "Discontinued": false,
      "Category": {
          "CategoryID": 7,
          "CategoryName": "Produce",
          "Description": "Dried fruit and bean curd"
      },
      "FirstOrderedOn": new Date(1996, 7, 22)
  },
  {
      "ProductID": 8,
      "ProductName": "Northwoods Cranberry Sauce",
      "SupplierID": 3,
      "CategoryID": 2,
      "QuantityPerUnit": "12 - 12 oz jars",
      "UnitPrice": 40,
      "UnitsInStock": 6,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": false,
      "Category": {
          "CategoryID": 2,
          "CategoryName": "Condiments",
          "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
      },
      "FirstOrderedOn": new Date(1996, 11, 1)
  },
  {
      "ProductID": 9,
      "ProductName": "Mishi Kobe Niku",
      "SupplierID": 4,
      "CategoryID": 6,
      "QuantityPerUnit": "18 - 500 g pkgs.",
      "UnitPrice": 97,
      "UnitsInStock": 29,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": true,
      "Category": {
          "CategoryID": 6,
          "CategoryName": "Meat/Poultry",
          "Description": "Prepared meats"
      },
      "FirstOrderedOn": new Date(1997, 1, 21)
  },
  {
      "ProductID": 10,
      "ProductName": "Ikura",
      "SupplierID": 4,
      "CategoryID": 8,
      "QuantityPerUnit": "12 - 200 ml jars",
      "UnitPrice": 31,
      "UnitsInStock": 31,
      "UnitsOnOrder": 0,
      "ReorderLevel": 0,
      "Discontinued": false,
      "Category": {
          "CategoryID": 8,
          "CategoryName": "Seafood",
          "Description": "Seaweed and fish"
      },
      "FirstOrderedOn": new Date(1996, 8, 5)
  }
];