import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Searchbar, RadioButton } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import RadioGroup from 'react-native-radio-buttons-group';
import CartContainer from './components/screens/cart/Cart';
import Menu from './components/screens/menu/Menu';
import RestoList from "./components/screens/resto-list/RestoList"
import { Provider } from 'react-redux';
import store from './store'
import Checkout from "./components/screens/checkout/Checkout"

import Home from "./components/screens/home/Home";

class HomeScreen extends React.Component {
  state = {
    firstQuery: "",
    clicked: false,
    checked: "first",
    data: [
      { label: "Pizza" },
      { label: "Fish" },
      { label: "Sushi" },
      { label: "Money" }
    ]
  };

  onPress = data => this.setState({ data });

  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton
      ? selectedButton.value
      : this.state.data[0].label;
    const { firstQuery, clicked, checked } = this.state;
    return <Home />;
    // return (
    //   <View style={styles.container}>
    //     <Text>Home Screen</Text>
    //     <Searchbar
    //       style={{ marginTop: 60 }}
    //       placeholder="Search"
    //       onChangeText={query => {
    //         this.setState({ firstQuery: query });
    //       }}
    //       value={firstQuery}
    //     />
    //     <Text>Select Food Type</Text>
    //     <Text>Currently Selected: {selectedButton}</Text>

    //     <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
    //   </View>
    // );
  }
}

class FoodTypeGroup extends React.Component {
  state = {
    value: "first"
  };

  render() {
    return (
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
    );
  }
}


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
      screen: createStackNavigator({
        main: { screen: RestoList },
        Menu: { screen: Menu }
      }),
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
        activeColor: "#f0edf6",
        inactiveColor: "#226557",
        barStyle: { backgroundColor: "#3BAD87" }
      }
    },
    Cart: {
      screen: createStackNavigator({
        main: {screen: CartContainer},
        Checkout: {screen: Checkout}
      }),
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

export default function App() {
  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}
