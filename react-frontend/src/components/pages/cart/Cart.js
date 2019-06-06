import React, { Component } from "react";

export default class Cart extends Component {


  componentDidMount() {
    localStorage.clear()
  }
  render() {
    return (
      <div className="layout_commande">
        <div className="cart">
          <div className="cart__header">
            <h1>Cart</h1>
          </div>
          <div className="cart__item item">
            <div className="item__img img-container">
              <img className="img-container__img" src="../../../assets/thomas-tucker-391058-unsplash.jpg" alt=""/>
            </div>
            <div className="item__info info">
              <p className="info__name">Restaurant Name</p>
              <h4 className="info__title">Order Item Name</h4>
              <div className="information">
                <div className="info__price">
                  <div className="price">
                    <p className="price__text">$30.00</p>
                  </div>
                </div>
                <button className="info__details">
                  <div className="details">
                    <p className="price__text2">
                      Details<i className="fas fa-angle-down details__angle" />
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="item__actions">
              <button className="action-button">
                <i className="far fa-times-circle" />
              </button>
            </div>
          </div>
          <div className="cart__item item">
            <div className="item__img img-container">
              <img className="img-container__img" src="../../../assets/thomas-tucker-391058-unsplash.jpg" alt=""/>
            </div>
            <div className="item__info info">
              <p className="info__name">Restaurant Name</p>
              <h4 className="info__title">Order Item Name</h4>
              <div className="information">
                <div className="info__price">
                  <div className="price">
                    <p className="price__text">$30.00</p>
                  </div>
                </div>
                <button className="info__details">
                  <div className="details">
                    <p className="price__text2">
                      Details<i className="fas fa-angle-down details__angle" />
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="item__actions">
              <button className="action-button">
                <i className="far fa-times-circle" />
              </button>
            </div>
          </div>
          <div className="cart__item item">
            <div className="item__img img-container">
              <img className="img-container__img" src="../../../assets/thomas-tucker-391058-unsplash.jpg" alt=""/>
            </div>
            <div className="item__info info">
              <p className="info__name">Restaurant Name</p>
              <h4 className="info__title">Order Item Name</h4>
              <div className="information">
                <div className="info__price">
                  <div className="price">
                    <p className="price__text">$38.46</p>
                  </div>
                </div>
                <button className="info__details">
                  <div className="details">
                    <p className="price__text2">
                      Details<i className="fas fa-angle-down details__angle" />
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="item__actions">
              <button className="action-button">
                <i className="far fa-times-circle" />
              </button>
            </div>
          </div>
        </div>
        <div className="cart-checkout">
          <p className="cart-product-num">Number of Products: 3</p>
          <p className="cart-total">Total: $98.46</p>
          <div className="cart-button-container">
            <button className="cart-button">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}
