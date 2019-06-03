import React, { Component } from 'react';

import bgImage from '../../../assets/thomas-tucker-391058-unsplash.jpg';
import '../../../style/main.css'

export default class Home extends Component {
    render() {
        return (
            <div className="layout">
            <div className="layout__header header">
              <div className="header__pitch pitch">
                <div className="pitch__container">
                  <h1 className="pitch__maintext">Order food <br />the easy way</h1>
                  <p className="pitch__subtext">Choose your favourite meals now.</p>
                  <button className="pitch__button">Explore All</button>
                </div>
              </div>
              <div className="header__image-container image-container">
      
                <img src={bgImage} alt="image of pizza" />
              </div>
            </div>
            <div className="search-container">
              <form className="header__search search">
                <div className="search__search styled-input">
                  <input className="border-left" placeholder="Search" type="text" />
                  <i className="fas fa-search"></i>
                </div>
                <div className="search__category styled-input">
                  {/* <!-- <input type="tel" placeholder="Italian & Pizza" required /> --> */}
                  <select className="category-select">
                    <option className="disabled" disabled selected value="books"
                      >Select Food Category</option
                    >
                    <option value="books">Italian & Pizza</option>
                    <option value="html">Japanese & Sushi</option>
                    <option value="css">Coffee & Tea</option>
                    <option value="php">Noodle Soups</option>
                    <option value="js">Rice</option>
                  </select>
                  <i className="fas fa-angle-down"></i>
                </div>
                <div className="search__city styled-input">
                  <select className="city-select">
                    <option className="disabled" disabled selected value="books"
                      >Select City</option
                    >
                    <option value="books">Ottawa</option>
                    <option value="html">Montreal</option>
                    <option value="css">Toronto</option>
                    <option value="php">Waterloo</option>
                    <option value="js">Kingston</option>
                    <option value="js">Hamilton</option>
                  </select>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="search__button styled-input">
                  <button className="border-right search-button" type="button">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
