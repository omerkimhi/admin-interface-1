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

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "New Users",
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(171, 135, 255,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(171, 135, 255,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [10, 21, 11, 17, 36, 27, 0, 0, 0, 0, 0, 0]
    }
  ]
};

const pieData = {
  labels: ["Art", "Beauty", "Sport"],
  datasets: [
    {
      data: [82, 386, 45],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

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
      avgRankSport: null,
      avgRankArt: null,
      avgRankBeauty: null,
      avgRankSpace: null,

      //date
      curTime: new Date().toLocaleString(),
      SpaceInWeek: [],
      SpaceInMonth: [],
      //user type
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
      UsersSpacesDataset: {
        labels: [
          'Users',
          'Spaces',
        ],

        datasets: [{
          data: [0, 0],
          backgroundColor: [
            'RGB(240, 128, 128)',
            'RGB(40, 180, 99)',
          ],
          hoverBackgroundColor: [
            'RGB(240, 128, 128)',
            'rgb(40, 180, 99)',
          ]
        }]
      },

      SpaceByMonth: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "New Spaces",
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      },

      UserByMonth: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "New Spaces",
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
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
    this.getUploadMonthUser()
    this.usersSpacesDataset();
  }

  fieldsPieDataset = () => {
    // let art = 0;
    // let sport = 0;
    // let beauty = 0;
    // this.props.Spaces.map((space) => {
    //   switch (space.Field) {
    //     case "Art": art += 1; break;
    //     case "Sport": sport += 1; break;
    //     case "Beauty": beauty += 1; break;
    //   }
    // });
    let pieData = {
      labels: ["Art", "Beauty", "Sport"],
      datasets: [
        {
          data: [this.state.artSpaces.length, this.state.beautySpaces.length, this.state.sportSpaces.length],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    }
    this.setState({ pieData: pieData })
  }

  usersSpacesDataset = () => {

    let spaces = this.props.Spaces.length;
    let users = this.props.Users.length;
    let dataSet = {
      labels: [
        'Users',
        'Spaces',
      ],
      datasets: [{
        data: [users, spaces],
        backgroundColor: [
          'RGB(240, 128, 128)',
          'RGB(40, 180, 99)',
        ],
        hoverBackgroundColor: [
          'RGB(240, 128, 128)',
          'rgb(40, 180, 99)',
        ]
      }]
    }
    this.setState({
      usersSpacesDataset: dataSet
    })
  }
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
    }

    this.setState(
      { sportSpaces: sArray, beautySpaces: bArray, artSpaces: aArray, pieData: pieData },
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
      if (space.field === "Art") beautyAvg.push(space.price);
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
    let spaceAvg = [];
    let beautyAvg = [];
    let artAvg = [];
    let sportAvg = [];

    //Average Rank per field
    this.state.Spaces.map((space) => {
      if (space.field === "Sport") sportAvg.push(space.rank);
      if (space.field === "Art") artAvg.push(space.rank);
      if (space.field === "Beauty") beautyAvg.push(space.rank);
    });
    let sumB = beautyAvg.reduce((previous, current) => (current += previous));
    let avgB = Number(sumB / beautyAvg.length).toFixed(2);
    let sumA = artAvg.reduce((previous, current) => (current += previous));
    let avgA = Number(sumA / artAvg.length).toFixed(2);
    let sumS = sportAvg.reduce((previous, current) => (current += previous));
    let avgS = Number(sumS / artAvg.length).toFixed(2);

    //Average space rank
    this.state.Spaces.map((space) => {
      if (space.rank !== 0 || space.rank !== null) spaceAvg.push(space.rank);
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
    this.setState({ userType: landLord });
  };
  getUploadMonthUser = () => {
    let monthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.state.Users.map((user) => {
      switch (moment(user.uploadtime).month()) {
        case 1: monthData[0] += 1; break;
        case 2: monthData[1] += 1; break;
        case 3: monthData[2] += 1; break;
        case 4: monthData[3] += 1; break;
        case 5: monthData[4] += 1; break;
        case 6: monthData[5] += 1; break;
        case 7: monthData[6] += 1; break;
        case 8: monthData[7] += 1; break;
        case 9: monthData[8] += 1; break;
        case 10: monthData[9] += 1; break;
        case 11: monthData[10] += 1; break;
        case 12: monthData[11] += 1; break;
      }

      let UserByMonth = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "New Spaces",
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: monthData
          }
        ]
      }

      this.setState({ UserByMonth: UserByMonth })

    });
  }

  getUploadMonthSpace = () => {
    let monthData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    this.state.Spaces.map((space) => {
      switch (moment(space.uploadtime).month()) {
        case 1: monthData[0] += 1; break;
        case 2: monthData[1] += 1; break;
        case 3: monthData[2] += 1; break;
        case 4: monthData[3] += 1; break;
        case 5: monthData[4] += 1; break;
        case 6: monthData[5] += 1; break;
        case 7: monthData[6] += 1; break;
        case 8: monthData[7] += 1; break;
        case 9: monthData[8] += 1; break;
        case 10: monthData[9] += 1; break;
        case 11: monthData[10] += 1; break;
        case 12: monthData[11] += 1; break;
      }
      let SpaceByMonth = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "New Spaces",
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: monthData
          }
        ]
      }

      this.setState({ SpaceByMonth: SpaceByMonth })

    });
  }

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: "auto" });
  };

  render() {
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
              <h1 className="headerLine"> Spaces Stats</h1>
            </Row>
            <Row>
              <Col  md={4} sm={12}>
                <br />
                <Card
                  header={"Rank"}
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
                  header={"TOP rated space"}
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
                  header={"Fields"}
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
            <Row style={{ paddingLeft: "15%", paddingRight: "15%" }}>


              <Col >
                <br />
                <h4>Spaces to Users Ratio </h4>
                <Doughnut data={this.state.usersSpacesDataset}></Doughnut>
              </Col>

              <Col style={{ marginLeft: "auto", float: "left" }}>
                <br />
                <h4>Amount of spaces by field</h4>
                <Pie data={this.state.pieData}></Pie>
              </Col>
            </Row>
            <br />
            <Col style={{ justifyContent: "center" }}>
              <br />
              <h1 style={{textAlign: "center"}}> Database Stats</h1>
            </Col>
            <Row style={{ paddingLeft: "15%" }} >
              <Col>
                <br></br>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h2>Users STATS</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5>Number of users: </h5>
                    <h4>{this.props.Users.length}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h5>Number of landlords: </h5>
                    <h4>{this.state.userType.length}</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <h5>Number of tenants: </h5>
                    <h4>
                      {this.props.Users.length - this.state.userType.length}
                    </h4>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <br />
                <Card
                  header={"Data Base"}
                  sport={"Spaces in DB:"}
                  dataSport={this.props.Spaces.length}
                  art={"New spaces added in last 7 days:"}
                  dataArt={this.state.SpaceInWeek.length}
                  beauty={"New spaces added in last 30 days:"}
                  dataBeauty={this.state.SpaceInMonth.length}
                />
              </Col>
            </Row>

            <Row style={{ paddingLeft: "15%", paddingRight: "15%" }}>
              <Col>
                <br />
                <Line data={lineData}></Line>
              </Col>
              <Col style={{ marginLeft: "auto", float: "left" }}>
                <br />
                <Line data={this.state.SpaceByMonth}></Line>
              </Col>
            </Row>
            <br />
            <Row style={{ justifyContent: "center" }} >
              <br />
              <h1> Spaces stats by field</h1>
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
          </div>
        </Container>
      </Ripple>
    );
  }
}
export default Details;


/* <Ripple>
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
              <br/>
           <h5>Fields</h5>
           <br/>
           <h5>SPORT Number of spaces: </h5><h4> {this.state.sportSpaces.length}</h4>
           <br/>
           <h5>ART Number of spaces:   </h5><h4> {this.state.artSpaces.length}</h4>
          <br/>
           <h5>Beauty Number of spaces: </h5><h4> {this.state.beautySpaces.length}</h4>
          <br/>
             <Pie
      data={state}
      options={{
        title:{
          display:true,
          text:"",
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    />


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
  </Ripple> */
