import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            isLogged:this.props.isLogged,
        }
    }


    componentDidMount() { this.AdminApiUrl = "http://proj.ruppin.ac.il/igroup17/prod/api/admin"; }

    handleUserName = (e) => { this.setState({ userName: e.target.value }); }

    handlePassword = (e) => { this.setState({ password: e.target.value }); }

    checkUser = () => { this.FetchGetAdmin(); }

    FetchGetAdmin = () => {
        fetch(this.AdminApiUrl + '/?username=' + this.state.userName + '&adminpassword=' + this.state.password, {
            method: "GET"
        })
            .then(res => {
                return res.json();
            })
            .then(res=>{
                this.setState({isLogged:res},()=>this.props.checkLogged(this.state.isLogged,this.state.userName))
                   
                
            })
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
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" onClick={this.checkUser} className="btn btn-primary btn-block" >Login</button>

                        <br />
                        <br />
                    </form>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);