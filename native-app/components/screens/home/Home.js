import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import Card from "../../common/Card";
import CardList from "../../common/CardList";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    firstQuery: "",
    clicked: false,
    checked: "first",
    data: [
      { label: "Pizza" },
      { label: "Fish" },
      { label: "Sushi" },
      { label: "Money" }
    ]
  };

  onPress = data => this.setState({ data });

  render() {
    const { firstQuery } = this.state;
    return (
      <React.Fragment>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search"
          onChangeText={query => {
            this.setState({ firstQuery: query });
          }}
          value={firstQuery}
        />
        <View style={styles.container}>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={{ paddingTop: 10 }}>
              <CardList title={"Tus Favoritos"}>
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
              </CardList>
              <CardList title={"Comida Italiana Favorita"}>
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
              </CardList>
              <CardList title={"Tus Pizzas Favoritas"}>
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
              </CardList>
              <CardList title={"Tus Tacos Favoritos"}>
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
                <Card style={styles.card} />
              </CardList>
            </View>
          </ScrollView>
          <View style={styles.headerContainer} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  searchBar: {
    marginTop: 60
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#eee",
    marginTop: 0
  },
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 0,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  card: {
    marginRight: 10
  }
});
