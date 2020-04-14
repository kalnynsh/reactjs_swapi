import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import TwoColumnRow from '../two-column-row';

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

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={(name, gender, birthYear) => (
                    `${name} (${gender} ${birthYear})`
                )}
            />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        );

        return (
            <div className="row mb2">
                <TwoColumnRow left={itemList} right={personDetails} />
            </div>
        );
    }
}
