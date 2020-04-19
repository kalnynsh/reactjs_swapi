import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import withSwapiService from '../hoc-with-swapi-service';

const PersonDetails = ({ itemId, swapiService }) => {

    const {getPerson, getPersonImage} = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
    );
};

export default withSwapiService(PersonDetails);
