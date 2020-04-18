import React from 'react';

import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
