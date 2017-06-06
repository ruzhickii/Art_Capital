import React, {Component} from "react";
import Logo from '../logo'
import Login from '../login'
import Navigation from "../navigation/index";

class Header extends Component {
    render() {
        return (
            <header className='header'>
               <div className="row">
                   <div className="col-xs-12 col-sm-12 col-md-3 ">
                       <Logo />
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-7 ">
                       <Navigation />
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-2 ">
                       <Login />
                   </div>
               </div>
            </header>
        )
    }
}

export default Header;