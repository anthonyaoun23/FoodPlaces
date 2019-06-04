import React from 'react';
import { Component } from 'react';
import FrontImg from "../../../assets/mcd_front_pic.jpg";
import StarRatingComponent from 'react-star-rating-component';
import { FaStar } from 'react-icons/fa';




export default class Resto extends Component {

    componentDidMount() {

    }

    render() {
        return(
            <div className="container">
            <div className="card">
            <div className="card_front_img">
                <img src={FrontImg} style={{width:"300px",height:"200px"}}/>
                <div className="card_front_hours">
                    <h4>Mo: 24hrs</h4>
                    <h4>Tue: 24hrs</h4>
                    <h4>Wed: 24hrs</h4>
                    <h4>Thu: 24hrs</h4>
                    <h4>Fri: 24hrs</h4>
                    <h4>Sat: 24hrs</h4>
                    <h4>Sun: 24hrs</h4>
                </div>
            </div>
            <div className="card_front_info">
                <div className="card_front_info_top">
                        <h2 style={{padding:"0px", margin: "0px"}}>Mc Donalds</h2>
                        <h3 style={{padding:"0px", margin:"0px"}}>99 Rideau st.</h3>
                        <p style={{padding:"0px", margin: "0px"}}>Sand - Witches</p>
                </div>
                <div className="card_front_info_bottom">
                    <p
                        style={{textAlign:"center", padding:"3px", background: "#57a772", width:"30%", color:"white", borderRadius: "10px",fontWeight: "500"}}>
                        1$ -16$</p>
                        <StarRatingComponent 
          name="rate2" 
          editing={false}
          renderStarIcon={() => <FaStar/>}
          starCount={5}
          value={4}
        />         </div>
            </div>
</div>
</div>
        );
    }

}





