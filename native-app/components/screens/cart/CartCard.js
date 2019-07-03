import React from "react";
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Tag from "../../common/Tag";

export default class CartCard extends React.Component {
  render() {
    const { name, price, quantity, style } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.price}>${this.props.price}</Text>
          <Text style={styles.quantity}>Quantity: {this.props.quantity}</Text>
        </View>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          activeOpacity={0.7}
          onPress={() => console.log("remove item")}
          style={styles.iconContainer}
        >
          <Animated.View>
            <Ionicons
              name={
                Platform.OS === "ios"
                  ? "ios-remove-circle-outline"
                  : "md-remove-circle-outline"
              }
              size={32}
              color="#000"
            />
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textContainer: {},
  image: {
    height: 150
  },
  name: {
    fontSize: 16,
    marginTop: 10
  },
  price: {
    color: "#111",
    fontSize: 14,
    marginTop: 5
  },
  quantity: {
    color: "#111",
    fontSize: 14,
    marginTop: 5 
  },
  iconContainer: {
    color: "#000",
  }
});
