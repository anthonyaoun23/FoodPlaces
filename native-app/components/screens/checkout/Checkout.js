import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { connect } from "react-redux";
import { StackActions, NavigationActions } from "react-navigation";

export class Checkout extends React.Component {
  state = {
    name: "",
    email: "",
    cardNumber: "",
    cvcNumber: "",
    exp: "",
    address: "",
    city: "",
    error: false
  };

  render() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "main" })]
    });

    const { navigation } = this.props;
    const totalItems = navigation.getParam("totalItems", "NO-ID");
    const totalPrice = navigation.getParam("totalPrice", "some default value");
    let isError = this.state.error;
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 10, fontSize: 32, fontWeight: "600" }}>
          Checkout Page
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <TextInput
            label="Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            error={isError}
            underlineColor="3BAD87"
          />
          <TextInput
            label="City"
            value={this.state.city}
            onChangeText={city => this.setState({ city })}
            underlineColor="3BAD87"
          />
          <TextInput
            label="Address"
            value={this.state.address}
            onChangeText={address => this.setState({ address })}
            underlineColor="3BAD87"
          />
          <TextInput
            label="Postal Code"
            value={this.state.postal}
            onChangeText={postal => this.setState({ postal })}
            underlineColor="3BAD87"
          />
          <TextInput
            label="Card Number"
            value={this.state.cardNumber}
            onChangeText={cardNumber => this.setState({ cardNumber })}
            underlineColor="3BAD87"
          />
          <TextInput
            label="CVC Number"
            value={this.state.cvcNumber}
            onChangeText={cvcNumber => this.setState({ cvcNumber })}
            underlineColor="3BAD87"
          />
          <TextInput
            label="Expiry Date"
            value={this.state.exp}
            onChangeText={exp => this.setState({ exp })}
            underlineColor="3BAD87"
          />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={{ fontSize: 16, marginLeft: 16 }}>
              Total Items: {totalItems}
            </Text>
            <Text style={{ fontSize: 16, marginLeft: 16 }}>
              Total Price: ${totalPrice}
            </Text>
          </View>
          <Button
            disabled={totalItems == 0}
            mode="contained"
            color="#55fac3"
            style={{ borderRadius: 0 }}
            onPress={() => {
              (/\d/.test(this.state.name) ||
                (this.state.name == "" ||
                  this.state.address == "" ||
                  this.state.email == "" ||
                  this.state.cardNumber == "" ||
                  this.state.cvcNumber == "" ||
                  this.state.city == "" ||
                  this.state.exp == "")) &&
                this.setState({ error: true }, () => {
                  if (!this.state.error) {
                    this.props.resetCart();
                    this.props.navigation.dispatch(resetAction);
                    this.props.navigation.navigate("Home");
                  }
                });
              (!/\d/.test(this.state.name) &&
                (this.state.name != "" &&
                  this.state.address != "" &&
                  this.state.email != "" &&
                  this.state.cardNumber != "" &&
                  this.state.cvcNumber != "" &&
                  this.state.city != "" &&
                  this.state.exp != "")) &&
                this.setState({ error: false }, () => {
                  if (!this.state.error) {
                    this.props.resetCart();
                    this.props.navigation.dispatch(resetAction);
                    this.props.navigation.navigate("Home");
                  }
                });
            }}
          >
            Purchase
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    resetCart: () => dispatch({ type: "RESET_CART" })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Checkout);
