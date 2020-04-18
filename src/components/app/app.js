import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import TwoColumnRow from '../two-column-row';

import {
    PlanetDetails,
    StarshipDetails,
    PlanetList,
    StarshipList
} from './sw-components';

import './app.css';

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

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const planet
            = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        const planetList = (
            <PlanetList
                onItemSelected={this.onPlanetSelected}
            >
                {
                    (item) => `${item.name} - ${item.diameter}`
                }
            </PlanetList>
        );

        const planetDetails = (
            <PlanetDetails
                itemId={this.state.selectedPlanet}
            />
        );

        const starshipList = (
            <StarshipList
                onItemSelected={this.onStarshipSelected}
            >
                {
                    (item) => `${item.name} - ${item.model}`
                }
            </StarshipList>
        );

        const starshipDetails = (
            <StarshipDetails
                itemId={this.state.selectedStarship}
            />
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
