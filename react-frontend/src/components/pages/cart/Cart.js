import React, { Component } from "react";
import CartItem from "./CartItem";
import shop from '../../../api/shop'
import {Link} from 'react-router-dom'

export default class Cart extends Component {



  constructor(props){
    super(props);
    this.itemRemove = this.itemRemove.bind(this);
    this.state = {
      'cart':[],
      totalItems:0,
      totalPrice:0
    }
  }



  componentDidMount() {
    var cart = JSON.parse(localStorage.getItem('cart'))
    this.setState({
      'cart':cart==null?[]:cart
        })
  }


  componentWillUnmount(){
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }

  itemRemove(id) {
    let { cart } = this.state;
    let newCart = []
    let found = false;
        cart.map(obj => {
            if(obj.id == id && obj.restoId == this.state.restaurant.id && !found){
                obj.amt = obj.amt-=1
                found= true;
                if(obj.amt!=0){
                  newCart.push(obj)
                }
            }
        })
    

    this.setState({
        "cart":newCart
    })
    this.forceUpdate()
  }


  render() {
    return (
      <div className="layout_commande">
        <div className="cart">
          <div className="cart__header">
            <h1>Cart</h1>

            {this.state.cart.map(item => {
              return (
                <CartItem product={item.product} item={item} itemRemove={this.itemRemove}/>
              )
            })}
          </div>
            

        </div>
        <div className="cart-checkout">
          <p className="cart-product-num">Number of Products: 3</p>
          <p className="cart-total">Total: $98.46</p>
          <div className="cart-button-container">
            <Link to="/payment"><button className="cart-button">Checkout</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
