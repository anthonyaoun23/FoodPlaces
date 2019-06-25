import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';


class Cart extends React.Component{

  render(){
    <View style={styles.container}>
    {props.cartItems.map(item => {
      return (
        <Text>{item.name}</Text>
      )
    })}
  </View>

  }
}

const mapStateToProps = (state) => {
  return {
    cartItems : state
  }

}

export default connect(mapStateToProps)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
