import React from 'react';

import TestProductsContainer from './TestProductsContainer';
import TestCartContainer from './TestCartContainer';

const Test = () => (
    <div>
        <h2>Test add to cart and checkout functionality</h2>
        <hr/>
        <TestProductsContainer />
        <hr/>
        <TestCartContainer />
    </div>
)

export default Test;