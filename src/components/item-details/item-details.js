import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';

import './item-details.css';

export default class ItemDetails extends Component {

    state = {
        item: null,
        image: null,
        error: null,
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.itemId !== prevProps.itemId
            || this.props.getData !== prevProps.getData
            || this.props.getImageUrl !== prevProps.getImageUrl
        ) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            })
            .catch((error) => {
                this.setState({error})
            })
        ;
    }

    render() {
        const { item, image, error } = this.state;

        if (!item) {
            return <span>Select a item from a list</span>;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                    src={image}
                    alt="character"
                />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
