import React, { Component } from 'react';
import CreditCard from './CreditCard';

export default class Payment extends Component {
    render() {
        return (
            <div className="layout_paiment">
                <div className="paiment">
                    <div className="paiment__header">
                        <h1>Checkout</h1>
                    </div>

                    <div className="paiment__address">
                        <h1>Address Information</h1>
                        <p>Is the address you'd like to use displayed below? If so, click the corresponding "Ship to this address" button. Or you can enter a new shipping address</p>

                        <form action="">
                            <div className="address-info">
                                <label for="fullname">Full Name</label>
                                <input id="fullname" type="text"/>
                            </div>
                            <div className="address-info">
                                <label for="address">Address Line</label>
                                <input id="address" type="text"/>
                            </div>
                            <div className="address-info">
                                <label for="icity">City</label>
                                <input id="icity" type="text"/>
                            </div>
                            <div className="address-info">
                                <label for="province">Province</label>
                                <input id="province" type="text"/>
                            </div>
                            <div className="address-info">
                                <label for="postal">Postal Code</label>
                                <input id="postal" type="text"/>
                            </div>
                            <div className="address-info">
                                <label for="phone">Phone Number</label>
                                <input id="phone" type="phone"/>
                            </div>
                        </form>

                    </div>

                    <CreditCard />

                    <div className="paiment__checkout">
                        <p className="checkout__summary">Order Summary</p>
                        <div className="checkout__list">
                            <div className="cart__item item">
                                <div className="item__img img-container">
                                    <img className="img-container__img" src="./thomas-tucker-391058-unsplash.jpg" alt="" />
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
                                                <p className="price__text2">Details<i className="fas fa-angle-down details__angle"></i></p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="cart__item item">
                                <div className="item__img img-container">
                                    <img className="img-container__img" src="./thomas-tucker-391058-unsplash.jpg" alt="" />
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
                                                <p className="price__text2"> Details<i className="fas fa-angle-down details__angle"></i></p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className="coupon">
                            <form className="coupon__form" action="">
                                <input placeholder="Add Coupon" type="text" />
                                <button >Apply</button>
                            </form>
                        </div>
                        <div className="pay">
                            <button>PAY $60.00</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}