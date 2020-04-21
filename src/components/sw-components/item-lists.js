import React from 'react';
import ItemList from '../item-list';

import {
    compose,
    withData,
    withChildFunction,
    withSwapiService
} from '../hoc-helpers';

const renderPlanet = ({ name, diameter }) => <span>{name} ({diameter})</span>;
const renderStarship = ({ name, model }) => <span>{name} ({model})</span>;
const renderPerson = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;

const mapPersornMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = compose(
                    withSwapiService(mapPersornMethodsToProps),
                    withData,
                    withChildFunction(renderPerson)
                )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderPlanet)
                )(ItemList);

const StarshipList = compose(
                        withSwapiService(mapStarshipMethodsToProps),
                        withData,
                        withChildFunction(renderStarship)
                    )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};
