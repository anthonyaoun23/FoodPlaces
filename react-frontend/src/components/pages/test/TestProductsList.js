import React from 'react';
import PropTypes from 'prop-types';

const TestProductsList = ({ title, children }) => (
    <div>
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
);

TestProductsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default TestProductsList;