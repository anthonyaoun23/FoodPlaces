import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from '../../../actions';
import { getTotal, getCartProducts } from '../../../reducers';

import TestCart from './TestCart';

const TestCartContainer = ({ products, total , checkout }) => (
    <TestCart products={products} total={total} onCheckoutClicked={() => checkout(products)} />
);

TestCartContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
});

export default connect(
    mapStateToProps,
    { checkout }
)(TestCartContainer);