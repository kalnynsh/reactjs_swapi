import React, { Component } from 'react';

import TwoColumnRow from '../two-column-row';
import ErrorBoundry from '../error-boundry';

import {
    PersonDetails,
    PersonList
} from '../sw-components';

import './people-page.css';

export default class PeoplePage extends Component {

    state = {
        selectedPerson: 1,
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        });
    };

    render() {

        const itemList = (
            <PersonList
                onItemSelected={this.onPersonSelected}
            />
        );

        const personDetails = (
            <PersonDetails
                itemId={this.state.selectedPerson}
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
