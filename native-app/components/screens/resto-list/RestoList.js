import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RestoList() {
  return (
    <View style={styles.container}>
      <Text>Restaurant list page</Text>
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
