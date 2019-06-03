import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions';
import { getVisibleProducts } from '../../../reducers/products';
import TestProductItem from './TestProductItem';
import TestProductsList from './TestProductsList';

const TestProductsContainer = ({ products, addToCart }) => (
    <TestProductsList title="Products">
        {products.map(product => (
            <TestProductItem key={product.key} product={product} onAddToCartClicked={() => addToCart(product.id)} />
        ))}
    </TestProductsList>
)

TestProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps,
    { addToCart }
)(TestProductsContainer);