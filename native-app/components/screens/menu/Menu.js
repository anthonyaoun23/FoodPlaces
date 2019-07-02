import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';
import Item from './Item.js'

const Menu = (props) => (
  <View style={styles.container}>
    <Text>Menu Page</Text>
    <Item onPress={props.addItemToCart}/>
  </View>

)

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch({type: 
    "ADD_TO_CART", payload: product})
  }
}

export default connect(null, mapDispatchToProps)(Menu);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
