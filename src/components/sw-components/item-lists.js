import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc-helpers';
import withChildFunction from '../hoc-with-child';
// import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../dummy-services';

// const swapiService = new SwapiService();
const swapiService = new DummySwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const renderPlanet = ({ name, diameter }) => <span>{name} ({diameter})</span>;
const renderStarship = ({ name, model }) => <span>{name} ({model})</span>;
const renderPerson = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;

const PersonList = withData(
    withChildFunction(
        ItemList,
        renderPerson
    ),
    getAllPeople
);

const PlanetList = withData(
    withChildFunction(
        ItemList,
        renderPlanet
    ),
    getAllPlanets
);

const StarshipList = withData(
    withChildFunction(
        ItemList,
        renderStarship
    ),
    getAllStarships
);

export {
    PersonList,
    PlanetList,
    StarshipList
};
