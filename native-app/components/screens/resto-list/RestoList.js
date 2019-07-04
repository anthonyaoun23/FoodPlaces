import React from 'react';
import { ScrollView, ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
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
                <View style={styles.container}>
                        <Text style={styles.title}>Restaurants</Text>
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
    titleContainer: {
        flex: 1,
        marginBottom: 0,
        paddingVertical: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        
    },
    title: {
        alignSelf: "baseline",
        marginLeft: 12,
        padding: 5,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left"
    },
    container: {
      flex: 1,
      backgroundColor: "#eee",
      alignItems: 'center',
    },
    scrollViewContainer: {
        marginTop: 0,
        paddingTop: 0,
        flex: 1,
        backgroundColor: "#eee",
    }
  });
