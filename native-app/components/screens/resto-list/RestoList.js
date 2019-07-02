import React from 'react';
import { ScrollView, ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import store from "../../../api/store.js";
import Card from "../../common/Card";
import CardList from "../../common/CardList";

export default class RestoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            restaurants: []
        }
    }

    render() {
        if(this.state.restaurants.length === 0){
            return(
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size='large' color='#00ff00'/>
                </View>
            )
        }else {
            return(
                // <Text>{this.state.restaurants[0].title}</Text>
                <View style={styles.container}> 
                    <ScrollView style={styles.scrollViewContainer}>
                        {this.state.restaurants.map(restaurant => {
                            return (
                                <Card style={styles.card} key={restaurant.id} restaurant={restaurant}/>
                            )
                        })}
                    </ScrollView>
                </View>
            )
        }
    }

    renderItem = ({item}) => {
        return (
            <Text>
                {item.title}
            </Text>
        )
    }


    componentDidMount() {
        store.getRestaurants((restaurants) => {
            this.setState({
                restaurants: [...restaurants]
            })
        })
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#eee",
      alignItems: 'center',
    },
    searchBar: {
      marginTop: 60
    },
    scrollViewContainer: {
      flex: 1,
      backgroundColor: "#eee",
      marginTop: 100
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
    }
  });
