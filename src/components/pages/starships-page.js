import React from 'react';
import ErrorBoundry from '../error-boundry';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {

    return (
        <ErrorBoundry>
            <StarshipList
                onItemSelected={(id) => history.push(`${id}`)}
            />
        </ErrorBoundry>
    );
};

export default withRouter(StarshipsPage);
