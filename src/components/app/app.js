import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../dummy-services';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new DummySwapiService(),
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    onServiceChangeHandler = () => {
        this.setState(( {swapiService} ) => {

            const Service
                = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                swapiService: new Service(),
            };
        });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const { swapiService } = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={swapiService} >
                    <Router>
                        <div className="container stardb-app">

                            <Header onServiceChange={this.onServiceChangeHandler} />

                            <RandomPlanet />

                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" component={StarshipsPage} />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
