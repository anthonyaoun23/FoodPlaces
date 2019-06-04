import React from 'react';
import PropTypes from 'prop-types';
import Product from './TestProduct';

const TestProductItem = ({ product, onAddToCartClicked }) => (
    <div style={{ marginBottom: 20 }}>
        <Product title={product.title} price={product.price} quantity={product.inventory} />
        <button onClick={onAddToCartClicked} disabled={product.inventory > 0 ? '' : 'disabled'}>{product.inventory > 0 ? 'Add to cart' : 'Sold Out'}</button>
        <button onClick={onAddToCartClicked} disabled={product.quantity > 0 ? '' : 'disabled'}>{product.quantity > 0 ? 'Remove from cart' : 'Not in cart'}</button>
        {console.log(product)}
    </div>
);

TestProductItem.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
  }

  export default TestProductItem;