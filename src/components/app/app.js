import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';
import TwoColumnRow from '../two-column-row';
import Record from '../record';

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        hasError: false,
    };

    swapiService = new SwapiService();

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

        const {
            getAllPlanets,
            getPlanet,
            getAllStarships,
            getStarship,
            getPlanetImage,
            getStarshipImage
        } = this.swapiService;

        const planetList = (
            <ItemList
                onItemSelected={this.onPlanetSelected}
                getData={getAllPlanets}
            >
                {
                    (item) => `${item.name} - ${item.diameter}`
                }
            </ItemList>
        );

        const planetDetails = (
            <ItemDetails
                itemId={this.state.selectedPlanet}
                getData={getPlanet}
                getImageUrl={getPlanetImage}
            >
                <Record field="name" label="Name" />
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotation period" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
        );

        const starshipList = (
            <ItemList
                onItemSelected={this.onStarshipSelected}
                getData={getAllStarships}
            >
                {
                    (item) => `${item.name} - ${item.model}`
                }
            </ItemList>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={this.state.selectedStarship}
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
