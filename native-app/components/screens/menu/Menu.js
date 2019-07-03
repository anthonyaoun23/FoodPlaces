import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SectionList, Button } from 'react-native';
import {connect} from 'react-redux';
import { getParam } from 'react-navigation'
import Item from './Item.js'



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      sections: []
    }
  }

  populateSections() {
    sections = []
    this.state.restaurant.menuCategory.map(cat => {
      items = []
      cat.items.map(item => {
        items =[...items, item]
      })
      sections = [...sections, {title: cat.title, data: items}]
    })
    console.log(sections)
    this.setState({
      sections: sections
    })
  }

  componentDidMount() {
    this.setState({
      restaurant : this.props.navigation.getParam("restaurant")
    }, () => this.populateSections())
  }


  render() {
    if(this.state.sections.length === 0) {
      return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size='large' color='#00ff00'/>
        </View>
      )
    }else {
      return (
     <View style={styles.container}>
        <View style={styles.titleTop}>
          <Text style={styles.title}>{this.state.restaurant.title}</Text>
          <Text style={styles.address}>{this.state.restaurant.address}</Text>
          <View style = {styles.tagView}>
            <Text style={styles.Tag}>25-35 min</Text> 
            <Text style={styles.Tag}>{this.state.restaurant.rating} Stars</Text>
            <Text style={styles.Tag}>${this.state.restaurant.priceLow}-{this.state.restaurant.priceHigh}</Text> 
          </View>
        </View>
        <View style={styles.itemList}>
          <SectionList sections={this.state.sections} 
          renderItem={({item}) => <Item onPress={this.props.addItemToCart} id={item.id} quantity={item.quantity} inventory={item.inventory} title={item.title} price={item.price} description={item.description}/>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          ItemSeparatorComponent = {separator}
          keyExtractor={(item, index) => index}/>
        </View>
      </View>
      )
    }
  }
  
}

const separator = () => (
    <View style={{margin : 7, borderBottomColor: 'black', borderBottomWidth: 1}}/>
  )
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch({type: 
    "ADD_TO_CART", payload: product})
  }
}
export default connect(null, mapDispatchToProps)(Menu);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection:"column",
    justifyContent:"flex-start",
    marginTop:20
  },
  titleTop: {
    paddingLeft:10,
    elevation: 5,
    backgroundColor: 'rgba(255,255,255,1)',
    paddingBottom:25,
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  address: {

  },
  tagView: {
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  Tag: {
    backgroundColor: '#eee',
      marginTop: 10,
      marginRight: 10,
      padding: 5
  },
  item:{
    marginLeft: 20
  },
  sectionHeader:{
    backgroundColor: 'rgba(247,247,247,1.0)',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemList :{
    marginBottom: 120
  }

});
