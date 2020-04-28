import React, { Component } from 'react';

import TwoColumnRow from '../two-column-row';
import ErrorBoundry from '../error-boundry';

import {
    PersonDetails,
    PersonList
} from '../sw-components';

export default class PeoplePage extends Component {

    state = {
        selectedItem: null,
    };

    onItemSelectedHandler = (selectedItem) => {
        this.setState({
            selectedItem
        });
    };

    render() {

        const { selectedItem } = this.state;

        const itemList = (
            <PersonList
                onItemSelected={this.onItemSelectedHandler}
            />
        );

        const itemDetails = (
            <PersonDetails
                itemId={selectedItem}
            />
        );

        return (
            <ErrorBoundry>
                <TwoColumnRow left={itemList} right={itemDetails} />
            </ErrorBoundry>
        );
    }
}
