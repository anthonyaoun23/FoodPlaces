import React from "react";

const PaymentItem = props => {
  return (
    <div className="cart__item item">
      <div className="item__img img-container">
        <img
          className="img-container__img"
          src="./thomas-tucker-391058-unsplash.jpg"
          alt=""
        />
      </div>
      <div className="item__info info">
        <p className="info__name">{props.restaurantTitle}</p>
        <h4 className="info__title">{props.productName}</h4>
        <div className="information">
          <div className="info__price">
            <div className="price">
              <p className="price__text">{`${props.amount} x $${props.price}`}</p>
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
    </div>
  );
};

export default PaymentItem;
