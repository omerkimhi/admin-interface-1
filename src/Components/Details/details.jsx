import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./details.css";
import "@progress/kendo-theme-material/dist/all.css";
import "bootstrap-4-grid/css/grid.min.css";
import { ListGroup, Row, Col } from "react-bootstrap";
import { Button } from "@progress/kendo-react-buttons";
import { savePDF } from "@progress/kendo-react-pdf";
import { Ripple } from "@progress/kendo-react-ripple";
import Container from "@material-ui/core/Container";
import { Pie, Line, Doughnut } from "react-chartjs-2";
import * as moment from "moment";
import Card from "../Details/CCCardStat.jsx";

class Details extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      isLoading: true,
      Spaces: this.props.Spaces,
      Users: this.props.Users,
      //array by field
      sportSpaces: [],
      beautySpaces: [],
      artSpaces: [],
      //Average prices by field
      sportPrice: null,
      artPrice: null,
      beautyPrice: null,
      spacesPrice: null,
      //Prices By field MIN/MAX
      artMax: null,
      artMin: null,
      beautyMax: null,
      beautyMin: null,
      sportMax: null,
      sportMin: null,
      //top rated spaces
      topRankSport: "",
      topRankArt: "",
      topRankBeauty: "",
      topRankSpace: null,
      avgRankSport: 0,
      avgRankArt: 0,
      avgRankBeauty: 0,
      avgRankSpace: 0,
      //date
      curTime: new Date().toLocaleString(),
      SpaceInWeek: [],
      SpaceInMonth: [],
      //user type
      tenants: null,
      userType: [],
      pieData: {
        labels: ["Art", "Beauty", "Sport"],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
        ],
      },
      PremiumRegularData: {
        labels: ["Premium", "Regular"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#FF6384", "#36A2EB"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      },
      UsersSpacesDataset: {
        labels: ["Users", "Spaces"],
        datasets: [
          {
            data: null,
            backgroundColor: ["RGB(240, 128, 128)", "RGB(40, 180, 99)"],
            hoverBackgroundColor: ["RGB(240, 128, 128)", "rgb(40, 180, 99)"],
          },
        ],
      },
      LandlordsTenantsDataset: {
        labels: ["Landlords", "Tenants"],
        datasets: [
          {
            data: null,
            backgroundColor: ["RGB(240, 128, 128)", "RGB(40, 180, 99)"],
            hoverBackgroundColor: ["RGB(240, 128, 128)", "rgb(40, 180, 99)"],
          },
        ],
      },
      SpaceByMonth: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "New Spaces",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      },
      UserByMonth: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "New Spaces",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      },
    };
  }
  componentDidMount() {



    this.getPrices();
    this.getRank();
    this.getNumberOfEachField();
    this.getUpload();
    this.getUserType();
    this.getUploadMonthSpace();
    this.getUploadMonthUser();
    this.usersSpacesDataset();
    this.LandlordsTenantsDataset();

    console.log("componentDidMount Details  in time:",new Date().toLocaleString());
    
    console.log("this.state.spaces",this.state.Spaces);

    console.log("this.props.Spaces",this.props.Spaces);

    console.log("avgRankBeauty",this.state.avgRankBeauty);

        console.log("avgRankSport",this.state.avgRankSport);

        console.log("avgRankArt",this.state.avgRankArt);

    console.log("avgRankSpace",this.state.avgRankSpace);

    

  }
  LandlordsTenantsDataset = () => {
    let landlords = 0;
    let tenants = 0;
    let premiums = 0;
    let regulars = 0;
    this.props.Users.map((user) => {
      if (user.spaceOwner) {
        landlords += 1;
        user.premium ? (premiums += 1) : (regulars += 1);
      } else {
        tenants += 1;
      }
    });
    let dataSet = {
      labels: ["Landlords", "Tenants"],
      datasets: [
        {
          data: [landlords, tenants],
          backgroundColor: ["RGB(240, 128, 128)", "RGB(40, 180, 99)"],
          hoverBackgroundColor: ["RGB(240, 128, 128)", "rgb(40, 180, 99)"],
        },
      ],
    };
    let PremiumRegularData = {
      labels: ["Premium", "Regular"],
      datasets: [
        {
          data: [premiums, regulars],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        },
      ],
    };
    this.setState({
      LandlordsTenantsDataset: dataSet,
      PremiumRegularData: PremiumRegularData,
    });
  };
  fieldsPieDataset = () => {
    let pieData = {
      labels: ["Art", "Beauty", "Sport"],
      datasets: [
        {
          data: [
            this.state.artSpaces.length,
            this.state.beautySpaces.length,
            this.state.sportSpaces.length,
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
    this.setState({ pieData: pieData });
  };
  usersSpacesDataset = () => {
    let spaces = this.props.Spaces.length;
    let users = this.props.Users.length;
    let dataSet = {
      labels: ["Users", "Spaces"],
      datasets: [
        {
          data: [users, spaces],
          backgroundColor: ["RGB(240, 128, 128)", "RGB(40, 180, 99)"],
          hoverBackgroundColor: ["RGB(240, 128, 128)", "rgb(40, 180, 99)"],
        },
      ],
    };
    this.setState({
      UsersSpacesDataset: dataSet,
    });
  };
  //gets number of spaces in each field
  getNumberOfEachField = () => {
    let sArray = [];
    let aArray = [];
    let bArray = [];
    this.state.Spaces.map((space) => {
      if (space.field === "Sport") sArray.push(space);
      if (space.field === "Art") aArray.push(space);
      if (space.field === "Beauty") bArray.push(space);
    });
    let pieData = {
      labels: ["Art", "Beauty", "Sport"],
      datasets: [
        {
          data: [aArray.length, bArray.length, sArray.length],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };
    this.setState(
      {
        sportSpaces: sArray,
        beautySpaces: bArray,
        artSpaces: aArray,
        pieData: pieData,
      },
      () => {
        this.getHighRank();
      }
    );
  };
  //Prices: Avg, Min, Max
  getPrices = () => {
    //init
    let spaceAvg = [];
    let sportAvg = [];
    let artAvg = [];
    let beautyAvg = [];

    //total avg
    this.state.Spaces.map((space) => {
      spaceAvg.push(space.price);
    });

    let sumSpace = spaceAvg.reduce(
      (previous, current) => (current += previous)
    );
    let avgSpace = Number(sumSpace / spaceAvg.length).toFixed(2);
    //sport avg min max
    this.state.Spaces.map((space) => {
      if (space.field === "Sport") sportAvg.push(space.price);
    });
    let sumSport = sportAvg.reduce(
      (previous, current) => (current += previous)
    );
    let avgSport = Number(sumSport / sportAvg.length).toFixed(2);
    let maxSport = Number(Math.max.apply(null, sportAvg)).toFixed(2);
    let minSport = Number(Math.min.apply(null, sportAvg)).toFixed(2);
    //art avg min max
    this.state.Spaces.map((space) => {
      if (space.field === "Art") artAvg.push(space.price);
    });
    let sumArt = artAvg.reduce((previous, current) => (current += previous));
    let avgArt = Number(sumArt / artAvg.length).toFixed(2);
    let maxArt = Number(Math.max.apply(null, artAvg)).toFixed(2);
    let minArt = Number(Math.min.apply(null, artAvg)).toFixed(2);
    //beauty avg min max
    this.state.Spaces.map((space) => {
      if (space.field === "Beauty") beautyAvg.push(space.price);
    });
    let sumBeauty = beautyAvg.reduce(
      (previous, current) => (current += previous)
    );
    let avgBeauty = Number(sumBeauty / beautyAvg.length).toFixed(2);
    let maxBeauty = Number(Math.max.apply(null, beautyAvg)).toFixed(2);
    let minBeauty = Number(Math.min.apply(null, beautyAvg)).toFixed(2);

    //finish
    this.setState({
      sportPrice: avgSport,
      sportMax: maxSport,
      sportMin: minSport,
      spacesPrice: avgSpace,
      artPrice: avgArt,
      artMax: maxArt,
      artMin: minArt,
      beautyPrice: avgBeauty,
      beautyMax: maxBeauty,
      beautyMin: minBeauty,
    });
  };
  //Rank
  getRank = () => {
    //init
    console.log("calccccc rank ")
    let spaceAvg = [];
    let beautyAvg = [];
    let artAvg = [];
    let sportAvg = [];
    let artRatingCounter = 0;
    let beautyRatingCounter = 0;
    let sportRatingCounter = 0;
    let sumB = 0;
    let sumA = 0;
    let sumS = 0;
    //Average Rank per field
    this.state.Spaces.map((space) => {
      if (space.field === "Sport") {
        if (space.rank !== 3.499) {
          sportAvg.push(space.rank);
          sportRatingCounter++;
          sumS = sportAvg.reduce((previous, current) => (current += previous));
         
        }
      }

      if (space.field === "Art") {
        if (space.rank !== 3.499) {
          artAvg.push(space.rank);
          artRatingCounter++;
          sumA = artAvg.reduce((previous, current) => (current += previous));
        }
      }

      if (space.field === "Beauty") {
        if (space.rank !== 3.499) {
          beautyAvg.push(space.rank);
          beautyRatingCounter++;
          sumB = beautyAvg.reduce((previous, current) => (current += previous));
        }
      }
    });
    let avgB = Number(sumB / beautyRatingCounter).toFixed(2);
    let avgA = Number(sumA / artRatingCounter).toFixed(2);
    let avgS = Number(sumS / sportRatingCounter).toFixed(2);

    //Average space rank
    this.state.Spaces.map((space) => {
      if (space.rank !== 0 || space.rank !== null || space.rank !== 3.499)
        spaceAvg.push(space.rank);
    });
    let sumSpace = spaceAvg.reduce(
      (previous, current) => (current += previous)
    );
    let avgSpace = Number(sumSpace / spaceAvg.length).toFixed(2);
    //finish
    this.setState({
      avgRankBeauty: avgB,
      avgRankSport: avgS,
      avgRankArt: avgA,
      avgRankSpace: avgSpace,
    });
  };
  // top ranked space for every field
  getHighRank = () => {
    //init
    let topSport = "";
    let topBeauty = "";
    let topArt = "";
    let help = null;

    //get top rank
    this.state.sportSpaces.map((space) => {
      help = space.rank;
      if (help === Math.max(...this.state.sportSpaces.map((s) => s.rank))) {
        topSport = space.name;
      }
    });
    this.state.beautySpaces.map((space) => {
      help = space.rank;
      if (help === Math.max(...this.state.beautySpaces.map((s) => s.rank))) {
        topBeauty = space.name;
      }
    });
    this.state.artSpaces.map((space) => {
      help = space.rank;
      if (help === Math.max(...this.state.artSpaces.map((s) => s.rank))) {
        topArt = space.name;
      }
    });
    //finish
    this.setState({
      topRankSport: topSport,
      topRankBeauty: topBeauty,
      topRankArt: topArt,
    });
  };
  //how many spaces uploaded last week and month
  getUpload = () => {
    var week = [];
    var month = [];
    this.state.Spaces.map((space) => {
      //times
      var now = this.state.curTime;
      var then = space.uploadtime;
      //notice different formats between now and then
      var ms = moment(now, "DD/MM/YYYY HH:mm:ss").diff(
        moment(then, "MM/DD/YYYY HH:mm:ss")
      );
      var d = moment.duration(ms);
      if (d.days() <= 7) week.push(space.name);
      if (d.months() <= 1) month.push(space.name);
    });
    this.setState({ SpaceInWeek: week, SpaceInMonth: month });
  };
  //get tenants
  getUserType = () => {
    let landLord = [];

    this.props.Users.map((lord) => {
      if (lord.spaceOwner) {
        landLord.push(lord);
      }
    });
    let tempTenants = this.props.Users.length -landLord.length;
    this.setState({ userType: landLord , tenants: tempTenants});
  };
  getUploadMonthUser = () => {
    let monthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.state.Users.map((user) => {
      monthData[moment(user.registrationDate).month()] =
        monthData[moment(user.registrationDate).month()] + 1;
    });

    this.setState({
      UserByMonth: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "New Users",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: monthData,
          },
        ],
      },
    });
  };

  getUploadMonthSpace = () => {
    let monthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.state.Spaces.map((space) => {
      monthData[moment(space.uploadtime).month()] =
        monthData[moment(space.uploadtime).month()] + 1;
    });

    this.setState({
      SpaceByMonth: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "New Spaces",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: monthData,
          },
        ],
      },
    });
  };

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: "auto" });
  };

  render() {
    console.log("avgRankBeauty",this.state.avgRankBeauty);

    console.log("avgRankSport",this.state.avgRankSport);

    console.log("avgRankArt",this.state.avgRankArt);

console.log("avgRankSpace",this.state.avgRankSpace);
    if (this.state.Spaces.length === 0) {
      return <h1>LOADING</h1>
    }
    else{

   
    return (
      <Ripple>
        <Container ref={(el) => (this.appContainer = el)}>
          <br />
          <Button onClick={this.handlePDFExport}>Export to PDF</Button>
          <br />
          <br />
          <div className="container">
            <br />
            <Row style={{ justifyContent: "center" }}>
              <br />
              <h1 className="headerLine">Spaces Stats</h1>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <p>Here you will find statistics to help you manage and maintain the system </p>
            </Row>
            <Row>
              <Col lg={4} md={12}>
                <br />
                <Card
                  header={"By Rank"}
                  sport={"Average rank in sport:"}
                  dataSport={this.state.avgRankSport}
                  art={"Average rank  in art:"}
                  dataArt={this.state.avgRankArt}
                  beauty={"Average rank in beauty:"}
                  dataBeauty={this.state.avgRankBeauty}
                />
                <br />
              </Col>
              <Col md={4} sm={12}>
                <br />
                <Card
                  header={"Top Rated"}
                  sport={"Sport:"}
                  dataSport={this.state.topRankSport}
                  art={"Art:"}
                  dataArt={this.state.topRankArt}
                  beauty={"Beauty:"}
                  dataBeauty={this.state.topRankBeauty}
                />
              </Col>
              <Col md={4} sm={12}>
                <br />
                <Card
                  header={"By Fields"}
                  sport={"Sport Spaces:"}
                  dataSport={this.state.sportSpaces.length}
                  art={"Art Spaces:"}
                  dataArt={this.state.artSpaces.length}
                  beauty={"Beauty Spaces:"}
                  dataBeauty={this.state.beautySpaces.length}
                />
                <br />
              </Col>
            </Row>
            <Row style={rowStyle, { borderBottom: '3px solid #00726a' }}>
              <Col lg={6} md={12} sm={12} xs={12} >
                <br />
                <h4 style={{ textAlign: "center" }}>Spaces to Users Ratio </h4>
                <Doughnut data={this.state.UsersSpacesDataset}></Doughnut>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} style={leftColStyle}>
                <br />
                <h4 style={{ textAlign: "center" }}>
                  Amount of spaces by field
                </h4>
                <Pie data={this.state.pieData}></Pie>
                <br />
              </Col>
            </Row>
            <br />
            <Col style={{ justifyContent: "center" }}>
              <br />
              <h2 style={{ textAlign: "center" }}>Database Stats</h2>
            </Col>
            <Row style={{ paddingLeft: "15%" }}>
              <Col>
                <br></br>
                <Card
                  header={"Users Stats"}
                  sport={"Number of users:"}
                  dataSport={this.props.Users.length}
                  art={"Number of landlords:"}
                  dataArt={this.state.userType.length}
                  beauty={"Number of tenants:"}
                  dataBeauty={this.state.tenants}
                />
              </Col>
              <Col>
                <br /> 
                <Card
                  header={"Data Base"}
                  sport={"Spaces in DB:"}
                  dataSport={this.props.Spaces.length}
                  art={"Spaces added in the past 7 days:"}
                  dataArt={this.state.SpaceInWeek.length}
                  beauty={"Spaces added in the past 30 days:"}
                  dataBeauty={this.state.SpaceInMonth.length}
                />
              </Col>
            </Row>
            <Row style={rowStyle, {borderBottom: '3px solid #00726a' }}>
              <Col lg={6} md={12} sm={12} xs={12}>
                <br />
                <h3 style={{ textStyle }}>New users registered by month</h3>
                <br />
                <Line data={this.state.UserByMonth}></Line>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} style={leftColStyle}>
                <br />
                <h3 style={{ textStyle }}>New spaces uploaded by month</h3>
                <br />
                <Line data={this.state.SpaceByMonth}></Line>
                <br />
                <br />
              </Col>
            </Row>
            <br />
            <Row style={{ justifyContent: "center" }}>
              <br />
              <h2> Spaces stats by field</h2>
            </Row>
            <Row>
              <br />
              <Col>
                <br />
                <ListGroup.Item>
                  <h2>Beauty</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Average price:</h5>
                  <h4>{this.state.beautyPrice} ₪</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  <h5>Max price:</h5>
                  <h4>{this.state.beautyMax} ₪</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Min price:</h5>
                  <h4>{this.state.beautyMin} ₪</h4>
                </ListGroup.Item>
                <br />
              </Col>
              <Col>
                <br />
                <ListGroup.Item>
                  <h2>Sport</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Average price:</h5>
                  <h4>{this.state.sportPrice} ₪</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Max price:</h5>
                  <h4>{this.state.sportMax} ₪</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Min price:</h5>
                  <h4>{this.state.sportMin} ₪</h4>
                </ListGroup.Item>
              </Col>
              <Col>
                <br />
                <ListGroup.Item>
                  <h2>Art</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Average price:</h5>
                  <h4>{this.state.artPrice} ₪</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Max price:</h5>
                  <h4>{this.state.artMax} ₪</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Min price:</h5>
                  <h4>{this.state.artMin} ₪</h4>
                </ListGroup.Item>
                <br />
              </Col>
            </Row>
            <Row style={rowStyle}>
              <Col lg={6} md={12} sm={12} xs={12}>
                <br />
                <h4 style={{ textAlign: 'center' }} >Free Users: </h4>
                <h4 style={{ textAlign: 'center' }} >Landlords to Tenants Ratio </h4>
                <Doughnut data={this.state.LandlordsTenantsDataset}></Doughnut>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} style={leftColStyle}>
                <br />
                <h4 style={{ textAlign: 'center' }}>Premium Users:</h4>
                <h4 style={{ textAlign: 'center' }}>Landlords to Tenants Ratio</h4>
                <Pie data={this.state.PremiumRegularData}></Pie>
              </Col>
            </Row>
            <br />
            <br />
          </div>
        </Container>
      </Ripple>
    );
  } }
}
export default Details;

const leftColStyle = {
  marginLeft: "auto",
  float: "left",
};
const rowStyle = {
  paddingLeft: "15%",
  paddingRight: "15%",
};
const textStyle = {
  textAlign: "center",
};
