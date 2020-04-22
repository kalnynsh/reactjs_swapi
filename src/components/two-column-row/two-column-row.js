import React from 'react';
import PropTypes from 'prop-types';

import './two-column-row.css';

const TwoColumnRow = ({left, right}) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6">
                { right }
            </div>
        </div>
    );
};

TwoColumnRow.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
};

export default TwoColumnRow;
