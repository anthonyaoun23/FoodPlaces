import React, { Component } from "react";

import Select from 'react-select';

import bgImage from "../../../assets/thomas-tucker-391058-unsplash.jpg";

const cities = [
  { value: 'ottawa', label: 'Ottawa' },
  { value: 'montreal', label: 'Montreal' },
  { value: 'toronto', label: 'Toronto' },
  { value: 'waterloo', label: 'Waterloo' },
  { value: 'kingston', label: 'Kingston' },
  { value: 'hamilton', label: 'Hamilton' },
];

const types = [
  { value: 'italian', label: 'Italian & Pizza' },
  { value: 'japanese', label: 'Japanese & Sushi' },
  { value: 'coffee', label: 'Coffee & Tea' },
  { value: 'noodle', label: 'Noodle Soups' },
  { value: 'rice', label: 'Rice' },
];

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: '',
      type: '',
      search: ''
    }

    this.setParams = this.setParams.bind(this);
    this.updateURL = this.updateURL.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);


  }

  setParams({ query = ""}) {
    const searchParams = new URLSearchParams();
    searchParams.set("query", query);
    return searchParams.toString();
  }

  updateURL() {
    // const url = this.setParams({ query: this.state.search });
    //do not forget the "?" !
    this.props.history.push(`/restaurants?${this.state.search}&${this.state.city}&${this.state.type}`);
  };

  handleChange(event) {
    const name = event.target.name;
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick() {
    // let path = `restaurants/?search=${this.state.search}&city=${this.state.city}&type=${this.state.type}`;
    // this.props.history.push(path);
    this.updateURL();
  }

  // handleSearchChange = search => {
  //   this.setState({ search });
  //   console.log(`Option selected:`, selectedOption);
  // };

  render() {
    const { city, type, search } = this.state;
    console.log(this.state);

    return (
      <div className="layout">
        <div className="layout__header header">
          <div className="header__pitch pitch">
            <div className="pitch__container">
              <h1 className="pitch__maintext">
                Order food <br />
                the easy way
              </h1>
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
              <input name="search" value={this.state.search} onChange={this.handleChange} className="border-left" placeholder="Search" type="text" />
              <i className="fas fa-search" />
            </div>
            <div className="search__category styled-input">
              {/* <!-- <input type="tel" placeholder="Italian & Pizza" required /> --> */}
              <select name="type" className="category-select" onChange={this.handleChange}>
                <option
                  className="disabled"
                  disabled
                  selected
                  value="books"
                >
                  Select Food Category
                </option>
                <option value="italian">Italian & Pizza</option>
                <option value="japanese">Japanese & Sushi</option>
                <option value="coffee">Coffee & Tea</option>
                <option value="noodle">Noodle Soups</option>
                <option value="rice">Rice</option>
              </select>
              <i className="fas fa-angle-down" />
            </div>
            <div className="search__city styled-input">
              <select name="city" onChange={this.handleChange} className="city-select">
                <option
                  className="disabled"
                  disabled
                  selected
                  value="books"
                >
                  Select City
                </option>
                <option value="ottawa">Ottawa</option>
                <option value="montreal">Montreal</option>
                <option value="toronto">Toronto</option>
                <option value="waterloo">Waterloo</option>
                <option value="kingston">Kingston</option>
                <option value="hamilton">Hamilton</option>
              </select>
              <i className="fas fa-ellipsis-h" />
            </div>
            <div className="search__button styled-input">
              <button className="border-right search-button" type="button" onClick={this.handleClick}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
