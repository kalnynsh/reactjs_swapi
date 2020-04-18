import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import TwoColumnRow from '../two-column-row';
// import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../dummy-services';

import {
    PlanetDetails,
    StarshipDetails,
    PlanetList,
    StarshipList
} from '../sw-components';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    // swapiService = new SwapiService();

    swapiService = new DummySwapiService();

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
            />
        );

        const planetDetails = (
            <PlanetDetails
                itemId={this.state.selectedPlanet}
            />
        );

        const starshipList = (
            <StarshipList
                onItemSelected={this.onStarshipSelected}
            />
        );

        const starshipDetails = (
            <StarshipDetails
                itemId={this.state.selectedStarship}
            />
        );

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService} >
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
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
