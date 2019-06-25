import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';


class Cart extends React.Component{

  render(){
    return (
    <View style={styles.container}>
    {this.props.cartItems.map(item => {
      return (
        <Text>{item.name}</Text>
      )
    })}
  </View>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    cartItems : state
  }

}

let CartContainer = connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartContainer;
