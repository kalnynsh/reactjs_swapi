import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helpers';
import withChildFunction from '../hoc-with-child';
import withSwapiService from '../hoc-with-swapi-service';

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

const PersonList = withSwapiService(mapPersornMethodsToProps)(
    withData(
        withChildFunction(renderPerson)(ItemList)
    )
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
    withData(
        withChildFunction(renderPlanet)(ItemList)
    )
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
    withData(
        withChildFunction(renderStarship)(ItemList)
    )
);

export {
    PersonList,
    PlanetList,
    StarshipList
};
