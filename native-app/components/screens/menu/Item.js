import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';
import store from "../../../api/store.js"
import { connect } from "react-redux";



class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: {
                id : this.props.id,
                name: this.props.title,
                price: this.props.price,
                inventory: this.props.inventory,
                quantity: this.props.quantity,
                description: this.props.description,
            }
        }
    }

    addToCart() {
        this.props.addToCart(this.state.item)     
    }

    removeFromCart() {
        this.props.removeFromCart(this.state.item)
    }

    isInCart() {
        flag = false
        this.props.cartItems.map(item => {
            if(this.state.item.id === item.id) {
                flag = true
            }
        })
        return flag
    }

    render() {
        if(this.isInCart()) {
            return (
                <View>
              <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <View style={styles.tagContainer}>
                  <Text style= {styles.Tag}>${this.props.price}</Text>
                  <TouchableOpacity style={styles.addToCart} 
                  onPress={() => {this.addToCart()}}>
                    <Text>Add to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.addToCart} 
                  onPress={() => {this.removeFromCart()}}>
                    <Text>Remove from Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>

            )

        } else {
            return (
              <View>
                  <View style={styles.container}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.description}>{this.props.description}</Text>
                    <View style={styles.tagContainer}>
                      <Text style= {styles.Tag}>${this.props.price}</Text>
                      <TouchableOpacity style={styles.addToCart} 
                      onPress={() => {this.addToCart()}}>
                        <Text>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
              </View>
            );
        }
      }
}

const mapStateToProps = state => {
    return {
      cartItems: state
    };
  };
  
  export default connect(mapStateToProps )(Item);



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
        alignSelf:"flex-start",
    marginTop: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: '#3BAD87'
    },
    image: {
      height: 150
    },
    tagContainer: {
        justifyContent: "space-between",
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
