import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import withSwapiService from '../hoc-with-swapi-service';

const StarshipDetails = ({ itemId, swapiService }) => {

    const {getStarship, getStarshipImage} = swapiService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field="name" label="Name" />
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="costInCredits" label="Cost in credits" />
            <Record field="length" label="Length" />
            <Record field="Crew" label="crew" />
            <Record field="passengers" label="Passengers" />
            <Record field="cargoCapacity" label="Cargo capacity" />
        </ItemDetails>
    );
};

export default withSwapiService(StarshipDetails);
