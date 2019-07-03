import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

export default class Checkout extends React.Component {
  state = {
    name: "",
    email: "",
    cardNumber: "",
    cvcNumber: "",
    exp: "",
    address: "",
    city: ""
  };

  render() {
    const { navigation } = this.props;
    const totalItems = navigation.getParam("totalItems", "NO-ID");
    const totalPrice = navigation.getParam("totalPrice", "some default value");
    return (
      <View style={styles.container}>
        <Text>Checkout Page</Text>
        <TextInput
          label="Name"
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TextInput
          label="City"
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
        />
        <TextInput
          label="Address"
          value={this.state.address}
          onChangeText={address => this.setState({ address })}
        />
        <TextInput
          label="Postal Code"
          value={this.state.postal}
          onChangeText={postal => this.setState({ postal })}
        />
        <TextInput
          label="Card Number"
          value={this.state.cardNumber}
          onChangeText={cardNumber => this.setState({ cardNumber })}
        />
        <TextInput
          label="CVC Number"
          value={this.state.cvcNumber}
          onChangeText={cvcNumber => this.setState({ cvcNumber })}
        />
        <TextInput
          label="Expiry Date"
          value={this.state.exp}
          onChangeText={exp => this.setState({ exp })}
        />
        <Text>{totalItems}</Text>
        <Text>{totalPrice}</Text>
        <Button
          disabled={totalItems == 0}
          mode="contained"
          color="blue"
          style={{ borderRadius: 0 }}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          Purchase
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
