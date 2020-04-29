import React from 'react';
import { withRouter } from 'react-router-dom';
import TwoColumnRow from '../two-column-row';
import ErrorBoundry from '../error-boundry';

import {
    PersonDetails,
    PersonList
} from '../sw-components';

const PeoplePage = ({ match, history }) => {

    const { id } = match.params;

    const itemList = (
        <PersonList
            onItemSelected={(id) => history.push(`${id}`)}
        />
    );

    const itemDetails = (
        <PersonDetails
            itemId={id}
        />
    );

    return (
        <ErrorBoundry>
            <TwoColumnRow left={itemList} right={itemDetails} />
        </ErrorBoundry>
    );
}

export default withRouter(PeoplePage);
