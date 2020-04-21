import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {

    return (
        <ItemDetails {...props} >
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

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
