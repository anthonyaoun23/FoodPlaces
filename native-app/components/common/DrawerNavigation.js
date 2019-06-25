import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Image, TouchableOpacity, YellowBox } from 'react-native';

import { DrawerNavigation } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

export default function DrawerNavigation() {
    return (
      <View style={styles.container}>
        <Text>APP PAGE</Text>
      </View>
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