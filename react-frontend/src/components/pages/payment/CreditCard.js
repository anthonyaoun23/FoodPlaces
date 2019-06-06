import React, { Component } from "react";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvc: "",
      focused: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
    const name = event.target.name;
    if(name=='cardName') {
      this.setState({ 'cardName': event.target.value, focused: name });

    } else if (name=='cardNumber'){
    this.setState({ 'cardNumber': event.target.value, focused: name });
      
    } else {
      this.setState({ [name]: event.target.value, focused: name });

    }
    // console.log(name);
    // console.log(this.state);
  }

  render() {
    return (
      <div className="paiment__method">
        <h1>Payment Method</h1>
        <div className="payment-info">
          <p>FoodPlaces accepts all major credit and debit cards:</p>{" "}
          <i className="fab fa-cc-visa" />{" "}
          <i className="fab fa-cc-mastercard" />{" "}
          <i className="fab fa-cc-discover" /> <i className="fab fa-cc-amex" />
        </div>

        <form>
          <div className="payment-details">

          <div className="creditcard" style={{marginBottom: '32px'}}>
          <Cards
            number={this.state.cardNumber}
            name={this.state.cardName}
            expiry={this.state.expiry}
            cvc={this.state.cvc}
            focused={this.state.focused}
          />
        </div>

            <label>Card Number:</label>
            <div className="cardnumber">
              <input
                type="text"
                name="cardNumber"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </div>
            <div className="cardnumber__details">
              <div className="cardnumber-info cardnumber__details__name">
                <label>Name on Card:</label>
                <input
                  type="text"
                  name="cardName"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="cardnumber-info cardnumber__details__exp">
                <label>Valid Thru:</label>
                <input
                  type="text"
                  name="expiry"
                  value={this.state.expiry}
                  onChange={this.handleChange}
                />
              </div>
              <div className="cardnumber-info cardnumber__details__cvv">
                <label>CVC:</label>
                <input
                  type="text"
                  name="cvc"
                  value={this.state.cvc}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreditCard;
