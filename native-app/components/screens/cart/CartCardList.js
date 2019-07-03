import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

export default class CartCardList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View>
            <View style={styles.listContainer}>
              {this.props.children}
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0)',
    marginBottom: 10,
    marginTop: 20
  },
  titleContainer: {
    margin: 20
  },
  title: {
    fontSize: 32,
    fontWeight: '600'
  },
  scrollViewContainer: {
    marginBottom: 15
  },
  listContainer: {
    flexDirection: 'column',
    marginHorizontal: 20
  }
})
