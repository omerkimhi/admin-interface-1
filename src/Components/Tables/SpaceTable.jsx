import React, { forwardRef, Component } from "react";

//Data table icons
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SpaceDel: [],
      //Space Data Table
      columns: [
        { title: "SpaceId", field: "spaceId", type: "numeric" },
        { title: "Name", field: "name" },
        { title: "Field", field: "field" },
        { title: "Price", field: "price", type: "numeric" },
        { title: "City", field: "city" },
        { title: "Street", field: "street" },
        { title: "Number", field: "number", type: "numeric" },
        { title: "Capabillity", field: "capabillity", type: "numeric" },
        { title: "User Email", field: "userEmail" },
       
      ],
      data: this.props.Spaces,
    };
  }

  componentDidMount() {
    this.SpacesApiUrl = "https://proj.ruppin.ac.il/igroup17/prod/api/space";
  }

  //delete space from DB
  deleteData = (item) => {
    let str = this.SpacesApiUrl + "/" + item;
    fetch(str, {
      method: "delete",
    });
  };

  render() {
    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => (
        <DeleteOutline {...props} ref={ref} />
      )),
      DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
      )),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
      )),
      PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
      )),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
      )),
      ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
      )),
      ViewColumn: forwardRef((props, ref) => (
        <ViewColumn {...props} ref={ref} />
      )),
    };

    return (
      <div className="container">
        <br />
        <br />
        <MaterialTable
          icons={tableIcons}
          title="SPACES IN SYSTEM"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    this.deleteData(oldData.spaceId);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
        <br />
        <br />
      </div>
    );
  }
}
