import React, { Component } from "react";
import shop from "../../../api/shop";

import Resto from "../resto-list/Resto";
import "../../../style/restoListPage.css";
import { Link } from "react-router-dom";

class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true
    };

    this.fetchResults = this.fetchResults.bind(this);
  }

  componentDidMount() {
    shop.getRestaurants(restaurants => {
      this.setState(
        {
          restaurants: restaurants
        },
        this.fetchResults
      );
    });
  }

  fetchResults() {
    let { search } = this.props.location;
    search = search.substring(1);
    search = search.split("&");
    const strSearch = search[0];
    const city = search[1].charAt(0).toUpperCase() + search[1].slice(1);
    const type = search[2];

    const { restaurants } = this.state;
    let results = new Set();
    console.log(this.state);
    if (strSearch) {
      restaurants.map((restaurant, index) => {
        if (restaurant.title === strSearch) {
          results.add(index);
        }
      });
    }

    if (city) {
      restaurants.map((restaurant, index) => {
        if (restaurant.city === city) {
          results.add(index);
        }
      });
    }

    if (type) {
      restaurants.map((restaurant, index) => {
        if (restaurant.type === type) {
          results.add(index);
        }
      });
    }

    this.setState({ results, loading: false });
  }

  render() {
    // const { location } = props;
    // const { query } = getParams(location);
    console.log(this.state);
    const { results, loading, restaurants } = this.state;

    if (loading) return <h1>Loading...</h1>;

    if (results.size !== 0) {
        return [...results].map(value => {
        const restaurant = restaurants[value];
        return (
          <Link
            to={{
              pathname: restaurant.title,
              state: {
                title: restaurant.title
              }
            }}
            key={value}
          >
            <Resto
              title={restaurant.title}
              address={restaurant.address}
              foodType={restaurant.foodType}
              rating={restaurant.rating}
              priceLow={restaurant.priceLow}
              priceHigh={restaurant.priceHigh}
              pictureSource={restaurant.pictureSource}
            />
          </Link>
        );
      });
    }
    return <h1>No results found...</h1>;
  }
}

export default Restaurants;
