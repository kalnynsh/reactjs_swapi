import React from 'react';

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

export default TwoColumnRow;
