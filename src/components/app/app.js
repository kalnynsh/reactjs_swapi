import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';

import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';

import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../dummy-services';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {StarshipDetails} from '../sw-components';

import {
    PeoplePage,
    PlanetsPage,
    StarshipsPage,
    SecretPage,
    LoginPage,
    LogoutPage
} from '../pages';

export default class App extends Component {

    state = {
        hasError: false,
        swapiService: new DummySwapiService(),
        isLoggedIn: false,
    };

    onLoginHandler = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    onLogoutHandler = () => {
        this.setState({
            isLoggedIn: false
        });
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

        const { swapiService, isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={swapiService} >
                    <Router>
                        <div className="container stardb-app">

                            <Header onServiceChange={this.onServiceChangeHandler} />

                            <RandomPlanet />

                            <Route
                                path="/"
                                render={() => <h2>Welcome to star wars app!</h2>}
                                exact
                            />
                            <Route path="/people/:id?" component={PeoplePage} />
                            <Route path="/planets" component={PlanetsPage} />
                            <Route path="/starships" exact component={StarshipsPage} />
                            <Route path="/starships/:id"
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <StarshipDetails itemId={id} />;
                                }}
                            />
                            <Route
                                path="/login"
                                render={() => (
                                    <LoginPage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLoginHandler}
                                    />
                                )}
                            />
                            <Route
                                path="/logout"
                                onClick={this.onLogoutHandler}
                                render={() => (
                                    <LogoutPage onLogout={this.onLogoutHandler} />
                                )}
                            />
                            <Route
                                path="/secret"
                                render={() => (
                                    <SecretPage isLoggedIn={isLoggedIn} />
                                )}
                            />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
