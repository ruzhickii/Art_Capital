import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
               <div className="mainBlock">
                   <div className="row">
                       <div className="col-xs-12 col-sm-6">
                           <div className="leftTextBlock">
                               <span>&#169; 2007-2017 Арткапитал</span>
                           </div>
                       </div>
                       <div className="col-xs-12 col-sm-6">
                           <div className="rightTextBlock">
                               <span>Правовая информация</span>
                           </div>
                       </div>
                   </div>
               </div>
            </footer>
        )
    }
}

export default Footer;