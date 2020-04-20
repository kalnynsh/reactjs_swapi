import React, { Component } from 'react';

import TwoColumnRow from '../two-column-row';
import ErrorBoundry from '../error-boundry';

import {
    PlanetList,
    PlanetDetails
} from '../sw-components';

export default class PlanetsPage extends Component {

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
            <PlanetList
                onItemSelected={this.onItemSelectedHandler}
            />
        );

        const itemDetails = (
            <PlanetDetails
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
