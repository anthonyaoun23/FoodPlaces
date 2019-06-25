import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import store from "../../../api/store.js"


export default class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: {
                id : 0,
                name: "",
                price: 0,
                inventory: 0,
                quantity: 0,
                description: ""
                
            }
        }
    }

    componentDidMount(){
        store.getItemById(1,1,1, item => {
            this.setState({
                item: {
                    id : item.id,
                    name: item.title,
                    price: item.price,
                    inventory: item.inventory,
                    quantity: item.quantity,
                    description: item.description
                }
            })
        })
    }

    render(){
        return (
            <Button onPress={() => this.props.onPress(this.state.item)} title={this.state.item.name}/>
        )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
