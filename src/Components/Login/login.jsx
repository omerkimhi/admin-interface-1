import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import './login.css';

 class Login extends Component {
     
    render() {
        return (
            <div>
            <br/>
            <br/>
            <div className="container login">
            <br/>
            <br/>
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
               
                <br/>
                <br/>
            </form>
            </div>
            </div>
        );
    }
}
export default withRouter(Login);