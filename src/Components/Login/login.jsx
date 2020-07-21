import React, { Component, Button } from "react";
import { withRouter } from "react-router-dom";
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            isLogged: this.props.isLogged,
            rememberMe: false
        }
    }


    componentDidMount() { this.AdminApiUrl = "http://proj.ruppin.ac.il/igroup17/prod/api/admin"; }

    handleUserName = (e) => { this.setState({ userName: e.target.value }); }

    handlePassword = (e) => { this.setState({ password: e.target.value }); }

    checkUser = () => { this.FetchGetAdmin(); }

    FetchGetAdmin = () => {

        console.log("url", this.AdminApiUrl + '/?username=' + this.state.userName + '&adminpassword=' + this.state.password)
        fetch(this.AdminApiUrl + '/?username=' + this.state.userName + '&adminpassword=' + this.state.password, {
            method: "GET"
        })
            .then(res => {


                return res.json();
            })
            .then(res => {

                console.log("res", res)
                if (this.state.rememberMe) {
                    localStorage.setItem("user", this.state.userName)
                }
                this.props.checkLogged(res, this.state.userName)


            })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.checked;

        this.setState({ rememberMe: value }, () => { console.log("checkbox", this.state.rememberMe) })

    }


    render() {
        return (
            <div>
                <br />
                <br />
                <div className="container login">
                    <br />
                    <br />
                    <form>
                        <h2>Admin Interface</h2>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>User name</label>
                            <input type="text" className="form-control" placeholder="Enter user name" onChange={this.handleUserName} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={this.handlePassword} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={this.handleInputChange} />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>



                        <br />
                        <br />

                    </form>
                    <button onClick={this.checkUser} className="btn btn-primary btn-block" >Login</button>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);