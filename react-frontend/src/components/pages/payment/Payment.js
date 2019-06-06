import React, { Component } from "react";
import CreditCard from "./CreditCard";
import shop from "../../../api/shop";

import { Link } from "react-router-dom";

import PaymentItem from "./PaymentItem";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true,

      name: "",
      address: "",
      city: "",
      province: "",
      postal: "",
      number: "",
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvc: ""
    };

    this.fetchResults = this.fetchResults.bind(this);
    this.confirm = this.confirm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    shop.getRestaurants(restaurants => {
      this.setState(
        {
          restaurants: restaurants
        },
        this.fetchResults
      );
    });
  }

  confirm() {
    if (
      this.state.name != "" &&
      this.state.address != "" &&
      this.state.city != "" &&
      this.state.province != "" &&
      this.state.postal != "" &&
      this.state.number != "" &&
      this.state.cardNumber != "" &&
      this.state.cardName != "" &&
      this.state.expiry != "" &&
      this.state.cvc != ""
    ) {
      this.setState({ confirm: true });
    } else {
      window.alert("Please fill out all information.");
    }
  }

  fetchResults() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
    let cartItems = [],
      totalAmount = 0;

    const { restaurants } = this.state;

    cart.map(cartItem => {
      const restaurantTitle = restaurants[cartItem.restoId - 1].title;
      cartItems.push({ cartItem, restaurantTitle });
      totalAmount += cartItem.amt * cartItem.product.price;
    });

    // console.log(cartItems, totalAmount);
    this.setState({ cartItems, totalAmount });
  }

  handleChange(event) {
    const target = event.target.name;
    console.log(target);
    // console.log(name);
    this.setState({ [target]: event.target.value, focused: name });
    // console.log(this.state);
  }

  render() {
    const { cartItems, totalAmount, confirm } = this.state;
    console.log(this.state);
    return (
      <div className="layout_paiment">
        <div className="paiment">
          <div className="paiment__header">
            <h1>Checkout</h1>
          </div>

          <div className="paiment__address">
            <h1>Address Information</h1>
            <p>
              Is the address you'd like to use displayed below? If so, click the
              corresponding "Ship to this address" button. Or you can enter a
              new shipping address
            </p>

            <form action="">
              <div className="address-info">
                <label for="fullname">Full Name</label>
                <input
                  id="fullname"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="address-info">
                <label for="address">Address Line</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
              <div className="address-info">
                <label for="icity">City</label>
                <input
                  id="icity"
                  name="city"
                  type="text"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </div>
              <div className="address-info">
                <label for="province">Province</label>
                <input
                  id="province"
                  name="province"
                  type="text"
                  value={this.state.province}
                  onChange={this.handleChange}
                />
              </div>
              <div className="address-info">
                <label for="postal">Postal Code</label>
                <input
                  id="postal"
                  name="postal"
                  type="text"
                  value={this.state.postal}
                  onChange={this.handleChange}
                />
              </div>
              <div className="address-info">
                <label for="phone">Phone Number</label>
                <input
                  id="phone"
                  name="number"
                  type="phone"
                  value={this.state.number}
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>

          <CreditCard onChange={this.handleChange} />

          <div className="paiment__checkout">
            <p className="checkout__summary">Order Summary</p>
            <div className="checkout__list">
              {cartItems &&
                cartItems.map(item => {
                  console.log(item);
                  return (
                    <PaymentItem
                      key={item.cartItem.product.id}
                      restaurantTitle={item.restaurantTitle}
                      productName={item.cartItem.product.title}
                      amount={item.cartItem.amt}
                      price={item.cartItem.product.price}
                    />
                  );
                })}
            </div>

            <div className="coupon">
              <form className="coupon__form" action="">
                <input placeholder="Add Coupon" type="text" />
                <button>Apply</button>
              </form>
            </div>
            <div className="pay">
              {confirm ? (
                <Link to="/">
                  <button onClick={this.purchase}>{`Confirm`}</button>
                </Link>
              ) : (
                <button
                  onClick={this.confirm}
                >{`PAY $${totalAmount}.00`}</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
