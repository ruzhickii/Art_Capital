import React, {Component} from "react";

class Logo extends Component {
    render() {
        return (
            <div className="logoMainBlock">
                <img src={require('../../../static/images/logo_03.png')} alt=""/>
            </div>
        )
    }
}

export default Logo;