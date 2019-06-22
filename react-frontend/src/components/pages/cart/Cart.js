import React, { Component } from "react";
import CartItem from "./CartItem";
import {Link} from 'react-router-dom'

export default class Cart extends Component {



  constructor(props){
    super(props);
    this.itemRemove = this.itemRemove.bind(this);
    this.getTotalItems = this.getTotalItems.bind(this);
    this.state = {
      'cart':[],
      totalItems:0,
      totalPrice:0
    }
  }

  getTotalItems(){
    let totalPrice = 0;
    let totalItems = 0;
    console.log(this.state.cart)
    this.state.cart.map(item => {
      totalItems+=item.amt;
      totalPrice+=item.product.price*item.amt;

    })

    this.setState({
      totalItems:totalItems,
      totalPrice:totalPrice
    })
  }



  componentDidMount() {
    var cart = JSON.parse(localStorage.getItem('cart'))
    this.setState({
      'cart':cart==null?[]:cart
        }, this.getTotalItems
        )
  }


  componentWillUnmount(){
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
  }

  itemRemove(id, restoId) {
    let { cart } = this.state;
    let newCart = []
        cart.map(obj => {
            if(obj.id === id && obj.restoId === restoId){
                obj.amt = obj.amt-1
                console.log('removed', obj)
            }
            if(obj.amt!==0){
              console.log("added", obj)
              newCart.push(obj)
            }
        })
    
    console.log('new cart',newCart)
    this.setState({
        cart:newCart
    })
    localStorage.setItem('cart', JSON.stringify(newCart))
    this.getTotalItems();
  }



  render() {
    return (
      <div className="layout_commande">
        <div className="cart">
          <div className="cart__header">
            <h1>Cart</h1>

            {this.state.cart.map(item => {
              console.log('rendering',item)
              return (
                <CartItem product={item.product} item={item} itemRemove={this.itemRemove}/>
              )
            })}
          </div>
            

        </div>
        <div className="cart-checkout">
          <p className="cart-product-num">Number of Products: {this.state.totalItems}</p>
          <p className="cart-total">Total: ${this.state.totalPrice}</p>
          <div className="cart-button-container">
            <Link to="/payment"><button className="cart-button">Checkout</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
