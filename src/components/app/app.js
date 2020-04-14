import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import PlanetnDetails from '../planet-details/planet-details';
import TwoColumnRow from '../two-column-row';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet,
            }
        });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    swapiService = new SwapiService();

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const planet
            = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const planetList = (
            <ItemList
                onItemSelected={this.onPlanetSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={({name, diameter}) => `${name} - ${diameter}`}
            />
        );

        const planetDetails = (
            <PlanetnDetails planetId={this.state.selectedPlanet} />
        );

        const starshipList = (
            <ItemList
                onItemSelected={this.onStarshipSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={({name, model}) => `${name} (${model})`}
            />
        );

        const starshipDetails = (
            <StarshipDetails planetId={this.state.selectedStarship} />
        );

        return (
            <div className="container stardb-app">

                <Header />

                {planet}

                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}
                    >
                        Toggle random planet
                    </button>
                    <ErrorButton />
                </div>

                <PeoplePage />

                <TwoColumnRow
                    left={planetList}
                    right={planetDetails}
                />

                <TwoColumnRow
                    left={starshipList}
                    right={starshipDetails}
                />
            </div>
        );
    }
}
