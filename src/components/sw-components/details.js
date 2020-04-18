import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) => {
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

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
                itemId={itemId}
                getData={getPlanet}
                getImageUrl={getPlanetImage}
            >
            <Record field="name" label="Name" />
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const StarshipDetails = ({itemId}) => {
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

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
