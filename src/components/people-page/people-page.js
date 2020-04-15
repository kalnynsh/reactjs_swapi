import React, { Component } from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import TwoColumnRow from '../two-column-row';
import ErrorBoundry from '../error-boundry';
import ItemDetails from '../item-details';

import './people-page.css';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 1,
    };

    swapiService = new SwapiService();

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };

    render() {

        const { getAllPeople, getPerson } = this.swapiService;

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={getAllPeople}
            >
                {
                    (item) => (`${item.name} (${item.birthYear})`)
                }
            </ItemList>
        );

        const personDetails = (
            <ItemDetails
                itemId={this.state.selectedPerson}
                getData={getPerson}
                getImageUrl={this.swapiService.getPersonImage}
            />
        );

        return (
            <ErrorBoundry>
                <div className="row mb2">
                    <TwoColumnRow left={itemList} right={personDetails} />
                </div>
            </ErrorBoundry>
        );
    }
}
