import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import store from "../../../api/store.js"


export default class Item extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        //const imgSrc = this.props.restaurant.pictureSource;
        return (
          <View>
              <View style={styles.container}>
                <View>
                  {/* <Image
                    style={styles.image}
                    source={imgSrc}
                  /> */}
                </View>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <View style={styles.tagContainer}>
                  <Text style= {styles.Tag}>${this.props.price}</Text>
                  <Button title="Add to Cart" onPress={this.props.onPress} style={styles.addToCart}/>
                </View>
              </View>
          </View>
        );
      }
}



const styles = StyleSheet.create({
    container: {
      width: 320,
      backgroundColor: "#fff",
      marginBottom: 10,
      padding: 10,
      shadowColor: "rgba(0,0,0,0.1)",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 5
    },
    addToCart: {
    marginTop: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: '#3BAD87'
    },
    image: {
      height: 150
    },
    tagContainer: {
      flexDirection: "row",
      flexWrap: "wrap"
    },
    title: {
        fontSize: 16,
    },
    description: {
      color: "#999",
      marginTop: 5
    },
    iconContainer: {
      position: "absolute",
      right: 20,
      bottom: 15
    },
    Tag: {
        backgroundColor: '#eee',
          marginTop: 10,
          marginRight: 10,
          padding: 5
      }
  });
