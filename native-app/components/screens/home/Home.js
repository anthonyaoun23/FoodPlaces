import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Card from "../../common/Card";
import CardList from "../../common/CardList";
import store from ".././../../api/store";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    firstQuery: "",
    restaurants: []
  };

  onPress = data => this.setState({ data });

  componentDidMount() {
    store.getRestaurants((restaurants) => {
        this.setState({
            restaurants: [...restaurants]
        })
    })
}

  getRestosByArea = (area) => {
    returnedRestaurants = []
    this.state.restaurants.map(restaurant => {
      if(restaurant.city.toString().toLowerCase().includes(area.toString().toLowerCase())){
        returnedRestaurants.push(restaurant);
      }
    })
    return returnedRestaurants

  }

  render() {
    const { firstQuery } = this.state;
    if(this.state.restaurants.length === 0) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size='large' color='#00ff00'/>
         </View>
      )

    } else {

      return (
          <React.Fragment>
          <Searchbar
            style={styles.searchBar}
            placeholder="Search"
            onChangeText={query => {
              this.setState({ firstQuery: query });
            }}
            value={firstQuery}
            />
          <View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer}>
              <View style={{ paddingTop: 10 }}>
                <CardList title={"Near You"}>
                  {this.getRestosByArea('ottawa').map(restaurant => {
                    return (
                      <Card style = { styles.card } key={restaurant.id} restaurant={restaurant}/>
                      )
                    })}
                </CardList>
                <CardList title={"Most Popular"}>
                  <Card key={this.state.restaurants[1].id} restaurant={this.state.restaurants[1]} style={styles.card} />
                  <Card key={this.state.restaurants[0].id} restaurant={this.state.restaurants[0]} style={styles.card} />
                </CardList>
                <CardList title={"Highest Rated"}>
                  <Card key={this.state.restaurants[1].id} restaurant={this.state.restaurants[1]} style={styles.card} />
                  <Card key={this.state.restaurants[0].id} restaurant={this.state.restaurants[0]} style={styles.card} />
                </CardList>
                <CardList title={"Your Favourites"}>
                  <Card key={this.state.restaurants[1].id} restaurant={this.state.restaurants[1]} style={styles.card} />
                  <Card key={this.state.restaurants[0].id} restaurant={this.state.restaurants[0]} style={styles.card} />
                </CardList>
              </View>
            </ScrollView>
            <View style={styles.headerContainer} />
          </View>
        </React.Fragment>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  searchBar: {
    marginTop: 60
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: 0
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  card: {
    marginRight: 10
  }
});
