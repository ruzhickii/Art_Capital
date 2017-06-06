import React, {Component} from "react";

class Navigation extends Component {
    render() {
        return (
           <div className="mainBlock">
               <ul className="uList">
                   <li>
                       <a href="#">Преимущества</a>
                   </li>
                   <li>
                       <a href="#">Стоимость</a>
                   </li>
                   <li>
                       <a href="#">Поддержка</a>
                   </li>
                   <li>
                       <a href="#">Контакты</a>
                   </li>
                   <li>
                       <a href="#">Наш блог</a>
                   </li>
               </ul>
           </div>
        )
    }
}

export default Navigation;