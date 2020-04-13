import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

import './people-page.css';

export default class PeoplePage extends Component {
    state = {
        hasError: false,
        selectedPerson: 3,
    };

    swapiService = new SwapiService();

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
        });
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                    />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    }
}
