import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import CartCardList from "./CartCardList";
import CartCard from "./CartCard";
import { Button } from "react-native-paper";

class Cart extends React.Component {
  state = { cart: {}, totalItems: 0, totalPrice: 0 };

  render() {
    const { cartItems } = this.props;
    let { cart, totalItems, totalPrice } = this.state;
    let items = new Set();

    cartItems.map(item => {
      const { id, name, price, quantity } = item;
      totalItems++;
      totalPrice += price;
      if (items.has(id)) {
        cart[id].quantity++;
      } else {
        items.add(id);
        cart[id] = {
          name,
          price,
          quantity: 1
        };
      }
    });

    console.log("HERE", items, cart);

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <CartCardList title={"Cart"}>
          {totalItems == 0 ? (
            <Text>No Items In Cart</Text>
          ) : (
            Object.keys(cart).map(item => {
              return (
                <CartCard
                  key={cart[item].id}
                  name={cart[item].name}
                  price={cart[item].price}
                  quantity={cart[item].quantity}
                />
              );
            })
          )}
        </CartCardList>
        <View style={{}}>
          <Text style={{ fontSize: 24, marginLeft: 16 }}>
            Total Items: {totalItems}
          </Text>
          <Text style={{ fontSize: 24, margin: 16 }}>
            Total Price: ${totalPrice}
          </Text>

          <Button
            disabled={totalItems == 0}
            mode="contained"
            color="blue"
            style={{ borderRadius: 0 }}
            onPress={() =>
              this.props.navigation.navigate("Checkout", {
                totalItems,
                totalPrice
              })
            }
          >
            Checkout
          </Button>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        {this.props.cartItems.map(item => {
          console.log(this.props.cartItems);
          return <Text key={item.id}>{item.name}</Text>;
        })}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state
  };
};

let CartContainer = connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CartContainer;
