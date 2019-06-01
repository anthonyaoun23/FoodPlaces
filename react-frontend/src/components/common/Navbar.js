import React, {Component} from "react";

import searchIcon from "../../assets/icons8-search-32.png";
import contactIcon from "../../assets/icons8-contacts-32.png";
import cartIcon from "../../assets/icons8-shopping-cart-24.png";

import '../../style/restoListPage.css'


class Navbar extends Component {




    render () {
        console.log('here');
        return (
            <div className="navbar">
            <div className="navbar_container">
                <div className="nav_bar_logo">
                    <img src="../../assets/logo.png" style={{width: "28px", height: "28px"}} />
                </div>
                <ul className="navbar_ul">
                    <li><a className="nav_option" href="somewhere.html">HOME</a></li>
                    <li><a className="nav_option" href="somewhere.html">RESTAURANTS</a></li>
                    <li><a className="nav_option" href="somewhere.html">CONTACT US</a></li>
                </ul>
                <div className="nav_action_buttons">
                    <div className="action_button">
                        <img className="action_button" src={searchIcon} style={{width: "28px", height: "28px"}} />
                    </div>
                    <div className="action_button">
                        <img className="action_button" src={contactIcon} style={{width: "28px", height: "28px"}} />
                    </div>
                    <div className="action_button">
                        <img className="action_button" src={cartIcon} style={{width: "28px", height: "28px"}} />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Navbar;