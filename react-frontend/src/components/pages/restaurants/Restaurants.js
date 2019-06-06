import React, { Component } from "react";

class Restaurants extends Component {
    state = {

    }
  componentDidMount() {
    let { search } = this.props.location;
    search = search.substring(1);
    search = search.split('&');
    const strSearch = search[0];
    const city = search[1];
    const type = search[2];
    
    this.setState({strSearch, city, type});
  }

  searchRepositories = query => {
    //handle if query is undefined

  };

  render() {
    // const { location } = props;
    // const { query } = getParams(location);
    console.log(this.state);

    
    
    return <h1>{this.props.location.search}</h1>;
  }
}

export default Restaurants;
