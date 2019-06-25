import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Searchbar, RadioButton, Provider } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import RadioGroup from 'react-native-radio-buttons-group';
import Cart from "./components/screens/cart/Cart"

class HomeScreen extends React.Component {
  state = {
    firstQuery: "", clicked: false, checked: 'first', data: [{label: 'Pizza'}, {label: 'Fish'}, {label: "Sushi"}, {label:'Money'}]
  };

  onPress = data => this.setState({data});

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
    const { firstQuery, clicked, checked } = this.state;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Searchbar
          style={{ marginTop: 60 }}
          placeholder="Search"
          onChangeText={query => {
            this.setState({ firstQuery: query });
          }}
          value={firstQuery}
        />
        <Text>Select Food Type</Text>
        <Text>Currently Selected: {selectedButton}</Text>


        <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
      </View>
    );
  }
}

class FoodTypeGroup extends React.Component {
  state = {
    value: 'first',
  };

  render() {
    return(
      <RadioButton.Group
        onValueChange={value => this.setState({ value })}
        value={this.state.value}
      >
        <View>
          <Text>First</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>Second</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>
    )
  }
}

class RestaurantsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Restaurants Screen</Text>
      </View>
    );
  }
}
class CartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Cart/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-home"} />
          </View>
        )
      }
    },
    Restaurants: {
      screen: RestaurantsScreen,
      navigationOptions: {
        tabBarLabel: "Restaurants",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-restaurant"}
            />
          </View>
        ),
        activeColor: "#615af6",
        inactiveColor: "#46f6d7",
        barStyle: { backgroundColor: "#67baf6" }
      }
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarLabel: "Cart",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-cart"} />
          </View>
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#226557",
    barStyle: { backgroundColor: "#3BAD87" }
  }
);

let Nav = createAppContainer(TabNavigator);

export default class App extends React.Component{
    render() {
        return(
            <Provider store= {store}>
                <Nav />
            </Provider>
        )
    }
}