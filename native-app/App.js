import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from "./store";
import Cart from './components/screens/cart/Cart.js'
import Menu from './components/screens/menu/Menu.js'
export default function App() {
  return (

    <Provider store={store}>
      <Menu />
      <Cart />
    </Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
