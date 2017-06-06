import React, {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div className="loginMainBlock">
                <div className="loginButton">
                    <a href="#"><span className="contactText">Вход</span></a>
                </div>
                <div className="contactButton">
                    <a href="#"><i className="fa fa-search"/></a>
                </div>
            </div>
        )
    }
}

export default Login;