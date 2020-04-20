import React, { Component } from 'react';

import TwoColumnRow from '../two-column-row';
import ErrorBoundry from '../error-boundry';

import {
    StarshipList,
    StarshipDetails
} from '../sw-components';

export default class StarshipsPage extends Component {

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
            <StarshipList
                onItemSelected={this.onItemSelectedHandler}
            />
        );

        const itemDetails = (
            <StarshipDetails
                itemId={selectedItem}
            />
        );

        return (
            <ErrorBoundry>
                <div className="row mb2">
                    <TwoColumnRow left={itemList} right={itemDetails} />
                </div>
            </ErrorBoundry>
        );
    }
}
