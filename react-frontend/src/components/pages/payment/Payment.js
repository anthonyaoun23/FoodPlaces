import React, { Component } from "react";
import CreditCard from "./CreditCard";
import shop from "../../../api/shop";

import PaymentItem from "./PaymentItem";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loading: true
    };

    this.fetchResults = this.fetchResults.bind(this);
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

  fetchResults() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    let cartItems = [], totalAmount = 0;

    const { restaurants } = this.state;

    cart.map(cartItem => {
        const restaurantTitle = restaurants[cartItem.restoId-1].title;
        cartItems.push({cartItem, restaurantTitle});
        totalAmount += cartItem.amt * cartItem.product.price;
    })

    // console.log(cartItems, totalAmount);
    this.setState({cartItems, totalAmount})

    // cart.map(cartItem => {
    //     const restoId = cartItem.restoId-1;
    //     const restaurant = restaurants[restoId];
    //     // console.log(restoId);
    //     restaurant['menuCategory'].map(category => {
    //         category.items.map(item => {
    //             if(item.id === cartItem.id){
    //                 cartItems.push(item);
    //             }
    //         })
    //     })
    // })

    // let { search } = this.props.location;
    // search = search.substring(1);
    // search = search.split("&");
    // const strSearch = search[0];
    // const city = search[1].charAt(0).toUpperCase() + search[1].slice(1);
    // const type = search[2];

    // const { restaurants } = this.state;
    // let results = new Set();
    // console.log(this.state);
    // if (strSearch) {
    //   restaurants.map((restaurant, index) => {
    //     if (restaurant.title === strSearch) {
    //       results.add(index);
    //     }
    //   });
    // }

    // if (city) {
    //   restaurants.map((restaurant, index) => {
    //     if (restaurant.city === city) {
    //       results.add(index);
    //     }
    //   });
    // }

    // if (type) {
    //   restaurants.map((restaurant, index) => {
    //     if (restaurant.type === type) {
    //       results.add(index);
    //     }
    //   });
    // }

    // this.setState({ results, loading: false });
  }

  render() {
      const { cartItems, totalAmount } = this.state;
      console.log(cartItems);
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
                <input id="fullname" type="text" />
              </div>
              <div className="address-info">
                <label for="address">Address Line</label>
                <input id="address" type="text" />
              </div>
              <div className="address-info">
                <label for="icity">City</label>
                <input id="icity" type="text" />
              </div>
              <div className="address-info">
                <label for="province">Province</label>
                <input id="province" type="text" />
              </div>
              <div className="address-info">
                <label for="postal">Postal Code</label>
                <input id="postal" type="text" />
              </div>
              <div className="address-info">
                <label for="phone">Phone Number</label>
                <input id="phone" type="phone" />
              </div>
            </form>
          </div>

          <CreditCard />

          <div className="paiment__checkout">
            <p className="checkout__summary">Order Summary</p>
            <div className="checkout__list">

                {
                    cartItems && cartItems.map(item => {
                        console.log(item)
                        return <PaymentItem key={item.cartItem.product.id} restaurantTitle={item.restaurantTitle} productName={item.cartItem.product.title} amount={item.cartItem.amt} price={item.cartItem.product.price}/>
                    })
                }
              
            </div>

            <div className="coupon">
              <form className="coupon__form" action="">
                <input placeholder="Add Coupon" type="text" />
                <button>Apply</button>
              </form>
            </div>
            <div className="pay">
              <button>{`PAY $${totalAmount}.00`}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
