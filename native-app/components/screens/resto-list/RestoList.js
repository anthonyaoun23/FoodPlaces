import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList, ListItem } from 'react-native';
import store from "../../../api/store.js";

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
                    <FlatList
                        data={this.state.restaurants}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItem}

                    />
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
      alignItems:'center',
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })
