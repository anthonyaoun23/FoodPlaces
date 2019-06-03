import React from 'react';
import PropTypes from 'prop-types';

const TestProduct = ({ price, quantity, title }) => (
    <div>
        {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </div>
);

TestProduct.propTypes = {
    price: PropTypes.number,
    quantity: PropTypes.number,
    title: PropTypes.string
  }

  export default TestProduct;